import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const updateSitemapDates = () => {
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    const currentDate = new Date().toISOString().split('T')[0];

    try {
        let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

        // Update all lastmod dates to current date
        sitemapContent = sitemapContent.replace(
            /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
            `<lastmod>${currentDate}</lastmod>`
        );

        fs.writeFileSync(sitemapPath, sitemapContent);
        console.log(`✅ Sitemap updated with current date: ${currentDate}`);
    } catch (error) {
        console.error('❌ Error updating sitemap:', error);
    }
};

updateSitemapDates();