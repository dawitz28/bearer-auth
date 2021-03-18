'use strict';

// Start up DB Server
require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server.js');
const MONGODB_URI = 'mongodb://localhost:27017/api-server';
const PORT = process.env.PORT || 3000;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(MONGODB_URI, options)
.then(() => {
  server.start(PORT, () => console.log(`server up: ${PORT}`));
})  
.catch(err => console.error(err));

// server.start(PORT);


// Start the web server
// require('./src/server.js').start(process.env.PORT);
// module.exports = {
//   server: app,
//   startup: (port) => {
//     app.listen(port, () => {
//       console.log(`Server Up on ${port}`);
//     });
//   },
// };
