// api/proxy.js
module.exports = async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.status(400).json({ error: 'URL parameter is required' });
    }

    try {
        const response = await fetch(url);
        const data = await response.text();

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};
