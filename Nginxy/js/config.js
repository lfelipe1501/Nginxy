//
/*------------------------------------*\
    Nginxy
    by @lfelipe1501

    Theme name: Nginxy
    Theme author: @lfelipe1501
\*------------------------------------*/
// Configure .nginxy here:
var websiteName = 'File Server';
var websiteURL = 'http://www.electrojaponesa.com';
// End of normal settings.
//
//

$(document).ready(function(){

// Working on nginx HTML and applying settings.
var text = $("h1").text();
var array = text.split('/');
var last = array[array.length-2];
var dirStructure = $("a").text();
var dirStructure = document.getElementsByTagName('a')[0].href;
var dir = text.substring(10);
var currentDir = last.charAt(0).toUpperCase() + last.slice(1);
var dirTrun;

// Truncate long folder names.
if (currentDir.length > 19){
	var currentDir = currentDir.substring(0, 18) + '...';
}

// Updating page title.
document.title = currentDir + ' – ' + websiteName;

// Updating page footer.
$("#footerURL").text(websiteName);
$("#footerURL").attr('href', websiteURL);

// Add back button.
$("h1").html(currentDir);

if (dir.length > 60) {
	dirTrun = dir.replace(/(.{60})/g, "$1\n")
} else {
	dirTrun = dir.substring(0, dir.length - 1);
}

// Establish supported formats.
var list = new Array();
var formats = ["bin", "jpg", "gif", "bmp", "png", "html", "css", "zip", "iso", "tiff", "ico", "psd", "pdf", "exe", "rar", "deb", "swf", "7z", "doc", "docx", "xls", "xlsx", "pptx", "ppt", "txt", "php", "js", "c", "c++", "torrent", "sql", "wmv", "avi", "mp4", "mp3", "wma", "ogg", "msg", "wav", "py", "java", "gzip", "jpeg", "raw", "cmd", "bat", "sh", "svg"];

// Scan all files in the directory, check the extensions and show the right MIME-type image.
$('td a').each(function(){
	var found = 0;
	var arraySplit = $(this).attr('href').split(".");
	var fileExt = arraySplit[arraySplit.length - 1];

	for (var i = 0; i < formats.length; i++) {
		if (fileExt.toLowerCase() == formats[i].toLowerCase()) {
			var found = 1;
			var oldText = $(this).text();
			$(this).html('<img class="icons" src="/.nginxy/images/icons/' + formats[i] + '.png" style="margin:0px 4px -4px 0px"></img></a>' + oldText);
			return;
		}
	}

	// Add an icon for the go-back link.
	if ($(this).text().indexOf("Parent directory") >= 0) {
		var found = 1;
		var oldText = $(this).text();
		$(this).html('<img class="icons" src="/.nginxy/images/icons/home.png" style="margin:0px 4px -4px 0px">' + oldText);
		return;
	}


	// Check for folders as they don't have extensions.
	if ($(this).attr('href').substr($(this).attr('href').length - 1) == '/') {
		var found = 1;
		var oldText = $(this).text();
		$(this).html('<img class="icons" src="/.nginxy/images/icons/folder.png" style="margin:0px 4px -4px 0px">' + oldText.substring(0, oldText.length - 1));

		// Fix for annoying jQuery behaviour where inserted spaces are treated as new elements -- which breaks my search.
		var string = ' ' + $($(this)[0].nextSibling).text();

		// Copy the original meta-data string, append a space char and save it over the old string.
		$($(this)[0].nextSibling).remove();
		$(this).after(string);
		return;
	}

	// File format not supported by Better Listings, so let's load a generic icon.
	if (found == 0){
		var oldText = $(this).text();
		$(this).html('<img class="icons" src="/.nginxy/images/icons/error.png" style="margin:0px 4px -4px 0px">' + oldText);
		return;
	}
});
});