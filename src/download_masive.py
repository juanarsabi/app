import re
import os
import time
import requests
import pandas as pd
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.common.by import By

load_dotenv()

URL=os.getenv('URL')
USUARIO=os.getenv('USUARIO')
CONTRASENA=os.getenv('CONTRASENA')
URL_PROJECTOS=os.getenv('URL_PROJECTOS')
CARPETA_VIDEOS='/videos/'

driver = webdriver.Chrome()

lista_proyectos = ['20240618 - Pruebas Automatizaciones BRI']
lista_URL_proyectos = []

def buscar_coincidencias(texto, lista):
    coincidencias = []
    for elemento in lista:
        if not elemento.get_attribute("class").endswith(texto):
            coincidencias.append(elemento)
    return coincidencias

def descargar_video(url, carpeta_salida): #TODO: Utilizar metodo de descarga de videos
    try:
        respuesta = requests.get(url)
        nombre_archivo = os.path.basename(url)

        if not os.path.exists(carpeta_salida):
            os.makedirs(carpeta_salida)

        ruta_salida = os.path.join(carpeta_salida, nombre_archivo)
        with open(ruta_salida, 'wb') as archivo_salida:
            archivo_salida.write(respuesta.content)

        print(f'Archivo descargado en {ruta_salida}')
    except Exception as e:
        print(f'Error al descargar el archivo: {e}')

def iniciar_sesion():
    driver.get(URL)
    time.sleep(1.2)
    login_button = driver.find_element(By.XPATH, '/html/body/form/div[3]/div[1]/div/div/div[2]/div[2]/button')
    driver.find_element(By.XPATH, '/html/body/form/div[3]/div[1]/div/div/div[2]/div[2]/div/div[1]/div/input').send_keys(USUARIO)
    driver.find_element(By.XPATH, '/html/body/form/div[3]/div[1]/div/div/div[2]/div[2]/div/div[2]/div/input').send_keys(CONTRASENA)
    login_button.click()
    print("Sesión iniciada exitosamente.")

def obtener_proyectos():
    driver.get(URL_PROJECTOS)
    time.sleep(1.2)
    driver.get(URL_PROJECTOS)
    time.sleep(1.2)
    proyectos = driver.find_elements(By.XPATH, '/html/body/form/div[4]/div/div/div/section/article/div/div[3]/div[2]/div[2]/div')
    for proyecto in proyectos:
        if (proyecto.find_element(By.XPATH, './div[1]').text in lista_proyectos):
            element = proyecto.find_element(By.XPATH, './div[1]')
            lista_URL_proyectos.append(element.find_element(By.XPATH, './a').get_attribute("href"))

def entrar_proyectos():
    for url_proyecto in lista_URL_proyectos:
        url = url_proyecto.replace("projecthome", "recordingresults")
        driver.get(url)
        time.sleep(1.2)
        total_videos = driver.find_element(By.XPATH, '/html/body/form/div[4]/div/div/div/section/article/div/div[1]/div[4]/div[1]/div[3]/div[1]/span')
        match = re.match(r"(\d+)-(\d+) of (\d+)", total_videos.text)
        if (match):
            rango_inicial = int(match.group(1))
            rango_final = int(match.group(2))
            total = int(match.group(3))
            print(f'Primer resultado: {rango_inicial}-{rango_final}')
            print(f'Segundo resultado: {rango_final} (fuera de {total})')
        else:
            print('Formato no valido')
        time.sleep(8.2)

def iterar_columnas(total_videos):
    videos_descargar = []
    videos_descargados = []
    columnas = driver.find_elements(By.XPATH, '/html/body/form/div[4]/div/div/div/section/article/div/div[1]/div[4]/div[3]/div')

    #while: total_videos > len(videos_descargados):
    for columna in columnas:
        columna_id = columna.find_element(By.XPATH, './div[2]')
        print(f'- {columna_id.text}')
        if (columna_id.text.endswith("Participant ID")):
            print('Columna ignorada')
        if (columna_id.text.endswith("eye")):
            print('Video listo para la descarga')
            videos_descargar.append(columna)
    print(f'\nVideos a descargar: {len(videos_descargar)}\n')
    time.sleep(1)
    if(len(videos_descargar) > 0):
        for video in videos_descargar:
            video_parte = video.find_element(By.XPATH, './div[4]/div')
            video_link = video.find_element(By.XPATH, './div[7]')
            video_link.click()
            time.sleep(1.5)
            try:
                popup = driver.find_element(By.CLASS_NAME, 'messagebox-container')
                popup_close = popup.find_element(By.XPATH, './div/div[1]/div/span/i')
                popup_video = popup.find_element(By.XPATH, './div/div[2]/div/div/video/source')
                print(f'Video: {popup_video.get_attribute("src")}')
                popup_close.click()
            except Exception as e:
                print(f'No encontre el popup o hubo un error: {e}')
            print(f'Video: {video_link.text}')

iniciar_sesion()
obtener_proyectos()
entrar_proyectos()
iterar_columnas(22)
driver.quit()

# def descargar_video(url, nombre_archivo):
#     response = requests.get(url)
#     with open(nombre_archivo, 'wb') as archivo:
#         archivo.write(response.content)
#     print("Video descargado exitosamente.")
#url_video = "https://ofrdataweu.blob.core.windows.net/cfaa6fd5-c863-4d3b-a827-0c41706cc279/MediaFiles/a991c18b421a4835b5b3176c5accf107.mp4"
#nombre_archivo = "carpeta/video.mp4"
#descargar_video(url_video, nombre_archivo)
#soup = BeautifulSoup(html_pagina, 'html.parser')
#elemento = soup.find(id="ra991c18b421a4835b5b3176c5accf107")
#print(elemento )
#print("\n\n\n\n")
#print(html_pagina)
