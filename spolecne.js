const burger = document.querySelector('#menu-tlacitko')

burger.addEventListener('click', () => {
    const burgerPolozka = document.querySelector('#menu-polozky')
    burgerPolozka.classList.toggle('show')

    const icko = document.querySelector('.fas')
    if (burgerPolozka.classList.contains('show')){
       
        icko.classList.remove('fa-bars')
        icko.classList.add('fa-xmark')

    } else { 
        icko.classList.add('fa-bars')
        icko.classList.remove('fa-xmark')
    }
})

