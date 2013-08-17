  //@author:renlinx
  //UI Constants
    window.POPUP = {
    	"URGENT": 0,
    	"SUCCESS" : 1,
    	"ERROR" : 2,
    	"NORMAL":3
    };
    window.COLOR = {
    	"URGENT":"#dede75",
    	"SUCCESS":"#75de75",
    	"ERROR":"#de7575",
    	"NORMAL":"#efefef"
    }
       
  //UI Components
    
   
  //Overlay
   var createOverlay = (function(){
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
  //Window
    var createWindow = (function (title="title",content="hello",titlecolor=COLOR.NORMAL,contentcolor="#fff") {
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
              "border":"solid #de7575 1px",
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
            return $window;
  });
  //Popup
  var Popup =  (function(title,content,type=POPUP.NORMAL){  
  var $overlay = createOverlay();
  var $window  = createWindow(title,content);
  $overlay.click(function () {
  	$(this).fadeOut();
  	$window.fadeOut();
  });
 });