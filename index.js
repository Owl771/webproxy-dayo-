const express = require('express');
const unblocker = require('unblocker');
const app = express();

app.use(
  unblocker({
    prefix: '/proxy/',
    responseMiddleware: [
      function (data, req, res, next) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8'); // 日本語対応
        next();
      },
    ],
  })
);

// トップページにフォームを出す
app.get('/', (req, res) => {
  res.send(`
    <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <title>日本語対応 Web Proxy</title>
      </head>
      <body>
        <h1>🌐 Web Proxy</h1>
        <form method="GET" action="/proxy/">
          <input name="url" placeholder="https://example.com" style="width:300px;" />
          <button type="submit">アクセス</button>
        </form>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('🌐 Web Proxy is running on port', PORT);
});
