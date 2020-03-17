/*
  Accessibility buttons
  Control buttons for colour theme and font 
  ----------------------------------- */

(function() {
    'use strict';

  // GLOBAL
  var body = document.body;

  
  // FONT
  // If no local storage value exists create one
  if (!fontFamily) {
      body.style.setProperty('font-family', localStorage.getItem('fontFamily'));
  }

  // Get current value
  var fontFamily = getComputedStyle(body).getPropertyValue('font-family');

  // Set buttons
  var dyslexicFont = document.getElementById('dyslexic-font');
  var defaultFont = document.getElementById('default-font');

  // Dyslexic font family
  dyslexicFont.addEventListener('click', function (e) {
    body.style.setProperty('font-family', '"OpenDyslexic", sans-serif');
    defaultFont.classList.remove("button--ally--active");
    dyslexicFont.classList.add("button--ally--active");
    localStorage.setItem("fontFamily", '"OpenDyslexic", sans-serif');
  });

  // Default font family
  defaultFont.addEventListener('click', function (e) {
    body.style.setProperty('font-family', 'Verdana, Geneva, sans-serif');
    dyslexicFont.classList.remove("button--ally--active");
    defaultFont.classList.add("button--ally--active");
    localStorage.setItem("fontFamily", 'Verdana, Geneva, sans-serif');
  });


  // THEME

  // Set buttons
  var themeDefault = document.getElementById('theme-default');
  var themeContrast = document.getElementById('theme-contrast');
  // var themeMonochrome = document.getElementById('theme-monochrome');

  body.className = localStorage.getItem('currentTheme');

  themeDefault.addEventListener('click', function (e) {
    body.className = 'theme-default';
    themeDefault.classList.add("button--ally--active");
    // themeMonochrome.classList.remove("button--ally--active");
    themeContrast.classList.remove("button--ally--active");
    localStorage.setItem("currentTheme", 'theme-default');
  });

  themeContrast.addEventListener('click', function (e) {
    body.className = 'theme-contrast';
    themeContrast.classList.add("button--ally--active");
    // themeMonochrome.classList.remove("button--ally--active");
    themeDefault.classList.remove("button--ally--active");
    localStorage.setItem('currentTheme', 'theme-contrast');
  });

  // themeMonochrome.addEventListener('click', function (e) {
  //   body.className = 'theme-monochrome';
  //   themeMonochrome.classList.add("button--ally--active");
  //   themeContrast.classList.remove("button--ally--active");
  //   themeDefault.classList.remove("button--ally--active");
  //   localStorage.setItem('currentTheme', 'theme-monochrome');
  // });

})();