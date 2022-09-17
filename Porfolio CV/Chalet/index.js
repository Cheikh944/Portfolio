window.onload = function ()
{
    var imgs = ["Image/arde.jpg","Image/arde1.jpg"],
        image = document.getElementById("illustr"),
        index = 0;
    function hop ()
    {
        image.src= imgs[(index++)%imgs.length];
    };
    cool = setInterval(hop,3000);
    // pour arreter mettre clearInterval(cool); quelque part
};


document.querySelector(".men").addEventListener("mouseover",Ouvmenu);

function Ouvmenu(){
    document.querySelector(".navim").setAttribute("style","visibility: visible;");
}
document.querySelector(".men").addEventListener("mouseout", Not);

function Not(){
    document.querySelector(".navim").setAttribute("style","");
}
