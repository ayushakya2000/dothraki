var count=0;
function run()
{

  var input=document.getElementById("formtext").value||"";
  var res=document.getElementById('translation');

  console.log("input  "+input);

  var url = 'https://api.funtranslations.com/translate/dothraki.json?text=' + encodeURI(input);
  var xhr=new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
         //console.log(xhr.responseText);
         res.innerHTML = JSON.parse(xhr.responseText).contents.translated;
      }
  };
  xhr.open("GET", url, true);
  xhr.send();
  count++;
  console.log(count);
  document.getElementById("times").innerHTML=count;
}
