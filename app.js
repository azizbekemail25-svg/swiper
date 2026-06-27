const slayderlar = document.querySelectorAll('.carousel-slide');

const oldingi = document.getElementById('prevBtn');
const keyingi = document.getElementById('nextBtn');

let raqam = 0;

function korsat(son) {
    if (son >= slayderlar.length) {
        son = 0;
    } else if (son < 0) {
        son = slayderlar.length - 1;
    }

    raqam = son;

        slayderlar.forEach(slayd => slayd.classList.remove('active'));

        slayderlar[raqam].classList.add('active');
}

keyingi.addEventListener('click', () => {
    korsat(raqam + 1);
});

oldingi.addEventListener('click', () => {
    korsat(raqam - 1);
});

const swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
});

swiper.on('slideChange', () => {
    console.log('Slayd o‘zgardi');
});
