const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector('.dropdown-toggle');
  const menu = dropdown.querySelector('.dropdown-menu');

  toggle.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });
});

const tabs = document.querySelector('.tabs');
const tabItems = tabs.querySelectorAll('.tab-item');
let selectedTab = tabs.querySelector('.selected');

tabItems.forEach((tab) => {
  tab.addEventListener('click', () => {
    if (selectedTab === tab) {
      return;
    }

    selectedTab.classList.remove('selected');
    tab.classList.add('selected');
    selectedTab = tab;
    // draw contents
  });
});

let selectedIndex = 0;
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.carousel-slide');
const dots = document.querySelector('.nav-dots');
let selectedSlide = slides.item(selectedIndex);
let selectedDot = null;

function setSelected(slide) {
  selectedSlide.classList.remove('selected-slide');
  slide.classList.add('selected-slide');
  selectedSlide = slide;
}

function setDot(dot) {
  const { index } = dot.dataset;
  const newSlide = slides.item(index);
  setSelected(newSlide);

  if (selectedDot != null) {
    selectedDot.classList.remove('selected-dot');
  }

  dot.classList.add('selected-dot');
  selectedDot = dot;
}

slides.forEach((slide, index) => {
  const dot = document.createElement('div');
  dot.classList.add('nav-dot');
  dot.dataset.index = index;
  if (index === 0) {
    setDot(dot);
  }

  dot.addEventListener('click', () => {
    setDot(dot);
  });

  dots.appendChild(dot);
});

function nextSlide() {
  if (selectedIndex === slides.length - 1) {
    return;
  }

  selectedIndex += 1;
  setDot(dots.childNodes.item(selectedIndex));
}

function prevSlide() {
  if (selectedIndex === 0) {
    return;
  }

  selectedIndex -= 1;
  setDot(dots.childNodes.item(selectedIndex));
}

const nextButton = document.querySelector('#next-button');
nextButton.addEventListener('click', nextSlide);

const prevButton = document.querySelector('#back-button');
prevButton.addEventListener('click', prevSlide);

let nextCounter = 0;
let backCounter = 0;
setInterval(() => {
  if (nextCounter < slides.length) {
    nextCounter += 1;
    nextSlide();
  } else if (backCounter < slides.length) {
    backCounter += 1;
    prevSlide();
  } else {
    nextCounter = 1;
    backCounter = 0;
    nextSlide();
  }
}, 5000);
