# 🔍 Audit des Pages - Comparaison Webflow vs Script

**Date**: 2025-11-04  
**Objectif**: Identifier les pages Webflow manquantes dans `generate-all-schemas.js`

---

## 📊 Résumé

### Pages dans le Script (36 pages)

- Homepage: 1
- Features: 9
- Solutions: 10
- Resources: 4
- Platform: 3
- Legal: 3
- Other: 6

### Pages dans Webflow (149 pages au total)

**Filtres appliqués**:

- ✅ `draft: false` (publiées)
- ✅ `archived: false` (non archivées)
- ❌ Exclure les templates CMS (avec `collectionId`)
- ❌ Exclure les pages de travail (`/work-in-progress/*`)
- ❌ Exclure les pages de remerciement (`/thank-you/*`)
- ❌ Exclure les pages de référence (`/referral/*`)
- ❌ Exclure les pages de design system (`/design-system/*`)
- ❌ Exclure les pages spéciales (search, filters, etc.)

---

## ✅ Pages Déjà dans le Script (36)

### Homepage (1)

- ✅ `/` - Home (ID: `66e7f7664c809e76fa704d87`)

### Features (9)

- ✅ `/features/event-networking` - Networking & Matchmaking
- ✅ `/features/event-admin-security-permissions-sso` - Account Admin & Security
- ✅ `/features/exhibitor-sponsor-tools` - Exhibitors & Sponsors
- ✅ `/features/attendee-engagement-software` - Attendee Engagement
- ✅ `/features/event-monetization` - Event Monetization
- ✅ `/features/event-registration-software` - Registration, Ticketing, Payments
- ✅ `/features/swapcard-go` - Swapcard Go
- ✅ `/features/widgets` - Widgets
- ✅ `/event-mobile-app` - Mobile App (dans "other" mais c'est une feature)

### Solutions (10)

- ✅ `/solutions/event-management-software-communities` - Community
- ✅ `/solutions/association-event-management-software` - Associations
- ✅ `/solutions/trade-show-management-software` - Trade Show Exhibitions
- ✅ `/solutions/conference-management-software` - B2B Conferences
- ✅ `/solutions/healthcare-event-management-software` - Congress/Medical Conferences
- ✅ `/solutions/media-company-event-management-software` - Media Company
- ✅ `/solutions/attendee-networking-engagement` - Increase Attendee Networking & Engagement
- ✅ `/solutions/exhibitor-sponsor-roi` - Improve Exhibitor and Sponsor ROI
- ✅ `/solutions/event-revenue-growth` - Maximize Revenue Generation & Profitability
- ✅ `/solutions/data-driven-events` - Run Data-Driven Events
- ✅ `/solutions/registration-and-onsite-access` - Modernize Registration & Onsite Access

### Resources (4)

- ✅ `/resources` - Resource Center
- ✅ `/resources/state-of-event-engagement-report-volume-2` - State of Event Engagement Report- Volume 2
- ✅ `/resources/sales-marketing-teams-executive-playbook-engagement-roi` - Sales & Marketing Team Executive Playbook
- ✅ `/resources/media-kit` - Media Kit & newsroom

### Platform (3)

- ✅ `/platform/event-engagement` - Platform Overview
- ✅ `/platform/integrations` - Integrations
- ✅ `/platform/security` - Security

### Legal (3)

- ✅ `/legal/privacy-policy` - Privacy Policy
- ✅ `/legal/terms-user` - Terms user
- ✅ `/legal/terms-organizer` - Terms organizer

### Other (6)

- ✅ `/pricing-plans` - Pricing
- ✅ `/blog` - Blog
- ✅ `/contact` - Contact Us
- ✅ `/contact-us` - Schedule Live Demo
- ✅ `/about-swapcard` - About us
- ✅ `/careers` - Careers

---

## ⚠️ Pages Manquantes (Publiées et Importantes)

### Features Manquantes (Pages publiées dans `/features/`)

1. **Event Homepage Builder** (`/features/event-homepage-builder`)

   - ID: `6902017bf1c2449738b08fed`
   - Status: ✅ Published (`draft: false`)
   - SEO: "Build branded event homepages that convert | Swapcard"
   - **Action**: Ajouter au script

2. **Onsite control access & checkpoints** (`/features/onsite-control-access-checkpoints`)

   - ID: `68a341e1a1a65d968b59fef3`
   - Status: ✅ Published
   - SEO: "Onsite control access & checkpoints"
   - **Action**: Ajouter au script

3. **Hosted Buyer Software** (`/features/hosted-buyer-software`)

   - ID: `68a2fe30a392c76e4ce47509`
   - Status: ✅ Published
   - SEO: "Swapcard Hosted Buyer Software | Smart Matchmaking & ROI"
   - **Action**: Ajouter au script

4. **Event Content & Session Management** (`/features/event-content-session-management`)

   - ID: `689c67af9eca6b3a4586d93a`
   - Status: ✅ Published
   - SEO: "Event Content & Session Management Platform | Swapcard"
   - **Action**: Ajouter au script

5. **Event Branding & Communication** (`/features/event-branding-communication-tools`)

   - ID: `689b5389af599fb23c01b0f2`
   - Status: ✅ Published
   - SEO: "Branding & Communication Tools for Events | Swapcard"
   - **Action**: Ajouter au script

6. **Private & Limited Sessions** (`/features/private-and-limited-sessions`)

   - ID: `66f419b2542cc239b4feb045`
   - Status: ✅ Published
   - SEO: "Exclusive Private & Limited Access Sessions | Swapcard"
   - **Action**: Ajouter au script

7. **Backstage** (`/features/backstage`)

   - ID: `66f4199895ceaa8b1269f631`
   - Status: ✅ Published
   - SEO: "Smooth Virtual Event Management and Hosting with Backstage"
   - **Action**: Ajouter au script

8. **AI / Personalized recommendations** (`/features/ai-personalized-recomendations`)

   - ID: `66f4197ee578b51bfa28bcb6`
   - Status: ✅ Published
   - SEO: "AI-Driven Personalized Event Recommendations | Swapcard"
   - **Action**: Ajouter au script

9. **Meeting Request Rules** (`/features/meeting-request-rules`)

   - ID: `66f419697ff56e5321863a23`
   - Status: ✅ Published
   - SEO: "Flexible Event Meeting Management Tools | Swapcard"
   - **Action**: Ajouter au script

10. **Onsite self check-in & Badge Printing** (`/features/event-check-in-app`)

    - ID: `66f418f39f550d1cfa4c2c1d`
    - Status: ✅ Published
    - SEO: "Event Check-In App for Fast Entry & Smart Badge Printing"
    - **Action**: Ajouter au script

11. **Lead Qualification** (`/features/lead-qualification`)

    - ID: `66f418b733d27c6d1272dfc6`
    - Status: ✅ Published
    - SEO: "Maximize Exhibitor ROI with Lead Qualification Tools | Swapcard"
    - **Action**: Ajouter au script

12. **Lead Capture** (`/features/lead-capture`)
    - ID: `66f417aa357293565ccf30ed`
    - Status: ✅ Published
    - SEO: "Streamline Lead Capture with User-Friendly Software | Swapcard"
    - **Action**: Ajouter au script

### Solutions Manquantes

13. **Professional Services** (`/solutions/professional-services`)
    - ID: `66e9959cad573484bc24cb50`
    - Status: ✅ Published
    - SEO: "Event Professional Services for Seamless Event Management"
    - **Action**: Ajouter au script

### Resources Manquantes

14. **Demo Environment** (`/resources/demo-environment`)

    - ID: `6729f9cea75716e89f742137`
    - Status: ✅ Published
    - SEO: "Demo Environment"
    - **Action**: Vérifier si nécessaire

15. **Newsletter** (`/resources/newsletter`)
    - ID: `65082ea7c54363b3f1abbd02`
    - Status: ✅ Published
    - SEO: "Subscribe to our newsletter | Swapcard"
    - **Action**: Vérifier si nécessaire

### Other Pages Manquantes

16. **Why Swapcard** (`/why-swapcard`)

    - ID: `66f147c2585909c7ce98b5b4`
    - Status: ✅ Published
    - SEO: "Why Swapcard - Event Engagement Solutions | Swapcard"
    - **Action**: Ajouter au script

17. **Get Started** (`/get-started`)

    - ID: `6500364f71520302cc84f4d5`
    - Status: ✅ Published
    - SEO: "Get Started with Swapcard | Event Networking & Engagement Platform"
    - **Action**: Ajouter au script

18. **Swapcard Connect** (`/swapcard-connect`)

    - ID: `64d3914e6761bd389818d749`
    - Status: ✅ Published
    - SEO: "Swapcard Connect - Join a global community of event disrupters."
    - **Action**: Vérifier si nécessaire

19. **Product Roadmap** (`/product-roadmap`)

    - ID: `64d3914e6761bd389818d73e`
    - Status: ✅ Published
    - SEO: "Product Roadmap"
    - **Action**: Vérifier si nécessaire

20. **RFP Form** (`/rfp-form`)

    - ID: `6565c9546f181e0d0895d377`
    - Status: ✅ Published
    - SEO: "Submit RFP | Swapcard - Request for Proposal Submission"
    - **Action**: Vérifier si nécessaire

21. **Demo Associations** (`/demo-associations`)
    - ID: `68e660e1b36f075fbd2824cf`
    - Status: ✅ Published
    - SEO: "Request a Demo | Boost Member Value & Sponsor ROI | Swapcard"
    - **Action**: Vérifier si nécessaire

---

## 📋 Pages Exclues (Intentionnellement)

### Pages de travail/Draft

- `/work-in-progress/*` - Pages en développement
- Toutes les pages avec `draft: true`

### Pages de remerciement

- `/thank-you/*` - Pages de remerciement (pas besoin de schema SEO)

### Pages de référence

- `/referral/*` - Pages de parrainage

### Pages de design system

- `/design-system/*` - Pages internes

### Templates CMS

- Toutes les pages avec `collectionId` (templates dynamiques)

### Pages spéciales

- `/search` - Page de recherche
- `/filter-*` - Pages de filtres
- `/categories` - Template CMS
- `/authors` - Template CMS (déjà géré séparément)
- `/blog` - Template CMS (déjà géré avec template)

---

## 🎯 Recommandations

### Priorité 1: Pages Features Manquantes (12 pages)

Ces pages sont publiées et importantes pour le SEO. Elles doivent être ajoutées au script avec le schéma **Product** (comme les autres features).

**Pages à ajouter**:

1. Event Homepage Builder
2. Onsite control access & checkpoints
3. Hosted Buyer Software
4. Event Content & Session Management
5. Event Branding & Communication
6. Private & Limited Sessions
7. Backstage
8. AI / Personalized recommendations
9. Meeting Request Rules
10. Onsite self check-in & Badge Printing
11. Lead Qualification
12. Lead Capture

### Priorité 2: Solutions Manquantes (1 page)

- Professional Services

### Priorité 3: Pages Other Importantes (2 pages)

- Why Swapcard
- Get Started

### Priorité 4: Pages à Vérifier (6 pages)

Discuter avec le client pour savoir si ces pages ont besoin de schema:

- Demo Environment
- Newsletter
- Swapcard Connect
- Product Roadmap
- RFP Form
- Demo Associations

---

## 📝 Actions Requises

1. **Ajouter 15 pages prioritaires** au script `generate-all-schemas.js`
2. **Vérifier avec le client** pour les 6 pages de Priorité 4
3. **Regénérer tous les schemas** avec `node schema-scripts/generate-all-schemas.js`
4. **Mettre à jour DEPLOYMENT_CHECKLIST.md** avec le nouveau total

---

## 📊 Nouveau Total Estimé

**Actuel**: 36 pages  
**Après ajout Priorité 1-3**: 36 + 15 = **51 pages**  
**Si Priorité 4 incluse**: 51 + 6 = **57 pages**

---

**Note**: Les templates CMS (Blog Articles, Authors) sont gérés séparément et ne sont pas comptés dans ce total.
