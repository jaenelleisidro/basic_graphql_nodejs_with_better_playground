const express = require('express')
const expressPlayground = require('graphql-playground-middleware-express')
  .default

const app = express()

app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.listen(8080,()=>{
  console.log('listening on port 8080');
})