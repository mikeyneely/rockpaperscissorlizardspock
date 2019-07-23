// let http = require('http')
const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
   fs.readFile('demofile.html', function(err, data) {
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.write(data);
       res.end();
       });
     }).listen(8000);
})
function chooseWinner(choice1, choice2){
  if(choice1 === choice2){
    return "tie!"
  }else if(choice1 === rock && choice2 === paper){
    return "paper wins!"
  }else if(choice1 === rock && choice2 === scissor){
    return "rock wins!"
  }else if(choice1 === rock && choice2 === lizard){
    return "rock wins"
  }else if(choice1 === rock && choice2 === spock){
    return "spock wins"
  }else if(choice1 === paper && choice2 === scissor){
    return "scissor wins"
  }else if(choice1 === paper && choice2 === lizard){
    return "lizard wins"
  }else if(choice1 === paper && choice2 === spock){
    return "paper wins"
  }else if(choice1 === scissor && choice2 === lizard){
    return "scissor wins"
  }else if(choice1 === scissor && choice2 === spock){
    return "spock wins"
  }else if(choice1 === lizard && choice2 === spock){
    return "lizard wins"
  }else{
    return "somethings wrong..."
  }
console.log(choosewinner)

}
