const UI = (function () {
  const DOMStrings = {
    mobileNavbar: document.querySelector('.mobile-button')
  }

  return {
    showMobileNavbar: function() {
      document.querySelector('body').classList.add('active');
    },
    closeMobileNavbar: function() {
      document.querySelector('body').classList.remove('active');
    }
  }
})();

const controller = (function (ui) {

  const loadEventListeners = () => {
    document.querySelector('.mobile-button').addEventListener('click', ui.showMobileNavbar);
    document.querySelector('.close-menu-btn').addEventListener('click', ui.closeMobileNavbar);
  }

  return {
    init: function () {
      loadEventListeners();
    }
  }
})(UI);

controller.init()
