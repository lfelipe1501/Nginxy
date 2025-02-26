/*------------------------------------*\
    Nginxy
    by @lfelipe1501
    Modernized version

    Theme name: Nginxy
    Theme author: @lfelipe1501
\*------------------------------------*/
// Configure .nginxy here:
const websiteName = 'File Server';
const websiteURL = 'https://www.lfsystems.com.co';

// Configuración de paginación
const filesPerPage = 10; // Máximo de archivos por página
let currentPage = 1;
let currentSortField = 'name'; // Campo de ordenamiento por defecto
let currentSortOrder = 'asc'; // Orden por defecto

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
    'pdf': { icon: 'file-pdf-box', color: '#f44336' },
    'ppt': { icon: 'file-powerpoint', color: '#ff5722' },
    'pptx': { icon: 'file-powerpoint', color: '#ff5722' },
    'xls': { icon: 'file-excel', color: '#4caf50' },
    'xlsx': { icon: 'file-excel', color: '#4caf50' },
    'csv': { icon: 'file-delimited', color: '#4caf50' },
    'log': { icon: 'file-document-outline', color: '#607d8b' },
    'json': { icon: 'code-json', color: '#ffc107' },
    
    // Images
    'jpg': { icon: 'file-jpg-box', color: '#9c27b0' },
    'jpeg': { icon: 'file-jpg-box', color: '#9c27b0' },
    'png': { icon: 'file-png-box', color: '#9c27b0' },
    'gif': { icon: 'file-gif-box', color: '#9c27b0' },
    'bmp': { icon: 'file-image', color: '#9c27b0' },
    'tiff': { icon: 'file-image', color: '#9c27b0' },
    'ico': { icon: 'file-image', color: '#9c27b0' },
    'svg': { icon: 'svg', color: '#9c27b0' },
    'psd': { icon: 'file-image', color: '#673ab7' },
    'raw': { icon: 'file-image', color: '#673ab7' },
    
    // Audio/Video
    'mp3': { icon: 'file-music', color: '#e91e63' },
    'wav': { icon: 'file-music', color: '#e91e63' },
    'ogg': { icon: 'file-music', color: '#e91e63' },
    'wma': { icon: 'file-music', color: '#e91e63' },
    'mp4': { icon: 'file-video', color: '#ff9800' },
    'avi': { icon: 'file-video', color: '#ff9800' },
    'wmv': { icon: 'file-video', color: '#ff9800' },
    
    // Archives
    'zip': { icon: 'zip-box-outline', color: '#795548' },
    'rar': { icon: 'folder-zip', color: '#795548' },
    '7z': { icon: 'folder-zip', color: '#795548' },
    'tar': { icon: 'folder-zip', color: '#795548' },
    'gz': { icon: 'folder-zip', color: '#795548' },
    'gzip': { icon: 'folder-zip', color: '#795548' },
    'deb': { icon: 'folder-zip', color: '#795548' },
    'iso': { icon: 'disc', color: '#607d8b' },
    
    // Code
    'html': { icon: 'language-html5', color: '#e44d26' },
    'css': { icon: 'language-css3', color: '#1572b6' },
    'js': { icon: 'language-javascript', color: '#f7df1e' },
    'php': { icon: 'language-php', color: '#777bb3' },
    'py': { icon: 'language-python', color: '#3776ab' },
    'java': { icon: 'language-java', color: '#007396' },
    'jar': { icon: 'language-java', color: '#007396' },
    'c': { icon: 'language-c', color: '#a8b9cc' },
    'c++': { icon: 'language-cpp', color: '#00599c' },
    'sql': { icon: 'database', color: '#4479a1' },
    'sh': { icon: 'console', color: '#4eaa25' },
    'bat': { icon: 'console', color: '#4eaa25' },
    'cmd': { icon: 'console', color: '#4eaa25' },
    
    // Executables and others
    'exe': { icon: 'microsoft-windows', color: '#0078d7' },
    'bin': { icon: 'file-binary', color: '#607d8b' },
    'swf': { icon: 'flash', color: '#cf302a' },
    'torrent': { icon: 'download', color: '#00bcd4' },
    'msg': { icon: 'email', color: '#00bcd4' }
};

// End of normal settings.

// Function to detect and apply theme according to system preferences
function applyThemePreference() {
    // Check if there's a saved preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        // Apply saved theme
        document.documentElement.classList.remove('light-theme', 'dark-theme');
        document.documentElement.classList.add(savedTheme);
    } else {
        // Apply theme according to system preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.remove('light-theme', 'dark-theme');
        
        if (prefersDarkScheme) {
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.add('light-theme');
        }
    }
}

// Function to manually toggle theme
function toggleTheme() {
    const isDarkTheme = document.documentElement.classList.contains('dark-theme');
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    
    if (isDarkTheme) {
        document.documentElement.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    } else {
        document.documentElement.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }
}

// Listen for changes in system preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    // Only apply if there's no saved preference
    if (!localStorage.getItem('theme')) {
        document.documentElement.classList.remove('light-theme', 'dark-theme');
        document.documentElement.classList.add(e.matches ? 'dark-theme' : 'light-theme');
    }
});

// Función para verificar si una fila es un directorio
function isDirectory(row) {
    // Verificar si la fila tiene un enlace que termina con '/'
    const link = row.querySelector('td:first-child a');
    if (link && link.getAttribute('href')) {
        return link.getAttribute('href').endsWith('/');
    }
    return false;
}

// Función para convertir tamaños de archivo a bytes para comparación
function parseFileSize(sizeStr) {
    if (!sizeStr || sizeStr === '-') return 0;
    
    // Eliminar espacios y convertir a minúsculas
    sizeStr = sizeStr.trim().toLowerCase();
    
    // Patrones comunes de tamaño de archivo
    const units = {
        'b': 1,
        'bytes': 1,
        'k': 1024,
        'kb': 1024,
        'kib': 1024,
        'm': 1024 * 1024,
        'mb': 1024 * 1024,
        'mib': 1024 * 1024,
        'g': 1024 * 1024 * 1024,
        'gb': 1024 * 1024 * 1024,
        'gib': 1024 * 1024 * 1024,
        't': 1024 * 1024 * 1024 * 1024,
        'tb': 1024 * 1024 * 1024 * 1024,
        'tib': 1024 * 1024 * 1024 * 1024
    };
    
    // Patrón para formatos como "4.2 KiB"
    const kiPattern = /^(\d+(?:\.\d+)?)\s*([kmgt]i?b)$/i;
    const kiMatch = sizeStr.match(kiPattern);
    
    if (kiMatch) {
        const size = parseFloat(kiMatch[1]);
        const unit = kiMatch[2].toLowerCase();
        console.log(`Parseando tamaño: ${size} ${unit}`);
        return size * (units[unit] || 1);
    }
    
    // Patrón para formatos simples como "140 B"
    const simplePattern = /^(\d+(?:\.\d+)?)\s*([bkmgt])?$/i;
    const simpleMatch = sizeStr.match(simplePattern);
    
    if (simpleMatch) {
        const size = parseFloat(simpleMatch[1]);
        const unit = (simpleMatch[2] || 'b').toLowerCase();
        console.log(`Parseando tamaño simple: ${size} ${unit}`);
        return size * (units[unit] || 1);
    }
    
    console.log(`No se pudo parsear el tamaño: ${sizeStr}`);
    return 0;
}

// Función para convertir fechas de Nginx a timestamps para comparación
function parseNginxDate(dateStr) {
    if (!dateStr || dateStr === '-') return 0;
    
    // Formato común de fecha en Nginx: "26-Feb-2023 12:34"
    const months = {
        'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'may': 4, 'jun': 5,
        'jul': 6, 'aug': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dec': 11
    };
    
    try {
        // Intentar parsear la fecha
        const parts = dateStr.split(' ');
        
        if (parts.length >= 2) {
            const dateParts = parts[0].split('-');
            const timeParts = parts[1].split(':');
            
            if (dateParts.length >= 3) {
                const day = parseInt(dateParts[0], 10);
                const month = months[dateParts[1].toLowerCase().substring(0, 3)] || 0;
                const year = parseInt(dateParts[2], 10);
                
                let hours = 0, minutes = 0;
                if (timeParts.length >= 2) {
                    hours = parseInt(timeParts[0], 10);
                    minutes = parseInt(timeParts[1], 10);
                }
                
                // Crear objeto Date y devolver timestamp
                return new Date(year, month, day, hours, minutes, 0, 0).getTime();
            }
        }
    } catch (e) {
        console.error('Error parsing date:', e);
    }
    
    // Si no se puede parsear, devolver 0
    return 0;
}

// Función para inicializar los encabezados de la tabla y agregar eventos de ordenamiento
function initializeTableHeaders() {
    // Obtener todos los encabezados de la tabla
    const headers = document.querySelectorAll('th');
    
    // Limpiar cualquier evento o atributo existente
    headers.forEach(header => {
        // Eliminar los enlaces existentes y guardar el texto
        const headerText = header.textContent.trim();
        
        // Limpiar el contenido del encabezado
        header.innerHTML = '';
        
        // Crear un nuevo span para el texto
        const textSpan = document.createElement('span');
        textSpan.textContent = headerText.replace(/File Name|File Size|Date/i, match => match);
        header.appendChild(textSpan);
        
        // Agregar un espacio después del texto
        header.appendChild(document.createTextNode(' '));
        
        // Crear un span para el icono de ordenamiento
        const iconSpan = document.createElement('span');
        iconSpan.className = 'sort-icon';
        iconSpan.innerHTML = '⇕';
        iconSpan.style.opacity = '0.5';
        header.appendChild(iconSpan);
    });
    
    // Asignar atributos data-sort y eventos de clic a los encabezados correctos
    // Nombre de archivo (primera columna)
    if (headers[0]) {
        headers[0].setAttribute('data-sort', 'name');
        headers[0].style.cursor = 'pointer';
        headers[0].addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            sortTable('name');
            return false;
        });
    }
    
    // Tamaño de archivo (segunda columna)
    if (headers.length > 1 && headers[1]) {
        headers[1].setAttribute('data-sort', 'size');
        headers[1].style.cursor = 'pointer';
        headers[1].addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            sortTable('size');
            return false;
        });
    }
    
    // Fecha de modificación (tercera columna)
    if (headers.length > 2 && headers[2]) {
        headers[2].setAttribute('data-sort', 'date');
        headers[2].style.cursor = 'pointer';
        headers[2].addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            sortTable('date');
            return false;
        });
    }
    
    console.log("Encabezados de tabla inicializados correctamente");
}

// Función para ordenar los elementos de la tabla
function sortTable(field) {
    // Prevenir comportamiento predeterminado si se llama desde un evento
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    // Si hacemos clic en el mismo campo, invertimos el orden
    if (currentSortField === field) {
        currentSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortField = field;
        // Por defecto, tamaños ascendentes y fechas descendentes
        currentSortOrder = field === 'date' ? 'desc' : 'asc';
    }
    
    console.log(`Ordenando por: ${field} en orden: ${currentSortOrder}`);
    
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');
    
    // Separar filas de directorios y archivos
    const rows = Array.from(tbody.querySelectorAll('tr:not(.parent)'));
    
    // Identificar la fila del directorio padre (Parent directory)
    const parentRow = rows.find(row => {
        const link = row.querySelector('td:first-child a');
        return link && link.textContent.includes('Parent directory');
    });
    
    // Filtrar la fila del directorio padre
    const rowsWithoutParent = parentRow ? rows.filter(row => row !== parentRow) : rows;
    
    // Separar directorios y archivos
    const dirRows = rowsWithoutParent.filter(row => isDirectory(row));
    const fileRows = rowsWithoutParent.filter(row => !isDirectory(row));
    
    console.log(`Encontrados: ${dirRows.length} directorios y ${fileRows.length} archivos`);
    
    // Solo ordenar las filas de archivos
    fileRows.sort((a, b) => {
        let aValue, bValue;
        
        if (field === 'name') {
            // Obtener el texto del nombre
            const aLink = a.querySelector('td:first-child a');
            const bLink = b.querySelector('td:first-child a');
            
            aValue = aLink ? aLink.textContent.trim().toLowerCase() : '';
            bValue = bLink ? bLink.textContent.trim().toLowerCase() : '';
            
            console.log(`Comparando nombres: "${aValue}" vs "${bValue}"`);
        } else if (field === 'date') {
            // Obtener el texto de la fecha de la última columna
            const aDateText = a.querySelector('td:last-child').textContent.trim();
            const bDateText = b.querySelector('td:last-child').textContent.trim();
            
            // Convertir las fechas a timestamps para comparación
            aValue = parseNginxDate(aDateText);
            bValue = parseNginxDate(bDateText);
            
            console.log(`Comparando fechas: "${aDateText}" (${aValue}) vs "${bDateText}" (${bValue})`);
        } else if (field === 'size') {
            // Obtener el texto del tamaño de la columna de tamaño (segunda columna)
            const aSizeText = a.querySelector('td:nth-child(2)').textContent.trim();
            const bSizeText = b.querySelector('td:nth-child(2)').textContent.trim();
            
            // Convertir tamaño a bytes para comparación
            aValue = parseFileSize(aSizeText);
            bValue = parseFileSize(bSizeText);
            
            console.log(`Comparando tamaños: "${aSizeText}" (${aValue}) vs "${bSizeText}" (${bValue})`);
        }
        
        // Aplicar dirección de ordenamiento
        const direction = currentSortOrder === 'asc' ? 1 : -1;
        
        // Comparación especial para manejar valores undefined o null
        if (aValue === undefined || aValue === null) return 1 * direction;
        if (bValue === undefined || bValue === null) return -1 * direction;
        
        // Comparación normal
        if (aValue < bValue) return -1 * direction;
        if (aValue > bValue) return 1 * direction;
        return 0;
    });
    
    // También ordenar los directorios por nombre
    if (field === 'name') {
        dirRows.sort((a, b) => {
            const aLink = a.querySelector('td:first-child a');
            const bLink = b.querySelector('td:first-child a');
            
            const aValue = aLink ? aLink.textContent.trim().toLowerCase() : '';
            const bValue = bLink ? bLink.textContent.trim().toLowerCase() : '';
            
            // Aplicar dirección de ordenamiento
            const direction = currentSortOrder === 'asc' ? 1 : -1;
            
            if (aValue < bValue) return -1 * direction;
            if (aValue > bValue) return 1 * direction;
            return 0;
        });
    }
    
    // Actualizar iconos de ordenamiento
    updateSortIcons();
    
    // Limpiar tabla
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    
    // Agregar fila de directorio padre primero si existe
    if (parentRow) {
        tbody.appendChild(parentRow);
    }
    
    // Agregar filas de directorios primero
    dirRows.forEach(row => tbody.appendChild(row));
    
    // Luego agregar filas de archivos ordenadas
    fileRows.forEach(row => tbody.appendChild(row));
    
    // Actualizar paginación
    updatePagination();
    
    // Limpiar parámetros de URL que puedan haber sido agregados por Nginx
    cleanupUrl();
}

// Función para limpiar los parámetros de URL agregados por Nginx
function cleanupUrl() {
    // Verificar si la URL tiene parámetros de ordenamiento de Nginx
    if (window.location.href.includes('?C=') || window.location.href.includes('&O=')) {
        // Obtener la URL base sin parámetros
        const baseUrl = window.location.href.split('?')[0];
        
        // Actualizar la URL sin recargar la página
        window.history.replaceState({}, document.title, baseUrl);
        
        console.log("URL limpiada de parámetros de ordenamiento");
    }
}

// Función para actualizar los iconos de ordenamiento
function updateSortIcons() {
    const headers = document.querySelectorAll('th');
    
    headers.forEach(header => {
        // Obtener el icono existente
        const existingIcon = header.querySelector('.sort-icon');
        if (existingIcon) {
            const field = header.getAttribute('data-sort');
            if (field && field === currentSortField) {
                existingIcon.innerHTML = currentSortOrder === 'asc' ? '&uarr;' : '&darr;';
                existingIcon.style.opacity = '1';
            } else {
                existingIcon.innerHTML = '⇕';
                existingIcon.style.opacity = '0.5';
            }
        }
    });
}

// Función para actualizar la paginación
function updatePagination() {
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr:not(.parent)'));
    const totalPages = Math.ceil(rows.length / filesPerPage);
    
    // Asegurarse de que la página actual es válida
    if (currentPage > totalPages) {
        currentPage = totalPages || 1;
    }
    
    // Mostrar/ocultar filas según la página actual
    rows.forEach((row, index) => {
        const startIndex = (currentPage - 1) * filesPerPage;
        const endIndex = startIndex + filesPerPage - 1;
        
        if (index >= startIndex && index <= endIndex) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
    
    // Actualizar o crear controles de paginación
    updatePaginationControls(totalPages);
}

// Función para actualizar los controles de paginación
function updatePaginationControls(totalPages) {
    // Eliminar controles existentes
    let paginationContainer = document.getElementById('pagination-container');
    if (paginationContainer) {
        paginationContainer.remove();
    }
    
    // Si solo hay una página, no mostrar controles
    if (totalPages <= 1) {
        return;
    }
    
    // Crear nuevo contenedor de paginación
    paginationContainer = document.createElement('div');
    paginationContainer.id = 'pagination-container';
    
    // Botón para ir a la primera página
    const firstPageButton = document.createElement('button');
    firstPageButton.textContent = '«';
    firstPageButton.title = 'Primera página';
    firstPageButton.className = 'pagination-btn';
    firstPageButton.disabled = currentPage === 1;
    firstPageButton.addEventListener('click', () => {
        if (currentPage !== 1) {
            currentPage = 1;
            updatePagination();
        }
    });
    paginationContainer.appendChild(firstPageButton);
    
    // Botón anterior
    const prevButton = document.createElement('button');
    prevButton.textContent = '‹';
    prevButton.title = 'Página anterior';
    prevButton.className = 'pagination-btn';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });
    paginationContainer.appendChild(prevButton);
    
    // Botones numéricos de página
    // Mostrar máximo 3 botones de página alrededor de la página actual
    const maxPageButtons = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
    
    // Ajustar el rango si estamos cerca del final
    if (endPage - startPage + 1 < maxPageButtons && startPage > 1) {
        startPage = Math.max(1, endPage - maxPageButtons + 1);
    }
    
    // Mostrar botones de página
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i.toString();
        pageButton.className = i === currentPage ? 'pagination-btn pagination-btn-active' : 'pagination-btn pagination-btn-number';
        pageButton.disabled = i === currentPage;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            updatePagination();
        });
        paginationContainer.appendChild(pageButton);
    }
    
    // Botón siguiente
    const nextButton = document.createElement('button');
    nextButton.textContent = '›';
    nextButton.title = 'Página siguiente';
    nextButton.className = 'pagination-btn';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
        }
    });
    paginationContainer.appendChild(nextButton);
    
    // Botón para ir a la última página
    const lastPageButton = document.createElement('button');
    lastPageButton.textContent = '»';
    lastPageButton.title = 'Última página';
    lastPageButton.className = 'pagination-btn';
    lastPageButton.disabled = currentPage === totalPages;
    lastPageButton.addEventListener('click', () => {
        if (currentPage !== totalPages) {
            currentPage = totalPages;
            updatePagination();
        }
    });
    paginationContainer.appendChild(lastPageButton);
    
    // Información de página (opcional, puedes quitar esto si prefieres solo los botones)
    const pageInfo = document.createElement('span');
    pageInfo.textContent = `${currentPage} de ${totalPages}`;
    pageInfo.className = 'pagination-info';
    paginationContainer.appendChild(pageInfo);
    
    // Agregar controles después de la tabla
    const table = document.querySelector('table');
    table.parentNode.insertBefore(paginationContainer, table.nextSibling);
}
// Apply theme when page loads
document.addEventListener('DOMContentLoaded', function() {
    applyThemePreference();
    
    // Add button to toggle theme
    const footer = document.getElementById('footer');
    if (footer) {
        const themeToggleBtn = document.createElement('button');
        themeToggleBtn.id = 'theme-toggle';
        themeToggleBtn.innerHTML = '🌓';
        themeToggleBtn.title = 'Toggle Theme';
        themeToggleBtn.onclick = toggleTheme;
        themeToggleBtn.className = 'theme-toggle-btn';
        footer.appendChild(themeToggleBtn);
    }
    
    // Working on nginx HTML and applying settings.
    const h1Element = document.querySelector("h1");
    const text = h1Element.textContent;
    const array = text.split('/');
    const last = array[array.length-2];
    const firstLink = document.getElementsByTagName('a')[0];
    const dirStructure = firstLink ? firstLink.href : '';
    const dir = text.substring(10);
    let currentDir = last ? last.charAt(0).toUpperCase() + last.slice(1) : '';

    // Truncate long folder names.
    if (currentDir.length > 19) {
        currentDir = currentDir.substring(0, 18) + '...';
    }

    // Updating page title.
    document.title = currentDir + ' – ' + websiteName;

    // Updating page footer.
    const footerURL = document.getElementById("footerURL");
    if (footerURL) {
        footerURL.textContent = websiteName;
        footerURL.setAttribute('href', websiteURL);
    }

    // Update header with current directory name
    if (h1Element) {
        h1Element.textContent = currentDir;
    }

    // Establish supported formats.
    const formats = Object.keys(iconMap);

    // Scan all files in the directory, check the extensions and show the right MIME-type image.
    const links = document.querySelectorAll('td a');
    
    links.forEach(function(link) {
        let found = 0;
        const href = link.getAttribute('href');
        
        // Add an icon for the go-back link.
        if (link.textContent.indexOf("Parent directory") >= 0) {
            found = 1;
            const oldText = link.textContent;
            insertSvgIcon(link, 'home', oldText);
            
            // Marcar la fila como parent para excluirla del ordenamiento
            const row = link.closest('tr');
            if (row) {
                row.classList.add('parent');
            }
            return;
        }
        
        // Check for folders as they don't have extensions.
        if (href && href.substr(href.length - 1) == '/') {
            found = 1;
            const oldText = link.textContent;
            insertSvgIcon(link, 'folder', oldText.substring(0, oldText.length - 1));
            return;
        }
        
        // Check file extensions
        if (href) {
            const arraySplit = href.split(".");
            const fileExt = arraySplit.length > 1 ? arraySplit[arraySplit.length - 1].toLowerCase() : '';
            
            if (fileExt && iconMap[fileExt]) {
                found = 1;
                const oldText = link.textContent;
                insertSvgIcon(link, fileExt, oldText);
                return;
            }
        }
        
        // File format not supported, load a generic icon.
        if (found == 0) {
            const oldText = link.textContent;
            insertSvgIcon(link, 'error', oldText);
        }
    });
    
    // Inicializar encabezados de tabla
    initializeTableHeaders();
    
    // Inicializar paginación
    updatePagination();
    
    // Limpiar parámetros de URL al cargar la página
    cleanupUrl();
    
    // Add responsive behavior for mobile
    addResponsiveFeatures();
});

// Function to insert SVG icon
function insertSvgIcon(element, iconKey, text) {
    const iconInfo = iconMap[iconKey] || iconMap['error'];
    const iconUrl = `${iconsCDN}${iconInfo.icon}.svg`;
    
    // Fetch the SVG content
    fetch(iconUrl)
        .then(response => response.text())
        .then(svgText => {
            // Create a container for the icon and text
            const container = document.createElement('span');
            container.className = 'icon-text-container';
            
            // Create a span for the SVG icon
            const iconSpan = document.createElement('span');
            iconSpan.className = 'icon-container';
            iconSpan.innerHTML = svgText;
            
            // Apply color to the SVG
            const svgElement = iconSpan.querySelector('svg');
            if (svgElement) {
                svgElement.setAttribute('fill', iconInfo.color);
                svgElement.classList.add('colored-icon');
            }
            
            // Add the icon and text to the container
            container.appendChild(iconSpan);
            container.appendChild(document.createTextNode(text));
            
            // Clear the link content and add the container
            element.innerHTML = '';
            element.appendChild(container);
        })
        .catch(error => {
            console.error('Error loading SVG:', error);
            // Fallback to text if SVG fails to load
            element.textContent = text;
        });
}

// Function to add responsive features
function addResponsiveFeatures() {
    // Add a class to the body based on screen size
    const body = document.body;
    
    function updateBodyClass() {
        if (window.innerWidth <= 768) {
            body.classList.add('mobile-view');
            body.classList.remove('desktop-view');
        } else {
            body.classList.add('desktop-view');
            body.classList.remove('mobile-view');
        }
    }
    
    // Initial call
    updateBodyClass();
    
    // Update on resize
    window.addEventListener('resize', updateBodyClass);
}
