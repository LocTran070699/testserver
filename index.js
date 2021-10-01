const express = require('express')
const PORT = 3000
const app = express()


app.use(express.urlencoded(
    { extended: true }
))
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello world")
})


app.listen(PORT, console.log(`Server running on port ${PORT}`))