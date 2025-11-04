# Templates Schema.org pour Webflow CMS

Ce dossier contient les templates Schema.org pour les pages dynamiques Webflow CMS (articles de blog).

---

## 📄 Fichiers disponibles

### 1. `blog-article-template.html`
Template avec **placeholders génériques** `{{VARIABLE_NAME}}` pour référence et personnalisation manuelle.

**Utilisation**: Copier et remplacer manuellement chaque `{{VARIABLE}}` par les valeurs réelles.

### 2. `blog-article-webflow-cms.html` ✅ **RECOMMANDÉ**
Template avec **syntaxe Webflow CMS dynamique** prête à l'emploi.

**Utilisation**:
1. Ouvrir Webflow Designer
2. Aller sur le **template CMS "Blog Post"**
3. Aller dans **Page Settings > Custom Code > Before </body> tag**
4. Copier-coller le contenu complet de `blog-article-webflow-cms.html`
5. Publier

---

## 🔧 Mapping des champs Webflow CMS

Le template `blog-article-webflow-cms.html` utilise ces champs CMS Webflow:

| Schema.org Property | Webflow CMS Field | Syntaxe |
|---------------------|-------------------|---------|
| `url` | URL complète de l'article | `{{wf {&quot;path&quot;:&quot;url&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}` |
| `headline` | Titre de l'article (H1) | `{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}` |
| `description` | Résumé de l'article | `{{wf {&quot;path&quot;:&quot;post-summary&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}` |
| `image` | Image à la une | `{{wf {&quot;path&quot;:&quot;thumbnail-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;} }}` |
| `datePublished` | Date de publication | `{{wf {&quot;path&quot;:&quot;post-date&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}` |
| `dateModified` | Date de dernière modification | `{{wf {&quot;path&quot;:&quot;updated-on&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}` |
| `articleSection` | Catégorie de l'article | `{{wf {&quot;path&quot;:&quot;category&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}` |

---

## ⚠️ Champs requis par Google

Selon la documentation SEO (CLIENT_SCHEMA_INSTRUCTIONS.md ligne 1228), ces champs sont **OBLIGATOIRES** pour BlogPosting:

- ✅ `datePublished` (format ISO: `2025-09-11` ou `2025-09-11T08:30:00Z`)
- ✅ `dateModified` (format ISO)

**Important**: Assure-toi que ces champs sont bien remplis dans ton CMS Webflow pour chaque article, sinon Google ne validera pas le schema.

---

## 📋 Vérification des noms de champs Webflow

Si les noms de champs CMS dans ton Webflow sont différents, tu dois les adapter:

1. Ouvrir Webflow CMS > Collection "Blog Posts"
2. Vérifier les noms techniques (slugs) des champs:
   - Titre → probablement `name` ✅
   - Résumé → probablement `post-summary` (à vérifier)
   - Image → probablement `thumbnail-image` (à vérifier)
   - Date de publication → probablement `post-date` (à vérifier)
   - Date de modification → probablement `updated-on` ✅ (champ système Webflow)
   - Catégorie → probablement `category` (à vérifier)

3. Adapter la syntaxe `{{wf {&quot;path&quot;:&quot;CHAMP_ICI&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}` avec le bon nom de champ.

---

## 🎯 Format des dates (CRITIQUE)

Les champs de date Webflow doivent être formatés en **ISO 8601**:

**Exemples valides**:
- `2025-09-11` (date seule)
- `2025-09-11T08:30:00Z` (date + heure + timezone)
- `2025-09-11T08:30:00+00:00` (date + heure + timezone)

**Si Webflow retourne un format différent** (ex: "September 11, 2025"), il faudra:
1. Ajouter un champ CMS personnalisé avec le format ISO manuel
2. Ou utiliser du code JavaScript custom pour formater la date

---

## 🧪 Validation

Après déploiement sur Webflow:

1. Ouvrir un article de blog publié
2. Vérifier le code source (Ctrl+U ou Cmd+Option+U)
3. Chercher `<script type="application/ld+json">`
4. Vérifier que les variables `{{wf ...}}` sont bien remplacées par les vraies valeurs
5. Copier le JSON complet
6. Valider sur [Google Rich Results Test](https://search.google.com/test/rich-results)
7. Valider sur [Schema.org Validator](https://validator.schema.org/)

---

## ✅ Checklist de déploiement

- [ ] Ouvrir Webflow Designer
- [ ] Sélectionner le template CMS "Blog Post"
- [ ] Aller dans Page Settings > Custom Code > Before </body> tag
- [ ] Copier-coller `blog-article-webflow-cms.html`
- [ ] Vérifier les noms de champs CMS (adapter si nécessaire)
- [ ] Publier le site
- [ ] Tester sur un article publié
- [ ] Valider avec Google Rich Results Test
- [ ] Valider avec Schema.org Validator
- [ ] Vérifier que datePublished et dateModified sont bien au format ISO

---

## 📖 Référence

Conformité à **CLIENT_SCHEMA_INSTRUCTIONS.md** et **NOTION.md**:
- BlogPosting specs: lignes 1217-1265
- Date requirements: ligne 1228
- Author recommendations: lignes 837-839
- Format ISO dates: lignes 852-855

**Author note**: Pour l'instant, `author` pointe vers Organization (Swapcard). Si vous voulez ajouter des auteurs individuels (Person schema), référez-vous à la section "Author page example" du NOTION.md (lignes 1730+).
