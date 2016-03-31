(function() {
  var _addClass, _doc_element, _find, _handleOrientation, _hasClass, _orientation_event, _removeClass, _supports_orientation, _user_agent;

  window.device = {};

  _doc_element = window.document.documentElement;

  _user_agent = window.navigator.userAgent.toLowerCase();

  device.ios = function() {
    return device.iphone() || device.ipod() || device.ipad();
  };

  device.iphone = function() {
    return _find('iphone');
  };

  device.ipod = function() {
    return _find('ipod');
  };

  device.ipad = function() {
    return _find('ipad');
  };

  device.android = function() {
    return _find('android');
  };

  device.androidPhone = function() {
    return device.android() && _find('mobile');
  };

  device.androidTablet = function() {
    return device.android() && !_find('mobile');
  };

  device.blackberry = function() {
    return _find('blackberry') || _find('bb10') || _find('rim');
  };

  device.blackberryPhone = function() {
    return device.blackberry() && !_find('tablet');
  };

  device.blackberryTablet = function() {
    return device.blackberry() && _find('tablet');
  };

  device.windows = function() {
    return _find('windows');
  };

  device.windowsPhone = function() {
    return device.windows() && _find('phone');
  };

  device.windowsTablet = function() {
    return device.windows() && _find('touch');
  };

  device.fxos = function() {
    return _find('(mobile; rv:') || _find('(tablet; rv:');
  };

  device.fxosPhone = function() {
    return device.fxos() && _find('mobile');
  };

  device.fxosTablet = function() {
    return device.fxos() && _find('tablet');
  };

  device.mobile = function() {
    return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone();
  };

  device.tablet = function() {
    return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
  };

  device.portrait = function() {
    return Math.abs(window.orientation) !== 90;
  };

  device.landscape = function() {
    return Math.abs(window.orientation) === 90;
  };

  _find = function(needle) {
    return _user_agent.indexOf(needle) !== -1;
  };

  _hasClass = function(class_name) {
    var regex;
    regex = new RegExp(class_name, 'i');
    return _doc_element.className.match(regex);
  };

  _addClass = function(class_name) {
    if (!_hasClass(class_name)) {
      return _doc_element.className += " " + class_name;
    }
  };

  _removeClass = function(class_name) {
    if (_hasClass(class_name)) {
      return _doc_element.className = _doc_element.className.replace(class_name, "");
    }
  };

  if (device.ios()) {
    if (device.ipad()) {
      _addClass("ios ipad tablet");
    } else if (device.iphone()) {
      _addClass("ios iphone mobile");
    } else if (device.ipod()) {
      _addClass("ios ipod mobile");
    }
  } else if (device.android()) {
    if (device.androidTablet()) {
      _addClass("android tablet");
    } else {
      _addClass("android mobile");
    }
  } else if (device.blackberry()) {
    if (device.blackberryTablet()) {
      _addClass("blackberry tablet");
    } else {
      _addClass("blackberry mobile");
    }
  } else if (device.windows()) {
    if (device.windowsTablet()) {
      _addClass("windows tablet");
    } else if (device.windowsPhone()) {
      _addClass("windows mobile");
    } else {
      _addClass("desktop");
    }
  } else if (device.fxos()) {
    if (device.fxosTablet()) {
      _addClass("fxos tablet");
    } else {
      _addClass("fxos mobile");
    }
  } else {
    _addClass("desktop");
  }

  _handleOrientation = function() {
    if (device.landscape()) {
      _removeClass("portrait");
      return _addClass("landscape");
    } else {
      _removeClass("landscape");
      return _addClass("portrait");
    }
  };

  _supports_orientation = "onorientationchange" in window;

  _orientation_event = _supports_orientation ? "orientationchange" : "resize";

  if (window.addEventListener) {
    window.addEventListener(_orientation_event, _handleOrientation, false);
  } else if (window.attachEvent) {
    window.attachEvent(_orientation_event, _handleOrientation);
  } else {
    window[_orientation_event] = _handleOrientation;
  }

  _handleOrientation();

}).call(this);














qq=1;
function res(whot){
    if (device.mobile())
        {
            qq=0;
        }else        {
            
        whot=whot *(screen.width/1920);
        }
  
        
        return whot;
    }
window.onload = function () {
     setTimeout(function(){
       $('#rrt').css({"width":res(600),"font-size": res(30)});
    $('#rr').css({"font-size": res(20)});
    $('#ii').css({"margin-top": res(-20),"background-size":res(1400),"padding":res(40), "width":res(1400),"height":res(1080)});
    $('#logo').css({"font-size": res(50),"margin-left":res(15),"margin-top":res(-15)});
    $('.h-l').css({"margin-top":res(-25)});
    $('.map').css({"width":res(600),"margin-top":res(136),"height": res(380)});
    $('.SO').css({"margin-left": res(-15),"margin-top":res(10), opacity:"1"});
    $('.weather').css({"margin-left": res(50),"margin-top":res(20),"font-size": res(20)});
    $('.op').css({"margin-left": res(900)});
    $('.nm').css({"margin-left": res(-4),"margin-top":res(-15)});
    $('.text').css({"margin-top":res(0),"font-size": res(20),"width": res(850), opacity:"0.8"});
    $('.photo').css({"margin-left": res(50),"margin-top":res(150),"width": res(215),"height": res(323)});
    $('#MM').css({"margin-left": res(-20),"width": res(33),"height": res(36)});
    $('.bar').css({"margin-left": res(-400),"width": res(300),"height": res(1080),"padding-top": res(50)});
    $('.row').css({"margin-top": res(12),"width": res(290),"font-size": res(16),"height": res(20)});
    $('#M2').css({"margin-top": res(-25),"width": res(40),"height": res(40),"margin-left": res(245)});
    $('#M3').css({"margin-top": res(-25),"width": res(40),"height": res(40),"margin-left": res(5)});
     },10)
}

    
 $('#MM').click(
	function(){
	  $(".bar").css({"margin-left":"0"});}
	);
$('#M2').click(
	function(){
	  $(".bar").css({"margin-left":"-400px"});}
	);		
    
    setTimeout(function(){$('#logo').css({ opacity:"1","margin-left": res(20)});},10*qq)
    setTimeout(function(){$('.h-l').css({"width": res(600)});},500*qq)
    setTimeout(function(){$('#ii').css({ opacity:"1","margin-left": "0px"});},50*qq)
    setTimeout(function(){$('#rr').css({ opacity:"0.8"});},900*qq)
    setTimeout(function(){$('.text').css({ opacity:"0.8"});},900*qq)
    setTimeout(function(){$('#rrt').css({ opacity:"0.8"});},1500*qq)
    
    setTimeout(function(){$('#f1').css({ opacity:"0.6"});},1400*qq)
    setTimeout(function(){$('#f2').css({ opacity:"0.6"});},1500*qq)
    setTimeout(function(){$('#f3').css({ opacity:"0.6"});},1600*qq)
    
    setTimeout(function(){$('.map').css({ opacity:"0.9"});},2000*qq)
    
    

    
    
    function dodo(){
        var q=Math.random() * (23 - 1) + 1;
        a ='s';
        b=".html";
    location.href = a+~~q.toString()+b;

    }

