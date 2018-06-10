$(function () {


  //smooth scroll
  var $window = $(window);
  var scrollTime = 1.2;
  var scrollDistance = 170;

  $window.on("mousewheel DOMMouseScroll", function (event) {

    event.preventDefault();

    var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta * scrollDistance);

    TweenMax.to($window, scrollTime, {
      scrollTo: {y: finalScroll, autoKill: true},
      ease: Power1.easeOut,
      overwrite: 5
    });

  });


// GreenSock Animation


  // Photo header animation
  var animationBg = document.querySelector('.photo-block');
  var animationText = document.querySelector('.side-text-block');


  var tl = new TimelineMax;

  tl.to(animationBg, 1.5, {
    clipPath: 'inset(0% 0% 0% 0%)',
    ease: Back.easeOut.config(-3)
  })
    .to(animationText, 1.5, {
      clipPath: 'inset(0% 0% 0% 0%)',
      ease: Back.easeOut.config(-3)
    }, '-=1.3');

  // Background page animation
  var animationSlide = new TweenMax.to('#slide01', 0.5, {
    opacity: 0,
    ease: Linear.easeNone
  });

  var animationSlideTwo = new TweenMax.to('#slide02', 0.5, {
    opacity: 0,
    ease: Linear.easeNone
  });


// ScrollMagic

  var controller = new ScrollMagic.Controller();

  // Scene 1 - pin the second section
  var pinScene01 = new ScrollMagic.Scene({
      triggerElement: '#slide01',
      triggerHook: 0,
      duration: '100%'
    })
      .setTween(animationSlide)
      .setPin('#slide01')
      // .addIndicators()

      .addTo(controller)
  ;


  var pinScene02 = new ScrollMagic.Scene({
      triggerElement: '#slide02',
      triggerHook: 0,
      duration: '200%'
    })
      .setTween(animationSlideTwo)
      .setPin('#slide02')
      // .addIndicators()
      .addTo(controller)
  ;

  var pinScene03 = new ScrollMagic.Scene({
      triggerElement: '#slide02',
      triggerHook: 0,
      duration: 0
    })
      .setPin('#slide03', {pushFollowers: false})
      .addTo(controller)
  ;

  // Item scroll animation up

  var imgScene1 = new ScrollMagic.Scene({
      triggerElement: '.img__item-1',
      // triggerHook: 0,
      offset: -47,
      duration: 500
    })
      .setTween('.img__item-1', 0.5, {
        y: "-300%",
        ease: Linear.easeNone
      })
      .setPin('.img__item-1')
      // .addIndicators()
      .addTo(controller)
  ;


  var imgScene2 = new ScrollMagic.Scene({
      triggerElement: '.img__item-2',
      // triggerHook: 0,
      offset: -50,
      duration: 500
    })
      .setTween('.img__item-2', 0.5, {
        y: "-210%",
        ease: Linear.easeNone
      })
      .setPin('.img__item-2')
      // .addIndicators()
      .addTo(controller)
  ;


  // Animation column 3 - image borders scene

  var bgColor = "#7e96b5",
    easing = Power0.easeNone;


  var borderAnim = new TimelineLite()
    .add(TweenMax.fromTo('#top-side', 1,
      {
        width: 0,
        background: bgColor,
        ease: easing
      },
      {
        width: '100%',
        background: bgColor
      }))
    .add(TweenMax.fromTo('#right-side', 1,
      {
        height: 0,
        background: bgColor,
        ease: easing
      },
      {
        height: '100%',
        background: bgColor
      }, ('-=1')))

    .add(TweenMax.fromTo('#bottom-side', 1,
      {
        width: 0,
        background: bgColor,
        ease: easing
      },
      {
        width: '100%',
        background: bgColor
      }, ('-=1')))

    .add(TweenMax.fromTo('#left-side', 1,
      {
        height: 0,
        background: bgColor,
        ease: easing
      },
      {
        height: '100%',
        background: bgColor
      }, ('-=1')));


  var scrollBordersScene = new ScrollMagic.Scene({
      triggerElement: '#square',
      offset: -350,
      tweenChanges: true
    })
      .setTween(borderAnim)
      // .addIndicators({name: 'border - no duratuion'})
      .addTo(controller)
  ;


  // Animation text up to down
  var animScrollText = new TweenMax.to('.title-anim-js', 0.5, {
    y: '-70%',
    ease: Linear.easeNone
  });

  var scrollTextScene = new ScrollMagic.Scene({
      triggerElement: '.title-anim-js',
      triggerHook: 1,
      offset: 0,
      duration: 1000
    })
      .setTween(animScrollText)
      .setPin('.title-anim-js')
      // .addIndicators()
      .addTo(controller)
  ;


});

