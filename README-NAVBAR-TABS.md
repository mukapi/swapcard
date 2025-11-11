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

- `navbar-tabs.js` - Script JavaScript qui réorganise les tabs et gère les clics
- `navbar-tabs.css` - Styles CSS pour l'affichage mobile

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

### Comment ça marche

1. **JavaScript** : Sur mobile/tablette (≤991px), le script :

   - Déplace les panes dans le menu après leurs links correspondants
   - Remplace le système de tabs Webflow par un système custom qui gère les clics manuellement
   - Masque le container `.nav_dropdown_content` (les panes sont maintenant dans le menu)

2. **CSS** : Assure que :

   - Le container principal est en `flex-direction: column`
   - Le menu affiche les éléments en colonne (links et panes alternés)
   - Le content est masqué sur mobile

3. **Desktop** : Sur desktop (>991px), le script restaure la structure originale et Webflow reprend le contrôle

### Avantages

- ✅ **Fonctionne** : Testé et validé avec plusieurs clics
- ✅ **Réversible** : Retour automatique à la structure normale sur desktop
- ✅ **Préserve Webflow** : Le système Webflow fonctionne toujours sur desktop
- ✅ **Minimal** : Manipulation DOM minimale, seulement sur mobile

## 📝 Utilisation

1. **Intégrer le CSS** : Ajouter `navbar-tabs.css` à votre page Webflow
2. **Intégrer le JS** : Ajouter `navbar-tabs.js` à votre page Webflow (avant la fermeture de `</body>`)
3. **C'est tout !** : La réorganisation se fait automatiquement sur mobile/tablette (≤991px)

## 🎨 Personnalisation

### Changer le breakpoint

Modifiez la media query dans `navbar-tabs.css` et dans `navbar-tabs.js` :

**CSS** :

```css
@media (max-width: 991px) {
  /* Changez 991px selon vos besoins */
}
```

**JS** :

```javascript
const mediaQuery = window.matchMedia("(max-width: 991px)"); // Changez 991px
```

## 🔍 Comment ça fonctionne techniquement

1. **Mobile (≤991px)** :

   - Le script détecte la taille d'écran via `matchMedia`
   - Il déplace les panes dans `.nav_dropdown_menu` après leurs links correspondants
   - Il attache des handlers de clic custom qui remplacent Webflow
   - Le CSS masque `.nav_dropdown_content` et affiche le menu en colonne

2. **Desktop (>991px)** :
   - Le script restaure les panes dans `.nav_dropdown_content`
   - Il retire les handlers custom (Webflow reprend le contrôle)
   - Le CSS ne s'applique pas (media query)

## ⚠️ Limitations

- ⚠️ **JavaScript requis** : Contrairement à une solution CSS pure, cette solution nécessite JavaScript
- ⚠️ **Remplace Webflow sur mobile** : Le système de tabs Webflow est désactivé sur mobile, remplacé par un système custom

## 🐛 Dépannage

### Les tabs ne se réorganisent pas ?

1. Vérifier que le JS est bien chargé (console : `[Navbar Tabs] Script chargé`)
2. Vérifier que la largeur de la fenêtre est bien ≤991px
3. Vérifier dans les DevTools que les panes sont bien dans `.nav_dropdown_menu`

### Les clics ne fonctionnent pas ?

1. Vérifier dans la console qu'il n'y a pas d'erreurs JavaScript
2. Vérifier que les handlers sont bien attachés (console : `[Navbar Tabs] ✅ Handlers de clic attachés`)
3. Vérifier que les panes sont bien associés aux links (même `data-w-tab`)

## 📚 Ressources

- **Page de test** : https://staging-swapcard.webflow.io/work-in-progress/new-navigation
- Les tabs Webflow utilisent `data-w-tab` pour lier links et panes
- Les tabs actifs ont la classe `w--current` (links) et `w--tab-active` (panes)
