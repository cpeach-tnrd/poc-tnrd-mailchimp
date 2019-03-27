const request = require('request');
const request_http = require('./request_http');
const md5 = require('md5');
 
module.exports = {

    
    set : {
        item : function(r,p,c){ 
            var item = p[0];
            var out  = "";
            var url  =  "https://us19.api.mailchimp.com/3.0/lists/d1155054b2/members";
            var data = {"email_address" : item.email ,"status"  :"subscribed","merge_fields": {"FNAME":item.merge_fields.FNAME},tags:item.tag_names};
            request_http.set(request_http,[url,data],function(p){
               
                if(p.response.statusCode == 400){
                   //console.log(p)
                    out[out.length] = p;
                    r.set.tags(r,[item.tags,0,out],c);
                    
                }else{
                    c(p)
                }
               
                ;
            })
            
         },
        
        tags : function(r,p,c){
            var item   = p[0];
            var length = p[1];
            var out    = p[2];
            if(length<item.length){
                var email  = item[length].email; 
                var tag    = item[length].tag; 
                var id     = md5(email);
                var url    ='https://us19.api.mailchimp.com/3.0/lists/d1155054b2/members/'+id+'/tags';
                var data   = {"tags":[{"name":tag,"status":"active"}]};
                request_http.set(request_http,[url,data],function(p){
                    out[out.length] = p;
                    length += 1;
                    r.set.tags(r,[item,length,out],c);
                })
            }else{c(out);}
            
           
            
            
        }
        
    },
    get : {}
        
       
    
    
    
};