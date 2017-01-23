	 
// run
var options;
// Simple follow the mouse script
var divNameHead = 'stateheaddiv'; // div that is to follow the mouse
var divName = 'statediv'; // div that is to follow the mouse

                         // (must be position:absolute)
var offX = 15;          // X offset from mouse position
var offY = 15;          // Y offset from mouse position

 
function init()// loops back on bubble
{

 
	//var sAlart = document.getElementById("mydiv");
	//var stateDiv = document.getElementById("Map");
	var ca = document.getElementById("ca");
	var nv = document.getElementById("nv");
	
 
	
	//events
	//sAlart.addEventListener("click", sendAlart, false); 
	//stateDiv.addEventListener("mousedown", followMouse, false); 

	//document.onmousemove = follow;
	
	
	ca.addEventListener("mousedown", yourinCA, false); 
	nv.addEventListener("mousedown", yourinNV, false); 
	document.addEventListener("mousedown", follow, false); 
}




function yourinCA(){
	getData('california');
	runThis('california');
}

function yourinNV(){
	getData('nevada');
	runThis('nevada');
}



function mouseX(evt)
{
	 if (!evt) 
	 {
		evt = window.event;
	 }
	
	 if (evt.pageX)
	 {
	 	 return evt.pageX;
	 }
	 else if (evt.clientX)
	 {
	 	return evt.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	 }
	 else
	 {
	 return 0;	
	 }
}
	 
	 
	 
	 
function mouseY(evt)
{
	if (!evt) 
	{
		evt = window.event;
	}
	
	
	if (evt.pageY)
	{
	 return evt.pageY;
	} 
	else if (evt.clientY)
	{
	return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
	}
	else
	{
	return 0;
	} 	
}





function follow(evt)
{
 	if (document.getElementById)
	 {
	 	var obj = document.getElementById(divName).style; obj.visibility = 'visible';
		var objH = document.getElementById(divNameHead).style; objH.visibility = 'visible';
		
		obj.left = (parseInt(mouseX(evt))+offX) + 'px';
		obj.top = (parseInt(mouseY(evt))+offY) + 'px';
		
		objH.left = (parseInt(mouseX(evt))+offX) + 'px';
		objH.top = (parseInt(mouseY(evt))+offY +-15) + 'px';
	 }

}


  					
			


 
function OnMouseUpHandler(evt)
{
	var evt = new MouseEvent(evt)
	//addEventListener('onmouseup',OnMouseUpHandler)
	
}

function showState(c)
{
	window.alert("this " + c);
}



      function getData(state) { 
	  	  
		if (window.XMLHttpRequest){
		  	// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp = new XMLHttpRequest();
		}else{
			// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		// ready?state
		xmlhttp.onreadystatechange=function(){
		  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				document.getElementById("statediv").innerHTML = xmlhttp.responseText;
				document.removeEventListener("mousedown", follow, false); 
		    }
			 
		}
		
		xmlhttp.open("GET","/includes/mapStates.php?state="+state,true);
		xmlhttp.send(null);
        }
		
	
      

	  
	  
     function runThis(s){
	 	
		var showStateHead = document.getElementById(divNameHead);
		
		switch(s){		
			case 'california':
			showStateHead.innerHTML ="California_______________State_______________Rating_______________";
			break;
			
			case 'nevada':
			showStateHead.innerHTML ="Nevada___________________State_______________Rating_______________";
			break;
			
			default :
			
			break;
			
		}
		
		

	 }
	 

	 //made custom event Handler like as3
	 function addEventListener(Event,Handler,captures)
	 {
	 	if (typeof(window.event) != "undefind")
		{
			objNode.attachEvent("on" + Event, Handler);
		}
		else
		{
			objNode.addEventListener(Event,Handler, captures);
		}
	 }
	 
	 
	  function removeEventListener(Event,Handler,captures)
	 {
	 	if (typeof(window.event) != "undefind")
		{
			objNode.detachEvent("on" + Event, Handler);
		}
		else
		{
			objNode.removeEventListener(Event,Handler, captures);
		}
	 }
	 
	 
	 
	 
	 //event function
	 function sendAlart(event)
	 {
	 	var e = event || window.event;
		window.alert("Click" + e);
	 }
	 