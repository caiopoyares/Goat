const UI = (() => {
  return {
    showMobileNavbar: () => {
      document.querySelector('body').classList.add('active');
    },
    closeMobileNavbar: () => {
      document.querySelector('body').classList.remove('active');
    }
  }
})();

const controller = ((ui) => {
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

controller.init();