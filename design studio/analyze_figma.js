const fs = require('fs');

try {
    const rawData = fs.readFileSync('figma_node.json');
    const data = JSON.parse(rawData);

    // Handle full file structure which has 'document' at root
    const rootNode = data.document;

    if (!rootNode) {
        console.log("No 'document' found in JSON");
        process.exit(1);
    }

    console.log(`Analyzing Document: ${data.name}`);

    function traverse(node, depth = 0, parents = []) {
        const indent = '  '.repeat(depth);

        if (node.type === 'TEXT') {
            const text = node.characters.replace(/\n/g, ' ');
            // Filter for specific keywords
            if (text.toLowerCase().includes('interior') || text.toLowerCase().includes('matters') || text.toLowerCase().includes('nside')) {
                console.log(`${indent}TEXT: "${text}"`);
                // Print parent hierarchy with dimensions
                console.log(`${indent}  Path: ${parents.map(p => `${p.name} (${p.absoluteBoundingBox ? Math.round(p.absoluteBoundingBox.width) + 'x' + Math.round(p.absoluteBoundingBox.height) : 'No Dim'})`).join(' > ')}`);

                if (node.style) {
                    const s = node.style;
                    console.log(`${indent}  Font: ${s.fontPostScriptName}, Size: ${s.fontSize}, Tracking: ${JSON.stringify(s.letterSpacing)}, LineHeight: ${s.lineHeightPx} / ${s.lineHeightPercent}%`);
                }
            }
        }

        if (node.children) {
            node.children.forEach(child => traverse(child, depth + 1, [...parents, node]));
        }
    }

    traverse(rootNode);

} catch (e) {
    console.error("Error:", e.message);
}
