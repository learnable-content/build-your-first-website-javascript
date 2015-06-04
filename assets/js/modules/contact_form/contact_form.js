'use strict';

var ContactForm = {

  // default options cache
  options: {
    formOpen: false,
    isValid: false
  },

  // initialize form which holds events
  initForm: function () {
    document.querySelector('.header__nav-contact').addEventListener('click', ContactForm.formHandler);
  },

  open: function () {
    // add window overlay
    var overlay     = document.createElement('div'),
        dialog      = document.createElement('div'),
        closeButton = document.createElement('button'),
        contactForm = document.querySelector('.js-form');

    // add class names
    overlay.className     = 'window__overlay--dark';
    dialog.className      = 'dialog__screen';
    closeButton.className = 'close-dialog';
    closeButton.innerHTML = 'x';
    contactForm.className = 'js-form';

    // add elements to document
    document.body.appendChild(overlay);
    document.body.appendChild(dialog);
    dialog.appendChild(closeButton);
    dialog.appendChild(contactForm);

    // attach event handlers
    document.querySelector('.close-dialog').addEventListener('click', ContactForm.formHandler);
    document.querySelector('.js-submit').addEventListener('click', ContactForm.submit);

    // update form state
    ContactForm.options.formOpen = true;
  },

  // close the form
  close: function () {
    var overlay      = document.querySelector('.window__overlay--dark'),
        form         = document.querySelector('.js-form'),
        dialogScreen = document.querySelector('.dialog__screen');

    //reset classes
    document.body.appendChild(form);
    document.body.removeChild(dialogScreen);
    document.body.removeChild(overlay);
    form.className = 'js-form is-hidden';

    // update form state
    ContactForm.options.formOpen = false;
  },

  // form handler which controls if the form should appear
  formHandler: function () {
    if (ContactForm.options.formOpen) {
      ContactForm.close();
    } else {
      ContactForm.open();
    }
  },

  submit: function(e) {
    var messageContainer = document.createElement('p'),
        dialog           = document.querySelector('.dialog__screen'),
        formWrapper      = document.querySelector('.js-form'),
        form             = document.querySelector('.contact-form');

    if (form.checkValidity()) {
      /* submit the form */
      messageContainer.innerHTML = 'Thank you for your message, we will get back to you shortly.';
      dialog.appendChild(messageContainer);
      formWrapper.className = 'js-form is-hidden';
      ContactForm.options.isValid = true;

      e.preventDefault();

    } else {
      ContactForm.options.isValid = false;
      return false;
    }

  }

};

ContactForm.initForm();