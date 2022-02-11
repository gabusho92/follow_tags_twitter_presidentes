const Twit = require('twit')

const users = []
let interacciones = 0
const config = require('./config')
var T = new Twit({
    consumer_key:         config.API_KEY,
    consumer_secret:      config.API_KEY_SECRETO,
    access_token:         config.ACCES_TOKEN,
    access_token_secret:  config.ACCES_TOKEN_SECRETO,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })

var stream = T.stream('statuses/filter', { track: '#KastPresidente2022' })
 
stream.on('tweet', function (tweet) {
//  console.log(tweet.text, 'by', tweet.user.name, tweet.created_at)
console.log(tweet.user.name);
  if(users.includes(tweet.user.name)) 
  {
    console.log('se repite');
  }else{
    users.push(tweet.user.name)
  }
  interacciones++
  console.log('interacciones:', interacciones);
  console.log('users:', users.length);



})

/*
BoricPresidente2022
var stream = T.stream('statuses/filter', { track: '#KastPresidente2022' })
 
stream.on('tweet', function (tweet) {
  console.log(tweet.text, 'by' + tweet.user.name, tweet.created_at)
  kast++
  console.log('boric:', boric, 'kast:', kast);

})
*/
 /* T.get('search/tweets', { q: '#KastPresidente2022', count: 1 }, function(err, data, response) {
    console.log(data.statuses[0])
  })*/