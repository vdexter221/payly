
// Script to find potential nested <a> tags in React components
const fs = require('fs');
const path = require('path');

function searchFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Look for components that use both Link and NavigationMenu
  if (content.includes('Link') && content.includes('NavigationMenu')) {
    console.log(`Potential nested links in: ${filePath}`);
    
    // Look for NavigationMenu.Link with asChild prop and Link components
    if (content.includes('NavigationMenu.Link') && 
        content.includes('asChild') && 
        content.includes('<Link')) {
      console.log(`  HIGH RISK: Using NavigationMenu.Link with asChild and Link component`);
    }
  }
  
  // Check for anchor tags inside Link components
  if (content.includes('<Link') && content.includes('<a')) {
    console.log(`Potential anchor inside Link in: ${filePath}`);
  }
}

function searchDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      searchDirectory(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
      searchFile(filePath);
    }
  });
}

console.log("Searching for potential nested anchor tags...");
searchDirectory('./client/src');
