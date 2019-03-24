var input=document.getElementById("form").value||"";
var res=document.getElementById('translation');

var url = 'https://api.funtranslations.com/translate/dothraki.json?text=' + encodeURI(input);

var xhr=new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       res.innerHTML = JSON.parse(xhr.responseText).contents.translated;
    }
};
xhr.open("GET", url, true);
xhr.send();
