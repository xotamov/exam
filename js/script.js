let modal = document.querySelector('.modal')
let modal__dialog = document.querySelector('.modal__dialog')
let modal__close = document.querySelectorAll('[data-close]')
let btnOpen = document.querySelectorAll('[data-modal]')


btnOpen.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = 'block'
        modal__dialog.style.display = 'block'
        
    }
})

modal__close.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = 'none'
        modal__dialog.style.display = 'none'
    }
})


let patterns = {
    text: /^[a-z ,.'-]+$/i,
    phone: /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/,
  };
  let inps = document.querySelectorAll(".modal__input");
  
  inps.forEach((inp) => {
    let names = inp.getAttribute("type");
    inp.onkeyup = () => {
      let pattern = patterns[names];
      if (pattern.test(inp.value) === false) {
        inp.style.border = "1px solid red";
      } else {
        inp.style.border = "1px solid green";
      }

    };
  });
let form = document.forms[0]

form.onsubmit = (event) => {
    event.preventDefault();
    inps.forEach((inp) => {
      if (
        (inp.value.length === 0 && inp.style.border === "1px solid red") ||
        (inp.value.length > 1 && inp.style.border === "1px solid red")
      ) {
        error = true;
      } else if (inp.value.length > 1 && inp.style.border === "1px solid green") {
        error = false;
      }
    });
  
    if (error) {
    } else {
      submit();
    }
};

function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}

let tab_contents = document.querySelectorAll(".tabcontent") 
let bagrounde = document.querySelectorAll(".tabheader__item") 
 
tab_contents.forEach(cont => cont.classList.add("hide")) 
tab_contents[0].classList.remove("hide") 
 
bagrounde.forEach((btn, ind) => { 
    btn.onclick = () => { 
        bagrounde.forEach(event => event.classList.remove("tabheader__item_active")) 
        btn.classList.add("tabheader__item_active") 
 
        tab_contents.forEach(e => e.classList.add("hide")) 
        tab_contents[ind].classList.remove("hide") 
    } 
})


