var gadgetheight = 140;
var gadgetwidth = 100;

var docked = 1;
var undocked = 2;

System.Gadget.onDock = init;
System.Gadget.onUndock = init;
// Initialize the gadget.


function init()
{
	
	//var background = document.getElementById("imgBackground");
	var oBody = document.body.style;
 	if(System.Gadget.docked) {
		oBody.height = gadgetheight*docked;
		oBody.width = gadgetwidth*docked;

//		background.src = "images/v.jpg";

		txtDocked.className = 'gadgetDocked';
        txtDocked.innerText = 'Docked';
	}
	else {
		oBody.height = gadgetheight*undocked;
		oBody.width = gadgetwidth*undocked;
		
	//	background.src = "images/fs.jpg";

		txtDocked.className = 'gadgetUndocked';
        txtDocked.innerText = 'Undocked';
	}
}

function keyword() 
{
	
	var url = "https://www.google.com/search?as_epq=indias+daughter&tbm=nws&gws_rd=ssl";
	window.open(url,"googlesearch");

}

