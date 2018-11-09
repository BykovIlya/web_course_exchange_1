const express = require("express");
const server = express();
const routes = require("./routes/index");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const corsOptions = {
  'credentials': true,
  'origin': true,
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'allowedHeaders': 'Authorization,X-Requested-With,X-HTTP-Method-Override, Content-Type, Cache-Control, Accept, Access-Control-Allow-Origin',
};
app.use(cors(corsOptions));

server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.use("/", routes);

server.listen(port, ()=>{
  console.log(`HTTP server started at http://localhost:${port}`);
});
