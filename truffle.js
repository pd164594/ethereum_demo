
module.exports = {
  // build: {
  //   "index.html": "index.html",
  //   "app.js": [
  //     "javascripts/app.js"
  //   ],
  //   "app.css": [
  //     "stylesheets/app.css"
  //   ],
  //   "images/": "images/"
  // },
  rpc: {
    host: "localhost",
    port: 8545
  },
  networks: {
   development: {
   host: "localhost",
   port: 8545,
   gas: 4712388,
   network_id: "*" // Match any network id
  }
 }
};
