#!/usr/bin/env nodejs 

//lib pour express
const express = require('express')
//lib pour parser
const bodyParser = require('body-parser');
//lib pour faire des hashs
const crypto = require('crypto');


const app = express()
app.use(bodyParser.urlencoded({ extended : true} ))

//constante d'ip et de port
const ip = "localhost"
const port = 3000

//Cette variable sert de stockage pour les différentes cléfs
var key = {
    'ADMIN' : 'c1becb0b7698afc0376f55e4b1b6b1f3',
    'stage1' : '0b261ad41cee03ca7d479562714256b6',
};

/*
function clear() {
    var lines = process.stdout.getWindowSize()[1];
    for(var i = 0; i < lines; i++) {
        console.log('\r\n');
    }
}
*/

function sendAction(keyClient) {

}


//Liste des Clients pour faire un suivie des différents clients
let clientArray = [
    {
        "name":"admin",
        "key":"c1becb0b7698afc0376f55e4b1b6b1f3",
        "action":"WAIT"
    }
]

app.get('*', (req, res) => {
    //Pour les requêtes GET
    console.log('GET-REQUEST') //Affichage console serveur
    res.sendFile(path.join(__dirname, '/index.html')); //Envoie du fichier index.html
})

app.post('*',(req, res) => {
    //Pour les requêtes POST
    //Exemple de requête : key=""&name=""&action=""

    let request = {
        "name":"",
        "key":"",
    }

    switch (String(req.body.key)) {

        case String(key.stage1):
            //Initalisation du clients
            console.log("")
            var hash = crypto.createHash('md5').update(req.body.auth).digest('hex');
            console.log(hash);
            stage.stage2 = String(hash)
            res.send(hash)
            break;
        
        case String(key.stage2):
            console.log("auth réussi !!")
            res.send('GG')
            break;
        case String(key.ADMIN):
            console.log("Authentification ADMIN")
            break;
    }
 
})

app.listen(port, () => {
  console.log(`Started server at http://${ip}:${port}`)
})