const express = require("express");
const { userRoutes } = require("./routes/routes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(userRoutes);

// 👇 これを追加
app.get("/", (req, res) => {
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

app.listen(port, () =>
  console.log(`HTTP Server Running on Port: ${port}`)
);
