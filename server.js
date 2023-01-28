const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express();
const path = require('path')
//import routes
const authRoutes = require('./routes/auth')

app.use('/', express.static( path.join(__dirname,'./mysite')))
app.use(express.json())

app.use(cors())

//middlewaree
app.use('/api', authRoutes)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
});