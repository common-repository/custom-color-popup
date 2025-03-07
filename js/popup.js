
var create_popup = {
		time:"",
		delay_time:"",
		more_delay:"",
		winH:"",
		winW:"",
		config:{
			
		},
		
		init:function(){
			time = 2;
			delay_time = time*1000;
			more_delay = delay_time+1000;
			winH = jQuery(window).height();
			winW = jQuery(window).width();
			setTimeout(function(){jQuery('#overlay').show()});
			setTimeout(function(){jQuery('.bdpopup_bg').fadeIn(1000).show()});
			jQuery('.btn_close').click(function() 
			{
				create_popup.hide_popup();
		     });
			jQuery('.display').click(function()
			{
				create_popup.add_cookie();
			});
			
			jQuery( ".btn_close").trigger('click');
			},
			
			hide_popup:function()
			{	
				jQuery('.bdpopup_bg').hide();	
				jQuery("#overlay").hide();				
			},
			
			add_cookie:function(){				
				var myCookie = create_popup.getCookie("popup");				
				if(!myCookie){
					create_popup.setCookie("popup", "hide", 1, "/");
				}
				jQuery('.bdpopup_bg').hide();	
				jQuery("#overlay").hide();
			},
			
			getCookie:function(name){	
				 	var dc = document.cookie;
				    var prefix = name + "=";
				    var begin = dc.indexOf("; " + prefix);
				    if (begin == -1) {
				        begin = dc.indexOf(prefix);
				        if (begin != 0) return null;
				    }
				    else
				    {
				        begin += 2;
				        var end = document.cookie.indexOf(";", begin);
				        if (end == -1) {
				        end = dc.length;
				        }
				    }
				    return unescape(dc.substring(begin + prefix.length, end));
			},
			
			setCookie:function(name, value, expires, path){
				var cookie_string = name + "=" + escape (value) +";";
				if(expires){
					expires = create_popup.setExpiration(expires);
					cookie_string += "expires=" + expires + "; ";
				}
				if(path){
					cookie_string += "path=" + path + "; ";
				}
				 document.cookie = cookie_string;
			},

			setExpiration:function(cookieLife){
			    var today = new Date();
			    var expr = new Date(today.getTime() + cookieLife * 24 * 60 * 60 * 1000);
			    return  expr.toGMTString();
			},
};	
jQuery(document).ready(function($){
	create_popup.init();
});

