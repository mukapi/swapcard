## 1) Context

Structured data helps Google to precisely understand the content of a page (product, article, FAQ, video, service). Thanks to a common schema system, Schema.org, it is possible to indicate whether it is a product, an article, a FAQ, a video, a service, etc. In addition to making it easier for robots to understand, it is a way to make a page eligible for rich results (price, breadcrumb, FAQ, carousel, video badge). But eligible does not mean guaranteed, as display depends on the query, the context, and the quality of the markup.

The most important rule is to choose schemas that reflect exactly what is visible on a page (same prices, same ratings, same FAQ, etc.). The type of schema must therefore match the real role of the page:

- BlogPosting for an article
- Product for a product page
- Service for a solution page
- etc.

The goal is to help Google understand as clearly as possible the different entities and the links between them (Organization, WebSite, Product, etc.).

## 2) General rule for implementing structured data

Have a single @graph that groups all entities (Organization, WebSite, WebPage, FAQPage, etc.) because this makes it possible to concentrate all the information in a single block of code rather than scattering it. This makes reading simpler and more reliable for Google, which understands that all this data is linked together. The use of @id with URLs acts as a real identity card: each element (organization, site, page) has its unique address, which avoids any confusion with other entities bearing a similar name. This is a good practice because it improves consistency and helps search engines to better index and link information.

## 3) Structured data by page type

### 1. To add on all pages

- **WebPage schema :**

```jsx
 {
      "@type": "WebPage",
      "@id": "https://www.swapcard.com/#webpage",
      "url": "https://www.swapcard.com/",
      "name": "Swapcard - Event Engagement Platform for Trade Shows, Conferences & Associations",
      "inLanguage": "en",
      "description": "Boost engagement, maximize ROI, and grow revenue with AI-powered tools—experience it all through Swapcard's smart, user-friendly platform."
    }
```

—> Change the URL depending on the page, the description, and add useful properties such as name, ispartof, imageobject etc

- **Organization schema associated with sameAs schema**

The essential properties for this Organization schema are : founding date, imageObject, description, contactpoint

```jsx
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
```

- **WebSite schema**

```jsx

      "@type": "WebSite",
      "@id": "https://www.swapcard.com/#website",
      "url": "https://www.swapcard.com/",
      "name": "Swapcard",
      "inLanguage": "en",
      "description": "Swapcard is an AI-powered event and community platform that helps organizers create engaging, data-driven experiences for attendees, exhibitors, and sponsors."

```

- **BreadcrumbList schema (to be added on all pages EXCEPT the Homepage)**

```jsx
"@type": "BreadcrumbList",
      "@id": "https://www.swapcard.com/event-mobile-app/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swapcard.com/" },
        { "@type": "ListItem", "position": 2, "name": "Event mobile app", "item": "https://www.swapcard.com/event-mobile-app" }
```

—> Change the name and URL of the page according to the page in position 2 and add position 3, 4, etc. if necessary.

### 2. Homepage https://www.swapcard.com/

**What is currently there**

- VideoObject schema

**Explanation of suggested improvements :**

- We have kept the VideoObject schema which correctly represents the video present on the page.
- Added the Organization schema which defines the Swapcard brand entity with the properties: name, description, logo, and the sameAs schema that makes it possible to link the entity to the various social networks. It is the fundamental building block that anchors the brand in Google’s Knowledge Graph.
- Added the WebSite schema which signals the existence of the official website and specifies its main features, such as the language and the internal search URL.
- Added the WebPage schema which precisely describes the current page, here the homepage, with its title, description, and main image. This helps Google understand that this page is indeed the official entry point of the site.
- Added the contactPoint schema: this schema provides information on the means of contact (customer support, sales team, email, phone). It improves the company’s credibility in the eyes of search engines and facilitates the display of this information directly in Google, particularly for “Swapcard contact” type searches.

### Complete example for the page : https://www.swapcard.com/

```jsx
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

### 3. Product Page (Feature) https://www.swapcard.com/event-mobile-app

**What is currently there**

- Schéma VideoObject
- Schéma FAQPage

**Explanation of suggested improvements :**

- **The SoftwareApplication schema** is the central element of this product page. It is more precise than the Product schema because it describes the Swapcard app with its characteristics: operating system, category, description, and installation links on iOS and Android. It is the most relevant type for a mobile application and the most precise in Google’s eyes. This schema can also be enriched with ratings and reviews if they are published transparently on the page.
- The **BreadcrumbList schema** makes it possible to expose the breadcrumb “Home → Event mobile app.” This is a good practice that helps Google understand the site’s internal hierarchy and the position of this page in the tree structure. This markup is often reused in the search results in the form of clickable links. It improves navigation and can increase the click-through rate.
- **The FAQPage schema** structures the questions and answers present on the page. Each question is linked to a validated answer (acceptedAnswer), which complies with Google’s guidelines. This schema can give rise to a rich result in the form of accordions directly in the SERP.
- **The AggregateRating schema** has not been added by default because it involves strict conditions. To be compliant, the rating and the number of reviews must be visible on the page, attributed to the correct source (App Store or Google Play) and updated regularly. Without these elements, Google may ignore or penalize the markup. It is therefore preferable to wait to display these data officially on the page before integrating it.

**Models of what must be present on the page**

- Organization schema
- WebPage schema
- WebSite schema

- **BreadcrumbList schema**

```jsx
"@type": "BreadcrumbList",
      "@id": "https://www.swapcard.com/event-mobile-app/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swapcard.com/" },
        { "@type": "ListItem", "position": 2, "name": "Event mobile app", "item": "https://www.swapcard.com/event-mobile-app" }
```

- **SoftwareApplication schema**

```jsx
"@type": "SoftwareApplication",
      "@id": "https://www.swapcard.com/event-mobile-app/#app",
      "name": "Swapcard Event Mobile App",
      "operatingSystem": "iOS, Android",
      "applicationCategory": "BusinessApplication, MobileApplication",
      "url": "https://www.swapcard.com/event-mobile-app",
      "installUrl": [
        "https://apps.apple.com/us/app/swapcard-smart-event-app/id879488719",
        "https://play.google.com/store/apps/details?id=com.swapcard.apps.android
```

- **FAQPage schema:** make sure the questions/answers correspond to those present on the destination page

```jsx
"@type": "FAQPage",
      "@id": "https://www.swapcard.com/event-mobile-app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Swapcard’s event app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It’s a mobile event application that helps attendees, exhibitors, and sponsors engage through personalized agendas, networking, lead capture, and interactive features."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Swapcard event mobile app used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It centralizes the attendee journey—discover sessions and exhibitors, connect with people, receive updates, scan leads, and access event content in one place."
          }
        },
        {
          "@type": "Question",
          "name": "What are the benefits of a mobile event app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Higher engagement and ROI via tailored recommendations, real-time notifications, interactive tools (polls, Q&A), and data insights for organizers and exhibitors."
          }
        },
        {
          "@type": "Question",
          "name": "Is the Swapcard app available on iOS and Android?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The app is available on both the Apple App Store and Google Play Store."
          }
        },
        {
          "@type": "Question",
          "name": "Is the Swapcard mobile app GDPR-compliant and secure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Swapcard follows GDPR requirements and implements security best practices for data processing and access management."
          }
        },
        {
          "@type": "Question",
          "name": "Can organizers track who checks into sessions or booths?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Check-ins and scans can be tracked to measure attendance and engagement across sessions and exhibitor booths."
          }
        },
        {
          "@type": "Question",
          "name": "Do digital badges work offline or without Wi-Fi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital badges display in the app once authenticated. Onsite verification and syncing typically require connectivity; organizers can use compatible check-in tools for offline-tolerant workflows."
          }
        },
        {
          "@type": "Question",
          "name": "How are access levels assigned to different badge types?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Organizers configure badge types and access rules in the event setup so that each attendee role unlocks the appropriate areas, sessions, or features."
          }
        },
        {
          "@type": "Question",
          "name": "How are session and networking recommendations generated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recommendations are powered by AI using attendee profiles, declared interests, and in-app behavior to surface relevant people, sessions, and exhibitors."
          }
        },
        {
          "@type": "Question",
          "name": "Can attendees update their interests or preferences in the app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Attendees can edit their profiles and preferences to refine recommendations and networking matches."
          }
        },
        {
          "@type": "Question",
          "name": "What elements of the app can be personalized for our event?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Branding, theming, navigation, featured content, and feature modules can be tailored to your event to deliver a consistent, branded experience."
          }
        },
        {
          "@type": "Question",
          "name": "Can we publish the app under our own name in the app stores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Swapcard supports branded apps published under your own Apple and Google developer accounts."
          }
        },
        {
          "@type": "Question",
          "name": "How can I use the event app to boost engagement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use personalized agendas, push notifications, polls, Q&A, gamification, and smart recommendations to drive participation before, during, and after the event."


```

### **Complete example for the page** https://www.swapcard.com/event-mobile-app

```jsx
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
        { "@type": "Person", "name": "Baptiste Boulard", "jobTitle": "Chief Executive Officer" },
        { "@type": "Person", "name": "Damien Courbon", "jobTitle": "Chief Operations Officer" },
        { "@type": "Person", "name": "Godefroy des Francs", "jobTitle": "Chief Product Officer" }
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
      "@id": "https://www.swapcard.com/event-mobile-app/#webpage",
      "url": "https://www.swapcard.com/event-mobile-app",
      "name": "Best Event App - Fully-Customizable & Easy-to-Use | Swapcard",
      "inLanguage": "en",
      "description": "Swapcard’s mobile event app boosts engagement with personalized schedules, networking, lead capture, and interactive features for attendees, exhibitors, and sponsors."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.swapcard.com/event-mobile-app/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swapcard.com/" },
        { "@type": "ListItem", "position": 2, "name": "Event mobile app", "item": "https://www.swapcard.com/event-mobile-app" }
      ]
    },
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
      "mainEntityOfPage": { "@id": "https://www.swapcard.com/event-mobile-app/#webpage" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.swapcard.com/event-mobile-app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Swapcard’s event app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It’s a mobile event application that helps attendees, exhibitors, and sponsors engage through personalized agendas, networking, lead capture, and interactive features."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Swapcard event mobile app used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It centralizes the attendee journey—discover sessions and exhibitors, connect with people, receive updates, scan leads, and access event content in one place."
          }
        },
        {
          "@type": "Question",
          "name": "What are the benefits of a mobile event app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Higher engagement and ROI via tailored recommendations, real-time notifications, interactive tools (polls, Q&A), and data insights for organizers and exhibitors."
          }
        },
        {
          "@type": "Question",
          "name": "Is the Swapcard app available on iOS and Android?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The app is available on both the Apple App Store and Google Play Store."
          }
        },
        {
          "@type": "Question",
          "name": "Is the Swapcard mobile app GDPR-compliant and secure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Swapcard follows GDPR requirements and implements security best practices for data processing and access management."
          }
        },
        {
          "@type": "Question",
          "name": "Can organizers track who checks into sessions or booths?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Check-ins and scans can be tracked to measure attendance and engagement across sessions and exhibitor booths."
          }
        },
        {
          "@type": "Question",
          "name": "Do digital badges work offline or without Wi-Fi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital badges display in the app once authenticated. Onsite verification and syncing typically require connectivity; organizers can use compatible check-in tools for offline-tolerant workflows."
          }
        },
        {
          "@type": "Question",
          "name": "How are access levels assigned to different badge types?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Organizers configure badge types and access rules in the event setup so that each attendee role unlocks the appropriate areas, sessions, or features."
          }
        },
        {
          "@type": "Question",
          "name": "How are session and networking recommendations generated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recommendations are powered by AI using attendee profiles, declared interests, and in-app behavior to surface relevant people, sessions, and exhibitors."
          }
        },
        {
          "@type": "Question",
          "name": "Can attendees update their interests or preferences in the app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Attendees can edit their profiles and preferences to refine recommendations and networking matches."
          }
        },
        {
          "@type": "Question",
          "name": "What elements of the app can be personalized for our event?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Branding, theming, navigation, featured content, and feature modules can be tailored to your event to deliver a consistent, branded experience."
          }
        },
        {
          "@type": "Question",
          "name": "Can we publish the app under our own name in the app stores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Swapcard supports branded apps published under your own Apple and Google developer accounts."
          }
        },
        {
          "@type": "Question",
          "name": "How can I use the event app to boost engagement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use personalized agendas, push notifications, polls, Q&A, gamification, and smart recommendations to drive participation before, during, and after the event."
          }
        }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://www.swapcard.com/event-mobile-app/#video-gl-events",
      "name": "GL Events’ GreenTech+: Driving Exhibitor ROI with Digital Engagement",
      "description": "Discover how GL Events used Swapcard’s event app to track visitors, manage booth traffic, and boost exhibitor ROI with direct engagement.",
      "thumbnailUrl": "https://embed-ssl.wistia.com/deliveries/377579aa50ead9e79a1a9e8374ec2835.jpg?image_crop_resized=640x360",
      "uploadDate": "2025-07-01T13:51:06+00:00",
      "contentUrl": "https://embed-ssl.wistia.com/deliveries/488f1dadc3dc3f1760e6c59017f73208be9f1dde.m3u8",
      "embedUrl": "https://fast.wistia.net/embed/iframe/on1wfuly5i?wseektoaction=true",
      "publisher": {
        "@type": "Organization",
        "name": "Swapcard",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg"
        }
      }
    }
  ]
}

```

### 4. Product Page (Feature) https://www.swapcard.com/features/event-registration-software

**What is currently there**

- VideoObject schema
- FAQPage schema

**Explanation of suggested improvements: :**

- We chose the **Product** schema because this page presents a specific software feature, closer to a product/service than an independent application. The addition of **aggregateRating** enhances social proof by displaying the average rating. The problem is that the page does not directly contain clickable reviews, which limits compliance with Google’s guidelines. **_Do you know where this rating comes from because the “read review” link does not work?_**

For now, we have therefore used the rating and the volume of Google Play reviews https://play.google.com/store/apps/details?id=com.swapcard.apps.android&hl=fr, but ideally real customer reviews visible on the page should be integrated.

![image.png](attachment:80daf1b7-ddad-4142-82db-4790ed670335:image.png)

- The breadcrumb has been configured in three levels: **Home > Features > Event registration software**. This reflects a “Features” silo logic, but differs from the event mobile app page which displayed only two levels **HP > event mobile app.** Moreover, the intermediate “Features” page does not really exist (there is a redirection), which creates a structural inconsistency. It would be preferable to clarify this hierarchy to ensure better internal coherence and SEO.
- The page contains three embedded videos, which provide demonstration and testimonial content. We have therefore kept the **VideoObject** schema for each of them in order to strengthen their visibility in Google results. The markup has simply been **simplified**: only the essential properties (title, description, thumbnail, duration, date, embed URL) have been kept. This guarantees clean, lightweight, and useful markup without excessive complexity.

- The page includes a **FAQ** section with several product-related questions/answers. The **FAQPage** schema has therefore been maintained, as it is directly usable by Google to generate enriched results. Each question has been structured with its complete answer text, which promotes better understanding and potential display in rich results.

**Models of what must be present on the page:**

- Organization schema
- WebPage schema
- WebSite schema
- VideoObject

- **BreadcrumbList schema**: here 3 positions because we are in the Features silo: HP > Features > Event registration

```jsx
"@type": "BreadcrumbList",
      "@id": "https://www.swapcard.com/features/event-registration-software/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swapcard.com/" },
        { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://www.swapcard.com/features" },
        { "@type": "ListItem", "position": 3, "name": "Event registration software", "item": "https://www.swapcard.com/features/event-registration-software" }
      ]
```

- **Product schema with AggregateRating**

```jsx
"@type": "Product",
      "@id": "https://www.swapcard.com/features/event-registration-software/#product",
      "name": "Swapcard — Event Registration Software",
      "url": "https://www.swapcard.com/features/event-registration-software",
      "category": "Event registration software",
      "description": "Customizable event registration with ticketing, promo codes, secure payments, automated confirmations, and on-site check-in—all connected to the Swapcard platform.",
      "brand": { "@id": "https://www.swapcard.com/#org" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.4",
        "bestRating": "5",
        "ratingCount": "1070"

```

- **FAQPage schema**

```jsx
"@type": "FAQPage",
      "@id": "https://www.swapcard.com/features/event-registration-software/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is event registration software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Event registration software is a digital tool that allows event organizers to manage attendee sign-ups, payments, and check-ins through a centralized online platform. An event registration platform streamlines the registration process, can boost sales, and enhances the attendee experience."
          }
        },
        {
          "@type": "Question",
          "name": "How does event registration software work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It works by providing a customizable event registration form that attendees complete online. Once submitted, the system can process payments, send confirmation emails, manage ticket types, track data in real time, and even manage on-site check-in."
          }
        },
        {
          "@type": "Question",
          "name": "Why should you use event registration tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Event registration tools offer many key benefits for organizers and event attendees, including: • Streamlined event management process • Time savings with automation • Real-time attendee tracking • Secure online payments • Custom registration flows • Improved communication through automated emails • Better data collection and analytics With Swapcard, you not only improve your event registration experience, but you also streamline your entire event planning and management process."
          }
        },
        {
          "@type": "Question",
          "name": "Which event would benefit from event registration platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "B2B conferences, trade shows, nonprofits, congresses — all types of events, from small-scale to major industry events, benefit from using an event registration system. Swapcard’s customizable registration process ensures your work and organization are streamlined, letting you focus on what matters most to you."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose the best event registration software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best event registration software must fit your needs: event types (in-person, virtual or hybrid event), number of attendees, features, and budget. Make sure the platform offers all the tools required for your event: customizable forms, ticket types, security, transactions and payouts, sign-ups, check-ins, tracking, etc. Check the event sign-up software’s reputation and the presence of strong customer support as well."
          }
        },
        {
          "@type": "Question",
          "name": "Can I customize the registration form with Swapcard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Swapcard lets you add custom fields, questions, ticket types, and conditional logic to match your online event registration form with the needs of your event, and collect the right data. Your form will look and work exactly as you need it!"
          }
        },
        {
          "@type": "Question",
          "name": "Is the registration experience mobile-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Swapcard’s online event registration system is optimized for all devices, ensuring a smooth registration flow whether users sign up via desktop, tablet, or smartphone. And with Swapcard’s event app, your attendees can check their schedule, connect with others, and navigate the event floor — all in one platform."
          }
        },
        {
          "@type": "Question",
          "name": "Can I try Swapcard before committing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schedule a live demo with our team and test our meeting registration software features before making a decision."
```

### **Complete example for the page** https://www.swapcard.com/features/event-registration-software

```jsx
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
        { "@type": "Person", "name": "Baptiste Boulard", "jobTitle": "Chief Executive Officer" },
        { "@type": "Person", "name": "Damien Courbon", "jobTitle": "Chief Operations Officer" },
        { "@type": "Person", "name": "Godefroy des Francs", "jobTitle": "Chief Product Officer" }
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
      "@id": "https://www.swapcard.com/features/event-registration-software/#webpage",
      "url": "https://www.swapcard.com/features/event-registration-software",
      "name": "All-in-One Event Registration Software Solutions | Swapcard",
      "inLanguage": "en",
      "description": "Build custom registration flows, manage tickets and payments, and streamline check-in with Swapcard’s event registration software."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.swapcard.com/features/event-registration-software/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swapcard.com/" },
        { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://www.swapcard.com/features" },
        { "@type": "ListItem", "position": 3, "name": "Event registration software", "item": "https://www.swapcard.com/features/event-registration-software" }
      ]
    },
    {
      "@type": "Product",
      "@id": "https://www.swapcard.com/features/event-registration-software/#product",
      "name": "Swapcard — Event Registration Software",
      "url": "https://www.swapcard.com/features/event-registration-software",
      "category": "Event registration software",
      "description": "Customizable event registration with ticketing, promo codes, secure payments, automated confirmations, and on-site check-in—all connected to the Swapcard platform.",
      "brand": { "@id": "https://www.swapcard.com/#org" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.4",
        "bestRating": "5",
        "ratingCount": "1070"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.swapcard.com/features/event-registration-software/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is event registration software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Event registration software is a digital tool that allows event organizers to manage attendee sign-ups, payments, and check-ins through a centralized online platform. An event registration platform streamlines the registration process, can boost sales, and enhances the attendee experience."
          }
        },
        {
          "@type": "Question",
          "name": "How does event registration software work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It works by providing a customizable event registration form that attendees complete online. Once submitted, the system can process payments, send confirmation emails, manage ticket types, track data in real time, and even manage on-site check-in."
          }
        },
        {
          "@type": "Question",
          "name": "Why should you use event registration tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Event registration tools offer many key benefits for organizers and event attendees, including: • Streamlined event management process • Time savings with automation • Real-time attendee tracking • Secure online payments • Custom registration flows • Improved communication through automated emails • Better data collection and analytics With Swapcard, you not only improve your event registration experience, but you also streamline your entire event planning and management process."
          }
        },
        {
          "@type": "Question",
          "name": "Which event would benefit from event registration platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "B2B conferences, trade shows, nonprofits, congresses — all types of events, from small-scale to major industry events, benefit from using an event registration system. Swapcard’s customizable registration process ensures your work and organization are streamlined, letting you focus on what matters most to you."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose the best event registration software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best event registration software must fit your needs: event types (in-person, virtual or hybrid event), number of attendees, features, and budget. Make sure the platform offers all the tools required for your event: customizable forms, ticket types, security, transactions and payouts, sign-ups, check-ins, tracking, etc. Check the event sign-up software’s reputation and the presence of strong customer support as well."
          }
        },
        {
          "@type": "Question",
          "name": "Can I customize the registration form with Swapcard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Swapcard lets you add custom fields, questions, ticket types, and conditional logic to match your online event registration form with the needs of your event, and collect the right data. Your form will look and work exactly as you need it!"
          }
        },
        {
          "@type": "Question",
          "name": "Is the registration experience mobile-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Swapcard’s online event registration system is optimized for all devices, ensuring a smooth registration flow whether users sign up via desktop, tablet, or smartphone. And with Swapcard’s event app, your attendees can check their schedule, connect with others, and navigate the event floor — all in one platform."
          }
        },
        {
          "@type": "Question",
          "name": "Can I try Swapcard before committing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schedule a live demo with our team and test our meeting registration software features before making a decision."
          }
        }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://fast.wistia.net/embed/iframe/1ac8aq6vpa",
      "name": "Registration video",
      "description": "Overview of Swapcard’s registration feature.",
      "thumbnailUrl": "https://embed-ssl.wistia.com/deliveries/415612e32838bc2a33b138d2cf5fef4e.jpg?image_crop_resized=960x540",
      "embedUrl": "https://fast.wistia.net/embed/iframe/1ac8aq6vpa",
      "uploadDate": "2023-08-21T09:19:09+00:00",
      "duration": "PT1M14S"
    },
    {
      "@type": "VideoObject",
      "@id": "https://fast.wistia.net/embed/iframe/bsz71hzhbq",
      "name": "Promo codes",
      "description": "How to use promo codes for ticket discounts.",
      "thumbnailUrl": "https://embed-ssl.wistia.com/deliveries/59fa8778720d2d4784ae94a691235751.jpg?image_crop_resized=960x540",
      "embedUrl": "https://fast.wistia.net/embed/iframe/bsz71hzhbq",
      "uploadDate": "2025-03-06T14:53:32+00:00",
      "duration": "PT53S"
    },
    {
      "@type": "VideoObject",
      "@id": "https://fast.wistia.net/embed/iframe/xltobeuemx",
      "name": "Analytics dashboard",
      "description": "Short preview of the analytics dashboard.",
      "thumbnailUrl": "https://embed-ssl.wistia.com/deliveries/c82e0f192bc33e345b1bc96213003de01488d2bd.jpg?image_crop_resized=960x960",
      "embedUrl": "https://fast.wistia.net/embed/iframe/xltobeuemx",
      "uploadDate": "2025-02-21T12:18:15+00:00",
      "duration": "PT9S"
    },
    {
      "@type": "VideoObject",
      "@id": "https://fast.wistia.net/embed/iframe/sqjoy8kltg",
      "name": "Guaranteeing a Smooth Registration for Informa Tech’s GDC",
      "description": "Success story: enabling a smooth registration for GDC.",
      "thumbnailUrl": "https://embed-ssl.wistia.com/deliveries/510b8acf46fb63ba4a9f49201b0fa660.jpg?image_crop_resized=640x360",
      "embedUrl": "https://fast.wistia.net/embed/iframe/sqjoy8kltg",
      "uploadDate": "2024-05-15T15:51:16+00:00",
      "duration": "PT3M23S"
    }
  ]
}

```

### 5. Solution Page https://www.swapcard.com/solutions/attendee-networking-engagement

**What is currently there**

- VideoObject

**Explanation of suggested improvements:**

- A **Solution page** highlights a benefit or a promise for the user, rather than a concrete product or a downloadable application. This is why the **Service** schema is the most appropriate: it makes it possible to describe an intangible offering, in this case an event tech service that promotes networking and participant engagement. The Product schema is more suitable for “feature” pages with a clear product proposition (possibly with a rating), and SoftwareApplication for pages dedicated to the app (iOS/Android, installUrl, OS). Here, these types would be less relevant.
- No **visible and clickable** reviews/ratings on this solution page, therefore no AggregateRating. Google requires that the aggregated rating displayed in schema be **visible on the page** (same numbers, clear source). If you later integrate local social proof (e.g. displayed testimonials/ratings), we could then add the markup in compliance.
- The **BreadcrumbList** makes the hierarchy explicit: Home → Solutions → Attendee networking & engagement. This is useful for understanding the site structure and may appear in the “breadcrumb” rich result. However, we noted that the solutions page https://www.swapcard.com/solutions returned a 404 error.
- There are two key videos on the page (AI demo / success story): therefore we keep **VideoObject** for each.

**Models of what must be present on the page**

- Organization schema
- WebPage schema
- WebSite schema
- BreadcrumbList schema

- **Service schema:** No AggregateRating or Review because there are no reviews specifically dedicated to this page

```jsx
"@type": "Service",
      "@id": "https://www.swapcard.com/solutions/attendee-networking-engagement/#service",
      "name": "Attendee Networking & Engagement",
      "serviceType": "Attendee Networking and Engagement",
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
```

### Complete example for the page https://www.swapcard.com/solutions/attendee-networking-engagement

```jsx
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.swapcard.com/#org",
      "name": "Swapcard",
      "url": "https://www.swapcard.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.swapcard.com/#logo",
        "url": "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/swapcard/",
        "https://www.youtube.com/c/Swapcard",
        "https://x.com/Swapcard",
        "https://www.facebook.com/Swapcard/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.swapcard.com/#website",
      "url": "https://www.swapcard.com/",
      "name": "Swapcard",
      "inLanguage": "en"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.swapcard.com/solutions/attendee-networking-engagement/#webpage",
      "url": "https://www.swapcard.com/solutions/attendee-networking-engagement",
      "name": "Increase Attendee Networking & Engagement | Swapcard",
      "description": "Boost attendee networking and engagement with AI-driven recommendations, in-app messaging, meetings, and interactive session tools powered by Swapcard.",
      "inLanguage": "en"
    },
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
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.swapcard.com/solutions/attendee-networking-engagement/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swapcard.com/" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://www.swapcard.com/solutions" },
        { "@type": "ListItem", "position": 3, "name": "Attendee networking & engagement", "item": "https://www.swapcard.com/solutions/attendee-networking-engagement" }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://fast.wistia.net/embed/iframe/zzq151xlhv",
      "name": "AI Smart Meeting Generator",
      "description": "Intelligent matchmaking to automatically create quality meetings at scale.",
      "thumbnailUrl": "https://embed-ssl.wistia.com/deliveries/9d759c883af968aaf6e28d076427298c.jpg?image_crop_resized=960x540",
      "embedUrl": "https://fast.wistia.net/embed/iframe/zzq151xlhv",
      "uploadDate": "2024-03-04T15:06:13+00:00",
      "duration": "PT49S"
    },
    {
      "@type": "VideoObject",
      "@id": "https://fast.wistia.net/embed/iframe/on1wfuly5i",
      "name": "GL Events’ GreenTech+: Driving Exhibitor ROI with Digital Engagement",
      "description": "Case study video highlighting exhibitor ROI through digital engagement with Swapcard.",
      "thumbnailUrl": "https://embed-ssl.wistia.com/deliveries/377579aa50ead9e79a1a9e8374ec2835.jpg?image_crop_resized=960x540",
      "embedUrl": "https://fast.wistia.net/embed/iframe/on1wfuly5i",
      "uploadDate": "2025-07-01T13:51:06+00:00",
      "duration": "PT3M2S"
    }
  ]
}

```

### 6. Blog Hub Page https://www.swapcard.com/blog

**What is currently there**

- No schema

**Explanation of suggested improvements**

- We use **CollectionPage** because this URL presents a **list of articles**, and not a single piece of content. This schema clearly indicates to the engines that it is a **navigable collection** (filters, categories, search).
- The Blog type is optional and does not provide a dedicated rich result. It can be added if you want to **model the “Swapcard Blog” entity** and link an ItemList with a top 10 of recent articles. In such cases, these articles will need to be updated from time to time to remain faithful to the content of the page. It is a useful semantic plus, but not mandatory for the validity of the schema.

**Models of what must be present on the page**

- Organization schema
- Website schema
- BreadcrumbList schema

- **CollectionPage schema** to indicate the itinerary listing with the ItemList schema that shows that each itinerary is a distinct product

```jsx
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

```

### Complete example for the page https://www.swapcard.com/blog

```jsx
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
        "url": "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/swapcard/",
        "https://www.youtube.com/c/Swapcard",
        "https://x.com/Swapcard",
        "https://www.facebook.com/Swapcard/"
      ],
      "foundingDate": "2013",
      "founder": [
        { "@type": "Person", "name": "Baptiste Boulard", "jobTitle": "Chief Executive Officer" },
        { "@type": "Person", "name": "Damien Courbon", "jobTitle": "Chief Operations Officer" },
        { "@type": "Person", "name": "Godefroy des Francs", "jobTitle": "Chief Product Officer" }
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
      "inLanguage": "en"
    },
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
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.swapcard.com/blog/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swapcard.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.swapcard.com/blog" }
      ]
    }
  ]
}

```

### 7. Blog Article https://www.swapcard.com/blog/event-sponsorship

**What is currently there**

No schema

**Explanation of suggested improvements:**

- Here we use **BlogPosting** because we are on a single article page (title, image, author, dates). This type of schema is the one expected by Google for editorial content and it can activate enriched results.
- In this schema, datepublished and datemodified in ISO format are missing (e.g. `2025-09-11` or `2025-09-11T08:30:00Z`). These fields are **required** by Google for Blogposting. We have integrated the field but we do not have the data.

**Models of what must be present on the page**

- Organization schema
- WebPage schema
- WebSite schema
- BreadcrumbList schema

- **Article schema linked to the author**

```jsx
@type": "BlogPosting",
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
```

### Complete example for the page https://www.swapcard.com/blog/event-sponsorship

```jsx
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
        "url": "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/swapcard/",
        "https://www.youtube.com/c/Swapcard",
        "https://x.com/Swapcard",
        "https://www.facebook.com/Swapcard/"
      ],
      "foundingDate": "2013",
      "founder": [
        { "@type": "Person", "name": "Baptiste Boulard", "jobTitle": "Chief Executive Officer" },
        { "@type": "Person", "name": "Damien Courbon", "jobTitle": "Chief Operations Officer" },
        { "@type": "Person", "name": "Godefroy des Francs", "jobTitle": "Chief Product Officer" }
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
      "inLanguage": "en"
    },
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
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.swapcard.com/blog/event-sponsorship/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swapcard.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.swapcard.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Event Sponsorship: How To Get Sponsors for an Event?", "item": "https://www.swapcard.com/blog/event-sponsorship" }
      ]
    }
  ]
}

```

### 8. Pricing Page https://www.swapcard.com/pricing-plans

**What is currently there**

- FAQPage schema

**Explanation of suggested improvements:**

- We have kept and completed the FAQPage schema so that it properly represents the FAQ present on the page.
- We use **Product** because the page displays concrete prices: these are indeed Swapcard services that can be purchased in different plans. Each plan (Starter, Professional, Enterprise) becomes an **Offer** with a price, a currency, and an action link. We add an **image** and a **description** so that Google understands what it is, and we declare the brand as **Brand** (rather than Organization), which the validator prefers. Since the Enterprise plan is “Custom,” it remains an offer without a price, but that is not a problem because it is consistent with the content.
- We use **OfferCatalog** which describes the grid of plans as a user sees it. This is not mandatory for rich results, but it structures the information and properly links each pricing card to its offer. In short, we tell the engine “here is the table of plans, in order.” It’s clean, faithful to what we have on the page.

**Models of what must be present on the page**

- Organization schema
- WebPage schema
- WebSite schema
- BreadcrumbList schema

- **Product schema + Offer**

```jsx
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
```

**OfferCatalog schema**

```jsx
@type": "OfferCatalog",
      "@id": "https://www.swapcard.com/pricing-plans/#catalog",
      "name": "Pricing plans",
      "url": "https://www.swapcard.com/pricing-plans",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Starter", "item": { "@id": "https://www.swapcard.com/pricing-plans/#offer-starter" } },
        { "@type": "ListItem", "position": 2, "name": "Professional", "item": { "@id": "https://www.swapcard.com/pricing-plans/#offer-professional" } },
        { "@type": "ListItem", "position": 3, "name": "Enterprise (Custom)", "item": { "@id": "https://www.swapcard.com/pricing-plans/#offer-enterprise" } }
      ]
    },
```

### Complete example for the page : https://www.swapcard.com/pricing-plans

```jsx
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
        "url": "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/swapcard/",
        "https://www.youtube.com/c/Swapcard",
        "https://x.com/Swapcard",
        "https://www.facebook.com/Swapcard/"
      ],
      "foundingDate": "2013",
      "founder": [
        { "@type": "Person", "name": "Baptiste Boulard", "jobTitle": "Chief Executive Officer" },
        { "@type": "Person", "name": "Damien Courbon", "jobTitle": "Chief Operations Officer" },
        { "@type": "Person", "name": "Godefroy des Francs", "jobTitle": "Chief Product Officer" }
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
      "inLanguage": "en"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.swapcard.com/pricing-plans/#webpage",
      "url": "https://www.swapcard.com/pricing-plans",
      "name": "Swapcard Pricing | Flexible Plans for Every Event Type",
      "description": "Compare plans and pricing for Swapcard’s event platform — choose the package that matches your needs and budget.",
      "inLanguage": "en"
    },
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
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.swapcard.com/pricing-plans/#catalog",
      "name": "Pricing plans",
      "url": "https://www.swapcard.com/pricing-plans",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Starter", "item": { "@id": "https://www.swapcard.com/pricing-plans/#offer-starter" } },
        { "@type": "ListItem", "position": 2, "name": "Professional", "item": { "@id": "https://www.swapcard.com/pricing-plans/#offer-professional" } },
        { "@type": "ListItem", "position": 3, "name": "Enterprise (Custom)", "item": { "@id": "https://www.swapcard.com/pricing-plans/#offer-enterprise" } }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.swapcard.com/pricing-plans/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do Swapcard’s subscriptions work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our fee is scalable and based on two components: (i) an annual license fee to use the software to run your events and manage your community that is based on your technological requirements and support, and (ii) a price based on the volume of attendees and exhibitors attending your events during the term of your subscription."
          }
        },
        {
          "@type": "Question",
          "name": "Can I add more attendees or exhibitors to my subscription at any time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your usage of attendees or exhibitors is reaching your limit, a package of extra attendees or exhibitors can be purchased under each plan. Extra attendees can be used only during the term of your subscription, and any unused credit at the end of your term will not be rolled over to the renewal term. You cannot purchase more than 1,000 attendees or 30 exhibitors under the Starter Plan. Reach out to your account manager to purchase more attendees."
          }
        },
        {
          "@type": "Question",
          "name": "What if my event needs change and I need to upgrade or downgrade?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can upgrade your plan and purchase more attendees or exhibitors at any time. If you want to downgrade your plan, you will have to wait until the end of your subscription term. Speak with your account manager at least 90 days before we auto-renew your subscription to adapt it to your needs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer a price per event?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our plans are all annual subscriptions. We don't offer a price per event. The annual subscription remains the same whether you choose to run a single event or multiple events using our platform."
          }
        },
        {
          "@type": "Question",
          "name": "Can I pay monthly, or do I have to pay annually?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We don’t offer a monthly subscription. All plans are annual subscriptions with net 30 days payments."
          }
        },
        {
          "@type": "Question",
          "name": "Can I cancel my subscription at any time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can terminate your subscription only 90 days before its term and will remain bound until the end of your subscription. You will continue to access our software until the end of your current billing cycle."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer custom pricing for enterprise customers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer custom pricing for enterprise customers. Please schedule a live demo with our sales team to discuss your specific business needs and we will provide a custom quote."
          }
        },
        {
          "@type": "Question",
          "name": "Will my data be private and safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We value users’ and organizers’ privacy. Data in the platform is safe. For more information, visit our data pledge and Security page."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.swapcard.com/pricing-plans/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swapcard.com/" },
        { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.swapcard.com/pricing-plans" }
      ]
    }
  ]
}

```

### 9. About Page https://www.swapcard.com/about-swapcard

**What is currently there**

- VideoObject schema

**Explanation of suggested improvements:**

- This is an “About” page: the **AboutPage** type describes exactly this context and remains a subtype of WebPage, therefore more precise without unnecessary duplication. It helps the engines understand that we are talking about the company, its mission, and its history.
- On the about page it will also be necessary in the future to add the various authors who will be listed on this page. Dedicated author pages will also be created with detailed information on each author. This information can be reused in the structured data with the Person schema and its different properties: name, image, jobTitle, worksFor, url, sameAs (LinkedIn, X, etc.), description.

**Models of what must be present on the page**

- Organization schema
- WebPage schema
- WebSite schema
- BreadcrumbList schema

- **About Page schema**

```jsx
 "@type": "AboutPage",
      "@id": "https://www.swapcard.com/about-swapcard/#webpage",
      "url": "https://www.swapcard.com/about-swapcard",
      "name": "About Swapcard",
      "description": "Learn about Swapcard’s mission, team, and platform powering engaging, data-driven event and community experiences worldwide.",
      "inLanguage": "en"
```

### Complete example for the page : https://www.swapcard.com/about-swapcard

```jsx
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
        { "@type": "Person", "name": "Baptiste Boulard", "jobTitle": "Chief Executive Officer" },
        { "@type": "Person", "name": "Damien Courbon", "jobTitle": "Chief Operations Officer" },
        { "@type": "Person", "name": "Godefroy des Francs", "jobTitle": "Chief Product Officer" }
      ],
      "contactPoint": [
        { "@type": "ContactPoint", "contactType": "customer support", "url": "https://www.swapcard.com/contact", "availableLanguage": "en", "areaServed": "Worldwide" },
        { "@type": "ContactPoint", "contactType": "help center", "url": "https://help.swapcard.com/en/", "availableLanguage": "en", "areaServed": "Worldwide" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.swapcard.com/#website",
      "url": "https://www.swapcard.com/",
      "name": "Swapcard",
      "inLanguage": "en"
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.swapcard.com/about-swapcard/#webpage",
      "url": "https://www.swapcard.com/about-swapcard",
      "name": "About Swapcard",
      "description": "Learn about Swapcard’s mission, team, and platform powering engaging, data-driven event and community experiences worldwide.",
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.swapcard.com/about-swapcard/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swapcard.com/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.swapcard.com/about-swapcard" }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://fast.wistia.net/embed/iframe/icvfxe8cqc",
      "name": "PCMA Studio - Swapcard",
      "description": "Company video featured on the About page.",
      "thumbnailUrl": "https://embed-ssl.wistia.com/deliveries/6b171cd5b9189aa68948b61bc6b976d5.jpg?image_crop_resized=960x540",
      "embedUrl": "https://fast.wistia.net/embed/iframe/icvfxe8cqc",
      "uploadDate": "2025-02-11T16:58:43+00:00",
      "duration": "PT2M59S"
    }
  ]
}

```

### 10. Author page example

**Explanation of suggested improvements :**

- This is an author page, so we should add a **Person** schema to describe the author (name, photo, job title, worksFor, social links). This is the “human” entity Google needs to recognize to attribute authored articles. Give it a **stable** `@id` (often the author page with `#person`) so you can **reuse** exactly the same identifier in the `BlogPosting` of every signed article. This is key for best practice and E-E-A-T.
- **ProfilePage** describes the web page itself (the URL of the author profile), not the person. The idea is to link the page to the person via `mainEntity`. Search engines prefer this “document + entity” pair: the document (**ProfilePage**) points to the person, and the person points back to “their” page. This clarifies the graph, helps with disambiguation (Knowledge Graph), and lets you reuse the same **Person** `@id` as the `author` in each `BlogPosting`.

**Models that must be present on the page**

- **Organization** schema
- **WebSite** schema
- **BreadcrumbList** schema
- **ProfilePage** schema

```jsx
 "@type": "ProfilePage",
      "@id": "https://www.swapcard.com/authors/alex-martin/#webpage",
      "url": "https://www.swapcard.com/authors/alex-martin",
      "name": "Author: Alex Martin",
      "description": "Articles by Alex Martin on event tech, attendee engagement, and exhibitor ROI.",
      "inLanguage": "en",
      "mainEntity": { "@id": "https://www.swapcard.com/authors/alex-martin/#person" }
    },
```

- Schéma Person associé à SameAs

```jsx
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
      "mainEntityOfPage": { "@id": "https://www.swapcard.com/authors/alex-martin/#webpage" }
```

### Complete example for the author page

```jsx

{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.swapcard.com/#org",
      "name": "Swapcard",
      "url": "https://www.swapcard.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.swapcard.com/#logo",
        "url": "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/swapcard/",
        "https://www.youtube.com/c/Swapcard",
        "https://x.com/Swapcard",
        "https://www.facebook.com/Swapcard/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.swapcard.com/#website",
      "url": "https://www.swapcard.com/",
      "name": "Swapcard",
      "inLanguage": "en"
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.swapcard.com/authors/alex-martin/#webpage",
      "url": "https://www.swapcard.com/authors/alex-martin",
      "name": "Author: Alex Martin",
      "description": "Articles by Alex Martin on event tech, attendee engagement, and exhibitor ROI.",
      "inLanguage": "en",
      "mainEntity": { "@id": "https://www.swapcard.com/authors/alex-martin/#person" }
    },
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
      "mainEntityOfPage": { "@id": "https://www.swapcard.com/authors/alex-martin/#webpage" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.swapcard.com/authors/alex-martin/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swapcard.com/" },
        { "@type": "ListItem", "position": 2, "name": "Authors", "item": "https://www.swapcard.com/authors" },
        { "@type": "ListItem", "position": 3, "name": "Alex Martin", "item": "https://www.swapcard.com/authors/alex-martin" }
      ]
    }
  ]
}

```

### 11. For the author Hub Page

**Explanation of suggested improvements :**

- **CollectionPage**: this type specifies that it’s a collection/listing page—here, the authors hub. It exposes its primary resource via `mainEntity` pointing to an `ItemList` of authors. `isPartOf` clearly ties the page to the `WebSite`. Provide stable `name`, `description`, `url`, `inLanguage`, and `@id`. This typing improves how the page’s intent is understood compared to a simple `WebPage`.
- **ItemList** structures the list of authors and makes ordering explicit via `itemListOrder` and `position`. Each `ListItem` references the target element in `item`; ideally, this is a `Person` `@id` (not an inline object) to enable reuse elsewhere. `numberOfItems` documents the count and helps with previews. This modeling makes the list machine-readable, reliable, and extensible.
- **Person** describes the author as a reusable entity (name, job title, image, profiles, `worksFor` → `Organization`). Give it a **stable** `@id` (often the author page URL with `#person`) so it can be reused as `author` in each `BlogPosting`. `sameAs` links help connect official profiles. Ideally, the individual author page is a `ProfilePage` whose `mainEntity` is this `Person`, with a mirrored link back via `mainEntityOfPage`.

**Models that must be present on the page**

- **Organization** schema
- **WebSite** schema
- **BreadcrumbList** schema
- **CollectionPage**
- **Person schema**

### Complete example for the author page

```jsx
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.swapcard.com/#org",
      "name": "Swapcard",
      "url": "https://www.swapcard.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.swapcard.com/#logo",
        "url": "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/swapcard/",
        "https://www.youtube.com/c/Swapcard",
        "https://x.com/Swapcard",
        "https://www.facebook.com/Swapcard/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.swapcard.com/#website",
      "url": "https://www.swapcard.com/",
      "name": "Swapcard",
      "inLanguage": "en"
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.swapcard.com/authors/#webpage",
      "url": "https://www.swapcard.com/authors",
      "name": "Authors",
      "description": "Explore all Swapcard authors and their latest articles on event technology, attendee engagement, and ROI.",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://www.swapcard.com/#website" },
      "mainEntity": { "@id": "https://www.swapcard.com/authors/#itemlist" }
    },
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
    },
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
      "mainEntityOfPage": { "@id": "https://www.swapcard.com/authors/alex-martin/#webpage" }
    },
    {
      "@type": "Person",
      "@id": "https://www.swapcard.com/authors/jamie-chen/#person",
      "name": "Jamie Chen",
      "givenName": "Jamie",
      "familyName": "Chen",
      "jobTitle": "Product Marketing Manager",
      "worksFor": { "@id": "https://www.swapcard.com/#org" },
      "url": "https://www.swapcard.com/authors/jamie-chen",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.swapcard.com/assets/authors/jamie-chen.jpg"
      },
      "sameAs": [
        "https://www.linkedin.com/in/jamie-chen/",
        "https://x.com/jamiechen"
      ],
      "description": "PMM focusing on event tech product launches, positioning, and customer stories.",
      "mainEntityOfPage": { "@id": "https://www.swapcard.com/authors/jamie-chen/#webpage" }
    },
    {
      "@type": "Person",
      "@id": "https://www.swapcard.com/authors/riley-santos/#person",
      "name": "Riley Santos",
      "givenName": "Riley",
      "familyName": "Santos",
      "jobTitle": "Data & Insights Lead",
      "worksFor": { "@id": "https://www.swapcard.com/#org" },
      "url": "https://www.swapcard.com/authors/riley-santos",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.swapcard.com/assets/authors/riley-santos.jpg"
      },
      "sameAs": [
        "https://www.linkedin.com/in/riley-santos/",
        "https://x.com/rileysdata"
      ],
      "description": "Leads analytics content on event ROI measurement, exhibitor performance, and attendee behavior.",
      "mainEntityOfPage": { "@id": "https://www.swapcard.com/authors/riley-santos/#webpage" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.swapcard.com/authors/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.swapcard.com/" },
        { "@type": "ListItem", "position": 2, "name": "Authors", "item": "https://www.swapcard.com/authors" }
      ]
    }
  ]
}

```
