import pandas as pd
import tkinter as tk

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
    mensaje = tk.Label(ventana, text='Hello World!')
    mensaje.pack()
    ventana.mainloop()

def mostrar_ventana():
    ventana = tk.Tk()
    ventana.geometry('300x300')
    boton = tk.Button(ventana, text='Mostrar proyectos', command=mostrar_proyectos)
    boton.pack()
    second_botoin = tk.Button(ventana, text='Mostrar mensaje', command=mostrar_mensaje)
    second_botoin.pack()
    ventana.mainloop()

mostrar_ventana()
