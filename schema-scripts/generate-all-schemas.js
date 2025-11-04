import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All your pages data from Webflow
const pages = [
  // Homepage
  {
    id: "66e7f7664c809e76fa704d87",
    title: "Home",
    slug: "",
    seo: {
      title:
        "Event Engagement Platform for Trade Shows, Conferences & Associations",
      description:
        "Boost engagement, maximize ROI, and grow revenue with AI-powered tools—experience it all through Swapcard's smart, user-friendly platform.",
    },
    publishedPath: "/",
    category: "homepage",
  },
  // Features
  {
    id: "68e62f6fe945f2613fc768a1",
    title: "Networking & Matchmaking Software",
    slug: "event-networking",
    seo: {
      title: "Smart Event Networking & Lead Matchmaking | Swapcard",
      description:
        "Drive quality meetings & real ROI. Use AI to match attendees, manage meetings, and track engagement in real-time at any event scale.",
    },
    publishedPath: "/features/event-networking",
    category: "features",
  },
  {
    id: "68a5a535af9bdaf023a57a61",
    title: "Account Admin & Security",
    slug: "event-admin-security-permissions-sso",
    seo: {
      title: "Admin Tools & Security Settings for Events | Swapcard",
      description:
        "Set permissions, enable SSO, manage timezones & languages, and protect event data with Swapcard's secure, centralized admin tools for event teams.",
    },
    publishedPath: "/features/event-admin-security-permissions-sso",
    category: "features",
  },
  {
    id: "689db002711b2ed50f7f5484",
    title: "Exhibitors & Sponsors",
    slug: "exhibitor-sponsor-tools",
    seo: {
      title: "Swapcard Tools that increase ROI for Sponsors & Exhibitors",
      description:
        "Use Swapcard to turn exhibitors and sponsors into advocates with lead capture, matchmaking, and real-time ROI tools—all in one platform.",
    },
    publishedPath: "/features/exhibitor-sponsor-tools",
    category: "features",
  },
  {
    id: "6874d8491f6116aee4371add",
    title: "Attendee Engagement",
    slug: "attendee-engagement-software",
    seo: {
      title: "Attendee engagement software for Trade Show & Association Events",
      description:
        "Boost attendee engagement before, during, and after your event with Swapcard. From AI-powered networking to interactive sessions and real-time chat, create meaningful experiences that deliver ROI.",
    },
    publishedPath: "/features/attendee-engagement-software",
    category: "features",
  },
  {
    id: "67e6b83e4d6a7c340e44e2e2",
    title: "Event Monetization",
    slug: "event-monetization",
    seo: {
      title: " Event Monetization Tools for B2B Events | Swapcard",
      description:
        "Monetize your B2B event with Swapcard. Boost exhibitor ROI, increase sponsorship revenue, and unlock new revenue streams with lead capture, AI, and brand visibility tools.",
    },
    publishedPath: "/features/event-monetization",
    category: "features",
  },
  {
    id: "67bc912ad5449e905149a5a6",
    title: "Registration, Ticketing, Payments",
    slug: "event-registration-software",
    seo: {
      title: "All-in-One Event Registration Software Solutions | Swapcard",
      description:
        "Sell more tickets and drive attendance with Swapcard's event registration software. Discover how to deliver a seamless, easy-to-use experience for all.",
    },
    publishedPath: "/features/event-registration-software",
    category: "features",
  },
  {
    id: "6540efa32e0c8f2a9bb636d2",
    title: "Swapcard Go",
    slug: "swapcard-go",
    seo: {
      title: "Swapcard Go | Event in a Box for Seamless Registrations",
      description:
        "Swapcard Go simplifies check-in & on-site registration for trade shows & conferences. Get essential hardware delivered & expert support to run smooth events.",
    },
    publishedPath: "/features/swapcard-go",
    category: "features",
  },
  {
    id: "64d3914e6761bd389818d773",
    title: "Widgets",
    slug: "widgets",
    seo: {
      title:
        "Swapcard Widgets | The easiest way to boost your event's online presence",
      description:
        "Boost engagement with Swapcard's interactive widgets. Enhance interactivity, track analytics & optimize networking for a seamless event experience.",
    },
    publishedPath: "/features/widgets",
    category: "features",
  },
  // Solutions
  {
    id: "66e99790dc4385c4ad401bc7",
    title: "Community",
    slug: "event-management-software-communities",
    seo: {
      title: "Event Management Software for Communities | Swapcard",
      description:
        "Plan and manage successful events with Swapcard's powerful event planning and management software platform, perfect for small business event organizers.",
    },
    publishedPath: "/solutions/event-management-software-communities",
    category: "solutions",
  },
  {
    id: "66e99755ed760ab19d1599ef",
    title: "Associations",
    slug: "association-event-management-software",
    seo: {
      title: "Event Management Software for Associations | Swapcard",
      description:
        "Boost member retention & engagement with Swapcard's event software for associations. Simplify admin tasks, manage CE tracking & enhance networking. Contact us!",
    },
    publishedPath: "/solutions/association-event-management-software",
    category: "solutions",
  },
  {
    id: "66e995c1b8f5bd103d6f3235",
    title: "Trade Show Exhibitions",
    slug: "trade-show-management-software",
    seo: {
      title: "Trade Show & Exhibition Management Software | Swapcard",
      description:
        "Optimize trade shows with Swapcard's event lead retrieval and exhibitor lead capture tools. Enhance engagement and streamline event planning seamlessly.",
    },
    publishedPath: "/solutions/trade-show-management-software",
    category: "solutions",
  },
  {
    id: "66e995f2a407c7d071d41e58",
    title: "B2B Conferences",
    slug: "conference-management-software",
    seo: {
      title: "Conference Management Software | Swapcard",
      description:
        "Manage events with ease using Swapcard's event management & ticketing software. Simplify registration, ticketing, & on-site check-ins for a seamless experience.",
    },
    publishedPath: "/solutions/conference-management-software",
    category: "solutions",
  },
  {
    id: "66e99631e877433f6a8a35db",
    title: "Congress/Medical Conferences",
    slug: "healthcare-event-management-software",
    seo: {
      title: "Healthcare Event Management Software | Swapcard",
      description:
        "Enhance your medical congress with our event management software, featuring interactive tools, automated CME tracking, and tailored exhibitor solutions.",
    },
    publishedPath: "/solutions/healthcare-event-management-software",
    category: "solutions",
  },
  {
    id: "66e9976c4e70ed8150171062",
    title: "Media Company",
    slug: "media-company-event-management-software",
    seo: {
      title: "Event Management for Media Companies | Swapcard",
      description:
        "Discover event management software for media companies. Create engaging experiences with multimedia, polls, and live chat. Maximize revenue with targeted ads.",
    },
    publishedPath: "/solutions/media-company-event-management-software",
    category: "solutions",
  },
  {
    id: "66e994786b991285d48b518b",
    title: "Increase Attendee Networking & Engagement",
    slug: "attendee-networking-engagement",
    seo: {
      title: "Increase Attendee Networking & Engagement | Swapcard",
      description:
        "Boost attendee networking and engagement with tailored event journeys, AI-recommended connections, and interactive content to drive participation.",
    },
    publishedPath: "/solutions/attendee-networking-engagement",
    category: "solutions",
  },
  {
    id: "66e9953d40a440fd723872a1",
    title: "Improve Exhibitor and Sponsor ROI",
    slug: "exhibitor-sponsor-roi",
    seo: {
      title: "Boost Exhibitor and Sponsor ROI with Swapcard Solutions",
      description:
        "Maximize exhibitor and sponsor ROI with advanced lead generation, customizable booths, and flexible packages that enhance visibility and drive revenue.",
    },
    publishedPath: "/solutions/exhibitor-sponsor-roi",
    category: "solutions",
  },
  {
    id: "66e99561e48ebc4a38e9d3ef",
    title: "Maximize Revenue Generation & Profitability",
    slug: "event-revenue-growth",
    seo: {
      title: "Event Revenue Growth Solutions | Swapcard",
      description:
        "Drive event revenue growth with Swapcard's platform. Implement new revenue streams and boost overall profitability for your events.",
    },
    publishedPath: "/solutions/event-revenue-growth",
    category: "solutions",
  },
  {
    id: "66e9958285206e17b06fc50e",
    title: "Run Data-Driven Events",
    slug: "data-driven-events",
    seo: {
      title: "Data Driven Event Platform for Smart Event Planning Solution",
      description:
        "Optimize your events with data-driven insights from Swapcard's platform. Enhance performance and engagement.",
    },
    publishedPath: "/solutions/data-driven-events",
    category: "solutions",
  },
  {
    id: "66e9945275d89bf37186d1ec",
    title: "Modernize Registration & Onsite Access",
    slug: "registration-and-onsite-access",
    seo: {
      title: "Modernize Registration & Onsite Access | Swapcard",
      description:
        "Use Swapcard's event registration software to streamline attendee check-ins, print badges onsite, and manage registrations with ease. Try our platform now!",
    },
    publishedPath: "/solutions/registration-and-onsite-access",
    category: "solutions",
  },
  // Resources
  {
    id: "66e1ca28882059be449bbca4",
    title: "Resource Center",
    slug: "resources",
    seo: {
      title: "Download Free Event Resources & Stay on Top of Trends | Swapcard",
      description:
        "Access free event industry resources with Swapcard. Download guides, case studies & expert insights to optimize event strategies & stay ahead of trends.",
    },
    publishedPath: "/resources",
    category: "resources",
  },
  {
    id: "6881fbb53d89795aa8980171",
    title: "State of Event Engagement Report- Volume 2",
    slug: "state-of-event-engagement-report-volume-2",
    seo: {
      title:
        "State of Event Engagement Vol. 2 | Insights for Trade Shows & Associations ",
      description:
        "Get insights from 1,100+ trade show and association events with 6 million attendees. Learn about emerging trends in AI, networking, engagement & revenue growth.",
    },
    publishedPath: "/resources/state-of-event-engagement-report-volume-2",
    category: "resources",
  },
  {
    id: "68e38cf84c9b7703e56b774f",
    title: "Sales & Marketing Team Executive Playbook for Engagement & Revenue",
    slug: "sales-marketing-teams-executive-playbook-engagement-roi",
    seo: {
      title: "Executive Playbook: Boost event revenue & engagement for leaders",
      description:
        "Discover how sales & marketing directors monetize digital leads, drive engagement, and accelerate renewals with proven event growth strategies.",
    },
    publishedPath:
      "/resources/sales-marketing-teams-executive-playbook-engagement-roi",
    category: "resources",
  },
  {
    id: "64d3914e6761bd389818d71a",
    title: "Media Kit & newsroom",
    slug: "media-kit",
    seo: {
      title:
        "Swapcard Media Kit & Newsroom - Logos, Product Images, Collateral & News",
      description:
        "Discover our comprehensive media kit, designed to provide event organizers and professionals with everything they need to promote our brand at their next event.",
    },
    publishedPath: "/resources/media-kit",
    category: "resources",
  },
  // Platform
  {
    id: "66f17f4840b674b2c9513e3f",
    title: "Platform Overview",
    slug: "event-engagement",
    seo: {
      title: "Comprehensive Event Engagement Platform Smart Event Growth",
      description:
        "Discover Swapcard's all-in-one event engagement platform. Create interactive and engaging experiences for  in-person, hybrid, and virtual events.",
    },
    publishedPath: "/platform/event-engagement",
    category: "platform",
  },
  {
    id: "67375048f0ff43d64b4f5ed2",
    title: "⚙️ Integrations Template",
    slug: "integrations",
    seo: {
      title: "Swapcard Integrations | Connect Salesforce, Cvent & More",
      description:
        "Automate event management with Swapcard's software integrations. Connect with Salesforce, Cvent & top event tech tools for seamless operations. Contact us!",
    },
    publishedPath: "/platform/integrations",
    category: "platform",
  },
  {
    id: "64d3914e6761bd389818d742",
    title: "Security",
    slug: "security",
    seo: {
      title: "Security | At the Forefront of Our Innovation at Swapcard",
      description:
        "Swapcard holds 2022 SOC 2 Type 2 certification, ensuring the highest industry security standards for data protection and compliance. Contact us for more!",
    },
    publishedPath: "/platform/security",
    category: "platform",
  },
  // Legal
  {
    id: "672cd0319cb5cfa43c1f1d3c",
    title: "Privacy Policy",
    slug: "privacy-policy",
    seo: {
      title: "Privacy Policy | Swapcard - Your Data, Your Rights",
      description:
        "Read Swapcard's privacy policy to understand how we collect, use, and protect your personal information, ensuring transparency and your data rights.",
    },
    publishedPath: "/legal/privacy-policy",
    category: "legal",
  },
  {
    id: "672cb0008e5b4edebd664df9",
    title: "Terms user",
    slug: "terms-user",
    seo: {
      title: "Terms and Conditions for Users there Rights | Swapcard",
      description:
        "Read the terms and conditions for users on Swapcard, detailing your rights and responsibilities while using our event management platform.",
    },
    publishedPath: "/legal/terms-user",
    category: "legal",
  },
  {
    id: "64d3914e6761bd389818d763",
    title: "Terms organizer",
    slug: "terms-organizer",
    seo: {
      title: "Organizer Terms & Conditions | Swapcard - Event Made Easy ",
      description:
        "Review Swapcard's terms for event organizers. Learn your rights and responsibilities to ensure a seamless and successful event experience. Contact us for more!",
    },
    publishedPath: "/legal/terms-organizer",
    category: "legal",
  },
  // Other important pages
  {
    id: "66f2815f414fd64ce7d60b04",
    title: "Pricing",
    slug: "pricing-plans",
    seo: {
      title: "Swapcard Pricing | Flexible Plans for Every Event Type",
      description:
        "Explore Swapcard's pricing options and choose the perfect event engagement solution for your needs. Get started with affordable plans today!",
    },
    publishedPath: "/pricing-plans",
    category: "other",
  },
  {
    id: "66ec1e5ff5409890427adeab",
    title: "Blog",
    slug: "blog",
    seo: {
      title: "Swapcard Blog | Event Engagement Insights and Strategies",
      description:
        "Explore the latest insights about event engagement on the Swapcard blog. Get expert tips, trends, and advice to elevate your events.",
    },
    publishedPath: "/blog",
    category: "other",
  },
  {
    id: "64d3914e6761bd389818d675",
    title: "Contact Us",
    slug: "contact",
    seo: {
      title: "Contact Us | Let's talk!",
      description:
        "Have a question or suggestion? Contact the Swapcard team anytime—we're here to help with your event needs & platform support. Contact us for more information!",
    },
    publishedPath: "/contact",
    category: "other",
  },
  {
    id: "64d3914e6761bd389818d677",
    title: "Schedule Live Demo",
    slug: "contact-us",
    seo: {
      title: "Schedule a Live Demo and Experience Swapcard's Platform",
      description:
        "Get a custom demo to explore how Swapcard's intuitive platform and AI-powered capabilities help enhance attendee engagement and exhibitor ROI, and grow revenue.",
    },
    publishedPath: "/contact-us",
    category: "other",
  },
  {
    id: "64d3914e6761bd389818d665",
    title: "About us",
    slug: "about-swapcard",
    seo: {
      title: "About Us | Swapcard Powers Human Interactions",
      description:
        "Learn more about Swapcard! Discover our mission, values, and how our AI-powered event technology is transforming the industry. Explore our story now!",
    },
    publishedPath: "/about-swapcard",
    category: "other",
  },
  {
    id: "64d3914e6761bd389818d66f",
    title: "Careers",
    slug: "careers",
    seo: {
      title: "Join a Talented Team and Improve the Events Industry",
      description:
        "Work from anywhere with Swapcard! Spread across 28 countries, we offer a flexible, comfortable work environment that supports remote and global collaboration.",
    },
    publishedPath: "/careers",
    category: "other",
  },
  {
    id: "64d3914e6761bd389818d68f",
    title: "Mobile App",
    slug: "event-mobile-app",
    seo: {
      title: "Best Event App - Fully-Customizable & Easy-to-Use | Swapcard",
      description:
        "Simplify event management for onsite and hybrid events with Swapcard's intuitive event mobile app—designed to boost engagement and streamline operations.",
    },
    publishedPath: "/event-mobile-app",
    category: "other",
  },
];

// Base schema components
const baseOrganization = {
  "@type": "Organization",
  "@id": "https://www.swapcard.com/#org",
  name: "Swapcard",
  url: "https://www.swapcard.com/",
  description:
    "Swapcard is an AI-powered event and community platform that helps organizers create engaging, data-driven experiences for attendees, exhibitors, and sponsors.",
  logo: {
    "@type": "ImageObject",
    "@id": "https://www.swapcard.com/#logo",
    url: "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg",
    contentUrl:
      "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg",
  },
  sameAs: [
    "https://www.linkedin.com/company/swapcard/",
    "https://www.youtube.com/c/Swapcard",
    "https://x.com/Swapcard",
    "https://www.facebook.com/Swapcard/",
  ],
  foundingDate: "2013",
  founder: [
    {
      "@type": "Person",
      name: "Baptiste Boulard",
      jobTitle: "Chief Executive Officer",
    },
    {
      "@type": "Person",
      name: "Damien Courbon",
      jobTitle: "Chief Operations Officer",
    },
    {
      "@type": "Person",
      name: "Godefroy des Francs",
      jobTitle: "Chief Product Officer",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: "https://www.swapcard.com/contact",
      availableLanguage: "en",
      areaServed: "Worldwide",
    },
    {
      "@type": "ContactPoint",
      contactType: "help center",
      url: "https://help.swapcard.com/en/",
      availableLanguage: "en",
      areaServed: "Worldwide",
    },
  ],
};

const baseWebSite = {
  "@type": "WebSite",
  "@id": "https://www.swapcard.com/#website",
  url: "https://www.swapcard.com/",
  name: "Swapcard",
  inLanguage: "en",
  description:
    "Swapcard is an AI-powered event and community platform that helps organizers create engaging, data-driven experiences for attendees, exhibitors, and sponsors.",
  publisher: {
    "@id": "https://www.swapcard.com/#org",
  },
};

// Function to generate breadcrumb
function generateBreadcrumb(page) {
  if (page.publishedPath === "/") {
    return null; // No breadcrumb for homepage
  }

  const pathSegments = page.publishedPath
    .split("/")
    .filter((segment) => segment);
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.swapcard.com/",
    },
  ];

  let currentPath = "";
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const position = index + 2;
    const name = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    breadcrumbItems.push({
      "@type": "ListItem",
      position: position,
      name: name,
      item: `https://www.swapcard.com${currentPath}`,
    });
  });

  return {
    "@type": "BreadcrumbList",
    "@id": `https://www.swapcard.com${page.publishedPath}#breadcrumb`,
    itemListElement: breadcrumbItems,
  };
}

// Helper function to get the correct URL (without double slash)
function getPageUrl(publishedPath) {
  if (publishedPath === "/") {
    return "https://www.swapcard.com/";
  }
  return `https://www.swapcard.com${publishedPath}`;
}

// Function to get WebPage type based on page
function getWebPageType(page) {
  // Special cases for WebPage types
  if (page.publishedPath === "/blog") {
    return "CollectionPage";
  }
  if (page.publishedPath === "/about-swapcard") {
    return "AboutPage";
  }
  return "WebPage";
}

// Function to determine schema type based on page category and specific pages
function getSchemaType(page) {
  // Special case: Event Mobile App - SoftwareApplication
  if (page.publishedPath === "/event-mobile-app") {
    return {
      "@type": "SoftwareApplication",
      "@id": `https://www.swapcard.com${page.publishedPath}#app`,
      name: page.title, // Use H1 as per Zoé's note
      operatingSystem: "iOS, Android",
      applicationCategory: "BusinessApplication",
      url: getPageUrl(page.publishedPath),
      installUrl: [
        "https://apps.apple.com/us/app/swapcard-smart-event-app/id879488719",
        "https://play.google.com/store/apps/details?id=com.swapcard.apps.android",
      ],
      description: page.seo.description,
      inLanguage: "en",
      mainEntityOfPage: {
        "@id": `https://www.swapcard.com${page.publishedPath}#webpage`,
      },
    };
  }

  // Special case: Pricing page - Product with Offers
  if (page.publishedPath === "/pricing-plans") {
    return {
      "@type": "Product",
      "@id": `https://www.swapcard.com${page.publishedPath}#product`,
      name: page.title, // Use H1 as per Zoé's note (line 619)
      description: page.seo.description,
      image: [
        "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg",
      ],
      url: getPageUrl(page.publishedPath),
      brand: { "@type": "Brand", name: "Swapcard" },
      offers: [
        {
          "@type": "Offer",
          "@id": `https://www.swapcard.com${page.publishedPath}#offer-starter`,
          name: "Starter",
          url: `https://www.swapcard.com${page.publishedPath}#starter`,
          availability: "https://schema.org/InStock",
          price: "520",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          "@id": `https://www.swapcard.com${page.publishedPath}#offer-professional`,
          name: "Professional",
          url: `https://www.swapcard.com${page.publishedPath}#professional`,
          availability: "https://schema.org/InStock",
          price: "4190",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          "@id": `https://www.swapcard.com${page.publishedPath}#offer-enterprise`,
          name: "Enterprise (Custom)",
          url: `https://www.swapcard.com${page.publishedPath}#enterprise`,
          availability: "https://schema.org/InStock",
        },
      ],
    };
  }

  // Category-based schemas
  switch (page.category) {
    case "features":
      // Features pages use Product (not Service!) - as per README line 1033
      return {
        "@type": "Product",
        "@id": `https://www.swapcard.com${page.publishedPath}#product`,
        name: `${page.title} | Swapcard`, // H1 + brand name as per Zoé's note (line 828)
        description: page.seo.description,
        brand: { "@type": "Brand", name: "Swapcard" },
        image: [
          "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg",
        ],
        url: getPageUrl(page.publishedPath),
        category: "Event Management Software",
      };

    case "solutions":
      // Solutions pages use Service (correct!)
      return {
        "@type": "Service",
        "@id": `https://www.swapcard.com${page.publishedPath}#service`,
        name: page.title, // Use H1 for serviceType as per Zoé's note (line 439)
        serviceType: page.title, // H1 defines the type of service
        url: getPageUrl(page.publishedPath),
        description: page.seo.description,
        brand: { "@id": "https://www.swapcard.com/#org" },
        provider: { "@id": "https://www.swapcard.com/#org" },
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://www.swapcard.com/",
          availableLanguage: ["en"],
        },
        audience: {
          "@type": "BusinessAudience",
          name: "Event organizers, associations, trade show & conference teams",
        },
      };

    case "resources":
      return {
        "@type": "Article",
        "@id": `https://www.swapcard.com${page.publishedPath}#article`,
        headline: page.seo.title,
        description: page.seo.description,
        author: { "@id": "https://www.swapcard.com/#org" },
        publisher: { "@id": "https://www.swapcard.com/#org" },
        datePublished: new Date().toISOString().split("T")[0],
        dateModified: new Date().toISOString().split("T")[0],
      };

    default:
      return null;
  }
}

// Function to get additional schemas for specific pages
function getAdditionalSchemas(page) {
  const additionalSchemas = [];

  // Pricing page: Add OfferCatalog
  if (page.publishedPath === "/pricing-plans") {
    additionalSchemas.push({
      "@type": "OfferCatalog",
      "@id": `https://www.swapcard.com${page.publishedPath}#catalog`,
      name: "Pricing plans",
      url: getPageUrl(page.publishedPath),
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Starter",
          item: {
            "@id": `https://www.swapcard.com${page.publishedPath}#offer-starter`,
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Professional",
          item: {
            "@id": `https://www.swapcard.com${page.publishedPath}#offer-professional`,
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Enterprise (Custom)",
          item: {
            "@id": `https://www.swapcard.com${page.publishedPath}#offer-enterprise`,
          },
        },
      ],
    });
  }

  // Homepage: Add VideoObject
  if (page.publishedPath === "/") {
    additionalSchemas.push({
      "@type": "VideoObject",
      "@id": "https://www.swapcard.com/#video",
      name: "Swapcard – Event Engagement Platform",
      description:
        "Discover how Swapcard helps organizers boost event engagement with AI-driven recommendations, interactive tools, lead generation, and real-time analytics.",
      thumbnailUrl:
        "https://embed-ssl.wistia.com/deliveries/b3e4898baa04474e534ab0a125659eb9.jpg?image_crop_resized=960x540",
      uploadDate: "2024-09-27T15:31:20+00:00",
      duration: "PT51S",
      embedUrl: "https://fast.wistia.net/embed/iframe/9gb4ujxa76",
      contentUrl:
        "https://embed-ssl.wistia.com/deliveries/730ddbf2f7bcdadf63b264677eaee80da6138073.m3u8",
      transcript:
        "Achieve better outcomes with an event engagement platform tailored to your needs. Meet Swapcard, the event engagement platform powered by AI-driven recommendations and interactive tools. Turn attendees into high-quality leads with lead-generation tools. Help exhibitors stand out with interactive booths & unique sponsorship options. Boost event registration with flexible ticket options and attract more sponsors and exhibitors with premium add-ons and tailored solutions. Use detailed analytics to track event performance in real time, optimize strategies, and maximize ROI. Unify data sources, boost efficiency, and focus on what matters most. Ready to deliver better event outcomes? Partner with Swapcard, today.",
      potentialAction: {
        "@type": "SeekToAction",
        target:
          "https://fast.wistia.net/embed/iframe/9gb4ujxa76?pageUrl=https%3A%2F%2Fwww.swapcard.com%2F&wtime={seek_to_second_number}",
        "startOffset-input": {
          "@type": "PropertyValueSpecification",
          valueRequired: true,
          valueName: "seek_to_second_number",
        },
      },
    });
  }

  return additionalSchemas;
}

// Function to generate schema for a page
function generatePageSchema(page) {
  const webPageType = getWebPageType(page);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [],
  };

  // 1. Add WebPage (or CollectionPage/AboutPage)
  const webPageSchema = {
    "@type": webPageType,
    "@id": `https://www.swapcard.com${page.publishedPath}#webpage`,
    url: getPageUrl(page.publishedPath),
    name: page.seo.title,
    inLanguage: "en",
    description: page.seo.description,
    isPartOf: { "@id": "https://www.swapcard.com/#website" },
    about: { "@id": "https://www.swapcard.com/#org" },
  };

  // Add keywords for Blog (CollectionPage)
  if (page.publishedPath === "/blog") {
    webPageSchema.keywords = [
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
      "Audience Engagement",
    ];
  }

  schema["@graph"].push(webPageSchema);

  // 2. Add breadcrumb if not homepage
  if (page.publishedPath !== "/") {
    const breadcrumb = generateBreadcrumb(page);
    if (breadcrumb) {
      schema["@graph"].push(breadcrumb);
    }
  }

  // 3. Add specific schema type (Product, Service, Article, etc.)
  const specificSchema = getSchemaType(page);
  if (specificSchema) {
    schema["@graph"].push(specificSchema);
  }

  // 4. Add additional schemas (VideoObject, OfferCatalog, etc.)
  const additionalSchemas = getAdditionalSchemas(page);
  if (additionalSchemas.length > 0) {
    schema["@graph"].push(...additionalSchemas);
  }

  // 5. Always add Organization and WebSite at the end
  schema["@graph"].push(baseOrganization);
  schema["@graph"].push(baseWebSite);

  return schema;
}

// Helper function to convert page title to filename
// Uses the exact Webflow page title to ensure perfect matching
function getFileNameFromTitle(page) {
  if (page.publishedPath === "/") {
    return "homepage";
  }

  // Use page title from Webflow (exact match), convert to lowercase and replace spaces with hyphens
  let fileName = page.title
    .toLowerCase()
    .replace(/[⚙️🟣⬇️]/g, "") // Remove emojis (⚙️, 🟣, ⬇️, etc.)
    .replace(/\s+/g, " ") // Normalize spaces first
    .replace(/\//g, "-") // Replace slashes with hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[&]/g, "and") // Replace & with 'and'
    .replace(/[,]/g, "") // Remove commas
    .replace(/[^a-z0-9-]/g, "") // Remove special characters except hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

  return fileName || page.slug || "untitled";
}

// Generate all schema files
pages.forEach((page) => {
  const schema = generatePageSchema(page);
  const fileName = getFileNameFromTitle(page);
  const category = page.category;

  const filePath = path.join(__dirname, category, `${fileName}.html`);

  const htmlContent = `<script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
</script>`;

  fs.writeFileSync(filePath, htmlContent);
  console.log(`✅ Generated: ${filePath}`);
});

console.log("\n🎉 All schema files generated successfully!\n");
console.log("📊 Summary:");
console.log(`- Total pages: ${pages.length}`);
console.log(`- Homepage: 1 (with VideoObject)`);
console.log(`- Features: 9 (Product schema with brand)`);
console.log(`- Solutions: 10 (Service schema)`);
console.log(`- Resources: 4 (Article schema)`);
console.log(`- Platform: 3`);
console.log(`- Legal: 3`);
console.log(`- Other: 6`);
console.log(`  - Event Mobile App: SoftwareApplication`);
console.log(`  - Blog: CollectionPage with keywords`);
console.log(`  - Pricing: Product + OfferCatalog`);
console.log(`  - About: AboutPage`);
console.log("\n✨ Ready to copy-paste into Webflow!\n");
