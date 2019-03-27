const request = require('request');
 
module.exports = {

    
    set : {
        
        signup : function(r,p,c){
                console.log("*************************************************");
                var item  = p[0];
                var email = item.email; 
                var board = item.board;
                var press = item.press;
                var emergency = item.emergency;
                console.log(email);console.log(board);console.log(press);console.log(emergency);
            
               
                console.log(id);
                console.log("*************************************************");
                
                if(board === "true"){
                    request.post({
                    headers: {'Authorization' : 'Basic YW55c3RyaW5nOjFhMDMxOGY5MTg4MTEwOWI4MDA1NGY3M2Y2YjI0MDJiLXVzMTk=','Content-Type' : 'application/json'},
                    url:      ' https://us19.api.mailchimp.com/3.0/lists/d1155054b2/members/'+id+'/tags',
                    method: 'POST',
                    json :    {"tags":[{"name":"Board","status":"active"}]}},  
                    function(error, response, body){
                    response.json(body);
                    
                    });console.log("********************************board*********************");
                }
                if (press === "true"){
                    request.post({
                    headers: {'Authorization' : 'Basic YW55c3RyaW5nOjFhMDMxOGY5MTg4MTEwOWI4MDA1NGY3M2Y2YjI0MDJiLXVzMTk=','Content-Type' : 'application/json'},
                    url:     ' https://us19.api.mailchimp.com/3.0/lists/d1155054b2/members/'+id+'/tags',
                    method: 'POST',
                    json :    {"tags":[{"name":"Press","status":"active"}]}},  
                    function(error, response, body){
                    response.json(body);
                    });console.log("********************************press*********************");
                    
                }
                if (emergency === "true"){
                    request.post({
                    headers: {'Authorization' : 'Basic YW55c3RyaW5nOjQ2NDAxNDVkMzAzNjExZGFmMzlhOWJjODVjOTc5NGM5LXVzMTk=','Content-Type' : 'application/json'},
                    url:     ' https://us19.api.mailchimp.com/3.0/lists/d1155054b2/members/'+id+'/tags',
                    method: 'POST',
                    json :    {"tags":[{"name":"emergency","status":"active"}]}},  
                    function(error, response, body){
                    response.json(body);
                    });console.log("********************************emergency****************");
                }
                
              
                console.log("flag end");
        }  
       
      
    },
    get : {
        
        post : function(r,p,c){
            
            var item  = p[0];
            var email = item.email;
            var name  = item.merge_fields.FNAME;
            var id    = "d1155054b2";
            request.post({
              headers: {'Authorization' : 'Basic YW55c3RyaW5nOjQ2NDAxNDVkMzAzNjExZGFmMzlhOWJjODVjOTc5NGM5LXVzMTk=','Content-Type' : 'application/json'},
              url:     ' https://us19.api.mailchimp.com/3.0/lists/'+id+'/members',
              method: 'POST',
              json :    {"email_address" : email ,"status"  :"subscribed","merge_fields": {"FNAME":name}}
            }, function(error, response, body){
              response.json(body);
            });
            module.exports.set.signup(r,p,c);
            
            
        }
        
    }
    
    
    
}