
const brandCarousel = document.getElementById('brandCarousel');
const brandDots = document.querySelectorAll('#brandDots button');
const brandPrev = document.querySelector('.brand-prev');
const brandNext = document.querySelector('.brand-next');

function updateBrandDots() {
  const cards = brandCarousel.querySelectorAll('.brand-card');
  const maxScroll = brandCarousel.scrollWidth - brandCarousel.clientWidth;

  if (maxScroll <= 0) {
    brandDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === 0);
    });
    return;
  }

  const progress = brandCarousel.scrollLeft / maxScroll;
  const activeIndex = Math.round(progress * (brandDots.length - 1));

  brandDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === activeIndex);
  });
}

brandNext.addEventListener('click', () => {
  const card = brandCarousel.querySelector('.brand-card');
  brandCarousel.scrollBy({
    left: card.offsetWidth + 10,
    behavior: 'smooth'
  });
});

brandPrev.addEventListener('click', () => {
  const card = brandCarousel.querySelector('.brand-card');
  brandCarousel.scrollBy({
    left: -(card.offsetWidth + 10),
    behavior: 'smooth'
  });
});

brandCarousel.addEventListener('scroll', updateBrandDots);

brandDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    const maxScroll = brandCarousel.scrollWidth - brandCarousel.clientWidth;
    const target = (index / (brandDots.length - 1)) * maxScroll;

    brandCarousel.scrollTo({
      left: target,
      behavior: 'smooth'
    });
  });
});

window.addEventListener('resize', updateBrandDots);
updateBrandDots();
