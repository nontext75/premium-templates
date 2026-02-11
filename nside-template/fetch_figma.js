const fs = require('fs');
const https = require('https');

const token = process.env.FIGMA_TOKEN || "YOUR_FIGMA_TOKEN";
const fileKey = "hvht8TqpKgg5nogBpTGnBs";
const url = `https://api.figma.com/v1/files/${fileKey}`;

const options = {
    headers: {
        'X-Figma-Token': token
    }
};

https.get(url, options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        if (res.statusCode === 200) {
            fs.writeFileSync('figma_node.json', data);
            console.log('Figma data saved to figma_node.json');
        } else {
            console.error(`Error: ${res.statusCode} - ${data}`);
        }
    });

}).on('error', (err) => {
    console.error('Error fetching data:', err.message);
});
