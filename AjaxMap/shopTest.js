


/*var xmlhttp;


// must be 1st 
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }



function loadXMLDoc()
{
	
xmlhttp.onreadystatechange = function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
    document.getElementById("m").innerHTML = "loading";
    }
  };
  
xmlhttp.open("GET","testbox.txt",true);
xmlhttp.send();

}*/


var options;

var XMLHttpRequestObject = false; 

if (window.XMLHttpRequest) {
  XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function getoptions(scheme)
{
  var url = "options3.php";

  if(XMLHttpRequestObject) {
    XMLHttpRequestObject.open("POST", url); 
    XMLHttpRequestObject.setRequestHeader('Content-Type','application/x-www-form-urlencoded'); 

    XMLHttpRequestObject.onreadystatechange = function() 
    { 
      if (XMLHttpRequestObject.readyState == 4 && 
        XMLHttpRequestObject.status == 200) {
      var xmlDocument = XMLHttpRequestObject.responseXML;
      options = xmlDocument.getElementsByTagName("option");
      listoptions();
      } 
    };

    XMLHttpRequestObject.send("scheme=" + scheme); 

  }
}

function listoptions ()
{
  var loopIndex;
  var selectControl = document.getElementById('optionList');

  for (loopIndex = 0; loopIndex < options.length; loopIndex++ )
  {
      selectControl.options[loopIndex] = new 
         Option(options[loopIndex].firstChild.data);
  }
}

function setoption()
{
document.getElementById('targetDiv').style.color = 
  options[document.getElementById           
    ('optionList').selectedIndex].firstChild.data;
}








