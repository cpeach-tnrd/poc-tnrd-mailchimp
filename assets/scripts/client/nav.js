
var nav = {
	
	data : {current:null},

	init :function(r){
        
        r.data.current = document.getElementById("municipalities");
        //r.set.active(r,r.data.current);
        window.nav.get.call(ajax);

    },
	
	set: {
        
        parent : {
            active : function(r,e){
                    r.data.current = e;
                
            }
        },
   /*
        active : function(r,e){
                var id = e.getAttribute("id");
                r.set.inactive(r,r.data.current);
                e.setAttribute("class","nav-items-item-menu-light");
                var menu = document.getElementById(id+"_menu");
                menu.style.display = "inline-block";
                r.data.current = e;
    },
        inactive : function(r,e){
                var id = e.getAttribute("id");
                var menu = document.getElementById(id+"_menu");
                e.setAttribute("class","nav-items-item-menu");
                menu.style.display = "none";

    },*/
        
        submit : function(){
                var name = document.getElementById('name').value;
                
                var email = document.getElementById('email').value ;
                email = email.toLowerCase();
                var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (!filter.test(email)) {
                    alert('Please provide a valid email address');
                    return false;
                }
                
                var board = document.getElementById('board').checked;
                var press = document.getElementById('press').checked;
                var emergency = document.getElementById('emergency').checked;
                
                var tags = [];
                if(board){tags[tags.length] = {email:email,tag:"boards"}}
                if(press){tags[tags.length] = {email:email,tag:"press"}}
                if(emergency){tags[tags.length] = {email:email,tag:"emergency"}}
            
                var tag_names = [];
                if(board){tag_names[tag_names.length] = "boards"};
                if(press){tag_names[tag_names.length] = "press"};
                if(emergency){tag_names[tag_names.length] = "emergency"};
                
                var Name = name.charAt(0).toUpperCase() + name.slice(1);    
            
                http.set(http,["http://beta.tnrd.ca:3001/set/mail/item",{item : {email: email,tags:tags,tag_names:tag_names,status :"subscribed",merge_fields: {FNAME:name}}}],
                    function(p){
                    p = JSON.parse(p);
                    
                    console.log(p);
                    
                    if(p.response !== undefined && p.response.statusCode == 200){
                        alert('congratulations '+ Name +' you have been sucessfully added to the list.')     
                    }
                    else if(p.response == undefined){
                        alert('Email already exsists, your list selection has been updated');
                    }
                    else{
                        alert('Sorry, Request falied. Please email this issue to IT at it@tnrd.ca')
                    }
                       
                    }
                );
            
                var form = document.getElementById('form');
                form.reset();
                
            },
    },
	get : {
        
        
    },
};