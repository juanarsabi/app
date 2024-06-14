# Transcripción masiva

## Instalación

Descargar Python en su versión 3.12

- [Mac OS](https://www.python.org/downloads/release/python-3124/) (No recomendado)
- [Microsoft Windows](https://www.microsoft.com/store/productId/9NCVDN91XZQP?ocid=pdpshare)

Instalar Scoop

```bash
  Set-ExecutionPolicy  -ExecutionPolicy RemoteSigned -Scope CurrentUser
  Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

Instalar ffmpeg

```bash
  scoop install ffmpeg
```

## Tecologías utilizadas

**Python:** 3.12

**Whisper:** Última versión disponible

## Ejecutar localmente

Clonar el repositorio

```bash
  git clone https://link-to-project
```

Entrar a la carpeta del directorio

```bash
  cd my-project
```

Ejecutar el programa buscando el archivo

```bash
  main.exe
```

## Variables de Entorno

Crear un archivo llamado **_.env_** en un bloc de notas "guiarse con el archivo _(.env.example)_"

`USUARIO="{usuario_plataforma}"`

`CONTRASENA="{contraseña_plataforma}"`

`URL="{url_login_plataforma}"`

`URL_PROYECTOS="{url_principal_proyectos_plataforma}"`
