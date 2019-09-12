window.onload(){
var imgArray = new Array();
imgArray[0]= new Image();
imgArray[0].src="img/batmanwb.png";
<imgArray[0] onmouseover="active" src="img/batman.png">;
imgArray[1]= new Image();
imgArray[1].src="img/flashwb.png";

imgArray[2]= new Image();
imgArray[2].src="img/supermanwb.png";

imgArray[3]= new Image();
imgArray[3].src="img/wonder_womanwb.png";

var images = imgArray.toString();
document.getElementById("demo").innterHTML=images;
        


}