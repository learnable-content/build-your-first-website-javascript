'use strict';

var AnalyticsCounters = {

  initCounters: function() {
    window.addEventListener('scroll', AnalyticsCounters.objectDetect);
  },

  limits: {
    limit0: 50000,
    limit1: 1032,
    limit2: 5400,
    limit3: 10300
  },

  fireAnimation: {
    animate: false
  },

  startAnimation: function () {

    AnalyticsCounters.fireAnimation.animate = true;

    var factsList         = document.querySelector('.facts-list'),
        info1             = factsList.children[0].childNodes[3],
        info2             = factsList.children[1].childNodes[3],
        info3             = factsList.children[2].childNodes[3],
        info4             = factsList.children[3].childNodes[3],

        count0            = 0,
        count1            = 0,
        count2            = 0,
        count3            = 0;

    setInterval(function(){
      count0            += Math.floor((Math.random() * 100) + 1);
      count1            += Math.floor((Math.random() * 100) + 4);
      count2            += Math.floor((Math.random() * 100) + 10);
      count3            += Math.floor((Math.random() * 100) + 5);
      info1.innerHTML   = count0 < AnalyticsCounters.limits.limit0 ? count0 : AnalyticsCounters.limits.limit0;
      info2.innerHTML   = count1 < AnalyticsCounters.limits.limit1 ? count1 : AnalyticsCounters.limits.limit1;
      info3.innerHTML   = count2 < AnalyticsCounters.limits.limit2 ? count2 : AnalyticsCounters.limits.limit2;
      info4.innerHTML   = count3 < AnalyticsCounters.limits.limit3 ? count3 : AnalyticsCounters.limits.limit3;
    }, .9);

  },

  objectDetect: function() {

    var counterContainer  = document.querySelector('.facts'),
        containerOffset   = counterContainer.offsetTop - counterContainer.offsetHeight;

    if ( containerOffset <= window.pageYOffset && !AnalyticsCounters.fireAnimation.animate) {
      AnalyticsCounters.startAnimation();
    }
  }
};

AnalyticsCounters.initCounters();
