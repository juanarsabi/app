import os
import pandas as pd
from pydub import AudioSegment
from moviepy.editor import AudioFileClip

def buscar_proyectos():
    df = pd.read_csv('../proyectos/insumo.csv', sep=';') #TODO: Poner una carpeta atras
    data = df['proyecto'].values.tolist()
    return data

def buscar_videos(proyecto, encuesta):
    videos = os.listdir(f'../videos/{proyecto}/{encuesta}') #TODO: Poner una carpeta areas
    return videos

#TODO: Delete route
def os_remove(route):
    files = os.listdir(route)
    for file in files:
        os.remove(f'{route}/{file}')
    os.removedirs(route)

def convert_mp4_to_mp3(video_file, audio_file, proyecto, encuesta):
    ruta_video = video_file.split('/')
    video_index = ruta_video.index('videos')
    index_procesado = ruta_video.index('processed')
    ruta_relativa = '/'.join(ruta_video[video_index+1:index_procesado])
    if(os.path.exists(f'../audios/{ruta_relativa}/processed') == False):
        ruta = f'../audios/{ruta_relativa}'
        partes_ruta = ruta.split('/')
        nuevas_partes = partes_ruta[:-1]
        nueva_ruta = '/'.join(nuevas_partes)
        os.makedirs(nueva_ruta)
        os.mkdir(f'../audios/{ruta_relativa}')
    video = AudioFileClip(video_file)
    if(len(audio_file.split('/')) > 1):
        ruta_audio = os.path.dirname(f'../audios/{proyecto}/{encuesta}/{audio_file}')
        if(os.path.exists(ruta_audio) == False):
            os.makedirs(ruta_audio)
        usuario = audio_file.split('/')[-0]
        if(os.path.exists(f'../audios/{ruta_relativa}/processed/{usuario}') == False):
            os.makedirs(f'../audios/{ruta_relativa}/processed/{usuario}')
        video.write_audiofile(f'../audios/{ruta_relativa}/processed/{audio_file}')
        return
    video.write_audiofile(f'../audios/{ruta_relativa}/processed/{audio_file}')

def transform(video_file, proyecto, encuesta):
    temporal_audio_file = video_file.replace(".mp4", ".mp3")
    audio_index = temporal_audio_file.index('processed')
    audio_file = temporal_audio_file[audio_index:].replace('processed/', '')
    convert_mp4_to_mp3(video_file, audio_file, proyecto, encuesta)
    print(f'Ruta: ../audios/{proyecto}/{encuesta}/{audio_file}')
    audio = AudioSegment.from_file(f'../audios/{proyecto}/{encuesta}/processed/{audio_file}')
    audio = audio.high_pass_filter(2000)
    audio = audio.low_pass_filter(8000)
    audio.export(f'../audios/{proyecto}/{encuesta}/{audio_file}', format="mp3") #TODO: Carpeta atras

def os_remove(proyecto, encuesta, audio):
    for file in os.listdir("videos"):
        if file.endswith(".mp4"):
            transform(f'../videos/{proyecto}/{encuesta}/{audio}') #TODO: Carpeta atras
            os.remove(f'../videos/processed/{proyecto}/{encuesta}/{audio}') #TODO: Carpeta atras

def convert_to_seconds(time_str):
    h, m, s = map(int, time_str.split(':'))
    return h * 3600 + m * 60 + s
