import pandas as pd
import whisper

model = whisper.load_model("tiny")
        
def transcribe_video(audio, ruta_resultados):
    result = model.transcribe(audio)   
    audio_name = audio.split('/')[-1].replace('.mp3', '')     
    csv = pd.DataFrame(result['segments'])[['id', 'start', 'end', 'text']]              
    csv.to_csv(f'{ruta_resultados}/{audio_name}.csv')
