document.getElementById('dmbutton').addEventListener('click', function() {
    const css = document.getElementById('cssfile');
    const dmb = document.getElementById('dmbutton');

    if (dmb.innerHTML == 'Dark Mode') {
        css.setAttribute('href', './css/darkmode.css');
        dmb.innerHTML = 'Light Mode'
    }else{ css.setAttribute('href', './css/styles.css');
    dmb.innerHTML = 'Dark Mode'

    }

});