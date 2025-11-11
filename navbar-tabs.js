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
  if (!clickHandlersAttached) {
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
    const newLinks = Array.from(
      container.querySelectorAll(".nav_dropdown_link")
    );

    newLinks.forEach((link) => {
      const dataWTab = link.getAttribute("data-w-tab");
      const pane = newLinkPaneMap.get(dataWTab);

      if (!pane) return;

      // Retirer le href pour éviter la navigation
      link.removeAttribute("href");
      link.style.cursor = "pointer";

      link.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();

          // Retirer w--current de tous les links
          newLinks.forEach((l) => {
            l.classList.remove("w--current");
            l.setAttribute("aria-selected", "false");
            l.setAttribute("tabindex", "-1");
          });

          // Ajouter w--current au link cliqué
          link.classList.add("w--current");
          link.setAttribute("aria-selected", "true");
          link.setAttribute("tabindex", "0");

          // Masquer tous les panes
          panes.forEach((p) => {
            p.classList.remove("w--tab-active");
            p.style.display = "none";
          });

          // Afficher le pane correspondant
          if (pane) {
            pane.classList.add("w--tab-active");
            pane.style.display = "block";
          }
        },
        true // Use capture phase
      );
    });

    clickHandlersAttached = true;
  }

  // Initialiser : afficher le premier pane
  const currentLinks = Array.from(
    container.querySelectorAll(".nav_dropdown_link")
  );
  const firstLink = currentLinks[0];

  // Utiliser le mapping par data-w-tab
  const firstPane = firstLink
    ? (() => {
        const dataWTab = firstLink.getAttribute("data-w-tab");
        return linkPaneMap.get(
          Array.from(links).find(
            (l) => l.getAttribute("data-w-tab") === dataWTab
          )
        );
      })()
    : null;

  if (firstLink && firstPane) {
    // Masquer tous les panes
    panes.forEach((p) => {
      p.classList.remove("w--tab-active");
      p.style.display = "none";
    });

    // Afficher le premier pane
    firstPane.classList.add("w--tab-active");
    firstPane.style.display = "block";

    // Activer le premier link
    currentLinks.forEach((l) => {
      l.classList.remove("w--current");
      l.setAttribute("aria-selected", "false");
      l.setAttribute("tabindex", "-1");
    });
    firstLink.classList.add("w--current");
    firstLink.setAttribute("aria-selected", "true");
    firstLink.setAttribute("tabindex", "0");
  }

  tabsReorganized = true;
};

// Restaurer la structure originale pour desktop
const restoreTabs = () => {
  if (!tabsReorganized) {
    return;
  }

  const container = document.querySelector(".nav_dropdown_tabs");
  if (!container) return;

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

  // Retirer les handlers de clic (Webflow reprend le contrôle)
  const links = Array.from(container.querySelectorAll(".nav_dropdown_link"));
  links.forEach((link) => {
    // Cloner le link pour retirer les listeners
    const newLink = link.cloneNode(true);
    link.parentNode.replaceChild(newLink, link);
  });

  clickHandlersAttached = false;
  tabsReorganized = false;
};

// Gérer le responsive
const handleTabsLayout = () => {
  const mediaQuery = window.matchMedia("(max-width: 991px)");

  const handleMediaChange = (e) => {

    if (e.matches) {
      // Mobile/tablette : réorganiser
      reorganizeTabs();
    } else {
      // Desktop : restaurer
      restoreTabs();
    }
  };

  // Initialiser au chargement
  handleMediaChange(mediaQuery);

  // Écouter les changements
  mediaQuery.addEventListener("change", handleMediaChange);
};

// Initialisation Webflow
window.Webflow.push(() => {
  const navbar = document.querySelector("nav");
  if (!navbar) {
    setTimeout(() => window.Webflow.push(() => {}), 100);
    return;
  }

  handleTabsLayout();
});
