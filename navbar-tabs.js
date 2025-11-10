document.addEventListener("DOMContentLoaded", () => {
  const init = () => {
    // Empêcher la propagation du clic sur les onglets dans le dropdown
    const tabLinks = document.querySelectorAll(
      ".navbar_menu-dropdown .w-tab-link"
    );
    tabLinks.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });

    // Simuler un clic au hover sur les boutons dropdown principaux de la navbar
    const dropdownToggles = document.querySelectorAll(
      ".navbar_dropdwn-toggle, .navbar_cta-button"
    );
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("mouseenter", () => {
        toggle.click();
      });
    });

    // Simuler un clic au hover sur les liens d'onglets dans le dropdown
    const dropdownLinks = document.querySelectorAll(".nav_dropdown_link");
    dropdownLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        link.click();
      });
    });
  };

  init();
  setTimeout(init, 100);
  setTimeout(init, 500);
});
