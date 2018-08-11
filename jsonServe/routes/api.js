const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const MongoClient = require('mongodb')
const bodyParser = require('body-parser')

const {
  Client,
  CryptoUtils,
  LoomProvider
} = require('loom-js')
const Web3 = require('web3')

// Create the client
const client = new Client(
  'default',
  'ws://127.0.0.1:46657/websocket',
  'ws://127.0.0.1:9999/queryws',
);

// Create private key for first account
const privateKey = CryptoUtils.generatePrivateKey()

// Instantiate web3 client using LoomProvider as provider
const web3 = new Web3(new LoomProvider(client, privateKey));


server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

server.use((req, res, next) => {
  if (req) { // add your authorization logic here
    console.log(req);
    next() // continue to JSON Server router
  } else {
    res.sendStatus(401)
  }
})

server.use((req, res, next) => {
  if (req.method === 'POST') {
    res.send("succeed to post")
  }
  // Continue to JSON Server router
  next()
})

