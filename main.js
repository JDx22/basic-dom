console.log(document)
const playingField = document.getElementById("playing-field")
console.log(playingField);
const down = document.getElementById("down");
console.log(down);
console.log(down.innerHTML)
//down.innerHTML = "Down";
console.log(playingField.style.backgroundColor);
document.getElementById("block").style.backgroundColor = "Yellow";

const moveRight = function(){
    //console.log(document.getElementById("block").style.left="15px");
    if (isNaN(parseInt(document.getElementById("block").style.left)))
    {
        console.log("here");
        document.getElementById("block").style.left = "0px";   
    }
    console.log(document.getElementById("block").style.left)
    document.getElementById("block").style.left = (parseInt(document.getElementById("block").style.left)+15)+"px";
}
const moveLeft = function(){
    //console.log(document.getElementById("block").style.left="15px");
    if (isNaN(parseInt(document.getElementById("block").style.left)))
    {
        console.log("here");
        document.getElementById("block").style.left = "0px";   
    }
    console.log(document.getElementById("block").style.left)
    document.getElementById("block").style.left = (parseInt(document.getElementById("block").style.left)-15)+"px";
}
const moveDown = function(){
    if (isNaN(parseInt(document.getElementById("block").style.top)))
    {
        console.log("here");
        document.getElementById("block").style.top = "0px";   
    }
    console.log(document.getElementById("block").style.top)
    document.getElementById("block").style.top = (parseInt(document.getElementById("block").style.top)+15)+"px";    
}
const moveUp = function(){
    if (isNaN(parseInt(document.getElementById("block").style.top)))
    {
        console.log("here");
        document.getElementById("block").style.top = "0px";   
    }
    console.log(document.getElementById("block").style.top)
    document.getElementById("block").style.top = (parseInt(document.getElementById("block").style.top)-15)+"px";    
}
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const header2 = document.createElement("h2");
header2.innerHTML = "By Kobi"
header2.setAttribute("class","go");
document.body.appendChild(header2);


document.addEventListener('keydown', keyPressed);
function keyPressed(e) 
{

    if (e.code==="ArrowLeft")
    { 
        e.preventDefault();
        moveLeft();
    }
    else if (e.code==="ArrowRight")
    {
        e.preventDefault();
        moveRight();
    }
    else if (e.code==="ArrowUp")
    {
        e.preventDefault();
        moveUp();
    }
    else if (e.code==="ArrowDown")
    {
        e.preventDefault();
        moveDown();
    }
}
