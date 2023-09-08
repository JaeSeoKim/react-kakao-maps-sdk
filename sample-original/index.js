const pkg = require("./package.json")
const express = require("express")
const { glob } = require("glob")
const fs = require("node:fs")
const path = require("node:path")
const app = express()
const port = 5252

require("dotenv").config()

app.get("/samples/:sample", async (req, res) => {
  console.log(`GET: ${req.url}`)
  try {
    const html = fs
      .readFileSync(path.join(__dirname, `./samples/${req.params.sample}`))
      .toString("utf-8")
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.send(
      html.replace(
        "발급받은 APP KEY를 사용하세요",
        process.env.KAKAOMAP_API_KEY,
      ),
    )
  } catch (error) {
    res.statusCode = 404
    res.send("Not Found")
  }
})

app.get("/", async (req, res) => {
  const samples = await glob("./samples/*.html")
  res.send(
    `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pkg.name}</title>
  </head>
  <body>
    <h1>${pkg.name}</h1>
    ${samples
      .map((sample) => `<p><a href="/${sample}">${sample}</a></p>`)
      .join("")}
  </body>
</html>
`,
  )
})

app.listen(port, () => {
  console.log(`${pkg.name} listening on http://127.0.0.1:${port}`)
})
