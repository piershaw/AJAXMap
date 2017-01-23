/**
 * @author piershawpictures
 */
var arrayItems;

      function getData(menu) 
      { 
        var XMLHttpRequestObject = false; 
 
        if (window.XMLHttpRequest) {
          XMLHttpRequestObject = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
          XMLHttpRequestObject = new 
            ActiveXObject("Microsoft.XMLHTTP");
        }

        var dataSource = (menu == 1) ? "items1.txt" : "items2.txt";

        if(XMLHttpRequestObject) {
          XMLHttpRequestObject.open("GET", dataSource); 

          XMLHttpRequestObject.onreadystatechange = function() 
          { 
            if (XMLHttpRequestObject.readyState == 4 && 
              XMLHttpRequestObject.status == 200) { 
                show(menu, XMLHttpRequestObject.responseText);
            } 
          } 

          XMLHttpRequestObject.send(null); 
        }
      }

      function show(menu, items) 
      {
        var data = "<table width = '100%'>";
        var loopIndex;
        arrayItems = items.split(", ");
        var target;

        if (arrayItems.length != 0) {
          for (var loopIndex = 0; loopIndex < arrayItems.length; 
            loopIndex++) {
            var text = "display(" + loopIndex + ")";
            data += "<tr><td " 
              + "onclick='" + text + "'>" +
              arrayItems[loopIndex] + 
              "</td></tr>";
          }
        }

        data += "</table>";

        if(menu == "1"){
          target = document.getElementById("menuDiv1");
        }

        if(menu == "2"){
          target = document.getElementById("menuDiv2");
        }

        if(target.style.visibility == "hidden"){
          target.innerHTML = data;
          target.style.visibility = "visible";
        }
      }

      function hide() 
      {
        var menuDiv1 = document.getElementById("menuDiv1");

        if(menuDiv1.style.visibility == "visible"){
          menuDiv1.innerHTML = "<div></div>";
          menuDiv1.style.visibility = "hidden";
        }

        var menuDiv2 = document.getElementById("menuDiv2");
        if(menuDiv2.style.visibility == "visible"){
          menuDiv2.innerHTML = "<div></div>";
          menuDiv2.style.visibility = "hidden";
        }
      }

      function display(index) 
      {
        var targetDiv = document.getElementById("targetDiv");

        targetDiv.innerHTML = "You selected " 
          + arrayItems[index] + ".";
      }

      function check(evt) 
      {
        var e = new MouseEvent(evt);
        var target = null;
        var img;

        img = document.getElementById("image1");

        if((e.x > parseInt(img.style.left)) && (e.y > 
          parseInt(img.style.top)) && 
          (e.x < (parseInt(img.style.left) + 
          parseInt(img.style.width))) 
          && (e.y < (parseInt(img.style.top) + 
          parseInt (img.style.height)))){
            getData(1);
        }

        img = document.getElementById("image2");
        if(e.x > parseInt(img.style.left) && e.y > 
          parseInt(img.style.top) && 
          e.x < (parseInt(img.style.left) + 
          parseInt(img.style.width)) 
          && e.y < (parseInt(img.style.top) + 
          parseInt(img.style.height))){
            getData(2);
        }

        target = document.getElementById("menuDiv1");
        img = document.getElementById("image1");

        if (target.style.visibility == "visible"){
          if(e.x < parseInt(target.style.left) || e.y < 
            parseInt(img.style.top) || 
            e.x > (parseInt(img.style.left) + 
            parseInt(img.style.width)) 
            || e.y > (parseInt(target.style.top) + 
            parseInt(target.style.height))){
            hide();
          }
        }

        target = document.getElementById("menuDiv2");
        img = document.getElementById("image2");

        if (target.style.visibility == "visible"){
          if(e.x < parseInt(target.style.left) || e.y < 
          parseInt(img.style.top) || 
          e.x > (parseInt(img.style.left) + 
          parseInt(img.style.width)) 
          || e.y > (parseInt(target.style.top) + 
          parseInt(target.style.height))){
            hide();
          }
        }
      }

      function MouseEvent(e) 
      {
        if(e) {
          this.e = e; 
        } else {
          this.e = window.event; 
        }

        if(e.pageX) {
          this.x = e.pageX; 
        } else {
          this.x = e.clientX; 
        }

        if(e.pageY) {
          this.y = e.pageY; 
        } else {
          this.y = e.clientY; 
        }

        if(e.target) {
          this.target = e.target; 
        } else {
          this.target = e.srcElement;
        }
      }