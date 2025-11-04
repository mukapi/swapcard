# Swapcard Schema Scripts

This repository contains scripts to generate Schema.org structured data for the Swapcard website.

## Quick Start

To generate all schema files:

```bash
npm run generate
```

Or directly:

```bash
node schema-scripts/generate-all-schemas.js
```

## Project Structure

```
schema-scripts/
├── generate-all-schemas.js    # Main script to generate all schema files
├── homepage/                  # Homepage schema
├── features/                  # Feature pages schemas
├── solutions/                 # Solution pages schemas
├── resources/                 # Resource pages schemas
├── platform/                  # Platform pages schemas
├── legal/                     # Legal pages schemas
└── other/                     # Other pages schemas
```

## How It Works

The `generate-all-schemas.js` script reads page data and generates HTML files containing Schema.org JSON-LD markup. Each generated file is ready to be copied and pasted into Webflow's custom code section.

For more details, see the [schema-scripts README](schema-scripts/README.md).

## Requirements

- Node.js 18+ (uses native modules only, no dependencies needed)
