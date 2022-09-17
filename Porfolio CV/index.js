document.querySelector(".txt").addEventListener("click",REL);
document.querySelector(".txt1").addEventListener("click",REL);

function REL(){
    document.querySelector(".compet").setAttribute("style","visibility: visible","z-index: 10");
    document.querySelector(".container").setAttribute("style","z-index: 1;");
    document.querySelector(".cmp").setAttribute("style","visibility: hidden");
    document.querySelector(".contact").setAttribute("style","visibility: hidden");
    document.querySelector(".cn").setAttribute("style","visibility: hidden");

}

document.querySelector(".cnt").addEventListener("click",CMP);
document.querySelector(".cnt1").addEventListener("click",CMP);

function CMP(){
    document.querySelector(".compet").setAttribute("style","visibility: visible","z-index: 1");
    document.querySelector(".contact").setAttribute("style","visibility: visible","z-index: 10");
    document.querySelector(".cmp").setAttribute("style","z-index: 2;");
    document.querySelector(".container").setAttribute("style","visibility: hidden","z-index: 3");
    document.querySelector(".cn").setAttribute("style","visibility: hidden");
}

document.querySelector(".acc").addEventListener("click",ACC);
document.querySelector(".acc1").addEventListener("click",ACC);

function ACC(){
    document.querySelector(".compet").setAttribute("style","visibility: visible","z-index: 1");
    document.querySelector(".contact").setAttribute("style","visibility: visible","z-index: 3");
    document.querySelector(".cmp").setAttribute("style","z-index: 2;");
    document.querySelector(".container").setAttribute("style","z-index: 10");
    document.querySelector(".cn").setAttribute("style","visibility: visible");
}