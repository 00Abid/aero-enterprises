# Aero Enterprises SEO Data

## Overview

This directory contains SEO-related files for Aero Enterprises website. These files are structured to help search engines better understand the website content and to provide data that can be used with Perplexity AI to generate SEO content.

## Files and Their Purpose

### 1. sitemap.xml

The XML sitemap lists all important pages on the website with their priority and update frequency. This helps search engines discover and index your pages efficiently.

**Usage:** This file is automatically served to search engines when they visit your website. No additional action is required.

**Maintenance:** When you add new pages to your website, update this file to include them. You can use the provided script to update the lastmod dates:

```bash
npm run update-sitemap
```

### 2. robots.txt

This file provides instructions to search engine crawlers about which parts of your website they should or shouldn't index.

**Usage:** This file is automatically served to search engines when they visit your website. No additional action is required.

### 3. schema.json

This file contains structured data about your business in JSON-LD format following schema.org standards. This data has been integrated into your index.html file.

**Usage:** The data is already added to your website's HTML. Search engines will use this to better understand your business and potentially display rich snippets in search results.

**Maintenance:** If your business information changes (address, phone, products, etc.), update both this file and the corresponding section in index.html.

### 4. seo-data.json

This is a comprehensive JSON file containing all relevant information about your website, business, and products. It's structured specifically for use with AI tools like Perplexity.

**Usage:** Upload this file to Perplexity AI when generating SEO content. See SEO-INSTRUCTIONS.md for specific prompts.

**Maintenance:** Keep this file updated with your latest products, services, and business information.

### 5. SEO-INSTRUCTIONS.md

Detailed instructions on how to use the seo-data.json file with Perplexity AI to generate various types of SEO content.

### 6. SEO-GUIDE.md

A comprehensive guide to SEO best practices for your website, including how to use all the provided files effectively.

## Using These Files with Perplexity AI

1. Go to [Perplexity AI](https://www.perplexity.ai/)
2. Start a new conversation
3. Upload the seo-data.json file
4. Use one of the prompts from SEO-INSTRUCTIONS.md

## Example Prompt

```
I've uploaded a JSON file containing information about a sheet metal supply business called Aero Enterprises. Based on this data, please generate 5 SEO-optimized meta descriptions for the homepage that are under 160 characters each, include primary keywords, and have a clear call to action.
```

## Keeping SEO Data Current

For maximum SEO benefit:

1. Update sitemap.xml whenever you add new pages (use the provided script)
2. Keep product information in schema.json and seo-data.json current
3. Regularly generate fresh content using Perplexity AI with the provided data

## Additional Resources

For more detailed information on SEO strategies for your website, refer to the SEO-GUIDE.md file in this directory.