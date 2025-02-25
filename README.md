# Nginxy - Directory Listing Theme (Modernized Version)

![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/lfelipe1501/Nginxy/issues)

Una versión modernizada del tema responsive para el [módulo Fancyindex de Nginx](https://github.com/aperezdc/ngx-fancyindex). Un tema minimalista, moderno y simple para el listado de directorios de **nginx** con una apariencia similar a Apaxy para apache.

## Características de la versión modernizada

- **Sin dependencias de jQuery**: Código JavaScript moderno y nativo
- **Diseño totalmente responsive**: Optimizado para dispositivos móviles y de escritorio
- **Tema moderno**: Interfaz limpia y moderna con colores personalizables
- **Iconos SVG de Material Design a color**: Iconos vectoriales modernos, escalables y con colores específicos para cada tipo de archivo
- **Soporte para tema claro y oscuro**: Se adapta automáticamente a la preferencia del navegador
- **Amplio soporte de formatos**: Incluye iconos para más de 40 tipos de archivos diferentes

## Uso

- Asegúrate de tener el [módulo Fancyindex](https://github.com/aperezdc/ngx-fancyindex) compilado con nginx, ya sea compilándolo tú mismo o instalando nginx a través de la distribución completa (paquete nginx-extras).

- Incluye el contenido de **nginxy.conf** en tu directiva de ubicación (location / {.....}) en tu configuración de nginx (generalmente nginx.conf).

- Mueve la carpeta *Nginxy-Theme/* a un directorio antes de la carpeta que servirá los archivos y renómbrala a **.nginxy/** Como se muestra en la siguiente captura de pantalla:

  ![ScreenShot](https://raw.githubusercontent.com/lfelipe1501/lfelipe-projects/master/Nginxy-Theme/Capture.PNG)

- Reinicia/recarga nginx.

- ¡Comprueba que funciona y disfruta!

## Personalización

### Colores y temas

Puedes personalizar fácilmente el tema modificando las variables CSS en el archivo `style.css`:

```css
/* Light Theme Variables (default) */
:root, .light-theme {
    --primary-color: #4a6cf7;
    --secondary-color: #6c757d;
    --background-color: #ffffff;
    --text-color: #333333;
    --border-color: #e9ecef;
    --hover-color: #f8f9fa;
    --header-color: #343a40;
    --footer-color: #f8f9fa;
    --icon-size: 24px;
    --table-header-bg: #4a6cf7;
    --table-header-color: #ffffff;
    --table-shadow: rgba(0, 0, 0, 0.05);
    --icon-opacity: 1;
}

/* Dark Theme Variables */
.dark-theme {
    --primary-color: #6d8eff;
    --secondary-color: #adb5bd;
    --background-color: #121212;
    --text-color: #e0e0e0;
    --border-color: #2d2d2d;
    --hover-color: #1e1e1e;
    --header-color: #e0e0e0;
    --footer-color: #1a1a1a;
    --table-header-bg: #2d2d2d;
    --table-header-color: #e0e0e0;
    --table-shadow: rgba(0, 0, 0, 0.2);
    --icon-opacity: 0.9;
}
```

### Iconos SVG de Material Design a color

Esta versión utiliza iconos SVG de Material Design Icons a través de un CDN, con colores específicos para cada tipo de archivo. Puedes personalizar los iconos y sus colores modificando el mapeo en el archivo `config.js`:

```javascript
// Material Design Icons CDN
const iconsCDN = 'https://cdn.jsdelivr.net/npm/@mdi/svg@7.2.96/svg/';

// Mapping file extensions to Material Design Icons with colors
const iconMap = {
    // Folders and navigation
    'folder': { icon: 'folder', color: '#ffc107' },
    'home': { icon: 'home', color: '#4caf50' },
    'error': { icon: 'file-alert', color: '#f44336' },
    
    // Documents
    'doc': { icon: 'file-word', color: '#2196f3' },
    'docx': { icon: 'file-word', color: '#2196f3' },
    'txt': { icon: 'file-document', color: '#607d8b' },
    'pdf': { icon: 'file-pdf', color: '#f44336' },
    'csv': { icon: 'file-delimited', color: '#4caf50' },
    'log': { icon: 'file-document-outline', color: '#607d8b' },
    'json': { icon: 'code-json', color: '#ffc107' },
    // ... más mapeos de iconos
};
```

#### Formatos de archivo soportados

El tema incluye iconos para los siguientes tipos de archivos:

- **Documentos**: doc, docx, txt, pdf, ppt, pptx, xls, xlsx, csv, log, json
- **Imágenes**: jpg, jpeg, png, gif, bmp, tiff, ico, svg, psd, raw
- **Audio/Video**: mp3, wav, ogg, wma, mp4, avi, wmv
- **Archivos comprimidos**: zip, rar, 7z, tar, gz, gzip, deb, iso
- **Código**: html, css, js, php, py, java, jar, c, c++, sql, sh, bat, cmd
- **Ejecutables y otros**: exe, bin, swf, torrent, msg

Puedes encontrar más iconos disponibles en [Material Design Icons](https://materialdesignicons.com/).

### Contacto / Redes Sociales

#### Obtén las últimas noticias sobre desarrollo web, código abierto, herramientas, servidores y seguridad

[![Twitter](https://github.frapsoft.com/social/twitter.png)](https://twitter.com/lfelipe1501)
[![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/lfelipe1501)
[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/lfelipe1501)

### Desarrollo por

Desarrollador / Autor: [Luis Felipe Sánchez](https://github.com/lfelipe1501)
Empresa: [lfsystems](https://www.lfsystems.com.co)

### Créditos

Basado en [apaxy](https://github.com/AdamWhitcroft/Apaxy) de Adam Whitcroft
Versión modernizada: 2023
