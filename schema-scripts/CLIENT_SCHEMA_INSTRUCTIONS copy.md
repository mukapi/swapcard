# Swapcard Schema.org Implementation Guide

> **Source**: Notion - Notes & Reflections / Swapcard  
> **Last Updated**: 2025-11-04  
> **Purpose**: Complete reference for implementing Schema.org structured data across Swapcard website pages

---

## Quick Start

### Generate Schema Files

To generate all schema HTML files:

```bash
node schema-scripts/generate-all-schemas.js
```

This creates HTML files ready to paste into Webflow's custom code section.

### Use Generated Schemas

1. Open any generated `.html` file in the `schema-scripts/` folders
2. Copy the entire content (including `<script>` tags)
3. In Webflow: **Page Settings** → **Custom Code** → **Head Code**
4. Paste and publish

### Project Structure

```
schema-scripts/
├── generate-all-schemas.js    # Main script to generate all schema files
├── CLIENT_SCHEMA_INSTRUCTIONS.md  # This file - complete reference
├── homepage/                  # Homepage schema
├── features/                  # Feature pages schemas (9 files)
├── solutions/                 # Solution pages schemas (10 files)
├── resources/                 # Resource pages schemas (4 files)
├── platform/                  # Platform pages schemas (3 files)
├── legal/                     # Legal pages schemas (3 files)
└── other/                     # Other pages schemas (6 files)
```

**Total**: 36 schema files generated

### Customization

- **Update Organization info**: Edit `baseOrganization` in `generate-all-schemas.js` and re-run
- **Add new pages**: Add page data to `pages` array in `generate-all-schemas.js` and re-run
- **Modify schema types**: Update `getSchemaType()` function in `generate-all-schemas.js`

---

## Table of Contents

1. [Context](#1-context)
2. [General Rules](#2-general-rules-for-implementing-structured-data)
3. [Common Schemas (All Pages)](#3-schemas-to-add-on-all-pages)
4. [Page-Specific Implementations](#4-structured-data-by-page-type)
   - [Homepage](#41-homepage)
   - [Product Page (Feature)](#42-product-page-feature)
   - [Solution Page](#43-solution-page)
   - [Blog Hub Page](#44-blog-hub-page)
   - [Blog Article](#45-blog-article)
   - [Pricing Page](#46-pricing-page)
   - [About Page](#47-about-page)
   - [Author Page](#48-author-page)
   - [Author Hub Page](#49-author-hub-page)

---

## 1) Context

Structured data helps Google to precisely understand the content of a page (product, article, FAQ, video, service). Thanks to a common schema system, Schema.org, it is possible to indicate whether it is a product, an article, a FAQ, a video, a service, etc.

In addition to making it easier for robots to understand, it is a way to make a page eligible for rich results (price, breadcrumb, FAQ, carousel, video badge). But eligible does not mean guaranteed, as display depends on the query, the context, and the quality of the markup.

**The most important rule** is to choose schemas that reflect exactly what is visible on a page (same prices, same ratings, same FAQ, etc.). The type of schema must therefore match the real role of the page:

- `BlogPosting` for an article
- `Product` for a product page
- `Service` for a solution page
- etc.

The goal is to help Google understand as clearly as possible the different entities and the links between them (Organization, WebSite, Product, etc.).

---

## 2) General Rules for Implementing Structured Data

**Have a single `@graph`** that groups all entities (Organization, WebSite, WebPage, FAQPage, etc.) because this makes it possible to concentrate all the information in a single block of code rather than scattering it. This makes reading simpler and more reliable for Google, which understands that all this data is linked together.

**Use `@id` with URLs** acts as a real identity card: each element (organization, site, page) has its unique address, which avoids any confusion with other entities bearing a similar name. This is a good practice because it improves consistency and helps search engines to better index and link information.

---

## 3) Schemas to Add on All Pages

### WebPage Schema

```json
{
  "@type": "WebPage",
  "@id": "https://www.swapcard.com/#webpage",
  "url": "https://www.swapcard.com/",
  "name": "Swapcard - Event Engagement Platform for Trade Shows, Conferences & Associations",
  "inLanguage": "en",
  "description": "Boost engagement, maximize ROI, and grow revenue with AI-powered tools—experience it all through Swapcard's smart, user-friendly platform."
}
```

> **SEO Agency Note (Zoé)**:
>
> - **`name`**: Use the HTML `<title>` tag (Balise Title) for the `name` property of the WebPage schema.
> - **`description`**: The description must match what the page is about. For the WebPage schema, you can reuse the Meta Description.
>
> Change the URL depending on the page, the description, and add useful properties such as name, isPartOf, imageObject etc.

### Organization Schema

The essential properties for this Organization schema are: founding date, imageObject, description, contactPoint.

> **SEO Agency Note (Zoé)**: The description in the Organization schema must be the definition of what the Swapcard entity is as a whole. This description should **always stay the same** whenever Swapcard is defined (articles, social media, digital PR, etc.). Doing so makes the Swapcard entity consistent in Google's eyes. You can use the boilerplate for that.

```json
{
  "@type": "Organization",
  "@id": "https://www.swapcard.com/#org",
  "name": "Swapcard",
  "url": "https://www.swapcard.com/",
  "description": "Swapcard is an AI-powered event and community platform that helps organizers create engaging, data-driven experiences for attendees, exhibitors, and sponsors.",
  "logo": {
    "@type": "ImageObject",
    "@id": "https://www.swapcard.com/#logo",
    "url": "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg",
    "contentUrl": "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg"
  },
  "sameAs": [
    "https://www.linkedin.com/company/swapcard/",
    "https://www.youtube.com/c/Swapcard",
    "https://x.com/Swapcard",
    "https://www.facebook.com/Swapcard/"
  ],
  "foundingDate": "2013",
  "founder": [
    {
      "@type": "Person",
      "name": "Baptiste Boulard",
      "jobTitle": "Chief Executive Officer"
    },
    {
      "@type": "Person",
      "name": "Damien Courbon",
      "jobTitle": "Chief Operations Officer"
    },
    {
      "@type": "Person",
      "name": "Godefroy des Francs",
      "jobTitle": "Chief Product Officer"
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://www.swapcard.com/contact",
      "availableLanguage": "en",
      "areaServed": "Worldwide"
    },
    {
      "@type": "ContactPoint",
      "contactType": "help center",
      "url": "https://help.swapcard.com/en/",
      "availableLanguage": "en",
      "areaServed": "Worldwide"
    }
  ]
}
```

### WebSite Schema

```json
{
  "@type": "WebSite",
  "@id": "https://www.swapcard.com/#website",
  "url": "https://www.swapcard.com/",
  "name": "Swapcard",
  "inLanguage": "en",
  "description": "Swapcard is an AI-powered event and community platform that helps organizers create engaging, data-driven experiences for attendees, exhibitors, and sponsors."
}
```

### BreadcrumbList Schema

> **Note**: To be added on all pages **EXCEPT** the Homepage

```json
{
  "@type": "BreadcrumbList",
  "@id": "https://www.swapcard.com/event-mobile-app/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.swapcard.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Event mobile app",
      "item": "https://www.swapcard.com/event-mobile-app"
    }
  ]
}
```

> **Note**: Change the name and URL of the page according to the page in position 2 and add position 3, 4, etc. if necessary.

---

## 4) Structured Data by Page Type

### 4.1 Homepage

**URL**: `https://www.swapcard.com/`

**What is currently there:**

- VideoObject schema

**Explanation of suggested improvements:**

- We have kept the VideoObject schema which correctly represents the video present on the page.
- Added the Organization schema which defines the Swapcard brand entity with the properties: name, description, logo, and the sameAs schema that makes it possible to link the entity to the various social networks. It is the fundamental building block that anchors the brand in Google's Knowledge Graph.
- Added the WebSite schema which signals the existence of the official website and specifies its main features, such as the language and the internal search URL.
- Added the WebPage schema which precisely describes the current page, here the homepage, with its title, description, and main image. This helps Google understand that this page is indeed the official entry point of the site.
- Added the contactPoint schema: this schema provides information on the means of contact (customer support, sales team, email, phone). It improves the company's credibility in the eyes of search engines and facilitates the display of this information directly in Google, particularly for "Swapcard contact" type searches.

**Complete Example:**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.swapcard.com/#org",
      "name": "Swapcard",
      "url": "https://www.swapcard.com/",
      "description": "Swapcard is an AI-powered event and community platform that helps organizers create engaging, data-driven experiences for attendees, exhibitors, and sponsors.",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.swapcard.com/#logo",
        "url": "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg",
        "contentUrl": "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/swapcard/",
        "https://www.youtube.com/c/Swapcard",
        "https://x.com/Swapcard",
        "https://www.facebook.com/Swapcard/"
      ],
      "foundingDate": "2013",
      "founder": [
        {
          "@type": "Person",
          "name": "Baptiste Boulard",
          "jobTitle": "Chief Executive Officer"
        },
        {
          "@type": "Person",
          "name": "Damien Courbon",
          "jobTitle": "Chief Operations Officer"
        },
        {
          "@type": "Person",
          "name": "Godefroy des Francs",
          "jobTitle": "Chief Product Officer"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "url": "https://www.swapcard.com/contact",
          "availableLanguage": "en",
          "areaServed": "Worldwide"
        },
        {
          "@type": "ContactPoint",
          "contactType": "help center",
          "url": "https://help.swapcard.com/en/",
          "availableLanguage": "en",
          "areaServed": "Worldwide"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.swapcard.com/#website",
      "url": "https://www.swapcard.com/",
      "name": "Swapcard",
      "inLanguage": "en",
      "description": "Swapcard is an AI-powered event and community platform that helps organizers create engaging, data-driven experiences for attendees, exhibitors, and sponsors."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.swapcard.com/#webpage",
      "url": "https://www.swapcard.com/",
      "name": "Swapcard — Official site",
      "inLanguage": "en",
      "description": "Swapcard is an AI-powered event and community platform that helps organizers create engaging, data-driven experiences for attendees, exhibitors, and sponsors."
    },
    {
      "@type": "VideoObject",
      "@id": "https://www.swapcard.com/#video",
      "name": "Swapcard – Event Engagement Platform",
      "description": "Discover how Swapcard helps organizers boost event engagement with AI-driven recommendations, interactive tools, lead generation, and real-time analytics.",
      "thumbnailUrl": "https://embed-ssl.wistia.com/deliveries/b3e4898baa04474e534ab0a125659eb9.jpg?image_crop_resized=960x540",
      "uploadDate": "2024-09-27T15:31:20+00:00",
      "duration": "PT51S",
      "embedUrl": "https://fast.wistia.net/embed/iframe/9gb4ujxa76",
      "contentUrl": "https://embed-ssl.wistia.com/deliveries/730ddbf2f7bcdadf63b264677eaee80da6138073.m3u8",
      "transcript": "Achieve better outcomes with an event engagement platform tailored to your needs. Meet Swapcard, the event engagement platform powered by AI-driven recommendations and interactive tools. Turn attendees into high-quality leads with lead-generation tools. Help exhibitors stand out with interactive booths & unique sponsorship options. Boost event registration with flexible ticket options and attract more sponsors and exhibitors with premium add-ons and tailored solutions. Use detailed analytics to track event performance in real time, optimize strategies, and maximize ROI. Unify data sources, boost efficiency, and focus on what matters most. Ready to deliver better event outcomes? Partner with Swapcard, today.",
      "potentialAction": {
        "@type": "SeekToAction",
        "target": "https://fast.wistia.net/embed/iframe/9gb4ujxa76?pageUrl=https%3A%2F%2Fwww.swapcard.com%2F&wtime={seek_to_second_number}",
        "startOffset-input": {
          "@type": "PropertyValueSpecification",
          "valueRequired": true,
          "valueName": "seek_to_second_number"
        }
      }
    }
  ]
}
```

---

### 4.2 Product Page (Feature)

**URL**: `https://www.swapcard.com/event-mobile-app`

**What is currently there:**

- VideoObject schema
- FAQPage schema

**Explanation of suggested improvements:**

- **The SoftwareApplication schema** is the central element of this product page. It is more precise than the Product schema because it describes the Swapcard app with its characteristics: operating system, category, description, and installation links on iOS and Android. It is the most relevant type for a mobile application and the most precise in Google's eyes. This schema can also be enriched with ratings and reviews if they are published transparently on the page.
- The **BreadcrumbList schema** makes it possible to expose the breadcrumb "Home → Event mobile app." This is a good practice that helps Google understand the site's internal hierarchy and the position of this page in the tree structure. This markup is often reused in the search results in the form of clickable links. It improves navigation and can increase the click-through rate.
- **The FAQPage schema** structures the questions and answers present on the page. Each question is linked to a validated answer (acceptedAnswer), which complies with Google's guidelines. This schema can give rise to a rich result in the form of accordions directly in the SERP.
- **The AggregateRating schema** has not been added by default because it involves strict conditions. To be compliant, the rating and the number of reviews must be visible on the page, attributed to the correct source (App Store or Google Play) and updated regularly. Without these elements, Google may ignore or penalize the markup. It is therefore preferable to wait to display these data officially on the page before integrating it.

**Schemas Required:**

- Organization schema
- WebPage schema
- WebSite schema
- BreadcrumbList schema
- SoftwareApplication schema
- FAQPage schema

**SoftwareApplication Schema Example:**

```json
{
  "@type": "SoftwareApplication",
  "@id": "https://www.swapcard.com/event-mobile-app/#app",
  "name": "Swapcard Event Mobile App",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "BusinessApplication, MobileApplication",
  "url": "https://www.swapcard.com/event-mobile-app",
  "installUrl": [
    "https://apps.apple.com/us/app/swapcard-smart-event-app/id879488719",
    "https://play.google.com/store/apps/details?id=com.swapcard.apps.android"
  ],
  "description": "An AI-powered event app for personalized agendas, networking, lead capture, interactive sessions (polls, Q&A), and real-time updates across iOS and Android.",
  "inLanguage": "en",
  "mainEntityOfPage": {
    "@id": "https://www.swapcard.com/event-mobile-app/#webpage"
  }
}
```

> **SEO Agency Note (Zoé)**: Use the **H1** for the `name` property of the SoftwareApplication schema (the main schema of the page).

**Complete Example:**

See full example in the [Notion source](#) - includes Organization, WebSite, WebPage, BreadcrumbList, SoftwareApplication, FAQPage, and VideoObject schemas.

---

### 4.3 Solution Page

**URL**: `https://www.swapcard.com/solutions/attendee-networking-engagement`

**What is currently there:**

- VideoObject

**Explanation of suggested improvements:**

- A **Solution page** highlights a benefit or a promise for the user, rather than a concrete product or a downloadable application. This is why the **Service** schema is the most appropriate: it makes it possible to describe an intangible offering, in this case an event tech service that promotes networking and participant engagement. The Product schema is more suitable for "feature" pages with a clear product proposition (possibly with a rating), and SoftwareApplication for pages dedicated to the app (iOS/Android, installUrl, OS). Here, these types would be less relevant.
- No **visible and clickable** reviews/ratings on this solution page, therefore no AggregateRating. Google requires that the aggregated rating displayed in schema be **visible on the page** (same numbers, clear source). If you later integrate local social proof (e.g. displayed testimonials/ratings), we could then add the markup in compliance.
- The **BreadcrumbList** makes the hierarchy explicit: Home → Solutions → Attendee networking & engagement. This is useful for understanding the site structure and may appear in the "breadcrumb" rich result. However, we noted that the solutions page `https://www.swapcard.com/solutions` returned a 404 error.
- There are two key videos on the page (AI demo / success story): therefore we keep **VideoObject** for each.

**Service Schema Example:**

```json
{
  "@type": "Service",
  "@id": "https://www.swapcard.com/solutions/attendee-networking-engagement/#service",
  "name": "Attendee Networking & Engagement",
  "serviceType": "Event technology service",
  "url": "https://www.swapcard.com/solutions/attendee-networking-engagement",
  "description": "Boost attendee networking and engagement with tailored event journeys, AI-recommended connections, and interactive content to drive participation.",
  "brand": { "@id": "https://www.swapcard.com/#org" },
  "provider": { "@id": "https://www.swapcard.com/#org" },
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://www.swapcard.com/",
    "availableLanguage": ["en"]
  },
  "audience": {
    "@type": "BusinessAudience",
    "name": "Event organizers, associations, trade show & conference teams"
  }
}
```

> **SEO Agency Note (Zoé)**:
>
> - **`serviceType`**: Reuse the H1 that defines the type of service.
> - **`description`**: Reuse the Meta Description to define the page and the service offered.

**Complete Example:**

See full example in the [Notion source](#) - includes Organization, WebSite, WebPage, BreadcrumbList, Service, and VideoObject schemas.

---

### 4.4 Blog Hub Page

**URL**: `https://www.swapcard.com/blog`

**What is currently there:**

- No schema

**Explanation of suggested improvements:**

- We use **CollectionPage** because this URL presents a **list of articles**, and not a single piece of content. This schema clearly indicates to the engines that it is a **navigable collection** (filters, categories, search).
- The Blog type is optional and does not provide a dedicated rich result. It can be added if you want to **model the "Swapcard Blog" entity** and link an ItemList with a top 10 of recent articles. In such cases, these articles will need to be updated from time to time to remain faithful to the content of the page. It is a useful semantic plus, but not mandatory for the validity of the schema.

**CollectionPage Schema Example:**

```json
{
  "@type": "CollectionPage",
  "@id": "https://www.swapcard.com/blog/#webpage",
  "url": "https://www.swapcard.com/blog",
  "name": "The Swapcard Blog",
  "description": "Insights and guides on event marketing, attendee networking, exhibitor ROI, and more.",
  "inLanguage": "en",
  "keywords": [
    "Trade Shows",
    "Educational Guides",
    "Community",
    "Event Marketing",
    "Virtual Events",
    "Monetizing Events",
    "Sustainable Events",
    "Success Stories",
    "Hybrid events",
    "Life at Swapcard",
    "Event Networking",
    "Lead Generation",
    "In-Person Events",
    "Event Tech",
    "Industry News",
    "Registration",
    "Exhibitor ROI",
    "Expert Opinions",
    "Audience Engagement"
  ]
}
```

**Complete Example:**

See full example in the [Notion source](#) - includes Organization, WebSite, CollectionPage, and BreadcrumbList schemas.

---

### 4.5 Blog Article

**URL**: `https://www.swapcard.com/blog/event-sponsorship`

**What is currently there:**

- No schema

**Explanation of suggested improvements:**

- Here we use **BlogPosting** because we are on a single article page (title, image, author, dates). This type of schema is the one expected by Google for editorial content and it can activate enriched results.
- In this schema, `datePublished` and `dateModified` in ISO format are missing (e.g. `2025-09-11` or `2025-09-11T08:30:00Z`). These fields are **required** by Google for BlogPosting. We have integrated the field but we do not have the data.

**BlogPosting Schema Example:**

```json
{
  "@type": "BlogPosting",
  "@id": "https://www.swapcard.com/blog/event-sponsorship/#article",
  "url": "https://www.swapcard.com/blog/event-sponsorship",
  "headline": "Event Sponsorship: How To Get Sponsors for an Event?",
  "description": "Learn everything about event sponsorship and discover how to find and secure the best sponsors for your events with actionable tips and strategies.",
  "image": [
    "https://cdn.prod.website-files.com/63a239cf8a90f75cb35a00fd/689e0168bdb7519c65bcc678_how-to-get-sponsors-for-an-event.webp"
  ],
  "inLanguage": "en",
  "author": {
    "@type": "Organization",
    "name": "Swapcard Team"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.swapcard.com/#org"
  },
  "mainEntityOfPage": "https://www.swapcard.com/blog/event-sponsorship",
  "articleSection": [
    "Educational Guides",
    "Monetizing Events",
    "In-Person Events"
  ],
  "datePublished": "",
  "dateModified": ""
}
```

> **SEO Agency Note (Zoé)**:
>
> - **`headline`**: Reuse the H1.
> - **`description`**: You can reuse the Meta Description or add a free description, like a short summary of the article.
> - **`author`**: It is recommended to indicate a visible author on each article, then declare it in structured data via "author," also linking the article through a Person entity so that Google clearly understands who the author is and their connection with Swapcard. This helps strengthen E-E-A-T. For now, the author section is quite limited; this is indicative. Eventually, a real author will need to be designated.
>
> **Important**: `datePublished` and `dateModified` are required fields. These must be filled with ISO 8601 date format (e.g., `2025-09-11` or `2025-09-11T08:30:00Z`).

**Complete Example:**

See full example in the [Notion source](#) - includes Organization, WebSite, BlogPosting, and BreadcrumbList schemas.

---

### 4.6 Pricing Page

**URL**: `https://www.swapcard.com/pricing-plans`

**What is currently there:**

- FAQPage schema

**Explanation of suggested improvements:**

- We have kept and completed the FAQPage schema so that it properly represents the FAQ present on the page.
- We use **Product** because the page displays concrete prices: these are indeed Swapcard services that can be purchased in different plans. Each plan (Starter, Professional, Enterprise) becomes an **Offer** with a price, a currency, and an action link. We add an **image** and a **description** so that Google understands what it is, and we declare the brand as **Brand** (rather than Organization), which the validator prefers. Since the Enterprise plan is "Custom," it remains an offer without a price, but that is not a problem because it is consistent with the content.
- We use **OfferCatalog** which describes the grid of plans as a user sees it. This is not mandatory for rich results, but it structures the information and properly links each pricing card to its offer. In short, we tell the engine "here is the table of plans, in order." It's clean, faithful to what we have on the page.

**Product Schema with Offers:**

```json
{
  "@type": "Product",
  "@id": "https://www.swapcard.com/pricing-plans/#product",
  "name": "Swapcard Pricing plans that fit your event goals",
  "description": "Explore Swapcard's pricing options and choose the perfect event engagement solution for your needs. Get started with affordable plans today!",
  "image": [
    "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg"
  ],
  "url": "https://www.swapcard.com/pricing-plans",
  "brand": { "@type": "Brand", "name": "Swapcard" },
  "offers": [
    {
      "@type": "Offer",
      "@id": "https://www.swapcard.com/pricing-plans/#offer-starter",
      "name": "Starter",
      "url": "https://www.swapcard.com/pricing-plans#starter",
      "availability": "https://schema.org/InStock",
      "price": "520",
      "priceCurrency": "EUR"
    },
    {
      "@type": "Offer",
      "@id": "https://www.swapcard.com/pricing-plans/#offer-professional",
      "name": "Professional",
      "url": "https://www.swapcard.com/pricing-plans#professional",
      "availability": "https://schema.org/InStock",
      "price": "4190",
      "priceCurrency": "EUR"
    },
    {
      "@type": "Offer",
      "@id": "https://www.swapcard.com/pricing-plans/#offer-enterprise",
      "name": "Enterprise (Custom)",
      "url": "https://www.swapcard.com/pricing-plans#enterprise",
      "availability": "https://schema.org/InStock"
    }
  ]
}
```

> **SEO Agency Note (Zoé)**:
>
> - **`name`**: Reuse the H1 (for Pricing page Product schema).
> - **`description`**: Reuse the Meta Description.
>
> **Note**: For Product pages (Feature pages), use **H1 + brand name** for the `name` property of the Product schema, which is the main schema of the page.

**OfferCatalog Schema:**

```json
{
  "@type": "OfferCatalog",
  "@id": "https://www.swapcard.com/pricing-plans/#catalog",
  "name": "Pricing plans",
  "url": "https://www.swapcard.com/pricing-plans",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Starter",
      "item": { "@id": "https://www.swapcard.com/pricing-plans/#offer-starter" }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Professional",
      "item": {
        "@id": "https://www.swapcard.com/pricing-plans/#offer-professional"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Enterprise (Custom)",
      "item": {
        "@id": "https://www.swapcard.com/pricing-plans/#offer-enterprise"
      }
    }
  ]
}
```

**Complete Example:**

See full example in the [Notion source](#) - includes Organization, WebSite, WebPage, Product with Offers, OfferCatalog, FAQPage, and BreadcrumbList schemas.

---

### 4.7 About Page

**URL**: `https://www.swapcard.com/about-swapcard`

**What is currently there:**

- VideoObject schema

**Explanation of suggested improvements:**

- This is an "About" page: the **AboutPage** type describes exactly this context and remains a subtype of WebPage, therefore more precise without unnecessary duplication. It helps the engines understand that we are talking about the company, its mission, and its history.
- On the about page it will also be necessary in the future to add the various authors who will be listed on this page. Dedicated author pages will also be created with detailed information on each author. This information can be reused in the structured data with the Person schema and its different properties: name, image, jobTitle, worksFor, url, sameAs (LinkedIn, X, etc.), description.

**AboutPage Schema Example:**

```json
{
  "@type": "AboutPage",
  "@id": "https://www.swapcard.com/about-swapcard/#webpage",
  "url": "https://www.swapcard.com/about-swapcard",
  "name": "About Swapcard",
  "description": "Learn about Swapcard's mission, team, and platform powering engaging, data-driven event and community experiences worldwide.",
  "inLanguage": "en"
}
```

**Complete Example:**

See full example in the [Notion source](#) - includes Organization, WebSite, AboutPage, BreadcrumbList, and VideoObject schemas.

---

### 4.8 Author Page

**Explanation of suggested improvements:**

- This is an author page, so we should add a **Person** schema to describe the author (name, photo, job title, worksFor, social links). This is the "human" entity Google needs to recognize to attribute authored articles. Give it a **stable** `@id` (often the author page with `#person`) so you can **reuse** exactly the same identifier in the `BlogPosting` of every signed article. This is key for best practice and E-E-A-T.
- **ProfilePage** describes the web page itself (the URL of the author profile), not the person. The idea is to link the page to the person via `mainEntity`. Search engines prefer this "document + entity" pair: the document (**ProfilePage**) points to the person, and the person points back to "their" page. This clarifies the graph, helps with disambiguation (Knowledge Graph), and lets you reuse the same **Person** `@id` as the `author` in each `BlogPosting`.

**ProfilePage Schema:**

```json
{
  "@type": "ProfilePage",
  "@id": "https://www.swapcard.com/authors/alex-martin/#webpage",
  "url": "https://www.swapcard.com/authors/alex-martin",
  "name": "Author: Alex Martin",
  "description": "Articles by Alex Martin on event tech, attendee engagement, and exhibitor ROI.",
  "inLanguage": "en",
  "mainEntity": {
    "@id": "https://www.swapcard.com/authors/alex-martin/#person"
  }
}
```

**Person Schema:**

```json
{
  "@type": "Person",
  "@id": "https://www.swapcard.com/authors/alex-martin/#person",
  "name": "Alex Martin",
  "givenName": "Alex",
  "familyName": "Martin",
  "jobTitle": "Senior Content Strategist",
  "worksFor": { "@id": "https://www.swapcard.com/#org" },
  "url": "https://www.swapcard.com/authors/alex-martin",
  "image": {
    "@type": "ImageObject",
    "url": "https://www.swapcard.com/assets/authors/alex-martin.jpg"
  },
  "sameAs": [
    "https://www.linkedin.com/in/alex-martin/",
    "https://x.com/alexmartin"
  ],
  "description": "Senior Content Strategist covering event technology, attendee engagement, and data-driven experiences.",
  "mainEntityOfPage": {
    "@id": "https://www.swapcard.com/authors/alex-martin/#webpage"
  }
}
```

**Complete Example:**

See full example in the [Notion source](#) - includes Organization, WebSite, ProfilePage, Person, and BreadcrumbList schemas.

---

### 4.9 Author Hub Page

**Explanation of suggested improvements:**

- **CollectionPage**: this type specifies that it's a collection/listing page—here, the authors hub. It exposes its primary resource via `mainEntity` pointing to an `ItemList` of authors. `isPartOf` clearly ties the page to the `WebSite`. Provide stable `name`, `description`, `url`, `inLanguage`, and `@id`. This typing improves how the page's intent is understood compared to a simple `WebPage`.
- **ItemList** structures the list of authors and makes ordering explicit via `itemListOrder` and `position`. Each `ListItem` references the target element in `item`; ideally, this is a `Person` `@id` (not an inline object) to enable reuse elsewhere. `numberOfItems` documents the count and helps with previews. This modeling makes the list machine-readable, reliable, and extensible.
- **Person** describes the author as a reusable entity (name, job title, image, profiles, `worksFor` → `Organization`). Give it a **stable** `@id` (often the author page URL with `#person`) so it can be reused as `author` in each `BlogPosting`. `sameAs` links help connect official profiles. Ideally, the individual author page is a `ProfilePage` whose `mainEntity` is this `Person`, with a mirrored link back via `mainEntityOfPage`.

**CollectionPage Schema:**

```json
{
  "@type": "CollectionPage",
  "@id": "https://www.swapcard.com/authors/#webpage",
  "url": "https://www.swapcard.com/authors",
  "name": "Authors",
  "description": "Explore all Swapcard authors and their latest articles on event technology, attendee engagement, and ROI.",
  "inLanguage": "en",
  "isPartOf": { "@id": "https://www.swapcard.com/#website" },
  "mainEntity": { "@id": "https://www.swapcard.com/authors/#itemlist" }
}
```

**ItemList Schema:**

```json
{
  "@type": "ItemList",
  "@id": "https://www.swapcard.com/authors/#itemlist",
  "name": "Swapcard Authors",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 3,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": { "@id": "https://www.swapcard.com/authors/alex-martin/#person" }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": { "@id": "https://www.swapcard.com/authors/jamie-chen/#person" }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": { "@id": "https://www.swapcard.com/authors/riley-santos/#person" }
    }
  ]
}
```

**Complete Example:**

See full example in the [Notion source](#) - includes Organization, WebSite, CollectionPage, ItemList, multiple Person schemas, and BreadcrumbList.

---

## Important Notes

### Content Sourcing Guidelines (SEO Agency Recommendations)

Based on SEO agency feedback, here are the guidelines for populating schema properties:

#### WebPage Schema

- **`name`**: Use the HTML `<title>` tag (Balise Title) for each page
- **`description`**: Reuse the Meta Description (must match what the page is about)

#### Organization Schema

- **`description`**: Must be the definition of what the Swapcard entity is as a whole. This description should **always stay the same** whenever Swapcard is defined (articles, social media, digital PR, etc.). Use the boilerplate description to maintain consistency in Google's eyes.

#### Main Schema Types (Product, Service, SoftwareApplication, BlogPosting)

- **`name` (Product)**: Use **H1 + brand name** for Product schema (main schema of Feature pages)
- **`name` (Product - Pricing)**: Use **H1** for Pricing page Product schema
- **`name` (SoftwareApplication)**: Use the **H1** for the name (main schema of the page)
- **`serviceType` (Service)**: Reuse the **H1** that defines the type of service
- **`description` (Service)**: Reuse the **Meta Description** to define the page and the service offered
- **`headline` (BlogPosting)**: Reuse the **H1**
- **`description` (BlogPosting)**: Reuse the **Meta Description** or add a free description (short summary of the article)

#### Author Recommendations

- **BlogPosting `author`**: It is recommended to indicate a visible author on each article, then declare it in structured data via "author," also linking the article through a Person entity so that Google clearly understands who the author is and their connection with Swapcard. This helps strengthen E-E-A-T.
- For now, the author section may be limited/indicative. Eventually, a real author will need to be designated with a Person schema.

### AggregateRating Requirements

When adding `AggregateRating` to a schema, ensure:

- The rating and number of reviews are **visible on the page**
- The source is clearly attributed (e.g., App Store, Google Play)
- The data is updated regularly
- Without these elements, Google may ignore or penalize the markup

### Date Fields

For `BlogPosting` schemas, `datePublished` and `dateModified` are **required** fields. Use ISO 8601 format:

- Date only: `2025-09-11`
- Date and time: `2025-09-11T08:30:00Z`

### Breadcrumb Consistency

- **Homepage**: No BreadcrumbList schema
- **All other pages**: Include BreadcrumbList schema
- Ensure breadcrumb hierarchy matches actual site structure
- Use consistent naming (e.g., "Home" for position 1)

### @id Best Practices

- Use URLs with fragment identifiers (e.g., `#org`, `#webpage`, `#product`)
- Keep `@id` values consistent across all pages
- Use `@id` references to link related entities (e.g., `brand: { "@id": "https://www.swapcard.com/#org" }`)

---

## Quick Reference: Common Schema Properties

### Organization (Standard)

- `@id`: `https://www.swapcard.com/#org`
- `name`: "Swapcard"
- `logo`: ImageObject with SVG URL
- `sameAs`: Array of social media URLs
- `foundingDate`: "2013"
- `founder`: Array of Person objects
- `contactPoint`: Array of ContactPoint objects

### WebSite (Standard)

- `@id`: `https://www.swapcard.com/#website`
- `url`: `https://www.swapcard.com/`
- `name`: "Swapcard"
- `inLanguage`: "en"
- `description`: Standard Swapcard description

### WebPage (Page-Specific)

- `@id`: `{page-url}#webpage`
- `url`: Full page URL
- `name`: Use the HTML `<title>` tag (Balise Title) - corresponds to SEO meta title
- `inLanguage`: "en"
- `description`: Use the Meta Description (must match what the page is about)

### BreadcrumbList (Page-Specific)

- `@id`: `{page-url}#breadcrumb`
- `itemListElement`: Array of ListItem objects
- Position 1 always: `{ "name": "Home", "item": "https://www.swapcard.com/" }`
- Subsequent positions match page hierarchy

---

## Validation Checklist

Before implementing any schema:

- [ ] All schemas are grouped in a single `@graph`
- [ ] Each entity has a unique `@id` with URL fragment
- [ ] Organization schema is identical across all pages
- [ ] WebPage schema matches actual page content
- [ ] BreadcrumbList reflects actual site structure (except homepage)
- [ ] Page-specific schema type matches page purpose (Product, Service, BlogPosting, etc.)
- [ ] All required fields are present (especially dates for BlogPosting)
- [ ] AggregateRating only used when ratings are visible on page
- [ ] VideoObject schemas match actual videos on page
- [ ] FAQPage schemas match actual FAQs on page

---

## Page Implementation Status

**Last Verified**: 2025-11-04  
**Webflow Site ID**: `6341448fda79c92372b010a4`

### Pages Mentioned in This Document

All static pages referenced in this document are included in `generate-all-schemas.js`:

✅ **Homepage** - `/` (ID: `66e7f7664c809e76fa704d87`)  
✅ **Product Page (Feature)** - `/event-mobile-app` (ID: `64d3914e6761bd389818d68f`)  
✅ **Product Page (Feature)** - `/features/event-registration-software` (ID: `67bc912ad5449e905149a5a6`)  
✅ **Solution Page** - `/solutions/attendee-networking-engagement` (ID: `66e994786b991285d48b518b`)  
✅ **Blog Hub Page** - `/blog` (ID: `66ec1e5ff5409890427adeab`)  
✅ **Pricing Page** - `/pricing-plans` (ID: `66f2815f414fd64ce7d60b04`)  
✅ **About Page** - `/about-swapcard` (ID: `64d3914e6761bd389818d665`)

### ⚠️ Missing Pages

**Author Hub Page** - `/authors`

- Webflow ID: `66eaf51f50a4fd43177de8f5`
- Status: Published
- Schema Type: CollectionPage (see section 4.9)
- **Action Required**: Add to `generate-all-schemas.js`

### 📝 CMS Pages (Dynamic Content)

These pages are CMS items and cannot be added as static pages in `generate-all-schemas.js`:

- **Blog Articles** (`/blog/*`) - BlogPosting schema

  - **Solution**: Add schema via Webflow CMS template code or custom fields
  - **Example**: `/blog/event-sponsorship` (section 4.5)

- **Author Pages** (`/authors/*`) - ProfilePage + Person schema
  - **Solution**: Add schema via Webflow CMS template code or custom fields
  - **Example**: `/authors/alex-martin` (section 4.8)

### 📊 Current Implementation Summary

**Total Pages in Scripts**: 36 static pages

- Homepage: 1
- Features: 9
- Solutions: 10
- Resources: 4
- Platform: 3
- Legal: 3
- Other: 6

**Note**: Only pages mentioned in this document require schema implementation. Other Webflow pages (drafts, templates, etc.) are intentionally excluded.

---

## 🔍 Schema Implementation Audit (2025-11-04)

### Critical Issues Found

#### 1. Homepage (`/`)

**Current Status**: ⚠️ **VideoObject present on live page but missing from generated file**

**Required Schemas** (according to section 4.1):

- ✅ Organization schema - Present
- ✅ WebSite schema - Present
- ✅ WebPage schema - Present
- ⚠️ **VideoObject schema - Present on live page but NOT in generated file**

**Note**: VideoObject was likely added manually in Webflow. Decision needed: add to script or keep manual?

#### 2. Event Mobile App (`/event-mobile-app`)

**Current Status**: ❌ **Missing SoftwareApplication, FAQPage schemas + NOT DEPLOYED**

**Required Schemas** (according to section 4.2):

- ✅ Organization schema - Present in generated file
- ✅ WebPage schema - Present in generated file
- ✅ WebSite schema - Present in generated file
- ✅ BreadcrumbList schema - Present in generated file
- ❌ **SoftwareApplication schema - MISSING** (this is the central element!)
- ❌ **FAQPage schema - MISSING**
- ❌ **VideoObject schema - MISSING** (if present on page)

**Critical Finding**: Generated schema file exists locally, but **NO schemas found on live page**. This is a deployment issue - the schema hasn't been added to Webflow.

**Action Required**:

- Add SoftwareApplication schema with:
  - `name`: Use H1 (per Zoé's note)
  - `operatingSystem`: "iOS, Android"
  - `applicationCategory`: "BusinessApplication, MobileApplication"
  - `installUrl`: App Store and Google Play links
  - `mainEntityOfPage`: Link to WebPage
- Add FAQPage schema if FAQs are present on the page
- **Deploy schema to Webflow page**

#### 3. Features Pages (All `/features/*` pages)

**Current Status**: ⚠️ **Using Service instead of Product**

**Problem**: The script currently generates `Service` for all features pages, but they should use `Product` schema (except `/event-mobile-app` which should use `SoftwareApplication`).

**Action Required**:

- Update `generate-all-schemas.js` to use `Product` schema for features pages
- Use `H1 + brand name` format for `name` property (per Zoé's note at line 622)
- Keep `/event-mobile-app` as special case using `SoftwareApplication`

#### 4. Blog Hub Page (`/blog`)

**Current Status**: ❌ **Using WebPage instead of CollectionPage**

**Action Required**:

- Add `CollectionPage` schema with:
  - `name`: "The Swapcard Blog"
  - `description`: Meta description
  - `keywords`: Array of relevant keywords
- CollectionPage should be the main schema type for this page

#### 5. Pricing Page (`/pricing-plans`)

**Current Status**: ❌ **Missing Product with Offers, OfferCatalog, and FAQPage**

**Action Required**:

- Add `Product` schema with:
  - `name`: Use H1 (per Zoé's note)
  - `description`: Meta description
  - `brand`: Brand object
  - `offers`: Array of Offer objects (Starter, Professional, Enterprise)
- Add `OfferCatalog` schema to structure the pricing grid
- Add `FAQPage` schema if FAQs are present on the page

#### 6. Solutions Pages (`/solutions/*`)

**Current Status**: ✅ **Correctly using Service schema**

All required schemas present and correct.

#### 7. Resources Pages (`/resources/*`)

**Current Status**: ⚠️ **Using Article schema - Need to verify if correct**

**Action Required**: Verify if resources pages should use Article or another schema type based on actual page content.

### Live Page Inspection Results

**Homepage** (`https://www.swapcard.com/`):

- ✅ WebPage, VideoObject, Organization, WebSite - All present

**Event Mobile App** (`https://www.swapcard.com/event-mobile-app`):

- ❌ **NONE** - No JSON-LD schemas found at all (deployment issue)

### Priority Action Items

1. **Deployment Issues**: Verify if generated schemas are deployed to Webflow pages
2. **Fix Script**: Update `generate-all-schemas.js` to generate correct schema types
3. **Regenerate**: Regenerate all schema files after fixes
4. **Deploy**: Ensure all schemas are properly deployed to Webflow pages

---

## Resources & Validation

### Validation Tools

After implementing schemas, validate using:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)

### Documentation

- [Schema.org Documentation](https://schema.org/)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data)

---

**Last Updated**: 2025-11-04  
**Source**: Notion - Notes & Reflections / Swapcard
