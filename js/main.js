function toggleLang(el){
    var element = el.getElementsByClassName('lang-bar__lang-dropdown');

    if(element[0].classList.contains("lang-bar__lang-dropdown--show")){
        element[0].classList.remove("animate-opacity");
        setTimeout(function() {
            element[0].classList.remove("lang-bar__lang-dropdown--show");
        }, 200) 
    }else{
        element[0].classList.add("lang-bar__lang-dropdown--show");
        setTimeout(function() {
            element[0].classList.add("animate-opacity");
        }, 200) 
    }
    
}

function toggleSub(sub){
    var element = document.getElementById(sub);

    var containsCl = element.classList.contains('dropdown--show');

    if(containsCl) {
        element.classList.toggle("animate-opacity");
        setTimeout(function() {
            element.classList.toggle("dropdown--show");
        }, 1000) 
    } else {
        element.classList.toggle("dropdown--show");
        setTimeout(function() {
            element.classList.toggle("animate-opacity");
        }, 100) 
    }
}

function slideRight(id){
    var e = document.getElementById(id);
    e.style.marginLeft = "-1900px";
    console.log(e.style.marginLeft);
}
