import re
import os
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

load_dotenv()

USUARIO=os.getenv('USUARIO')
CONTRASENA=os.getenv('CONTRASENA')
URL=os.getenv('URL')
URL_PROJECTOS=os.getenv('URL_PROJECTOS')

driver = webdriver.Chrome()

lista_proyectos = ['20240618 - Pruebas Automatizaciones BRI']
lista_URL_proyectos = []

def buscar_coincidencias(texto, lista):
    coincidencias = []
    for elemento in lista:
        if not elemento.get_attribute("class").endswith(texto):
            coincidencias.append(elemento)
    return coincidencias

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




iniciar_sesion()
obtener_proyectos()
entrar_proyectos()
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
