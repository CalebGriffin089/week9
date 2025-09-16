  const express = require('express');
  const cors = require('cors');
  const http = require('http');

  const app = express();
  const listen = require("./listen.js")
  app.use(cors());
  const server = http.Server(app);

  // Middleware
  app.use(express.static(__dirname + '/www'));
  app.use(express.json());
  app.use("/api/updateProduct", require("./routes/update.js"));
  app.use("/api/removeProduct", require("./routes/remove.js"));
  app.use("/api/readAllProducts", require("./routes/read.js"));
  app.use("/api/add", require("./routes/add.js"));

// Start server
listen(server)