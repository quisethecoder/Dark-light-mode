document.getElementById('dmbutton').addEventListener('click', function() {
    const css = document.getElementById('cssfile');
    const dmb = document.getElementById('dmbutton');

    if (dmb.innerHTML == 'Dark Mode') {
        css.setAttribute('href', './css/darkmode.css');
        
        dmb.innerHTML = 'Light Mode'
    }else{ css.setAttribute('href', './css/styles.css');
   
    dmb.innerHTML = 'Dark Mode'
    }

    // document.getElementsByClassName("heading").innerHTML = "Bring Back The Lights";
    // document.getElementsByClassName("heading").innerHTML = "This is a test";

    
});


// Fix how to keep css the same when changing text with javascript