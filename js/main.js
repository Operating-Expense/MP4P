function toggleLang(el) {
    var element = el.getElementsByClassName('lang-bar__lang-dropdown');

    if (element[0].classList.contains("lang-bar__lang-dropdown--show")) {
        element[0].classList.remove("animate-opacity");
        setTimeout(function () {
            element[0].classList.remove("lang-bar__lang-dropdown--show");
        }, 200)
    } else {
        element[0].classList.add("lang-bar__lang-dropdown--show");
        setTimeout(function () {
            element[0].classList.add("animate-opacity");
        }, 200)
    }
}

function toggleLang2(el) {
    for (i = 0; i < el.children.length; i++) {
        if (el.children[i].classList.contains('lang-bar__lang-dropdown--hide')) {}
    }
}

function descToggle(id) {
    var blockToToggle = document.getElementById(id);
    if (blockToToggle.classList.contains("hide")) {
        blockToToggle.classList.remove("hide");
        event.target.innerText = "Close description";
        event.target.classList.add("black-bg");
    } else {
        blockToToggle.classList.add("hide");
        event.target.innerText = "Show full description";
        event.target.classList.remove("black-bg");
    }

}

function toggleSort(e) {
    for (i = 0; i < e.children.length; i++) {
        if (e.children[i].classList.contains('sort__dropdown')) {
            if (e.children[i].classList.contains('hide')) {
                e.children[i].classList.remove('hide')
            } else {
                e.children[i].classList.add('hide')
            }
        }
    }
}

function toggleSub(sub) {
    var element = document.getElementById(sub);

    var containsCl = element.classList.contains('dropdown--show');

    if (containsCl) {
        element.classList.toggle("animate-opacity");
        setTimeout(() => {
            element.classList.toggle("dropdown--show");
        }, 1000)
    } else {
        element.classList.toggle("dropdown--show");
        setTimeout(() => {
            element.classList.toggle("animate-opacity");
        }, 100)
    }
}

function toggleMobCat(sub) {
    var element = document.getElementById(sub);

    var containsCl = element.classList.contains('dropdown--hide');

    if (containsCl) {
        element.classList.remove('dropdown--hide');
        setTimeout(function () {
            element.classList.add('animate-opacity');
        }, 100)
    } else {
        element.classList.remove('animate-opacity');
        setTimeout(function () {
            element.classList.add('dropdown--hide');
        }, 1000)
    }
}

window.onscroll = function () {
    var r = document.querySelector('#header');

    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 0) {
        if (window.innerWidth <= 320) {
            r.nextElementSibling.style.cssText = 'padding-top: 70px';
        }
        document.getElementById('header').classList.add('header--onscroll');
        document.getElementById('header').classList.remove('header--fixed');
    } else {
        if (window.innerWidth <= 320) {
            r.nextElementSibling.style.cssText = '';
        }
        document.getElementById('header').classList.remove('header--onscroll');
        document.body.style.cssText = "";
        document.getElementById('header').classList.add('header--fixed');
    }
}

function openTab(e) {
    var r = e.parentNode;
    for (i = 0; i < r.children.length; i++) {
        r.children[i].classList.remove("top-lists__titles-tab--active");
    }
    document.getElementById(e.id).classList.add("top-lists__titles-tab--active");

    var tabs = document.querySelectorAll("[id*='-cattab']")

    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.add('hide');
    }
    var tabToOpen = e.id + "-cattab";

    document.getElementById(tabToOpen).classList.add('opacity');
    document.getElementById(tabToOpen).classList.remove('hide');
    setTimeout(function () {
        document.getElementById(tabToOpen).classList.remove('opacity');
    }, 100)
}
$(document).ready(function () {
    $('.slider__slides').slick({
        infinity: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.slider__nav-left'),
        nextArrow: $('.slider__nav-right'),
    });

    $('#prod1').slick({
        infinity: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('#prod1-left'),
        nextArrow: $('#prod1-right'),
    });
    //if (w > 320){
    $('#prod2').slick({
        infinity: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('#prod2-left'),
        nextArrow: $('#prod2-right'),
    });
    // }
});



function showImage(imgPath) {
    var curImage = document.getElementById('currentImg');
    curImage.src = imgPath;
}


if (document.cookie.length > 1) {

    const cook = document.cookie.split(';');
    for (i = 0; i < cook.length; i++) {
        if (cook[i].trim() == 'name=CookieAccepted') {
            break
        } else {
            new setCookies();
        }
    }
}

document.cookie == '' ? new setCookies() : false;
function setCookies() {
    document.querySelector('.notification').classList.remove('hide');

    document.getElementById('accept-cookie').addEventListener('click', () => {
        const date = new Date(new Date().getTime());

        const name = 'name=CookieAccepted';
        const path = 'path:/';
        const expDate = 'expires=' + date.setDate(date.getDate() + 360);
        const domain = 'domain=' + window.location.hostname;

        document.cookie = name;
        document.cookie = path;
        document.cookie = expDate;
        document.cookie = domain;

        document.querySelector('.notification').classList.add('hide');
    });
}

//------Form Validation--------
function formToValidate(formId) {
    const form = document.getElementById(formId);

    !form ? false : form.addEventListener("submit", validateForm);

    function validateForm(event) {
        event.preventDefault();

        const formInputs = form.getElementsByTagName("input");

        for (i = 0; i <= formInputs.length; i++) {

            formInput = formInputs[i];

            if (formInput != undefined && formInput.getAttribute("name") == "email") {
                emailValidation(formInput.value);
            }
            if (formInput != undefined && formInput.getAttribute("name") == "name") {
                nameValidation(formInput.value);
            }
            if (formInput != undefined && formInput.getAttribute("name") == "title") {
                notEmpty(formInput.value);
            }
        };

        function emailValidation(email) {
            const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            const emailValid = emailRegExp.test(email);
            email !== null && emailValid ? valid() : error("wrong email");
        };

        function nameValidation(name) {
            const nameRegExp = /^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,25}$/gi;
            const nameValid = nameRegExp.test(name);
            name !== null && nameValid ? valid() : error("wrong name");

        };

        function notEmpty(string) {
            string.length > 4 ? valid() : error("Too short")
        };

        function valid() {
            let errors = '';
            let errors = formInput.getAttribute("name") + '-error';

            if (this.formInput.classList.contains('error')) {
                this.formInput.classList.remove('error');
                if (this.formInput.nextElementSibling.classList.contains('error-tip')) {
                    this.formInput.nextElementSibling.remove();
                }
            }
        };

        function error(errorText) {
            if (!this.formInput.classList.contains('error')) {
                this.formInput.classList.add('error');

                let errorElem = document.createElement('div');
                errorElem.className = "error-tip";
                errorElem.innerHTML = errorText;

                this.formInput.parentNode.insertBefore(errorElem, this.formInput.nextSibling);
            }
        };
    };
};

function sendData(formDataToSend) {
    form = document.getElementById(formDataToSend);

    !form ? console.log('form not exist') : form.addEventListener('submit', sendData);

    function sendData(event) {
        event.preventDefault();

        const input = form.getElementsByTagName('input');

        for (i = 0; i <= input.length; i++) {
            if (input[i] != undefined && input[i].value != '') {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'sendMail.php', true);
                xhr.send('name=llllll');


            } else {
                console.log('error')
            }
        }
    }
}
new sendData('helpform');

function tabSelected(tabs, tabsBlock) {

    const tabsSelect = document.querySelector(tabs);
    const tabsToSelect = document.querySelector(tabsBlock);

    !tabsSelect ? false : tabsSelect.addEventListener('click', chooseTab);

    function chooseTab() {
        for (i = 0; i < tabsSelect.children.length; i++) {
            if (tabsSelect.children[i].classList.value == 'none') {
                continue;
            }
            if (event.target == tabsSelect.children[i]) {
                tabsSelect.children[i].classList.add('active');
                tabsToSelect.children[i].classList.remove('hide');
            } else {
                tabsSelect.children[i].classList.remove('active');
                tabsToSelect.children[i].classList.add('hide');
            }
        }
    }
}

const productTabs = new tabSelected(".product-overview__tabs-header", ".products-overview__tabs");

function ratingStars(ratingBlock) {
    const rating = document.getElementById(ratingBlock);
    rating ? rating.addEventListener('click', setRating) : console.log('rating not exist');
}

function setRating(e) {
    if (e.target != e.currentTarget) {

        const starsCount = e.target.parentNode.children;

        for (i = 0; i < starsCount.length; i++) {

            starsCount[i].classList.remove('star');

            if (e.target == starsCount[i]) {
                var stars = i;
                e.currentTarget.setAttribute("data-rating",stars+1)
            }
        }

        new doAction(stars);

        function doAction(num) {
            for (i = 0; i <= num; i++) {
                starsCount[i].classList.add('star');
            }
        }
    }
}


new ratingStars('rating-stars');


document.querySelector('.show-all-results__close').addEventListener('click',(e)=>{
    e.currentTarget.parentNode.classList.add('hide');
});
document.querySelector('#show-all-results').addEventListener('click',showAllResults);

function showAllResults(e){
    const showBlock = e.target.nextElementSibling;
    showBlock.classList.contains('hide') ? showBlock.classList.remove('hide') : showBlock.classList.add('hide');
}