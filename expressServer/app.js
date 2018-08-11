/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();
// Node.JS 8 or greater
const Web3 = require('web3')
// var CryptoUtils = require("loom-js");
const Loom = require('loom-js')
/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(8080, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

const privateKey = Loom.CryptoUtils.generatePrivateKey()
const publicKey = Loom.CryptoUtils.publicKeyFromPrivateKey(privateKey)

// Create the client
const client = new Loom.Client(
  'default',
  'ws://127.0.0.1:46657/websocket',
  'ws://127.0.0.1:9999/queryws',
)

// The address for the caller of the function
const from = Loom.LocalAddress.fromPublicKey(publicKey).toString()

// Instantiate web3 client using LoomProvider
const web3 = new Web3(new Loom.LoomProvider(client, privateKey))

// 写真リストを取得するAPI
app.get("/get", async (req, res, next) => {
  	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    const account = await web3.eth.getAccounts();
    console.log(account);
    console.log(await web3.eth.getAccounts());
    res.json(account);
  	next();

});
