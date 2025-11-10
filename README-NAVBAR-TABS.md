# Navbar Tabs - Réorganisation pour Mobile/Tablette

## 🎯 Problème

Sur tablette/mobile (≤991px), les tabs Webflow dans la navbar s'affichent avec tous les **links** ensemble, puis tous les **panes** ensemble :

```
Link 0 → Link 1 → Link 2 → ... → Pane 0 → Pane 1 → Pane 2 → ...
```

**Objectif** : Réorganiser pour avoir chaque pane juste après son link correspondant :

```
Link 0 → Pane 0 → Link 1 → Pane 1 → Link 2 → Pane 2 → ...
```

## 📁 Fichiers

- `navbar-tabs.js` - Script JavaScript principal avec injection automatique du CSS
- ~~`navbar-tabs.css`~~ - **Supprimé** : Le CSS est maintenant injecté automatiquement par le script JS

## 🏗️ Structure HTML Webflow

```html
<div class="nav_dropdown_tabs w-tabs">
  <div class="nav_dropdown_menu w-tab-menu">
    <a class="nav_dropdown_link w-tab-link" data-w-tab="...">Link 0</a>
    <a class="nav_dropdown_link w-tab-link" data-w-tab="...">Link 1</a>
    <!-- ... tous les links ... -->
  </div>
  <div class="nav_dropdown_content w-tab-content">
    <div class="nav_dropdown_pane w-tab-pane" data-w-tab="...">Pane 0</div>
    <div class="nav_dropdown_pane w-tab-pane" data-w-tab="...">Pane 1</div>
    <!-- ... tous les panes ... -->
  </div>
</div>
```

## 🔧 Solution

### Approche hybride : CSS + Manipulation DOM

Le script utilise une approche en deux étapes :

1. **Injection automatique du CSS** : Le script vérifie si le fichier CSS est chargé, sinon il l'injecte automatiquement dans la page
2. **Détection de `display: contents`** : Le script teste si `display: contents` fonctionne pour "dissoudre" les containers
3. **Fallback DOM** : Si `display: contents` ne fonctionne pas, le script déplace les panes directement après leurs links dans le DOM

### CSS injecté automatiquement

```css
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
```

### Manipulation DOM (fallback)

Si `display: contents` ne fonctionne pas, le script déplace les panes directement après leurs links :

```javascript
// Déplacer chaque pane juste après son link dans .nav_dropdown_menu
linkPanePairs.forEach(({ link, pane }) => {
  const linkParent = link.parentElement; // .nav_dropdown_menu
  linkParent.insertBefore(pane, link.nextSibling);
});
```

## ✅ Fonctionnalités

1. ✅ **Injection automatique du CSS** - Plus besoin de charger un fichier CSS séparé
2. ✅ **Détection automatique** - Le script détecte si `display: contents` fonctionne
3. ✅ **Fallback DOM** - Si CSS ne suffit pas, manipulation DOM minimale
4. ✅ **Fonctions de débogage** - `window.debugNavbarTabs()` et `window.testDisplayContents()`
5. ✅ **Restauration desktop** - Retour automatique à la structure originale pour >991px
6. ✅ **Préservation Webflow** - Les tabs Webflow continuent de fonctionner normalement

## 🔍 Diagnostic

### Fonctions de débogage disponibles dans la console :

```javascript
// Diagnostic complet de la structure
window.debugNavbarTabs()

// Test spécifique pour display: contents
window.testDisplayContents()
```

### Ce qu'il faut vérifier :

1. **Media query** : La fenêtre est-elle bien ≤991px ?
2. **Classe appliquée** : `.mobile-tabs-reorganized` est-elle ajoutée au container ?
3. **CSS injecté** : Le message `[Navbar Tabs] ✅ CSS injecté automatiquement` apparaît-il ?
4. **Display contents** : Les links/panes sont-ils enfants directs du container ?
5. **Manipulation DOM** : Si display: contents ne fonctionne pas, les panes sont-ils déplacés ?

## 📝 Logs à vérifier dans la console

Le script affiche des logs détaillés :
- `[Navbar Tabs] Script chargé`
- `[Navbar Tabs] ✅ CSS injecté automatiquement` (si le CSS n'est pas déjà chargé)
- `[Navbar Tabs] 🔄 Réorganisation des tabs pour mobile/tablette`
- `[Navbar Tabs] 🔍 Test display: contents - Enfants directs contenant links/panes: X`
- `[Navbar Tabs] 🔍 Test display: contents (après CSS) - Enfants directs contenant links/panes: X`
- `[Navbar Tabs] ⚠️ display: contents ne fonctionne pas, manipulation DOM minimale nécessaire` OU `✅ display: contents fonctionne`
- `[Navbar Tabs] ✅ Pane X inséré après son link dans le DOM` (si manipulation DOM)

## 🎯 Utilisation

1. **Intégrer le script** : Ajouter `navbar-tabs.js` à votre page Webflow
2. **Aucun CSS requis** : Le CSS est injecté automatiquement par le script
3. **Responsive automatique** : Le script détecte automatiquement les changements de taille d'écran
4. **Débogage** : Utiliser `window.debugNavbarTabs()` dans la console pour diagnostiquer

## ⚠️ Contraintes

- **Ne pas casser les tabs Webflow** - Le système de tabs natif doit continuer à fonctionner
- **Manipulation DOM minimale** - Éviter de trop manipuler le DOM pour ne pas casser Webflow
- **Réversible** - Doit pouvoir restaurer la structure originale pour desktop (>991px)

## 🔄 Restauration Desktop

Quand on revient en desktop (>991px), le script :
1. Retire la classe `.mobile-tabs-reorganized`
2. Remet les panes dans `.nav_dropdown_content` (si déplacés)
3. Retire les attributs `data-tab-index` et `--tab-order`
4. Retire le CSS injecté (si injecté automatiquement)

## 📚 Ressources

- **Page de test** : https://staging-swapcard.webflow.io/work-in-progress/new-navigation
- Les tabs Webflow utilisent `data-w-tab` pour lier links et panes
- Les tabs actifs ont la classe `w--current` (links) et `w--tab-active` (panes)
- Le script utilise `matchMedia` pour détecter les changements de taille d'écran

## 🐛 Dépannage

### Le script ne fonctionne pas ?

1. Vérifier que la console ne montre pas d'erreurs
2. Vérifier que la classe `.mobile-tabs-reorganized` est bien ajoutée au container
3. Exécuter `window.debugNavbarTabs()` pour voir la structure
4. Vérifier que la largeur de la fenêtre est bien ≤991px
5. Vérifier les logs dans la console pour identifier où ça bloque

### Les panes ne sont pas réorganisés ?

1. Vérifier si `display: contents` fonctionne avec `window.testDisplayContents()`
2. Si non, vérifier que la manipulation DOM se fait (logs `✅ Pane X inséré`)
3. Vérifier que les panes sont bien dans le menu après manipulation DOM

## 🚀 Améliorations futures possibles

- Support pour plusieurs containers de tabs sur la même page
- Animation lors de la réorganisation
- Support pour d'autres breakpoints personnalisables
