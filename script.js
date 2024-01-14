
// menu mobile
function menuShow(){
    let menuMobile = document.querySelector('.cabecalho__menu__itens');
   
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open')
    }
}





// carrossel
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 4,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },   

  });





// evento menu desktop

const menu = document.querySelector('.cabecalho__menu__itens');

const itensMenu = menu.querySelectorAll('.cabecalho__menu__itens__item');

itensMenu.forEach((item) => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth'});
        }

    });
});


// menu fixo e fosco na rolagem - desktop

window.onscroll = function() {
    var cabecalho = document.getElementById('header');

    //Adiciona a classe 'fosco' ao cabeçalho quando o scroll atingir 50 pixels

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        cabecalho.classList.add('fosco');
    } else {
        cabecalho.classList.remove('fosco');
    }

    if (document.body.scrollTop === 0 && document.documentElement.scrollTop ===0){
        cabecalho.classList.remove('fosco');
    }

}