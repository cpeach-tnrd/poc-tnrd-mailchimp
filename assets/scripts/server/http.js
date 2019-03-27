const express	 = require('express');
const bodyParser = require("body-parser");
const cors 		 = require('cors');
const request    = require('request');
const mail       = require('./mail.js');
const app  = express();
const port = 3001;

app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/* SET */

app.post('/set/mail/item', function (req, res){
    
    
    //res.json(req.body.item);
    mail.set.item(mail,[req.body.item],function(p){
        res.json(p);
    })
    
});

app.post('/set/mail/tags', function (req, res){
    
    
    //res.json(req.body.item);
    mail.set.tags(mail,[req.body.item],function(p){
        res.json(p);
    
    })
    
});



/* GET */
app.get('/', (req, res) => res.json('Hello node!'))

app.listen(port, () => console.log(`Listening on port ${port}!`))