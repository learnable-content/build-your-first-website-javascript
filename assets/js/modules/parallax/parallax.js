'use strict';

var ParallaxScroll = {

  initParallax: function() {

    window.addEventListener('resize', this.featureOffset);
    window.addEventListener('scroll', this.fixedImage);

    this.fixedImage();
    this.featureOffset();
  },

  featureOffset: function () {
    var hero    = document.querySelector('.row--banner'),
        feature = hero.nextElementSibling;

    if (!window.matchMedia("(min-width: 38em)").matches) {
      feature.style.marginTop = '20em';
    } else {
      feature.style.marginTop = '30em';
    }
  },

  fixedImage: function () {
    var hero       = document.querySelector('.row--banner');
    hero.className = 'row--banner fixed';

    //effect
    if (window.pageYOffset <= 600 ) {
      hero.setAttribute('style',
      'background-position-y:' + window.pageYOffset / 40 + 'px;' +
      '-webkit-filter: blur(' + window.pageYOffset / 250 + 'px)'
      );
    }
  }

};

ParallaxScroll.initParallax();

