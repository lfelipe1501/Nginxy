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