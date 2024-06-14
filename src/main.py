from datetime import date
import transcription
import pandas as pd
import utilidades
import proyecto
import tkinter as tk
import video
import math
import os

def main():
    proyectos = utilidades.buscar_proyectos()
    #TODO: Procesar videos
    for p in proyectos:
        pro = proyecto.Proyecto(p)
        encuestas = pro.obtener_encuestas()
        for e in encuestas:
            encuesta = e.split('/')[-1].replace('.csv', '')
            ruta_videos = f'../videos/{p}/{encuesta}'
            videos = os.listdir(ruta_videos)
            v = video.Video(ruta_videos, videos)
            v.for_each_video()
    #TODO: Transformar videos 
    for p in proyectos:
        pro = proyecto.Proyecto(p)
        encuestas = pro.obtener_encuestas()
        for e in encuestas:
            encuesta = e.split('/')[-1].replace('.csv', '')
            ruta_videos = f'../videos/{p}/{encuesta}/processed' #TODO: Carpeta atras
            videos = os.listdir(ruta_videos)
            for v in videos:
                if(v.endswith('.mp4')):
                    utilidades.transform(f'{ruta_videos}/{v}', p, encuesta)
                else:
                    v_usuario = os.listdir(f'{ruta_videos}/{v}')
                    for j in v_usuario:
                        utilidades.transform(f'{ruta_videos}/{v}/{j}', p, encuesta)  
    #TODO: Transcribir audios
    proyectos = utilidades.buscar_proyectos()
    for p in proyectos:
        pro = proyecto.Proyecto(p)
        encuestas = pro.obtener_encuestas()
        if(os.path.exists(f'../resultados/') == False):
            os.mkdir(f'../resultados/')
        os.mkdir(f'../resultados/{p}')
        for e in encuestas:            
            e_parts = e.split('/')
            desired_parts = e_parts[2:4]
            encuesta = "/" + "/".join(desired_parts)
            encuesta = encuesta.replace('.csv', '')
            audios = os.listdir(f'../audios/{encuesta}')
            audios.remove('processed')
            ruta_resultados = f'../resultados/{encuesta}'
            os.mkdir(ruta_resultados)
            for a in audios:
                if(a.endswith('.mp3')):
                    transcription.transcribe_video(f'../audios/{encuesta}/{a}', ruta_resultados)
                else:
                    os.mkdir(f'{ruta_resultados}/{a}')
                    a_usuario = os.listdir(f'../audios/{encuesta}/{a}')
                    for j in a_usuario:
                        transcription.transcribe_video(f'../audios/{encuesta}/{a}/{j}', f'{ruta_resultados}/{a}')
    #TODO: Validar respuestas y sacar archivo final
    for p in proyectos:
        pro = proyecto.Proyecto(p)
        encuestas = pro.obtener_encuestas()
        for e in encuestas:
            encuesta = e.split('/')[-1].replace('.csv', '')
            preguntas = pd.read_csv(f'../preguntas/{p}/{encuesta}.csv', sep=';')
            agrupadas = preguntas.groupby('fase')
            resultados = os.listdir(f'../resultados/{p}/{encuesta}')
            respuestas = []
            for r in resultados:
                respuestas_usuario = {}
                respuestas_usuario['usuario'] = r
                respuestas_usuario['fecha'] = date.today()
                print(f'Usuario: {r} | {date.today()}')
                if(r.endswith('.csv')):
                    print(f'Tiene 1 video')
                    for fase, grupo in agrupadas:
                        for i, row in grupo.iterrows():
                            usuario = pd.read_csv(f'../resultados/{p}/{encuesta}/{r}')
                            usuario['start'] = usuario['start'].apply(math.floor)     
                            usuario['end'] = usuario['end'].apply(math.floor)   
                            if(fase != 1):
                                respuestas_usuario[row["pregunta"]] = 'No responde'
                            else :
                                respuesta = []
                                print(f'Pregunta: {row["pregunta"]} Inicio: {utilidades.convert_to_seconds(row["ini"])} Fin: {utilidades.convert_to_seconds(row["fin"])}')
                                for j, registro in usuario.iterrows():
                                    if (utilidades.convert_to_seconds(row["ini"]) <= registro['start'] <= utilidades.convert_to_seconds(row["fin"])):
                                        print(f'Pertenece al tiempo estipulado: {utilidades.convert_to_seconds(row["ini"])} | <= {registro['start']} | {utilidades.convert_to_seconds(row["fin"])}')
                                        print(registro)
                                        respuesta = registro['text']
                                    else:
                                        print(f'No pertenece al tiempo estipulado: {utilidades.convert_to_seconds(row["ini"])} | <= {registro["start"]} | {utilidades.convert_to_seconds(row["fin"])}')
                                        respuesta = 'No responde'
                                respuestas_usuario[row["pregunta"]] = respuesta
                else:
                    print(f'Tiene varios videos')
                    audios_usuario = os.listdir(f'../resultados/{p}/{encuesta}/{r}')
                    for ad in audios_usuario:
                        for fase, grupo in agrupadas:
                            for i, row in grupo.iterrows():
                                if(len(audios_usuario) < 3):
                                    usuario = pd.read_csv(f'../resultados/{p}/{encuesta}/{r}/{ad}')
                                    usuario['start'] = usuario['start'].apply(math.floor)     
                                    usuario['end'] = usuario['end'].apply(math.floor)   
                                    if(fase == 3):
                                        respuestas_usuario[row["pregunta"]] = 'No responde'
                                    else:                                        
                                        respuesta = ''
                                        print(f'Pregunta: {row["pregunta"]} Inicio: {utilidades.convert_to_seconds(row["ini"])} Fin: {utilidades.convert_to_seconds(row["fin"])}')
                                        for j, registro in usuario.iterrows():
                                            if (utilidades.convert_to_seconds(row["ini"]) <= registro['start'] <= utilidades.convert_to_seconds(row["fin"])):
                                                print(f'Pertenece al tiempo estipulado: {utilidades.convert_to_seconds(row["ini"])} | <= {registro['start']} | {utilidades.convert_to_seconds(row["fin"])}')
                                                print(registro)
                                                respuesta = registro['text']
                                            else:
                                                print(f'No pertenece al tiempo estipulado: {utilidades.convert_to_seconds(row["ini"])} | <= {registro["start"]} | {utilidades.convert_to_seconds(row["fin"])}')
                                                respuesta = 'No responde'
                                else:
                                    usuario = pd.read_csv(f'../resultados/{p}/{encuesta}/{r}/{ad}')
                                    usuario['start'] = usuario['start'].apply(math.floor)     
                                    usuario['end'] = usuario['end'].apply(math.floor)   
                                    respuesta = []
                                    print(f'Pregunta: {row["pregunta"]} Inicio: {utilidades.convert_to_seconds(row["ini"])} Fin: {utilidades.convert_to_seconds(row["fin"])}')
                                    for j, registro in usuario.iterrows():
                                        if (utilidades.convert_to_seconds(row["ini"]) <= registro['start'] <= utilidades.convert_to_seconds(row["fin"])):
                                            print(f'Pertenece al tiempo estipulado: {utilidades.convert_to_seconds(row["ini"])} | <= {registro['start']} | {utilidades.convert_to_seconds(row["fin"])}')
                                            print(registro)
                                            respuesta = registro['text']
                                        else:
                                            print(f'No pertenece al tiempo estipulado: {utilidades.convert_to_seconds(row["ini"])} | <= {registro["start"]} | {utilidades.convert_to_seconds(row["fin"])}')
                                            respuesta = 'No responde'
                            respuestas_usuario[row["pregunta"]] = respuesta
                    print('Audios usuario')
                    print(audios_usuario)
                    print(f'Usuario: {r} | {date.today()}')
                    print(f'Usuario: {r} | {date.today()}')
                respuestas.append(respuestas_usuario)
            print('-----------------------------------')
            print(respuestas)
            csv = pd.DataFrame(respuestas)
            csv.to_csv(f'../resultados/{p}/{encuesta}/consolidado.csv', index=False, sep=';')

def mostrar_proyectos():    
    df = pd.read_csv('../proyectos/insumo.csv', sep=';') #TODO: Carpeta atras
    columna = df['proyecto'].values.tolist()
    ventana = tk.Tk()
    lista = tk.Listbox(ventana)
    for valor in columna:
        lista.insert(tk.END, valor)
    lista.pack()
    ventana.mainloop()

def mostrar_mensaje():
    ventana = tk.Tk()
    mensaje = tk.Label(ventana, text='Transcribiendo videos!')
    mensaje.pack()
    ventana.mainloop()

def descargar_masivamente():
    ventana = tk.Tk()
    mensaje = tk.Label(ventana, text='Lista de proyectos!')
    mensaje.pack()
    ventana.mainloop()

def mostrar_ventana():
    ventana = tk.Tk()
    ventana.geometry('300x300')
    boton = tk.Button(ventana, text='Mostrar proyectos', command=mostrar_proyectos)
    boton.pack()
    second_botoin = tk.Button(ventana, text='Transcribir videos', command=mostrar_mensaje)
    second_botoin.pack()
    ejecutar = tk.Button(ventana, text='Ejecutar', command=main)
    ejecutar.pack()
    descargar = tk.Button(ventana, text='Descargar masivamente', command=descargar_masivamente)
    descargar.pack()
    ventana.mainloop()

class Main:
    mostrar_ventana()
