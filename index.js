const express = require('express')
const port = 3003
const app = express()


app.use(express.urlencoded(
    { extended: true }
))
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello world 123456")
})


app.listen(process.env.PORT ||port, console.log(`Server running on port ${port}`))