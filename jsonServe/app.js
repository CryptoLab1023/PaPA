const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
var apiRouter = require('./routes/api')
const Web3 = require("web3")
const web3 = new Web3("http://localhost:8545");
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.use("/api", apiRouter)

console.log("asdf", web3.eth.blockNumber);
server.listen(8000, () => {
  console.log('JSON Server is running')
})


