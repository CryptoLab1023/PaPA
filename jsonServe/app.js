const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
var apiRouter = require('./routes/api')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.use("/api", apiRouter)

server.listen(8080, () => {
  console.log('JSON Server is running')
})


