function updateDate(){
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var setDate = document.getElementById("setDate");
    setDate.innerHTML =date.getDate()+"-"+parseInt(date.getMonth()+1) + " - " + date. getFullYear();  
}

setInterval(updateDate,100);
//onload = updateDate();
onload=()=>{

    updateDate();
    document.body.style.background=localStorage.getItem("Color");
    document.getElementById("time").style.background =localStorage.getItem("Color");
}
function getColor(){
    document.body.style.background = getvalue;
var inputColor = document.getElementById("setColor").value;
 var setvalue = localStorage.setItem("Color",inputColor);
 var getvalue =localStorage.getItem("Color");
document.getElementById("time").style.background = getvalue;
document.body.style.background =inputColor;

}

// function setColor(){
    
    
// document.getElementById("time").style.background =getvalue;
// document.body.style.background = getvalue;
// }

//setInterval(setColor,1000);