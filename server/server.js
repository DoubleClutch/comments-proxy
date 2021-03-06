const express = require('express')
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});
