const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// var multipart = express('multipart')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// app.use(multipart());

var usersRouts = require("./app/routes/user.routes");
  app.use("/api", usersRouts);


