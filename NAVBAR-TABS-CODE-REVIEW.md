# Code review - navbar-tabs.js

## 👍 Points solides
- Refonte DOM mobile bien encapsulée avec `tabsReorganized` pour éviter les doublons.
- Mapping clair lien → pane et clonage des liens pour retirer les handlers Webflow sans casser l'accessibilité.
- Restauration desktop qui replace les panes et rend la main à Webflow, donc comportement réversible.

## ❗️Points à corriger
1. **Fallback d'initialisation inopérant** (`navbar-tabs.js:250-255`)
   - Si `nav` n'est pas disponible au moment où `window.Webflow.push` exécute le callback, vous planifiez un `window.Webflow.push(() => {})` (callback vide). L'initialisation réelle (`handleTabsLayout`) n'est jamais relancée, ce qui laisse le composant dans son état Webflow d'origine.
   - ✅ À faire : reprogrammer le même initialiseur (ou relancer `handleTabsLayout` après un `setTimeout`) tant que le `nav` n'existe pas encore.

2. **Variable morte** (`navbar-tabs.js:5`, `navbar-tabs.js:214`)
   - `clickHandlersAttached` est initialisée à `false`, remise à `false`, mais jamais lue. Elle suggère un état qui n'existe pas et peut induire en erreur.
   - ✅ À faire : soit l'utiliser réellement pour éviter de ré-attacher les listeners desktop, soit la supprimer.

3. **Initialisation du premier pane inutilement complexe** (`navbar-tabs.js:131-140`)
   - Pour activer le premier pane, vous passez par `linkPaneMap` basé sur les anciens nœuds clonés (`links`). Après le clonage, ces références ne correspondent plus au DOM.
   - ✅ À faire : utilisez directement `newLinkPaneMap` (déjà indexé par `data-w-tab`) et `firstLink.getAttribute("data-w-tab")` pour récupérer le pane en O(1) sans double parcours.

4. **Association liens/panes en O(n²)** (`navbar-tabs.js:29-35`)
   - Chaque lien fait un `find` sur la liste complète des panes. Avec beaucoup d'onglets, ça dégrade les perfs.
   - ✅ À faire : indexer les panes une seule fois dans un objet ou une `Map` (`paneMap.set(dataWTab, pane)`) puis alimenter `linkPaneMap` à partir de cette structure.

5. **Listener `matchMedia` jamais nettoyé** (`navbar-tabs.js:218-246`)
   - Si la page est montée/démontée plusieurs fois (SPA, Swup, etc.), vous accumulez les listeners `change`.
   - ✅ À faire : prévoir un teardown (removeEventListener) ou vérifier qu'on n'ajoute le listener qu'une seule fois.

## 💡 Sujets optionnels / améliorations
- Mutualiser la logique "masquer tous les panes" / "réinitialiser tous les liens" dans de petites fonctions pour réduire la duplication.
- Log minimal (`console.debug`) pour suivre le basculement mobile/desktop, utile en cas de régressions.

## ✅ Suivi
- Fichier renommé depuis `README-NAVBAR-TABS.md` → `NAVBAR-TABS-CODE-REVIEW.md`.
- Ce document remplace l'ancien README et sert de note de revue ciblée.
