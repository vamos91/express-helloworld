const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({response: 'ok, V2'})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

