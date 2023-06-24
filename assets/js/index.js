//All variable for the getElementById
var element = document.getElementById("back");
var form = document.getElementById("form");
var result = document.getElementById("result");
var direct = document.getElementById("graddirection");

//Initialization for values
startcolor.value = "#ffffff";
endcolor.value = "#00000";
initialDirect = "to right";
Generate(startcolor.value,endcolor.value,initialDirect);
result.value = element.style.backgroundImage;

//The event for the form change
form.onchange = function(e) {
    //Variables for colors 
    var start = startcolor.value;
    var end = endcolor.value;
    var direction = direct.options[direct.selectedIndex].innerHTML ;

    //Executing the process of generating
    Generate(start,end,direction);
    result.value = element.style.backgroundImage;

    e.preventDefault();
}

//Function for the generating proccess
function Generate(start,end,direction) {
    element.style.backgroundImage = `linear-gradient(${direction},${start},${end})`;
}