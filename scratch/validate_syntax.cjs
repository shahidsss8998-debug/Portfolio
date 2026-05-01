const fs = require('fs');
const path = require('path');

const filePath = 'src/components/Education.jsx';
const content = fs.readFileSync(filePath, 'utf8');

try {
    // We need to strip the JSX parts or use a JSX-aware parser
    // But let's just try to parse the 'education' array part
    const educationPart = content.match(/const education = (\[[\s\S]*?\]);/)[1];
    eval('const x = ' + educationPart);
    console.log('Array is valid JS');
} catch (e) {
    console.error('Error parsing education array:', e.message);
}
