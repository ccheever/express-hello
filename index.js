let express = require('express')
let app = express()

app.get('/', (req, res) => res.send('Hello World! This is a redeploy'))

let port = process.env.PORT || 3000;

app.listen(port, () => console.log('Example app listening on port ' + port + '!'))
