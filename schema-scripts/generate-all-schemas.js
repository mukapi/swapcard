import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pages demandées par l'agence SEO + toutes les pages Solutions, Platform et Features
// Source: CLIENT_SCHEMA_INSTRUCTIONS copy.md et NOTION.md
// Total: 8 pages explicites + 12 Solutions + 2 Platform + 20 Features = 42 pages
const pages = [
  // 1. Homepage (Section 4.1)
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
  // 2. Event Mobile App (Section 4.2 - Product Page)
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
  // 3. Event Registration Software (Section 4.2 - Product Page example)
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
  // Features pages - toutes les pages Features publiées (Section 4.2 - Product Pages)
  {
    id: "6902017bf1c2449738b08fed",
    title: "Home Page Builder",
    slug: "event-homepage-builder",
    seo: {
      title: "Build branded event homepages that convert | Swapcard",
      description:
        "Design high-converting, mobile-ready event homepages. Customize content, target by audience, and prove ROI to exhibitors & sponsors.",
    },
    publishedPath: "/features/event-homepage-builder",
    category: "features",
  },
  {
    id: "68e62f6fe945f2613fc768a1",
    title: "Networking & Matchmaking Software",
    slug: "event-networking",
    seo: {
      title: "Smart Event Networking & Matchmaking Software | Swapcard",
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
    id: "68a341e1a1a65d968b59fef3",
    title: "Onsite control access & checkpoints",
    slug: "onsite-control-access-checkpoints",
    seo: {
      title: "Onsite control access & checkpoints",
      description:
        "Power your events with Swapcard's Hosted Buyer Software. Automate B2B matchmaking, scheduling, and ROI tracking. Request a personalized demo today.",
    },
    publishedPath: "/features/onsite-control-access-checkpoints",
    category: "features",
  },
  {
    id: "68a2fe30a392c76e4ce47509",
    title: "Hosted Buyer Software",
    slug: "hosted-buyer-software",
    seo: {
      title: "Swapcard Hosted Buyer Software | Smart Matchmaking & ROI",
      description:
        "Power your events with Swapcard's Hosted Buyer Software. Automate B2B matchmaking, scheduling, and ROI tracking. Request a personalized demo today.",
    },
    publishedPath: "/features/hosted-buyer-software",
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
    id: "689c67af9eca6b3a4586d93a",
    title: "Event Content & Session Management",
    slug: "event-content-session-management",
    seo: {
      title: "Event Content & Session Management Platform | Swapcard",
      description:
        "Discover Swapcard's event content management tools to streamline session planning, speaker coordination, and attendee engagement. Live, hybrid, or virtual.",
    },
    publishedPath: "/features/event-content-session-management",
    category: "features",
  },
  {
    id: "689b5389af599fb23c01b0f2",
    title: "Event Branding & Communication",
    slug: "event-branding-communication-tools",
    seo: {
      title: " Branding & Communication Tools for Events | Swapcard",
      description:
        "Control your brand across each touchpoint—homepage, app, emails, and more. Event organizers use Swapcard to create immersive experiences that boost engagement.",
    },
    publishedPath: "/features/event-branding-communication-tools",
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
    id: "66f419b2542cc239b4feb045",
    title: "Private & Limited Sessions",
    slug: "private-and-limited-sessions",
    seo: {
      title: "Exclusive Private & Limited Access Sessions | Swapcard",
      description:
        "Offer exclusive, secure access to high-value content with Swapcard's private sessions. Control permissions and track attendee engagement with ease! Contact us!",
    },
    publishedPath: "/features/private-and-limited-sessions",
    category: "features",
  },
  {
    id: "66f4199895ceaa8b1269f631",
    title: "Backstage",
    slug: "backstage",
    seo: {
      title: "Smooth Virtual Event Management and Hosting with Backstage",
      description:
        "Ensure smooth virtual event experiences with Swapcard's Backstage! Manage speakers, collaborate in real-time, and deliver professional sessions. Contact!",
    },
    publishedPath: "/features/backstage",
    category: "features",
  },
  {
    id: "66f4197ee578b51bfa28bcb6",
    title: "AI / Personalized recommendations",
    slug: "ai-personalized-recomendations",
    seo: {
      title: "AI-Driven Personalized Event Recommendations | Swapcard",
      description:
        "Enhance event engagement with Swapcard's AI-powered recommendations. Deliver personalized networking, exhibitor & session suggestions to attendees. Contact us!",
    },
    publishedPath: "/features/ai-personalized-recomendations",
    category: "features",
  },
  {
    id: "66f419697ff56e5321863a23",
    title: "Meeting Request Rules",
    slug: "meeting-request-rules",
    seo: {
      title: "Flexible Event Meeting Management Tools | Swapcard",
      description:
        "Simplify networking with Swapcard's meeting request tools! Customize schedules, set meeting rules, and enhance meaningful connections. Contact us for more!",
    },
    publishedPath: "/features/meeting-request-rules",
    category: "features",
  },
  {
    id: "66f418f39f550d1cfa4c2c1d",
    title: "Onsite self check-in & Badge Printing",
    slug: "event-check-in-app",
    seo: {
      title: "Event Check-In App for Fast Entry & Smart Badge Printing",
      description:
        " Enhance attendee flow with Swapcard's onsite event check-in app. Reduce registration wait times, manage badge printing, and track attendance live effortlessly.",
    },
    publishedPath: "/features/event-check-in-app",
    category: "features",
  },
  {
    id: "66f418b733d27c6d1272dfc6",
    title: "Lead Qualification",
    slug: "lead-qualification",
    seo: {
      title: "Maximize Exhibitor ROI with Lead Qualification Tools | Swapcard",
      description:
        "Boost exhibitor success with Swapcard's lead qualification tools! Prioritize high-value leads and increase event conversion rates effectively. Contact us",
    },
    publishedPath: "/features/lead-qualification",
    category: "features",
  },
  {
    id: "66f417aa357293565ccf30ed",
    title: "Lead Capture",
    slug: "lead-capture",
    seo: {
      title: "Streamline Lead Capture with User-Friendly Software | Swapcard",
      description:
        "Simplify lead capture at events! Automate lead collection, qualify prospects, and help exhibitors boost their ROI with Swapcard's smart booth management tool.",
    },
    publishedPath: "/features/lead-capture",
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
        "Boost engagement with Swapcard's interactive widgets. Enhance interactivity, track analytics & optimize networking for a seamless event experience. ",
    },
    publishedPath: "/features/widgets",
    category: "features",
  },
  // 5 nouvelles pages Features ajoutées (décembre 2025)
  {
    id: "64d3914e6761bd389818d671",
    title: "Community builder",
    slug: "community-builder",
    seo: {
      title: "Build Event Communities Year-Round | Swapcard",
      description:
        "Keep your audience engaged all year. Host webinars, foster networking, and monetize your event community with Swapcard's Community Builder.",
    },
    publishedPath: "/features/community-builder",
    category: "features",
  },
  {
    id: "64d3914e6761bd389818d68b",
    title: "Analytics and Data reporting",
    slug: "event-analytics",
    seo: {
      title: "Event Analytics & Data Reporting | Run data-driven events",
      description:
        "Capture and monitor event analytics in one place, identify marketing signals, and unlock real business insights to improve your event outcomes.",
    },
    publishedPath: "/features/event-analytics",
    category: "features",
  },
  {
    id: "693063882b686d81ab4e6f72",
    title: "Swapcard Virtual Event AI Assistant",
    slug: "event-ai-assistant",
    seo: {
      title: "AI Assistant for Events: Smarter Navigation & Lead Capture | Swapcard",
      description:
        "Enhance attendee experience and exhibitor ROI with Swapcard's AI-powered event assistant. Deliver smart support, personalized recommendations, and streamlined operations across every event touchpoint.",
    },
    publishedPath: "/features/event-ai-assistant",
    category: "features",
  },
  {
    id: "69304f595c9b323b1f9c8dde",
    title: "Exhibitor Marketplace",
    slug: "exhibitor-marketplace",
    seo: {
      title: "Sell exhibitor add-ons and services effortlessly | Swapcard",
      description:
        "Launch a self-service marketplace for exhibitors. Sell lead capture, networking tools, and custom services with automated payments and instant activation.",
    },
    publishedPath: "/features/exhibitor-marketplace",
    category: "features",
  },
  {
    id: "691f30c687a8e847503cea23",
    title: "Branded & White Label Event Apps",
    slug: "branded-white-label-event-apps",
    seo: {
      title: "Branded Event Apps & White-Label Platform | Swapcard",
      description:
        "Launch branded web & mobile event apps with segment-specific UX, custom domains, and publisher control. Built for trade shows, conferences & associations.",
    },
    publishedPath: "/features/branded-white-label-event-apps",
    category: "features",
  },
  // 4. Attendee Networking & Engagement (Section 4.3 - Solution Page)
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
  // Solutions pages - toutes les pages Solutions publiées
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
    id: "66e9959cad573484bc24cb50",
    title: "Professional Services",
    slug: "professional-services",
    seo: {
      title: "Event Professional Services for Seamless Event Management",
      description:
        "Leverage Swapcard for seamless professional services events. From planning to post-event analysis, receive expert support tailored to your needs.",
    },
    publishedPath: "/solutions/professional-services",
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
  // Platform pages
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
    title: "Integrations",
    slug: "integrations",
    seo: {
      title: "Integrations | Swapcard",
      description:
        "Automate event management with Swapcard's software integrations. Connect with Salesforce, Cvent & top event tech tools for seamless operations. Contact us!",
    },
    publishedPath: "/platform/integrations",
    category: "platform",
  },
  // 5. Blog (Section 4.4 - Blog Hub Page)
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
  // 6. Pricing (Section 4.6 - Pricing Page)
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
  // 7. About Swapcard (Section 4.7 - About Page)
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
  // 8. Authors (Section 4.9 - Author Hub Page)
  {
    id: "66eaf51f50a4fd43177de8f5",
    title: "Authors",
    slug: "authors",
    seo: {
      title: "Authors | Swapcard",
      description:
        "Explore all Swapcard authors and their latest articles on event technology, attendee engagement, and ROI.",
    },
    publishedPath: "/authors",
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
  if (page.publishedPath === "/authors") {
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
      // Seule la page event-registration-software garde Product (car elle a des avis/notes)
      // Les autres pages features utilisent WebPage pour éviter les warnings Google
      // Source: Recommandation SEO - Product nécessite offers, aggregateRating ou review
      if (page.publishedPath === "/features/event-registration-software") {
        return {
          "@type": "Product",
          "@id": `https://www.swapcard.com${page.publishedPath}#product`,
          name: `${page.title} | Swapcard`,
          description: page.seo.description,
          brand: { "@type": "Brand", name: "Swapcard" },
          image: [
            "https://cdn.prod.website-files.com/6341448fda79c92372b010a4/63502c47c8e7bdfa7c25aefe_swapcardLogo.svg",
          ],
          url: getPageUrl(page.publishedPath),
          category: "Event Management Software",
          // Note G2 affichée sur la page - requis pour Product schema
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "394",
          },
        };
      }
      // Autres pages features → WebPage (pas de Product sans avis)
      return null; // WebPage est déjà ajouté par défaut dans generatePageSchema()

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

    case "platform":
      // Platform pages use Service (similar to Solutions)
      return {
        "@type": "Service",
        "@id": `https://www.swapcard.com${page.publishedPath}#service`,
        name: page.title,
        serviceType: "Event Engagement Platform",
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

  // Authors page: Add ItemList (as per section 4.9)
  if (page.publishedPath === "/authors") {
    additionalSchemas.push({
      "@type": "ItemList",
      "@id": `https://www.swapcard.com${page.publishedPath}#itemlist`,
      name: "Swapcard Authors",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: 0, // Will be updated when authors are added
      itemListElement: [], // Empty for now - will be populated when authors are added
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

  // Add mainEntity for Authors page (CollectionPage pointing to ItemList)
  if (page.publishedPath === "/authors") {
    webPageSchema.mainEntity = {
      "@id": `https://www.swapcard.com${page.publishedPath}#itemlist`,
    };
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
console.log(
  `- Total pages: ${pages.length} (8 pages demandées par l'agence SEO)`
);
console.log(`- Homepage: 1 (WebPage + VideoObject)`);
console.log(`- Event Mobile App: 1 (SoftwareApplication)`);
console.log(`- Event Registration Software: 1 (Product)`);
console.log(`- Attendee Networking & Engagement: 1 (Service)`);
console.log(`- Blog: 1 (CollectionPage with keywords)`);
console.log(`- Pricing: 1 (Product + OfferCatalog)`);
console.log(`- About Swapcard: 1 (AboutPage)`);
console.log(`- Authors: 1 (CollectionPage + ItemList)`);
console.log("\n✨ Ready to copy-paste into Webflow!\n");

// ============================================================================
// UTILITY FUNCTIONS (Optional - uncomment if needed)
// ============================================================================

/**
 * Analyze SEO Agency Requirements
 * Compare pages in script with pages explicitly mentioned by SEO agency
 * Usage: Uncomment and call analyzeSEOAgencyRequirements()
 */
function analyzeSEOAgencyRequirements() {
  const seoAgencyRequestedPages = [
    {
      url: "/",
      title: "Home",
      type: "Homepage",
      schemaType: "WebPage + VideoObject",
    },
    {
      url: "/event-mobile-app",
      title: "Event Mobile App",
      type: "Product Page (Feature)",
      schemaType: "SoftwareApplication",
    },
    {
      url: "/features/event-registration-software",
      title: "Event Registration Software",
      type: "Product Page (Feature)",
      schemaType: "Product",
    },
    {
      url: "/solutions/attendee-networking-engagement",
      title: "Attendee Networking & Engagement",
      type: "Solution Page",
      schemaType: "Service",
    },
    {
      url: "/blog",
      title: "Blog",
      type: "Blog Hub Page",
      schemaType: "CollectionPage",
    },
    {
      url: "/pricing-plans",
      title: "Pricing",
      type: "Pricing Page",
      schemaType: "Product + OfferCatalog",
    },
    {
      url: "/about-swapcard",
      title: "About Swapcard",
      type: "About Page",
      schemaType: "AboutPage",
    },
    {
      url: "/authors",
      title: "Authors",
      type: "Author Hub Page",
      schemaType: "CollectionPage + ItemList",
    },
  ];

  const foundPages = [];
  const missingPages = [];

  seoAgencyRequestedPages.forEach((requestedPage) => {
    const found = pages.find(
      (page) => page.publishedPath === requestedPage.url
    );
    if (found) {
      foundPages.push({ requested: requestedPage, current: found });
    } else {
      missingPages.push(requestedPage);
    }
  });

  console.log("\n📋 SEO Agency Requirements Analysis:");
  console.log(
    `✅ Pages found: ${foundPages.length}/${seoAgencyRequestedPages.length}`
  );
  if (missingPages.length > 0) {
    console.log(`❌ Missing pages: ${missingPages.length}`);
    missingPages.forEach((page) =>
      console.log(`   - ${page.title} (${page.url})`)
    );
  }

  const extraPages = pages.filter(
    (page) =>
      !seoAgencyRequestedPages.some((req) => req.url === page.publishedPath)
  );
  if (extraPages.length > 0) {
    console.log(
      `\n⚠️  Extra pages (not mentioned by SEO agency): ${extraPages.length}`
    );
  }
}

/**
 * Sync Webflow Page Titles
 * Use this function to update page titles from Webflow MCP API
 * Usage: Call syncWebflowTitles(webflowPagesData) after fetching from MCP
 */
function syncWebflowTitles(webflowPagesData) {
  // webflowPagesData should be an array of { id, title, publishedPath }
  console.log("\n🔄 Syncing Webflow titles...");

  webflowPagesData.forEach((webflowPage) => {
    const pageIndex = pages.findIndex(
      (p) =>
        p.id === webflowPage.id || p.publishedPath === webflowPage.publishedPath
    );
    if (pageIndex !== -1) {
      const oldTitle = pages[pageIndex].title;
      pages[pageIndex].title = webflowPage.title;
      console.log(`✅ Updated: ${oldTitle} → ${webflowPage.title}`);
    } else {
      console.log(
        `⚠️  Page not found: ${webflowPage.title} (${webflowPage.publishedPath})`
      );
    }
  });

  console.log(
    "\n✅ Sync complete! Run generate-all-schemas.js to regenerate files."
  );
}

/**
 * Compare with Webflow Pages
 * Use MCP Webflow API to fetch all pages and compare with script
 * Usage: Call compareWithWebflow(webflowPagesData) after fetching from MCP
 */
function compareWithWebflow(webflowPagesData) {
  // webflowPagesData should be an array of { id, title, publishedPath, draft, archived }
  const publishedPages = webflowPagesData.filter(
    (p) => !p.draft && !p.archived
  );

  console.log("\n🔍 Comparing with Webflow pages...");
  console.log(`Webflow published pages: ${publishedPages.length}`);
  console.log(`Pages in script: ${pages.length}`);

  const missingInScript = publishedPages.filter(
    (wp) =>
      !pages.some((p) => p.id === wp.id || p.publishedPath === wp.publishedPath)
  );

  if (missingInScript.length > 0) {
    console.log(
      `\n❌ Pages in Webflow but missing in script: ${missingInScript.length}`
    );
    missingInScript.slice(0, 10).forEach((page) => {
      console.log(`   - ${page.title} (${page.publishedPath})`);
    });
    if (missingInScript.length > 10) {
      console.log(`   ... and ${missingInScript.length - 10} more`);
    }
  }

  const missingInWebflow = pages.filter(
    (p) =>
      !publishedPages.some(
        (wp) => wp.id === p.id || wp.publishedPath === p.publishedPath
      )
  );

  if (missingInWebflow.length > 0) {
    console.log(
      `\n⚠️  Pages in script but not found in Webflow: ${missingInWebflow.length}`
    );
    missingInWebflow.forEach((page) => {
      console.log(`   - ${page.title} (${page.publishedPath})`);
    });
  }
}

// Uncomment to run utility functions:
// analyzeSEOAgencyRequirements();
// syncWebflowTitles([...]); // Pass Webflow pages data from MCP
// compareWithWebflow([...]); // Pass Webflow pages data from MCP
