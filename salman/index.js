var navbar = document.getElementById("nav");

window.onscroll = function(){
    if(window.pageYOffset >= 60)
    {
        navbar.classList.add("sticky");

    }
    else{
        navbar.classList.remove("sticky");
    };
};
