const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


MongoClient.connect('mongodb://localhost:27017/myDB', (err, db) => {
  assert.equal(null, err)
  console.log("Connected successfully to server")
  insertDocuments(db, () => {
    db.close()
  })
})


const insertDocuments = (db, callback) => {
  const documents = [
    {
      a: 1
    },
    {
      a: 2
    },
    {
      a: 3
    }
  ]

  // myDBデータベースのdocumentsコレクションに対して
  // ドキュメントを3つ追加します
  db.collection('documents').insertMany(documents, (err, result) => {
    // insert結果の確認
    assert.equal(err, null)
    assert.equal(3, result.result.n)
    assert.equal(3, result.ops.length)

    console.log("Inserted 3 documents into the collection")
    callback(result)
  })
}


server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})


