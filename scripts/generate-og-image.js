const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateOGImage() {
  console.log('Generating Open Graph image...');
  
  // Create the scripts directory if it doesn't exist
  const scriptsDir = path.resolve(__dirname);
  if (!fs.existsSync(scriptsDir)) {
    fs.mkdirSync(scriptsDir, { recursive: true });
  }
  
  // Launch a headless browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport to OG image dimensions
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 1,
    });
    
    // Get the absolute path to the HTML file
    const htmlPath = path.resolve(process.cwd(), 'public', 'og-image.html');
    console.log(`Loading HTML from: ${htmlPath}`);
    
    // Load the HTML file
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0',
    });
    
    // Take a screenshot
    const outputPath = path.resolve(process.cwd(), 'public', 'og-image.jpg');
    console.log(`Saving image to: ${outputPath}`);
    
    await page.screenshot({
      path: outputPath,
      type: 'jpeg',
      quality: 90,
    });
    
    console.log('Open Graph image generated successfully!');
  } catch (error) {
    console.error('Error generating Open Graph image:', error);
  } finally {
    await browser.close();
  }
}

// Run the function
generateOGImage().catch(console.error); 