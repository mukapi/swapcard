# Code review - navbar-tabs.js

## 🎯 Problème résolu (2025-01-13)

### Le bug initial
Le hover sur les tabs desktop fermait le dropdown de la navbar au premier chargement (sans refresh).

### La cause
```javascript
// ❌ Ancienne version qui causait le bug
link.addEventListener("mouseenter", () => {
  link.click(); // Déclenche TOUS les event listeners
});
```

Le `link.click()` déclenchait **2 event listeners** :
1. Le listener Webflow des tabs → change le tab ✅
2. Le listener du dropdown → ferme le dropdown ❌

### La solution
```javascript
// ✅ Nouvelle version qui fonctionne
link.addEventListener("mouseenter", () => {
  const dataWTab = link.getAttribute("data-w-tab");

  // Manipulation directe des classes CSS au lieu de click()
  freshLinks.forEach((l) => l.classList.remove("w--current"));
  freshPanes.forEach((p) => p.classList.remove("w--tab-active"));

  link.classList.add("w--current");
  targetPane.classList.add("w--tab-active");
});
```

**Principe clé** : Manipuler directement le DOM (classes CSS) au lieu d'utiliser `click()` évite de déclencher tous les event listeners et les effets de bord.

### Améliorations apportées
1. **Fonction `waitForWebflowTabs()`** ([navbar-tabs.js:261-293](navbar-tabs.js:261-293))
   - Vérifie toutes les 100ms que les tabs Webflow sont initialisés (max 20 tentatives = 2s)
   - Détecte la présence de la classe `w-tab-link` comme preuve d'initialisation
   - Résout les race conditions au chargement

2. **Suppression de `link.click()`** ([navbar-tabs.js:198-227](navbar-tabs.js:198-227))
   - Manipulation directe des classes `w--current` et `w--tab-active`
   - Plus d'effets de bord sur le dropdown
   - Comportement prévisible et isolé

## 👍 Points solides
- Refonte DOM mobile bien encapsulée avec `tabsReorganized` pour éviter les doublons
- Mapping clair lien → pane et clonage des liens pour retirer les handlers Webflow sans casser l'accessibilité
- Restauration desktop qui replace les panes et rend la main à Webflow, donc comportement réversible
- Fonction `waitForWebflowTabs()` robuste qui attend vraiment l'initialisation de Webflow

## ❗️Points à corriger

1. **Fallback d'initialisation inopérant** ([navbar-tabs.js:267-272](navbar-tabs.js:267-272))
   - Si `nav` n'est pas disponible au moment où `window.Webflow.push` exécute le callback, vous planifiez un `window.Webflow.push(() => {})` (callback vide). L'initialisation réelle (`handleTabsLayout`) n'est jamais relancée, ce qui laisse le composant dans son état Webflow d'origine.
   - ✅ À faire : reprogrammer le même initialiseur (ou relancer `handleTabsLayout` après un `setTimeout`) tant que le `nav` n'existe pas encore.

2. **Variable morte** ([navbar-tabs.js:5](navbar-tabs.js:5), [navbar-tabs.js:186](navbar-tabs.js:186))
   - `clickHandlersAttached` est initialisée à `false`, remise à `false`, mais jamais lue. Elle suggère un état qui n'existe pas et peut induire en erreur.
   - ✅ À faire : soit l'utiliser réellement pour éviter de ré-attacher les listeners desktop, soit la supprimer.

3. **Association liens/panes en O(n²)** ([navbar-tabs.js:27-35](navbar-tabs.js:27-35))
   - Chaque lien fait un `find` sur la liste complète des panes. Avec beaucoup d'onglets, ça dégrade les perfs.
   - ✅ À faire : indexer les panes une seule fois dans un objet ou une `Map` (`paneMap.set(dataWTab, pane)`) puis alimenter `linkPaneMap` à partir de cette structure.

4. **Listener `matchMedia` jamais nettoyé** ([navbar-tabs.js:230-259](navbar-tabs.js:230-259))
   - Si la page est montée/démontée plusieurs fois (SPA, Swup, etc.), vous accumulez les listeners `change`.
   - ✅ À faire : prévoir un teardown (removeEventListener) ou vérifier qu'on n'ajoute le listener qu'une seule fois.

5. **Recherche O(n) à chaque hover** ([navbar-tabs.js:220-222](navbar-tabs.js:220-222))
   - À chaque `mouseenter`, on fait un `find()` pour trouver le pane correspondant.
   - ✅ À faire : créer une `Map` link → pane au moment de l'initialisation desktop pour un accès O(1).

## 💡 Sujets optionnels / améliorations
- Mutualiser la logique "masquer tous les panes" / "réinitialiser tous les liens" dans de petites fonctions pour réduire la duplication
- Considérer l'utilisation de `MutationObserver` au lieu de polling dans `waitForWebflowTabs()` pour détecter l'initialisation des tabs
- Ajouter une constante pour le breakpoint `991px` utilisé pour le responsive

## ✅ Historique
- **2025-01-13** : Résolution du bug dropdown + ajout de `waitForWebflowTabs()` + suppression de `link.click()`
- Fichier renommé depuis `README-NAVBAR-TABS.md` → `NAVBAR-TABS-CODE-REVIEW.md`
- Ce document remplace l'ancien README et sert de note de revue ciblée
