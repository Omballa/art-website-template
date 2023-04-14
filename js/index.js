function handleMobileNav(){

    let width = window.innerWidth;
    var x = document.getElementById("mobileNav");

    if(width < 769){    
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }else{
        
    }
}