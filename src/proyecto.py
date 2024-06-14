import pandas as pd
import os

class Proyecto:
    def __init__(self, proyecto):
        self.proyecto = proyecto

    def obtener_ruta_encuestas(self):
        return f'../preguntas/{self.proyecto}/'
    
    def obtener_encuestas(self):
        ruta_encuestas = self.obtener_ruta_encuestas()
        try:
            lista_encuestas = []
            directorios = os.listdir(ruta_encuestas)
            if len(directorios) > 0:
                for directorio in directorios:
                    lista_encuestas.append(f'{ruta_encuestas}{directorio}')
                return lista_encuestas
            return lista_encuestas
        except FileNotFoundError:
            return []

    def obtener_preguntas(self):
        encuestas = self.obtener_encuestas()
        lista_principal = []
        if len(encuestas) > 0:
            for encuesta in encuestas:
                lista_encuestas = []
                lista_encuestas.append(encuesta.split('/')[-1].replace('.csv', ''))
                try:
                    df = pd.read_csv(encuesta, index_col=False, sep=';')
                    fases = df['fase'].unique()
                    lista_fases = []
                    for fase in fases:
                        lista_preguntas = []
                        f = []
                        f.append(fase)
                        preguntas = df[df['fase'] == fase]
                        for index, row in preguntas.iterrows():
                            pregunta = []
                            pregunta.append(row['pregunta'])
                            pregunta.append(row['ini'])
                            pregunta.append(row['fin'])
                            lista_preguntas.append(pregunta)
                        f.append(lista_preguntas)
                        lista_fases.append(f)
                    lista_encuestas.append(lista_fases)
                    lista_principal.append(lista_encuestas)
                except FileNotFoundError:
                    return lista_principal
        return lista_principal    

    def obtener_respuestas(self, encuesta):
        return os.listdir(f'../resultados/{self.proyecto}/{encuesta}') #TODO: Cambiar ruta
