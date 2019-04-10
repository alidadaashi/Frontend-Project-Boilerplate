/* eslint-env browser */
(function() {
  'use strict';
  /**
   * Add Active Class
   */
  function initializeNavigation() {
    var navItems = document.querySelectorAll('.js-nav');

    Array.prototype.forEach.call(navItems, function($btn) {
      $btn.addEventListener('click', handler, false);
    });

    /**
     *  Find active class
     *  @param {event} event active class
     */
    function handler(event) {
      event.preventDefault();
      // Reset - Remove active classes first, from all objects
      Array.prototype.forEach.call(navItems, function($btn) {
        $btn.classList.remove('active');
      });

      // Active
      event.currentTarget.classList.add('active');
    }
  }

  /**
   * Stop an iframe or HTML5 <video> from playing
   * @param  {Element} element The element that contains the video
   */
  var stopVideo = function(element) {
    var iframe = element.querySelector('iframe');
    var video = element.querySelector('video');
    if (iframe) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
    if (video) {
      video.stop();
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    var $content = document.getElementById('main');
    var $successModal = document.getElementById('succes-modal');
    var $videoModal = document.getElementById('video-modal');
    var successModal = new window.A11yDialog($successModal, $content);
    var videoModal = new window.A11yDialog($videoModal, $content);
    var $QuestionForm = document.getElementById('question-form');
    successModal.on('show', function(dialogEl) {
      dialogEl.classList.add('is-show');
    });
    successModal.on('hide', function(dialogEl) {
      dialogEl.classList.remove('is-show');
    });
    videoModal.on('show', function(dialogEl) {
      dialogEl.classList.add('is-show');
    });
    videoModal.on('hide', function(dialogEl) {
      dialogEl.classList.remove('is-show');
      stopVideo(document.body);
    });
    const observer = window.lozad();
    observer.observe();
    $QuestionForm.addEventListener('submit', function(event) {
      event.preventDefault();

      var FD = new FormData($QuestionForm);

      // you can send this data to your server with ajax.
      // https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript#Using_FormData_bound_to_a_form_element
      console.log(FD.get('email'));
      successModal.show();
    });

    initializeNavigation();
    const header = document.querySelector('.js-header');
    const mainsection = document.querySelector('.js-main');
    /**
     * stickyNavigation function
     */
    function stickyNavigation() {
      const viewportWidth = window.innerWidth ||
      document.documentElement.clientWidth;
      if (viewportWidth >= 980) {
        if (window.scrollY >= 130) {
          header.classList.add('js-fixed-nav');
          mainsection.style.margin = '122.28px 0 0 0';
          if (window.scrollY >= 132) {
            document.body.classList.add('js-fixed-animate');
          }
        } else {
          document.body.classList.remove('js-fixed-animate');
          header.classList.remove('js-fixed-nav');
          mainsection.style.margin = '0 0 0 0';
        }
      } else if (viewportWidth <= 979) {
        if (window.scrollY >= 163) {
          header.classList.add('js-fixed-nav');
          mainsection.style.margin = '162.28px 0 0 0';
          if (window.scrollY >= 166) {
            document.body.classList.add('js-fixed-animate');
          }
        } else {
          document.body.classList.remove('js-fixed-animate');
          header.classList.remove('js-fixed-nav');
          mainsection.style.margin = '0 0 0 0';
        }
      }
    }
    window.addEventListener('scroll', stickyNavigation);
    // Your custom JavaScript goes here
  });
})();
