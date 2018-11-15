var request = require("request")

var urlprefix = "https://api.coinmarketcap.com/v1/ticker/";
var url = url.resolve('https://api.coinmarketcap.com/v1/ticker/','bitcoin')

console.log(url);

var coins = [
  ["bitcoin", 0.24298747],
  ["ethereum", 4.74399477],
  ["bitcoin-cash", 1.32185725],
  ["iota", 993.036],
  ["ripple"    , 3200.01],
  ["dash"      , 3.35874163],
  ["litecoin"  , 13.40699],
  ["bitcoin-gold", 10.4689],
  ["cardano"   , 8458.04],
  ["nem"      , 4029.88],
];

// append prices to array 'coins' by looping through api

for (i=0; i<coins.length; i++){
  let sum = 0;
  coins[i][1]*coins[i][2];
  sum++
}

var shares = 180

var btcindex = coins[0][2]/124.527 //124.527 = divisor

var nav = (sum/shares)

// console.log(coins);
//
// request.get(url, (error, response, body) => {
//   let json = JSON.parse(body);
//   console.log(json.price_usd)
// };

// for (i=0; i<coins.length; i++){
//
// }

// coins.bitcoin * url&&"bitcoin"
//
// bitcoin	https://coinmarketcap.com/currencies/bitcoin
// ethereum	https://coinmarketcap.com/currencies/ethereum
// bitcoin-cash	https://coinmarketcap.com/currencies/bitcoin-cash
// ripple	https://coinmarketcap.com/currencies/ripple
// dash	https://coinmarketcap.com/currencies/dash
// litecoin	https://coinmarketcap.com/currencies/litecoin
// monero	https://coinmarketcap.com/currencies/monero
// iota	https://coinmarketcap.com/currencies/iota
// cardano	https://coinmarketcap.com/currencies/cardano
// bitcoin-gold	https://coinmarketcap.com/currencies/bitcoin-gold
// nem	https://coinmarketcap.com/currencies/nem

// var bitcoin   = 0.24298747;
// var ethereum  = 4.74399477;
// var bitcoin-cash = 1.32185725;
// var iota      = 993.036;
// var ripple    = 3200.01;
// var dash      = 3.35874163;
// var litecoin  = 13.40699;
// var bitcoin-gold = 10.4689
// var cardano   = 8458.04;
// var nem       = 4029.88;

// var coins = {
//   bitcoin   : 0.24298747
//   ethereum  : 4.74399477
//   bitcoin-cash : 1.32185725
//   iota      : 993.036
//   ripple    : 3200.01
//   dash      : 3.35874163
//   litecoin  : 13.40699
//   bitcoin-gold : 10.4689
//   cardano   : 8458.04
//   nem       : 4029.88
// };
