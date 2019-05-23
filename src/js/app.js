const UI = (() => {
  return {
    showMobileNavbar: () => {
      document.querySelector('.sidebar-menu').classList.add('active');
    },
    closeMobileNavbar: () => {
      document.querySelector('.sidebar-menu').classList.remove('active');
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
