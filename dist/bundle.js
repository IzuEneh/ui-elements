/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxRQUFRO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWktZWxlbWVudHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duJyk7XG5cbmRyb3Bkb3ducy5mb3JFYWNoKChkcm9wZG93bikgPT4ge1xuICBjb25zdCB0b2dnbGUgPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tdG9nZ2xlJyk7XG4gIGNvbnN0IG1lbnUgPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tbWVudScpO1xuXG4gIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpc0hpZGRlbiA9IG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKTtcbiAgICBpZiAoaXNIaWRkZW4pIHtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnMnKTtcbmNvbnN0IHRhYkl0ZW1zID0gdGFicy5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWl0ZW0nKTtcbmxldCBzZWxlY3RlZFRhYiA9IHRhYnMucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG5cbnRhYkl0ZW1zLmZvckVhY2goKHRhYikgPT4ge1xuICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkVGFiID09PSB0YWIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxlY3RlZFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIHNlbGVjdGVkVGFiID0gdGFiO1xuICAgIC8vIGRyYXcgY29udGVudHNcbiAgfSk7XG59KTtcblxubGV0IHNlbGVjdGVkSW5kZXggPSAwO1xuY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwnKTtcbmNvbnN0IHNsaWRlcyA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1zbGlkZScpO1xuY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtZG90cycpO1xubGV0IHNlbGVjdGVkU2xpZGUgPSBzbGlkZXMuaXRlbShzZWxlY3RlZEluZGV4KTtcbmxldCBzZWxlY3RlZERvdCA9IG51bGw7XG5cbmZ1bmN0aW9uIHNldFNlbGVjdGVkKHNsaWRlKSB7XG4gIHNlbGVjdGVkU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtc2xpZGUnKTtcbiAgc2xpZGUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtc2xpZGUnKTtcbiAgc2VsZWN0ZWRTbGlkZSA9IHNsaWRlO1xufVxuXG5mdW5jdGlvbiBzZXREb3QoZG90KSB7XG4gIGNvbnN0IHsgaW5kZXggfSA9IGRvdC5kYXRhc2V0O1xuICBjb25zdCBuZXdTbGlkZSA9IHNsaWRlcy5pdGVtKGluZGV4KTtcbiAgc2V0U2VsZWN0ZWQobmV3U2xpZGUpO1xuXG4gIGlmIChzZWxlY3RlZERvdCAhPSBudWxsKSB7XG4gICAgc2VsZWN0ZWREb3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtZG90Jyk7XG4gIH1cblxuICBkb3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtZG90Jyk7XG4gIHNlbGVjdGVkRG90ID0gZG90O1xufVxuXG5zbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGluZGV4KSA9PiB7XG4gIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb3QuY2xhc3NMaXN0LmFkZCgnbmF2LWRvdCcpO1xuICBkb3QuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICBpZiAoaW5kZXggPT09IDApIHtcbiAgICBzZXREb3QoZG90KTtcbiAgfVxuXG4gIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXREb3QoZG90KTtcbiAgfSk7XG5cbiAgZG90cy5hcHBlbmRDaGlsZChkb3QpO1xufSk7XG5cbmZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcbiAgaWYgKHNlbGVjdGVkSW5kZXggPT09IHNsaWRlcy5sZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2VsZWN0ZWRJbmRleCArPSAxO1xuICBzZXREb3QoZG90cy5jaGlsZE5vZGVzLml0ZW0oc2VsZWN0ZWRJbmRleCkpO1xufVxuXG5mdW5jdGlvbiBwcmV2U2xpZGUoKSB7XG4gIGlmIChzZWxlY3RlZEluZGV4ID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2VsZWN0ZWRJbmRleCAtPSAxO1xuICBzZXREb3QoZG90cy5jaGlsZE5vZGVzLml0ZW0oc2VsZWN0ZWRJbmRleCkpO1xufVxuXG5jb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25leHQtYnV0dG9uJyk7XG5uZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKTtcblxuY29uc3QgcHJldkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrLWJ1dHRvbicpO1xucHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZTbGlkZSk7XG5cbmxldCBuZXh0Q291bnRlciA9IDA7XG5sZXQgYmFja0NvdW50ZXIgPSAwO1xuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICBpZiAobmV4dENvdW50ZXIgPCBzbGlkZXMubGVuZ3RoKSB7XG4gICAgbmV4dENvdW50ZXIgKz0gMTtcbiAgICBuZXh0U2xpZGUoKTtcbiAgfSBlbHNlIGlmIChiYWNrQ291bnRlciA8IHNsaWRlcy5sZW5ndGgpIHtcbiAgICBiYWNrQ291bnRlciArPSAxO1xuICAgIHByZXZTbGlkZSgpO1xuICB9IGVsc2Uge1xuICAgIG5leHRDb3VudGVyID0gMTtcbiAgICBiYWNrQ291bnRlciA9IDA7XG4gICAgbmV4dFNsaWRlKCk7XG4gIH1cbn0sIDUwMDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9