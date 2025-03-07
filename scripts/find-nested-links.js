
// Find components with nested <a> tags or Link components
const fs = require('fs');
const path = require('path');

function searchDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      searchDirectory(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Simple heuristic: if file has both <a and <Link or uses router Link
      if ((content.includes('<a') && content.includes('Link')) || 
          (content.includes('<a') && content.includes('href='))) {
        console.log(`Potential nested links in: ${filePath}`);
      }
    }
  });
}

searchDirectory('./client/src');
