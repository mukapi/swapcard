# Swapcard Schema.org Implementation Guide

> **Source**: Instructions de l'agence SEO  
> **Last Updated**: 2025-11-04  
> **Purpose**: Guide complet pour l'implémentation Schema.org sur le site Swapcard

---

## 📋 Table des Matières

1. [Quick Start](#quick-start)
2. [Instructions de l'Agence SEO](#instructions-de-lagence-seo)
3. [Pages Demandées](#pages-demandées)
4. [Déploiement](#déploiement)
5. [Audit & Vérification](#audit--vérification)
6. [Templates CMS](#templates-cms)

---

## Quick Start

### Générer les fichiers Schema

```bash
node schema-scripts/generate-all-schemas.js
```

Ceci crée des fichiers HTML prêts à copier-coller dans Webflow.

### Utiliser les Schemas générés

1. Ouvrir un fichier `.html` dans les dossiers `schema-scripts/`
2. Copier tout le contenu (y compris les balises `<script>`)
3. Dans Webflow: **Page Settings** → **Custom Code** → **Head Code**
4. Coller et publier

---

## Instructions de l'Agence SEO

### Pages Explicitement Demandées (8 pages statiques)

L'agence SEO a mentionné ces URLs dans leurs instructions :

| URL | Titre | Type | Schema Type | Section Doc |
|-----|-------|------|-------------|-------------|
| `/` | Home | Homepage | WebPage + VideoObject | 4.1 |
| `/event-mobile-app` | Event Mobile App | Product Page (Feature) | SoftwareApplication | 4.2 |
| `/features/event-registration-software` | Event Registration Software | Product Page (Feature) | Product | 4.2 (exemple) |
| `/solutions/attendee-networking-engagement` | Attendee Networking & Engagement | Solution Page | Service | 4.3 |
| `/blog` | Blog | Blog Hub Page | CollectionPage | 4.4 |
| `/pricing-plans` | Pricing | Pricing Page | Product + OfferCatalog | 4.6 |
| `/about-swapcard` | About Swapcard | About Page | AboutPage | 4.7 |
| `/authors` | Authors | Author Hub Page | CollectionPage + ItemList | 4.9 |

**Note importante** : L'agence a donné des **exemples** de types de pages, pas une liste exhaustive. Le document dit : "Only pages mentioned in this document require schema implementation."

### Pages CMS (Templates Webflow)

Ces pages sont gérées via CMS Webflow, pas dans `generate-all-schemas.js` :

- **Blog Articles** (`/blog/*`) - Schema: `BlogPosting` (Section 4.5)
- **Author Pages** (`/authors/*`) - Schema: `ProfilePage + Person` (Section 4.8)

### État Actuel

- ✅ **7/8 pages trouvées** dans `generate-all-schemas.js`
- ❌ **1 page manquante** : `/authors`
- ⚠️ **30 pages supplémentaires** dans le script (non mentionnées par l'agence)

---

## Déploiement

### Pages Statiques

Pour chaque fichier `.html` généré :

1. Ouvrir la page dans Webflow Designer
2. Aller dans **Page Settings** → **Custom Code** → **Before </head> tag**
3. Copier-coller le contenu complet du fichier `.html`
4. Sauvegarder et publier

### Pages CMS (Blog Articles)

**Fichier** : `templates/blog-article-webflow-cms.html`

1. Ouvrir Webflow Designer
2. Aller sur le **Collection Template "Blog Post"**
3. Ouvrir **Page Settings** → **Custom Code** → **Before </body> tag**
4. Copier-coller le contenu de `blog-article-webflow-cms.html`
5. Vérifier les noms de champs CMS (voir section Templates CMS ci-dessous)

**Champs CMS requis** :
- `name` → Titre de l'article
- `post-summary` → Résumé/description
- `thumbnail-image` → Image à la une
- `post-date` → Date de publication (**format ISO requis**)
- `updated-on` → Date de modification (**format ISO requis**)
- `category` → Catégorie

⚠️ **CRITIQUE** : Les dates doivent être au format ISO 8601 (`2025-09-11` ou `2025-09-11T08:30:00Z`)

---

## Audit & Vérification

### Vérification Post-Déploiement

Pour chaque page déployée :

1. **Vérifier le code source**
   - Ouvrir la page publiée
   - Faire Ctrl+U (Windows) ou Cmd+Option+U (Mac)
   - Chercher `<script type="application/ld+json">`
   - Vérifier que le JSON est présent et bien formaté

2. **Valider avec Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Tester l'URL de la page

3. **Valider avec Schema.org Validator**
   - https://validator.schema.org/
   - Tester l'URL de la page

### Pages dans le Script vs Webflow

**Statut actuel** :
- Pages dans le script : 37
- Pages Webflow publiées : ~114
- Pages explicitement demandées par l'agence : 8

**Note** : Les 30 pages supplémentaires dans le script ne sont pas explicitement mentionnées par l'agence SEO. Elles peuvent être conservées "au cas où" ou supprimées selon vos besoins.

---

## Templates CMS

### Blog Articles

**Fichier** : `templates/blog-article-webflow-cms.html`

**Mapping des champs Webflow CMS** :

| Schema.org Property | Webflow CMS Field | Syntaxe |
|---------------------|-------------------|---------|
| `url` | URL complète | `{{wf {"path":"url","type":"PlainText"} }}` |
| `headline` | Titre (H1) | `{{wf {"path":"name","type":"PlainText"} }}` |
| `description` | Résumé | `{{wf {"path":"post-summary","type":"PlainText"} }}` |
| `image` | Image à la une | `{{wf {"path":"thumbnail-image","type":"ImageRef"} }}` |
| `datePublished` | Date publication | `{{wf {"path":"post-date","type":"PlainText"} }}` |
| `dateModified` | Date modification | `{{wf {"path":"updated-on","type":"PlainText"} }}` |
| `articleSection` | Catégorie | `{{wf {"path":"category","type":"PlainText"} }}` |

**Important** : Si les noms de champs CMS dans votre Webflow sont différents, adaptez-les dans le template.

---

## Schémas Standards

### Organization (identique sur toutes les pages)

```json
{
  "@type": "Organization",
  "@id": "https://www.swapcard.com/#org",
  "name": "Swapcard",
  "description": "Swapcard is an AI-powered event and community platform that helps organizers create engaging, data-driven experiences for attendees, exhibitors, and sponsors.",
  "logo": {
    "@type": "ImageObject",
    "url": "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg"
  },
  "sameAs": [
    "https://www.linkedin.com/company/swapcard/",
    "https://www.youtube.com/c/Swapcard",
    "https://x.com/Swapcard",
    "https://www.facebook.com/Swapcard/"
  ],
  "foundingDate": "2013"
}
```

**Note** : La description Organization doit être **IDENTIQUE** sur toutes les pages (consistance Google).

### WebSite (identique sur toutes les pages)

```json
{
  "@type": "WebSite",
  "@id": "https://www.swapcard.com/#website",
  "url": "https://www.swapcard.com/",
  "name": "Swapcard",
  "inLanguage": "en"
}
```

### WebPage (spécifique à chaque page)

```json
{
  "@type": "WebPage",
  "@id": "{page-url}#webpage",
  "url": "{page-url}",
  "name": "{SEO Title}",  // Utiliser le HTML <title>
  "description": "{SEO Description}",  // Utiliser la Meta Description
  "inLanguage": "en"
}
```

### BreadcrumbList (toutes les pages SAUF homepage)

```json
{
  "@type": "BreadcrumbList",
  "@id": "{page-url}#breadcrumb",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swapcard.com/" },
    { "@type": "ListItem", "position": 2, "name": "{Page Name}", "item": "{page-url}" }
  ]
}
```

---

## Types de Schémas par Type de Page

### Homepage
- WebPage
- VideoObject
- Organization
- WebSite

### Product Pages (Features)
- Product (avec brand Swapcard)
- WebPage
- BreadcrumbList
- Organization
- WebSite

### Solution Pages
- Service
- WebPage
- BreadcrumbList
- Organization
- WebSite

### Blog Hub
- CollectionPage
- BreadcrumbList
- Organization
- WebSite

### Blog Articles (CMS)
- BlogPosting
- BreadcrumbList
- Organization
- WebSite

### Pricing Page
- Product (avec Offers)
- OfferCatalog
- FAQPage (si présent)
- WebPage
- BreadcrumbList
- Organization
- WebSite

### About Page
- AboutPage
- WebPage
- BreadcrumbList
- Organization
- WebSite

---

## Checklist de Déploiement

### Pages Statiques
- [ ] Homepage déployé
- [ ] Features (9 pages) déployées
- [ ] Solutions (10 pages) déployées
- [ ] Blog Hub déployé
- [ ] Pricing déployé
- [ ] About déployé
- [ ] Autres pages déployées

### Pages CMS
- [ ] Template Blog Article déployé
- [ ] Vérifier les noms de champs CMS
- [ ] Tester sur un article publié
- [ ] Valider avec Google Rich Results Test

### Validation
- [ ] Toutes les pages validées avec Google Rich Results Test
- [ ] Toutes les pages validées avec Schema.org Validator
- [ ] Aucune erreur détectée

---

## Ressources & Validation

### Outils de Validation

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)

### Documentation

- [Schema.org Documentation](https://schema.org/)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data)

---

**Dernière mise à jour** : 2025-11-04

