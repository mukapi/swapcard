window.Webflow ||= [];

// Variables globales
let tabsReorganized = false;
let clickHandlersAttached = false;

// Réorganiser les tabs pour mobile/tablette
const reorganizeTabs = () => {
  if (tabsReorganized) {
    return;
  }

  const container = document.querySelector(".nav_dropdown_tabs");
  if (!container) {
    return;
  }

  const menu = container.querySelector(".nav_dropdown_menu");
  const content = container.querySelector(".nav_dropdown_content");
  const links = Array.from(container.querySelectorAll(".nav_dropdown_link"));
  const panes = Array.from(container.querySelectorAll(".nav_dropdown_pane"));

  if (!menu || !content || links.length === 0 || panes.length === 0) {
    return;
  }

  // Créer le mapping link -> pane
  const linkPaneMap = new Map();
  links.forEach((link) => {
    const dataWTab = link.getAttribute("data-w-tab");
    const pane = panes.find((p) => p.getAttribute("data-w-tab") === dataWTab);
    if (pane) {
      linkPaneMap.set(link, pane);
    }
  });

  // Déplacer les panes dans le menu après leurs links
  linkPaneMap.forEach((pane, link) => {
    // Vérifier si déjà bien placé
    if (pane.parentElement === menu && pane.previousElementSibling === link) {
      return;
    }

    // Déplacer le pane juste après le link
    if (link.nextSibling) {
      menu.insertBefore(pane, link.nextSibling);
    } else {
      menu.appendChild(pane);
    }
  });

  // Gérer les clics manuellement pour remplacer Webflow sur mobile
  // Créer un nouveau mapping avec les panes (qui ne changent pas)
  const newLinkPaneMap = new Map();
  links.forEach((link) => {
    const dataWTab = link.getAttribute("data-w-tab");
    const pane = linkPaneMap.get(link);
    if (pane) {
      newLinkPaneMap.set(dataWTab, pane);
    }
  });

  // Retirer les anciens handlers en clonant les links
  links.forEach((link) => {
    const newLink = link.cloneNode(true);
    link.parentNode.replaceChild(newLink, link);
  });

  // Récupérer les nouveaux links après clonage
  const newLinks = Array.from(container.querySelectorAll(".nav_dropdown_link"));

  newLinks.forEach((link) => {
    const dataWTab = link.getAttribute("data-w-tab");
    const pane = newLinkPaneMap.get(dataWTab);

    if (!pane) return;

    // Sauvegarder le href original
    const originalHref = link.getAttribute("href");
    if (originalHref) {
      link.dataset.originalHref = originalHref;
    }

    // Retirer le href pour éviter la navigation
    link.removeAttribute("href");
    link.style.cursor = "pointer";

    link.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        // Vérifier si ce tab est déjà actif (comportement accordéon)
        const isActive = link.classList.contains("w--current");

        // Retirer w--current de tous les links
        newLinks.forEach((l) => {
          l.classList.remove("w--current");
          l.setAttribute("aria-selected", "false");
          l.setAttribute("tabindex", "-1");
        });

        // Masquer tous les panes
        panes.forEach((p) => {
          p.classList.remove("w--tab-active");
          p.style.display = "none";
        });

        // Si le tab n'était pas actif, l'ouvrir (comportement accordéon)
        if (!isActive) {
          link.classList.add("w--current");
          link.setAttribute("aria-selected", "true");
          link.setAttribute("tabindex", "0");

          // Afficher le pane correspondant
          if (pane) {
            pane.classList.add("w--tab-active");
            pane.style.display = "block";
          }
        }
      },
      true // Use capture phase
    );
  });

  // Initialiser : aucun tab sélectionné par défaut sur mobile
  const currentLinks = Array.from(
    container.querySelectorAll(".nav_dropdown_link")
  );

  // Masquer tous les panes
  panes.forEach((p) => {
    p.classList.remove("w--tab-active");
    p.style.display = "none";
  });

  // Désactiver tous les links
  currentLinks.forEach((l) => {
    l.classList.remove("w--current");
    l.setAttribute("aria-selected", "false");
    l.setAttribute("tabindex", "-1");
  });

  tabsReorganized = true;
};

// Restaurer la structure originale pour desktop
const restoreTabs = () => {
  const container = document.querySelector(".nav_dropdown_tabs");
  if (!container) return;

  // Si on a déjà réorganisé pour mobile, restaurer la structure
  if (tabsReorganized) {
    const menu = container.querySelector(".nav_dropdown_menu");
    const content = container.querySelector(".nav_dropdown_content");
    const panes = Array.from(container.querySelectorAll(".nav_dropdown_pane"));

    if (!menu || !content) return;

    // Remettre les panes dans content
    panes.forEach((pane) => {
      if (pane.parentElement === menu) {
        content.appendChild(pane);
      }
      // Retirer les styles inline
      pane.style.display = "";
    });

    // Retirer les handlers de clic et restaurer les hrefs
    const links = Array.from(container.querySelectorAll(".nav_dropdown_link"));
    links.forEach((link) => {
      const newLink = link.cloneNode(true);

      // Restaurer le href original
      const originalHref = link.dataset.originalHref;
      if (originalHref) {
        newLink.setAttribute("href", originalHref);
        delete newLink.dataset.originalHref;
      }

      link.parentNode.replaceChild(newLink, link);
    });

    clickHandlersAttached = false;
    tabsReorganized = false;
  }

  // Toujours ajouter le hover pour desktop (même au premier chargement)
  const freshLinks = Array.from(
    container.querySelectorAll(".nav_dropdown_link")
  );
  const freshPanes = Array.from(
    container.querySelectorAll(".nav_dropdown_pane")
  );

  freshLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      const dataWTab = link.getAttribute("data-w-tab");

      // Désactiver tous les links
      freshLinks.forEach((l) => {
        l.classList.remove("w--current");
        l.setAttribute("aria-selected", "false");
        l.setAttribute("tabindex", "-1");
      });

      // Masquer tous les panes
      freshPanes.forEach((p) => {
        p.classList.remove("w--tab-active");
      });

      // Activer le link survolé
      link.classList.add("w--current");
      link.setAttribute("aria-selected", "true");
      link.setAttribute("tabindex", "0");

      // Afficher le pane correspondant
      const targetPane = freshPanes.find(
        (p) => p.getAttribute("data-w-tab") === dataWTab
      );
      if (targetPane) {
        targetPane.classList.add("w--tab-active");
      }
    });
  });
};

// Gérer le responsive
const handleTabsLayout = () => {
  const mediaQuery = window.matchMedia("(max-width: 991px)");
  let resizeTimeout;

  const handleMediaChange = (e) => {
    // Debounce pour éviter les appels multiples pendant le resize
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      if (e.matches) {
        // Mobile/tablette : réorganiser
        reorganizeTabs();
      } else {
        // Desktop : restaurer
        restoreTabs();
      }
    }, 150);
  };

  // Initialiser au chargement (sans debounce)
  if (mediaQuery.matches) {
    reorganizeTabs();
  } else {
    restoreTabs();
  }

  // Écouter les changements
  mediaQuery.addEventListener("change", handleMediaChange);
};

// Attendre que les tabs Webflow soient vraiment initialisés
const waitForWebflowTabs = (callback, maxAttempts = 20) => {
  let attempts = 0;

  const checkTabs = () => {
    attempts++;

    const container = document.querySelector(".nav_dropdown_tabs");
    if (!container) {
      if (attempts < maxAttempts) {
        setTimeout(checkTabs, 100);
      }
      return;
    }

    const links = container.querySelectorAll(".nav_dropdown_link");
    const panes = container.querySelectorAll(".nav_dropdown_pane");
    const hasWebflowClasses = Array.from(links).some((link) =>
      link.classList.contains("w-tab-link")
    );

    if (links.length > 0 && panes.length > 0 && hasWebflowClasses) {
      callback();
    } else if (attempts < maxAttempts) {
      setTimeout(checkTabs, 100);
    } else {
      // Essayer quand même après timeout
      callback();
    }
  };

  checkTabs();
};

// Initialisation Webflow
window.Webflow.push(() => {
  const navbar = document.querySelector("nav");
  if (!navbar) {
    setTimeout(() => window.Webflow.push(() => {}), 100);
    return;
  }

  // Attendre que les tabs soient vraiment initialisés
  waitForWebflowTabs(() => {
    handleTabsLayout();
  });
});
