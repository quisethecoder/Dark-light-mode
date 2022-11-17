document.getElementById("dmbutton").addEventListener("click", function() {
    const css = document.getElementById("cssfile");
    const dmb = document.getElementById("dmbutton");

    if (dmb.innerHTML == "Dark Mode") {
        css.setAttribute("href", "./css/darkmode.css");

        document.getElementById("js").innerHTML = "Bring Back The Lights";
        
        dmb.innerHTML = "Light Mode"
    }else{ css.setAttribute("href", "./css/styles.css");

    document.getElementById("js").innerHTML = "This is a test";
   
    dmb.innerHTML = "Dark Mode"
    }

    
  

    
});


// Fix how to keep css the same when changing text with javascript