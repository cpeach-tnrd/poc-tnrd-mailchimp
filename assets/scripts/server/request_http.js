
const request = require('request');
 
module.exports = {

    
    set : function(r,p,c){
        var url = p[0];
        var data = p[1];
        request.post({
              headers: {'Authorization' : 'Basic YW55c3RyaW5nOjQ2NDAxNDVkMzAzNjExZGFmMzlhOWJjODVjOTc5NGM5LXVzMTk=','Content-Type' : 'application/json'},
              url:     url,
              method: 'POST',
              json :   data
            }, function(error, response, body){if(typeof c === "function"){ c({error:error,response:response});}});
        
    }
};