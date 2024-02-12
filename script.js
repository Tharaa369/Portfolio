let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-content");

function openTab(el,tab) {
    tabLinks.forEach(link=>{
        link.classList.remove('active-link');
    });
    tabContents.forEach(content=>{
        content.classList.remove('active-content');
    });

    el.classList.add('active-link');
    document.getElementById(tab).classList.add('active-content');
}

let sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right="0"
}

function closeMenu() {
    sideMenu.style.right="-200px"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxxEyDaawuQqjTj72it1uL-O_Pd51kIg-aJWvuNEOPE-u9JzcQZXkxNEX088u6JhKpHKQ/exec';
const form = document.forms['submit-to-google-sheet'];
let msg=document.getElementById("sucess");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message Has Been Sent";
        setTimeout(function(){
            msg.innerHTML="";
        },5000);
        form.reset();
    })
    .catch(error => {
        msg.innerHTML="Message Hasn't Been Sent";
        setTimeout(function(){
            msg.innerHTML="";
        },5000);
    })
})