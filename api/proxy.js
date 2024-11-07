// proxy.js (Vercel API)
const https = require('https');

module.exports = async (req, res) => {
  const url = 'https://games.crazygames.com/en_US/autogun-heroes-izk/index.html?v=1.309';
  
  https.get(url, (externalRes) => {
    let data = '';

    externalRes.on('data', chunk => {
      data += chunk;
    });

    externalRes.on('end', () => {
      // এখানে আপনি HTML থেকে অতিরিক্ত কন্টেন্ট সরাতে পারেন
      // উদাহরণস্বরূপ, যদি আপনি হেডার বা ফুটার সরাতে চান
      data = data.replace(/<header[^>]*>.*?<\/header>/g, ''); // হেডার সরানোর উদাহরণ
      data = data.replace(/<footer[^>]*>.*?<\/footer>/g, ''); // ফুটার সরানোর উদাহরণ

      res.setHeader('Content-Type', 'text/html');
      res.send(data);
    });
  });
};
