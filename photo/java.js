var menu =document.getElementsByClassName("menu")
var cpt=menu.length
for(i=0; i<menu.length; i++)
{
    menu[i].addEventListener("click",function(){
       this.classList.toggle("menu1")
    })
}

var menubar =document.getElementsByClassName("bah")
menubar.onclick=function()
{
    this.classList.toggle("moi")
}

/*
var afficher=document.getElementById("togglebutton")
var sidebar=document.getElementById("sidebar")
afficher.onclick=function()
{
    afficher.style.background="darkorange";
    sidebar.style.margin="0";
    sidebar.style.transition="0.5s";
    this.classList.toggle("active")
    console.log("vous m'avez cliquer dessus")
}
*/


var btn =document.getElementById("btn")

btn.onclick=function()
{
    var sidemenu=document.getElementById("sidemenu")
    this.classList.toggle("toi")
    //console.log("vous avez cliquer sur moi")
    sidemenu.style.margin="0px";
    sidemenu.style.transition="0.3s";
    btn.style.visibility="hidden";
    btn.style.transition="0.5s";
    if(btn.style.visibility=="hidden")
    {
        console.log("salut");
        var sidemenu1 =document.getElementById("sidemenu");
        sidemenu1.classList.toggle("bahmenu");
    }
}