window.Webflow ||= [];

// Variables globales pour éviter les duplications
let clickListenerAttached = false;
let hoverListenersAttached = false;

// Empêcher la fermeture du dropdown lors du clic sur les onglets
const attachClickListener = () => {
  if (clickListenerAttached) {
    return;
  }

  document.addEventListener("click", (event) => {
    const tabLink = event.target.closest(".navbar_menu-dropdown .w-tab-link");
    if (tabLink) {
      const dropdownToggle = event.target.closest(".w-dropdown");
      if (dropdownToggle) {
        event.stopPropagation();
      }
    }
  });

  clickListenerAttached = true;
};

// Utiliser la délégation d'événements sur le document
const attachHoverListeners = () => {
  if (hoverListenersAttached) {
    return;
  }

  // Délégation pour les dropdown toggles
  document.addEventListener("mouseover", (event) => {
    const toggle = event.target.closest(
      ".navbar_dropdwn-toggle, .navbar_cta-button"
    );
    if (toggle) {
      if (!toggle.classList.contains("w--open")) {
        toggle.click();
      }
    }
  });

  // Délégation pour les tab links
  document.addEventListener("mouseover", (event) => {
    const link = event.target.closest(".nav_dropdown_link");
    if (link) {
      if (!link.classList.contains("w--current")) {
        link.click();
      }
    }
  });

  hoverListenersAttached = true;
};

// Fonction d'initialisation
const init = () => {
  // Vérifier que la navbar existe
  const navbar = document.querySelector("nav");
  if (!navbar) {
    setTimeout(init, 100);
    return;
  }

  attachClickListener();
  attachHoverListeners();
};

// Attacher au chargement initial
window.Webflow.push(init);

// Réattacher après les navigations Webflow (si nécessaire)
window.Webflow.push(() => {
  // Les listeners globaux sont déjà attachés, pas besoin de réattacher
});
