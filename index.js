//Import Express
const app = require('express')();

//Port
const PORT = 8080;

app.listen(
  PORT,
  () => console.log(`Server running on port http://localhost:${PORT}`)
)

app.get('/ayo', (req , res)=>{
  res.status(200).send({
    name : 'ayo',
    message : 'Yuck'
  })
})