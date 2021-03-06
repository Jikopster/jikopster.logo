var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.set('views', 'views')
app.set('view engine', 'jade')

app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(app.get('port'), function () {
    console.log('Jikopster vk a sync logo website is running on port', app.get('port'));
})
