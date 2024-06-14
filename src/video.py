import zipfile
import shutil

class Video:
    def __init__(self, ruta, videos):
        self.videos = videos
        self.ruta = ruta

    def for_each_video(self):
            for video in self.videos:
                self.unzip_videos(video)

    def unzip_videos(self, video):
            if(video.endswith('.zip')):
                with zipfile.ZipFile(f'{self.ruta}/{video}', 'r') as zip_ref:
                    if(len(zip_ref.infolist()) < 3):
                        zip_ref.extractall(f'{self.ruta}/processed/{video.replace(".zip", "")}') #TODO: Carpeta atras
                    else:
                        zip_ref.extractall(f'{self.ruta}/processed/') #TODO: Carpeta atras
            else:
                shutil.copy(f'{self.ruta}/{video}', f'{self.ruta}/processed/{video}') #TODO: Carpeta atras
