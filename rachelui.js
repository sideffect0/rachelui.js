$(document).ready(function () {
  //@author:renlinx
  //UI Constants
    window.POPUP = {
    	URGENT: 1,
    	SUCCESS: 2,
    	ERROR: 3,
    	NORMAL:4
    };
    window.COLOR = {
    	URGENT:"#dede75",
    	SUCCESS:"#75de75",
    	ERROR:"#de7575",
    	NORMAL:"#8f8f8f"
    }
    window.OPENED = false; //flag for control functions   
  //UI Components
    
   
  //Overlay
   window.bodyOverlay = (function(){
  	var $overlay = $("<div>");	
  	var $body = $("body");
  	$overlay = $overlay.css({
    "position":"fixed",
    "z-index":"9000",
    "top":"0",
    "left":"0",
    "width":"110%",
    "height":"110%",
    "opacity":"0.6",
    "background-color":"#000"
   });
   $overlay = $overlay.appendTo($body);
   return $overlay;
  });

  window.divOverlay = (function($div,$content){
   $div = $div||$("body");
   $overlay_pos = $div.offset();
   $overlay = $("<div>");
   $overlay.css({
    position:"absolute",
    top:$overlay_pos.top,
    left:$overlay_pos.left,
    width:$div.css("width"),
    height:$div.css("height"),
    "background-color":"#000",
    opacity:"0.6"
   }).html($content);
   return $overlay;
  });
  //Window
    window.createWindow = (function (title,content,titlecolor,contentcolor) {
    	      title = title||"title";
    	      content = content||"hello";
    	      titlecolor = titlecolor||COLOR.NORMAL;
    	      contentcolor = contentcolor||"#fff";
            var $window = $("<div>");
            var $title  = $("<div>");
            var $content = $("<div>");
            var $body = $("body");
            $window.css({
              "position":"fixed",
              "width":"300px",
              "height":"300px",
              "left":"50%", 
              "top":"50%", 
              "background-color":contentcolor,
              "margin":"-150px 0 0 -150px",
              "z-index":"9999",
              "border":"solid "+ titlecolor +" 1px",
              "box-shadow":"0px 0px 5px #8f8f8f"
            });
            $title.css({
              "position":"relative",
              "text-align":"center",
              "color":"#fff",
              "background-color":titlecolor,
              "font-weight":"bold"
            }).html(title);
            $content.css({
               "padding":"8px"
            }).html(content);    	
            $window.append($title);
            $window.append($content);
            $window = $window.appendTo($body);
            OPENED = true;
            return $window;
  });
  //Popup
  window.Popup =  (function(title,content,type){
  title = title||"title";
  content = content||"hello";
  type = type||POPUP.NORMAL;
  switch(type) {
  	case POPUP.NORMAL:color = COLOR.NORMAL;break;
  	case POPUP.URGENT:color = COLOR.URGENT;break;
  	case POPUP.ERROR: color = COLOR.ERROR;break;
  	case POPUP.SUCCESS: color = COLOR.SUCCESS;break; 
  }  
  var $overlay = bodyOverlay();
  var $window  = createWindow(title,content,color);
  $overlay.click(function () {
  	$(this).fadeOut();
  	$window.fadeOut();
  });
 });
 	window.MSGBOX = {
		"ERROR":"#ff8888",
		"SUCCESS":"#aaffbb",
		"NORMAL":"#8f8f8f"
	}
	window.MsgBox = (function ($title,$message,$type,$height,$width) {
           $message = $message||" ";
           $title   = $title||"Message";
           $height  = $height||"300";
           $width   = $width||"300";
           $type    = $type||MSGBOX.NORMAL;
       var $overlay = $("<div>");		
		 var $msgbox  = $("<div>");
		 var $content = $("<div>");
		 var $titlebox= $("<div>");
		 var $button  = $("<div>");
		 var $body    = $("body");
		 $overlay.css({
		 	"position":"fixed",
		 	"top":"0",
		 	"left":"0",
		 	"width":"110%",
		 	"height":"110%",
		 	"background-color":"#fff",
		 	"opacity":"0.5",
		 	"z-index":"88888"
		 })
		 $msgbox.css({
              "position":"fixed",
              "width":"300px",
              "height":"200px",
              "left":"50%", 
              "top":"50%", 
              "background-color":"#fff",
              "color" : "#222",
              "margin":"-100px 0 0 -150px",
              "z-index":"99999",
              "border":"solid "+$type+" 1px",
              "box-shadow":"0px 0px 5px #8f8f8f"
            });
       $titlebox.css({
       	"width":"100%",
       	"background-color":"#2b60de",
       	"color":"#fff",
       	"font-weight":"bold",
       	"text-align":"center"
       }).html($title);
       $content.css({
               "padding":"8px",
               "text-align":"center",
               "top":"10%"
            }).html($message);
       $button.css({
       	"position":"relative",
       	"background-color":"#2b60de",
       	"height":"35px",
       	"width":"55px",
       	"color":"#fff",
       	"margin-left":"auto",
       	"margin-right":"auto",
       	"text-align":"center",
       	"padding-top":"4px",
       	"cursor":"pointer"
       }).text("OK").on("click",function () {
       	setTimeout(function () {
       		$overlay.remove();
       		$msgbox.remove();
       	},30)
       });
       $body.append($overlay);
       $msgbox.append($titlebox);
       $msgbox.append($content);
       $msgbox.append($button);
       $msgbox.appendTo($body);
       return $msgbox;
	});

 });
