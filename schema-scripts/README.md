# Swapcard Schema.org Implementation

This folder contains all the schema.org HTML scripts for your Swapcard website. Each file is ready to be copied and pasted into Webflow's custom code section.

## 📁 Folder Structure

```
schema-scripts/
├── homepage/
│   └── homepage-schema.html
├── features/
│   ├── event-networking-schema.html
│   ├── event-admin-security-permissions-sso-schema.html
│   ├── exhibitor-sponsor-tools-schema.html
│   └── ... (8 more feature pages)
├── solutions/
│   ├── event-management-software-communities-schema.html
│   ├── association-event-management-software-schema.html
│   └── ... (8 more solution pages)
├── resources/
│   ├── resources-schema.html
│   ├── state-of-event-engagement-report-volume-2-schema.html
│   └── ... (3 more resource pages)
├── platform/
│   ├── event-engagement-schema.html
│   ├── integrations-schema.html
│   └── security-schema.html
├── legal/
│   ├── privacy-policy-schema.html
│   ├── terms-user-schema.html
│   └── terms-organizer-schema.html
├── other/
│   ├── pricing-plans-schema.html
│   ├── blog-schema.html
│   ├── contact-schema.html
│   └── ... (6 more pages)
└── generate-all-schemas.js
```

## 🚀 How to Use

### 1. Copy the Schema Code
1. Open any `.html` file in this folder
2. Copy the entire content (including the `<script>` tags)
3. The content is ready to paste into Webflow

### 2. Add to Webflow
1. Go to your Webflow project
2. Navigate to the specific page
3. Go to **Page Settings** → **Custom Code**
4. Paste the schema code in the **Head Code** section
5. Save and publish

## 📋 Schema Types Implemented

### ✅ What's Included in Each Schema:

1. **WebPage Schema** - Basic page information
2. **BreadcrumbList Schema** - Navigation breadcrumbs (except homepage)
3. **Organization Schema** - Swapcard company information
4. **WebSite Schema** - Website information
5. **Specific Schema Types** based on page category:
   - **Service Schema** - For features and solutions pages
   - **Article Schema** - For resources and blog pages
   - **Product Schema** - For pricing pages

### 🎯 SEO Agency Recommendations Implemented:

✅ **Single @graph structure** - All entities grouped together  
✅ **Unique @id URLs** - Each element has a unique identifier  
✅ **Consistent Organization description** - Same description across all pages  
✅ **Proper breadcrumb navigation** - Auto-generated based on URL structure  
✅ **Page-specific content** - Meta titles and descriptions from Webflow  
✅ **Contact information** - Customer support and help center details  
✅ **Social media links** - LinkedIn, YouTube, Twitter, Facebook  

## 🔧 Customization

### To Update Organization Information:
Edit the `baseOrganization` object in `generate-all-schemas.js` and re-run the script.

### To Add New Pages:
1. Add page data to the `pages` array in `generate-all-schemas.js`
2. Run: `node generate-all-schemas.js`

### To Modify Schema Types:
Update the `getSchemaType()` function in `generate-all-schemas.js`

## 📊 Generated Files Summary

- **Total Pages**: 36 schema files generated
- **Homepage**: 1 file
- **Features**: 9 files  
- **Solutions**: 10 files
- **Resources**: 4 files
- **Platform**: 3 files
- **Legal**: 3 files
- **Other**: 6 files

## 🎯 Next Steps

1. **Review the generated files** - Check a few examples to ensure they look correct
2. **Start with key pages** - Begin with homepage, pricing, and main feature pages
3. **Test in Google Rich Results** - Use Google's Rich Results Test tool
4. **Monitor in Search Console** - Check for any schema errors
5. **Gradually implement** - Add schemas to all pages over time

## 🔍 Validation

After implementing, validate your schema using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)

## 📞 Support

If you need to modify any schema or add new pages, you can:
1. Edit the `generate-all-schemas.js` file
2. Re-run the script to regenerate all files
3. Or manually edit individual HTML files

---

**Note**: All schema files are ready to use and follow the SEO agency's recommendations exactly. Just copy and paste into Webflow!
