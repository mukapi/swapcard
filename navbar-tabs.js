window.Webflow ||= [];

// Variables globales pour éviter les duplications
let clickListenerAttached = false;
let hoverListenersAttached = false;
let tabsReorganized = false;
let cssInjected = false;

console.log("[Navbar Tabs] Script chargé");

// Injecter le CSS si le fichier CSS n'est pas chargé
const injectCSS = () => {
  if (cssInjected) {
    console.log("[Navbar Tabs] CSS déjà injecté, skip");
    return;
  }

  // Vérifier si le CSS est déjà chargé
  const allStylesheets = Array.from(document.styleSheets);
  const hasNavbarTabsCSS = allStylesheets.some((sheet) => {
    try {
      return sheet.href && sheet.href.includes("navbar-tabs.css");
    } catch (e) {
      return false;
    }
  });

  if (hasNavbarTabsCSS) {
    console.log("[Navbar Tabs] CSS déjà chargé via fichier externe");
    cssInjected = true;
    return;
  }

  // Injecter le CSS directement
  const css = `
    @media (max-width: 991px) {
      .mobile-tabs-reorganized {
        display: flex !important;
        flex-direction: column !important;
        flex-wrap: nowrap !important;
      }

      .mobile-tabs-reorganized .nav_dropdown_menu {
        display: contents !important;
      }

      .mobile-tabs-reorganized .nav_dropdown_content {
        display: contents !important;
      }

      .mobile-tabs-reorganized .nav_dropdown_link {
        order: calc(var(--tab-order, 0) * 2) !important;
        flex-shrink: 0 !important;
      }

      .mobile-tabs-reorganized .nav_dropdown_pane {
        order: calc(var(--tab-order, 0) * 2 + 1) !important;
        flex-shrink: 0 !important;
      }
    }
  `;

  const style = document.createElement("style");
  style.textContent = css;
  style.setAttribute("data-navbar-tabs", "injected");
  document.head.appendChild(style);

  cssInjected = true;
  console.log("[Navbar Tabs] ✅ CSS injecté automatiquement");
};

// Empêcher la fermeture du dropdown lors du clic sur les onglets
const attachClickListener = () => {
  if (clickListenerAttached) {
    console.log("[Navbar Tabs] Click listener déjà attaché, skip");
    return;
  }

  console.log("[Navbar Tabs] Attachement du click listener");

  document.addEventListener("click", (event) => {
    // Vérifier si c'est un tab link (class Webflow ou custom class)
    const tabLink = event.target.closest(".w-tab-link, .nav_dropdown_link");
    if (tabLink) {
      console.log("[Navbar Tabs] Click sur tab link détecté:", tabLink);
      const dropdownToggle = event.target.closest(".w-dropdown");
      if (dropdownToggle) {
        console.log(
          "[Navbar Tabs] Dropdown toggle trouvé, empêche la propagation"
        );
        event.stopPropagation();
      }
    }
  });

  clickListenerAttached = true;
  console.log("[Navbar Tabs] Click listener attaché avec succès");
};

// Utiliser la délégation d'événements sur le document
const attachHoverListeners = () => {
  if (hoverListenersAttached) {
    console.log("[Navbar Tabs] Hover listeners déjà attachés, skip");
    return;
  }

  console.log("[Navbar Tabs] Attachement des hover listeners");

  // Délégation pour les dropdown toggles
  document.addEventListener("mouseover", (event) => {
    const toggle = event.target.closest(
      ".navbar_dropdwn-toggle, .navbar_cta-button"
    );
    if (toggle) {
      if (!toggle.classList.contains("w--open")) {
        console.log(
          "[Navbar Tabs] Hover sur dropdown toggle, ouvre le dropdown"
        );
        toggle.click();
      }
    }
  });

  // Délégation pour les tab links
  document.addEventListener("mouseover", (event) => {
    const link = event.target.closest(".nav_dropdown_link");
    if (link) {
      if (!link.classList.contains("w--current")) {
        console.log("[Navbar Tabs] Hover sur tab link, switch le tab");
        link.click();
      }
    }
  });

  hoverListenersAttached = true;
  console.log("[Navbar Tabs] Hover listeners attachés avec succès");
};

// Fonction de débogage pour inspecter la structure des tabs
const debugTabsStructure = (container) => {
  console.group("[Navbar Tabs] 🔍 DEBUG - Structure du container");

  // Structure HTML complète
  console.log("📋 Structure HTML:", container);

  // Trouver tous les éléments pertinents
  const menu = container.querySelector(".nav_dropdown_menu");
  const content = container.querySelector(".nav_dropdown_content");
  const tabLinks = container.querySelectorAll(".nav_dropdown_link");
  const tabPanes = container.querySelectorAll(".nav_dropdown_pane");

  console.log("📦 Menu:", menu);
  console.log("📦 Content:", content);
  console.log(`📊 Nombre de links: ${tabLinks.length}`);
  console.log(`📊 Nombre de panes: ${tabPanes.length}`);

  // Inspecter chaque link
  console.group("🔗 Links:");
  tabLinks.forEach((link, index) => {
    const dataWTab = link.getAttribute("data-w-tab");
    const ariaControls = link.getAttribute("aria-controls");
    const computedOrder = window.getComputedStyle(link).order;
    const cssVar = link.style.getPropertyValue("--tab-order");

    console.log(`Link ${index}:`, {
      element: link,
      text: link.textContent?.trim().substring(0, 50),
      "data-w-tab": dataWTab,
      "aria-controls": ariaControls,
      "data-tab-index": link.getAttribute("data-tab-index"),
      "--tab-order (inline)": cssVar,
      "order (computed)": computedOrder,
      classes: Array.from(link.classList),
    });
  });
  console.groupEnd();

  // Inspecter chaque pane
  console.group("📄 Panes:");
  tabPanes.forEach((pane, index) => {
    const dataWTab = pane.getAttribute("data-w-tab");
    const paneId = pane.id;
    const computedOrder = window.getComputedStyle(pane).order;
    const cssVar = pane.style.getPropertyValue("--tab-order");
    const isVisible = window.getComputedStyle(pane).display !== "none";

    console.log(`Pane ${index}:`, {
      element: pane,
      id: paneId,
      "data-w-tab": dataWTab,
      "data-tab-index": pane.getAttribute("data-tab-index"),
      "--tab-order (inline)": cssVar,
      "order (computed)": computedOrder,
      display: window.getComputedStyle(pane).display,
      visible: isVisible,
      classes: Array.from(pane.classList),
    });
  });
  console.groupEnd();

  // Vérifier les correspondances
  console.group("🔗➡️📄 Correspondances Links ↔ Panes:");
  tabLinks.forEach((link, index) => {
    const dataWTab = link.getAttribute("data-w-tab");
    const ariaControls = link.getAttribute("aria-controls");

    const matchingPanes = Array.from(tabPanes).filter((pane) => {
      const paneDataWTab = pane.getAttribute("data-w-tab");
      const paneId = pane.id;
      return paneDataWTab === dataWTab || paneId === ariaControls;
    });

    console.log(
      `Link ${index} (data-w-tab="${dataWTab}", aria-controls="${ariaControls}")`,
      {
        matchingPanes: matchingPanes.length,
        panes: matchingPanes.map((p) => ({
          id: p.id,
          "data-w-tab": p.getAttribute("data-w-tab"),
        })),
      }
    );
  });
  console.groupEnd();

  // Vérifier les styles CSS critiques
  console.group("🎨 Styles CSS critiques:");
  const containerStyles = window.getComputedStyle(container);
  const menuStyles = menu ? window.getComputedStyle(menu) : null;
  const contentStyles = content ? window.getComputedStyle(content) : null;

  console.log("Container (.mobile-tabs-reorganized):", {
    display: containerStyles.display,
    flexDirection: containerStyles.flexDirection,
    hasClass: container.classList.contains("mobile-tabs-reorganized"),
  });

  if (menu) {
    console.log("Menu (.nav_dropdown_menu):", {
      display: menuStyles.display,
      parent: menu.parentElement?.className,
    });
  }

  if (content) {
    console.log("Content (.nav_dropdown_content):", {
      display: contentStyles.display,
      parent: content.parentElement?.className,
    });
  }

  // Vérifier si les enfants sont bien des enfants directs du container pour flexbox
  const containerDirectChildren = Array.from(container.children);
  console.log(
    "Enfants directs du container:",
    containerDirectChildren.map((el, i) => ({
      index: i,
      tag: el.tagName,
      class: el.className,
      isLink: el.classList.contains("nav_dropdown_link"),
      isPane: el.classList.contains("nav_dropdown_pane"),
    }))
  );

  console.groupEnd();

  console.groupEnd();
};

// Réorganiser les tabs pour mobile/tablette (≤991px) via CSS
const reorganizeTabs = () => {
  console.log("[Navbar Tabs] 🔄 Réorganisation des tabs pour mobile/tablette");

  // Injecter le CSS si nécessaire
  injectCSS();

  const tabsContainers = document.querySelectorAll(".nav_dropdown_tabs.w-tabs");
  console.log(
    `[Navbar Tabs] Nombre de containers trouvés: ${tabsContainers.length}`
  );

  if (tabsContainers.length === 0) {
    console.warn(
      "[Navbar Tabs] ⚠️ Aucun container trouvé, retry dans 100ms..."
    );
    setTimeout(() => {
      if (!tabsReorganized) reorganizeTabs();
    }, 100);
    return;
  }

  tabsContainers.forEach((container, containerIndex) => {
    console.log(`[Navbar Tabs] Container ${containerIndex + 1}:`, container);

    // DEBUG: Inspecter la structure AVANT réorganisation
    console.log(
      `[Navbar Tabs] 🔍 DEBUG AVANT réorganisation - Container ${
        containerIndex + 1
      }`
    );
    debugTabsStructure(container);

    // Appliquer une classe custom qui sera stylée en CSS
    container.classList.add("mobile-tabs-reorganized");
    console.log(
      `[Navbar Tabs] Classe 'mobile-tabs-reorganized' ajoutée au container ${
        containerIndex + 1
      }`
    );

    // Récupérer les éléments
    const menu = container.querySelector(".nav_dropdown_menu");
    const content = container.querySelector(".nav_dropdown_content");
    const tabLinks = container.querySelectorAll(".nav_dropdown_link");
    const tabPanes = container.querySelectorAll(".nav_dropdown_pane");

    // Vérifier que les containers existent
    if (!menu || !content) {
      console.warn(
        `[Navbar Tabs] ⚠️ Container ${
          containerIndex + 1
        }: Menu ou Content manquant`
      );
      return;
    }

    console.log(
      `[Navbar Tabs] Container ${containerIndex + 1}: ${
        tabLinks.length
      } links, ${tabPanes.length} panes`
    );

    if (tabLinks.length === 0 || tabPanes.length === 0) {
      console.warn(
        `[Navbar Tabs] ⚠️ Container ${
          containerIndex + 1
        }: Links ou panes manquants`
      );
      return;
    }

    // Créer un tableau pour stocker les paires link-pane dans l'ordre
    const linkPanePairs = [];

    tabLinks.forEach((link, index) => {
      const dataWTab = link.getAttribute("data-w-tab");
      const ariaControls = link.getAttribute("aria-controls");
      console.log(
        `[Navbar Tabs] Link ${index}: data-w-tab="${dataWTab}", aria-controls="${ariaControls}"`
      );

      // Trouver le pane correspondant
      const correspondingPane = Array.from(tabPanes).find((pane) => {
        const paneDataWTab = pane.getAttribute("data-w-tab");
        const paneId = pane.id;
        return (
          paneDataWTab === dataWTab ||
          paneId === ariaControls ||
          (dataWTab && paneDataWTab && paneDataWTab === dataWTab)
        );
      });

      if (correspondingPane) {
        // Ajouter des attributs data pour le CSS + style inline en fallback
        const tabOrder = index;
        link.setAttribute("data-tab-index", tabOrder);
        link.style.setProperty("--tab-order", tabOrder);
        correspondingPane.setAttribute("data-tab-index", tabOrder);
        correspondingPane.style.setProperty("--tab-order", tabOrder);

        // Stocker la paire pour réorganisation DOM
        linkPanePairs.push({ link, pane: correspondingPane, index: tabOrder });

        console.log(
          `[Navbar Tabs] ✅ Link ${index} associé au pane avec data-tab-index="${tabOrder}"`
        );
      } else {
        console.warn(
          `[Navbar Tabs] ⚠️ Aucun pane correspondant trouvé pour le link ${index} (data-w-tab="${dataWTab}", aria-controls="${ariaControls}")`
        );
        // Mettre quand même l'index pour éviter les problèmes d'ordre
        link.setAttribute("data-tab-index", index);
        link.style.setProperty("--tab-order", index);
        // Ajouter juste le link sans pane
        linkPanePairs.push({ link, pane: null, index });
      }
    });

    // TEST : Vérifier si display: contents fonctionne pour le flexbox order
    // Si les enfants directs du container ne sont pas les links/panes, alors display: contents ne fonctionne pas
    const containerDirectChildren = Array.from(container.children);
    const linksAndPanesAsDirectChildren = containerDirectChildren.filter(
      (child) =>
        child.classList.contains("nav_dropdown_link") ||
        child.classList.contains("nav_dropdown_pane")
    );

    console.log(
      `[Navbar Tabs] 🔍 Test display: contents - Enfants directs contenant links/panes: ${linksAndPanesAsDirectChildren.length}`
    );

    // Attendre un peu pour que le CSS soit appliqué, puis vérifier à nouveau
    // Si display: contents ne fonctionne pas (les links/panes ne sont pas enfants directs),
    // on doit manipuler le DOM de manière minimale
    setTimeout(() => {
      // Vérifier à nouveau après que le CSS soit appliqué
      const containerDirectChildrenAfter = Array.from(container.children);
      const linksAndPanesAsDirectChildrenAfter =
        containerDirectChildrenAfter.filter(
          (child) =>
            child.classList.contains("nav_dropdown_link") ||
            child.classList.contains("nav_dropdown_pane")
        );

      console.log(
        `[Navbar Tabs] 🔍 Test display: contents (après CSS) - Enfants directs contenant links/panes: ${linksAndPanesAsDirectChildrenAfter.length}`
      );

      if (linksAndPanesAsDirectChildrenAfter.length === 0) {
        console.warn(
          `[Navbar Tabs] ⚠️ display: contents ne fonctionne pas, manipulation DOM minimale nécessaire`
        );

        // APPROCHE HYBRIDE : Déplacer seulement les panes juste après leur link
        // Cela préserve la structure Webflow car les links restent dans le menu
        linkPanePairs.forEach(({ link, pane, index }) => {
          if (pane) {
            // Vérifier que le pane n'est pas déjà après son link
            const linkParent = link.parentElement;
            const paneParent = pane.parentElement;

            // Si le pane est déjà dans le menu et juste après son link, skip
            if (
              paneParent === linkParent &&
              pane.previousElementSibling === link
            ) {
              console.log(
                `[Navbar Tabs] ⏭️ Pane ${index} déjà correctement placé, skip`
              );
              return;
            }

            // Insérer le pane juste après le link dans le même parent
            if (linkParent) {
              if (link.nextSibling) {
                linkParent.insertBefore(pane, link.nextSibling);
              } else {
                linkParent.appendChild(pane);
              }

              console.log(
                `[Navbar Tabs] ✅ Pane ${index} inséré après son link dans le DOM`
              );
            }
          }
        });
      } else {
        console.log(
          `[Navbar Tabs] ✅ display: contents fonctionne, CSS order devrait suffire`
        );
      }
    }, 50);

    // DEBUG: Inspecter la structure APRÈS réorganisation
    console.log(
      `[Navbar Tabs] 🔍 DEBUG APRÈS réorganisation - Container ${
        containerIndex + 1
      }`
    );
    debugTabsStructure(container);
  });

  tabsReorganized = true;
  console.log("[Navbar Tabs] ✅ Réorganisation terminée");

  // Exposer la fonction de débogage globalement pour utilisation dans la console
  window.debugNavbarTabs = () => {
    const containers = document.querySelectorAll(".nav_dropdown_tabs.w-tabs");
    containers.forEach((container, index) => {
      console.log(`\n=== CONTAINER ${index + 1} ===`);
      debugTabsStructure(container);
    });
  };

  // Fonction de test pour vérifier display: contents
  window.testDisplayContents = () => {
    const containers = document.querySelectorAll(".nav_dropdown_tabs.w-tabs");
    containers.forEach((container, index) => {
      console.log(`\n=== TEST DISPLAY: CONTENTS - Container ${index + 1} ===`);
      const menu = container.querySelector(".nav_dropdown_menu");
      const content = container.querySelector(".nav_dropdown_content");

      if (menu) {
        const menuStyles = window.getComputedStyle(menu);
        console.log("Menu display:", menuStyles.display);
        console.log("Menu children:", Array.from(menu.children).length);
        console.log("Menu parent:", menu.parentElement?.className);
      }

      if (content) {
        const contentStyles = window.getComputedStyle(content);
        console.log("Content display:", contentStyles.display);
        console.log("Content children:", Array.from(content.children).length);
        console.log("Content parent:", content.parentElement?.className);
      }

      // Vérifier les enfants directs du container
      const directChildren = Array.from(container.children);
      console.log("Enfants directs du container:", directChildren.length);
      directChildren.forEach((child, i) => {
        console.log(`  ${i}: ${child.tagName} - ${child.className}`);
      });

      // Vérifier si les links sont des enfants directs (devrait être le cas avec display: contents)
      const links = container.querySelectorAll(".nav_dropdown_link");
      console.log("Links trouvés:", links.length);
      links.forEach((link, i) => {
        const parent = link.parentElement;
        console.log(
          `  Link ${i}: parent = ${parent.tagName}.${parent.className}`
        );
      });
    });
  };

  console.log("[Navbar Tabs] 💡 Fonctions de débogage disponibles:");
  console.log("  - window.debugNavbarTabs() : Structure complète");
  console.log("  - window.testDisplayContents() : Test display: contents");
};

// Restaurer la structure originale pour desktop (>991px)
const restoreTabs = () => {
  console.log("[Navbar Tabs] 🔙 Restauration de la structure pour desktop");

  const tabsContainers = document.querySelectorAll(".nav_dropdown_tabs.w-tabs");
  console.log(
    `[Navbar Tabs] Nombre de containers à restaurer: ${tabsContainers.length}`
  );

  tabsContainers.forEach((container, containerIndex) => {
    // Retirer la classe custom
    container.classList.remove("mobile-tabs-reorganized");
    console.log(
      `[Navbar Tabs] Classe 'mobile-tabs-reorganized' retirée du container ${
        containerIndex + 1
      }`
    );

    // Récupérer les containers
    const menu = container.querySelector(".nav_dropdown_menu");
    const content = container.querySelector(".nav_dropdown_content");
    const tabLinks = container.querySelectorAll(".nav_dropdown_link");
    const tabPanes = container.querySelectorAll(".nav_dropdown_pane");

    // Retirer les data attributes et les styles inline des links
    tabLinks.forEach((link, index) => {
      link.removeAttribute("data-tab-index");
      link.style.removeProperty("--tab-order");
      console.log(
        `[Navbar Tabs] data-tab-index et --tab-order retirés du link ${index}`
      );
    });

    // Remettre les panes dans leur container d'origine (.nav_dropdown_content)
    // si ils ont été déplacés dans le menu
    if (content) {
      tabPanes.forEach((pane, index) => {
        const paneParent = pane.parentElement;

        // Si le pane est dans le menu (déplacé), le remettre dans content
        if (paneParent === menu) {
          pane.remove();
          content.appendChild(pane);
          console.log(
            `[Navbar Tabs] ✅ Pane ${index} remis dans .nav_dropdown_content`
          );
        }

        // Retirer les attributs
        pane.removeAttribute("data-tab-index");
        pane.style.removeProperty("--tab-order");
        console.log(
          `[Navbar Tabs] data-tab-index et --tab-order retirés du pane ${index}`
        );
      });
    } else {
      console.warn(
        `[Navbar Tabs] ⚠️ Container ${
          containerIndex + 1
        }: .nav_dropdown_content non trouvé`
      );
    }
  });

  tabsReorganized = false;
  console.log("[Navbar Tabs] ✅ Restauration terminée");
};

// Gérer le responsive via matchMedia
const handleTabsLayout = () => {
  console.log("[Navbar Tabs] 📱 Initialisation du responsive handler");

  const mediaQuery = window.matchMedia("(max-width: 991px)");
  console.log(
    `[Navbar Tabs] Media query actuelle (max-width: 991px): ${
      mediaQuery.matches ? "MATCH (mobile/tablette)" : "NO MATCH (desktop)"
    }`
  );

  const handleMediaChange = (e) => {
    console.log(
      `[Navbar Tabs] 📐 Changement de media query: ${
        e.matches ? "Mobile/Tablette (≤991px)" : "Desktop (>991px)"
      }`
    );

    if (e.matches) {
      // Tablette/mobile: réorganiser
      console.log("[Navbar Tabs] Mode mobile/tablette activé");
      if (!tabsReorganized) {
        console.log(
          "[Navbar Tabs] Tabs non réorganisés, lancement de la réorganisation..."
        );
        reorganizeTabs();
      } else {
        console.log("[Navbar Tabs] Tabs déjà réorganisés, skip");
      }
    } else {
      // Desktop: restaurer
      console.log("[Navbar Tabs] Mode desktop activé");
      if (tabsReorganized) {
        console.log(
          "[Navbar Tabs] Tabs réorganisés, lancement de la restauration..."
        );
        restoreTabs();
      } else {
        console.log("[Navbar Tabs] Tabs déjà en mode normal, skip");
      }
    }
  };

  // Initialiser au chargement
  console.log("[Navbar Tabs] Initialisation au chargement...");
  handleMediaChange(mediaQuery);

  // Écouter les changements de taille d'écran
  mediaQuery.addEventListener("change", handleMediaChange);
  console.log(
    "[Navbar Tabs] Listener sur changement de taille d'écran attaché"
  );
};

// Initialisation Webflow
window.Webflow.push(() => {
  console.log("[Navbar Tabs] 🚀 Callback Webflow déclenché");

  // Vérifier que la navbar existe
  const navbar = document.querySelector("nav");
  if (!navbar) {
    console.warn("[Navbar Tabs] ⚠️ Navbar non trouvée, retry dans 100ms...");
    setTimeout(() => window.Webflow.push(() => {}), 100);
    return;
  }

  console.log("[Navbar Tabs] ✅ Navbar trouvée:", navbar);
  console.log("[Navbar Tabs] Lancement de l'initialisation...");

  attachClickListener();
  attachHoverListeners();
  handleTabsLayout();

  console.log("[Navbar Tabs] ✅ Initialisation complète terminée");
});
