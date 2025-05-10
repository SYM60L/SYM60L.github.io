filterSelect("all");
function filterSelect(c){
    var x, xf;

    x = document.getElementsByClassName("BlogEntry"); //raw blog

    for(let i = 0; i < x.length; i++){
        x[i].style.display = "block";
    }

    xf = Array.from(x).filter(el => !el.classList.contains(c)); //foltered blog

    for(let i = 0; i < xf.length; i++){
        xf[i].style.display = "none";
    }
}