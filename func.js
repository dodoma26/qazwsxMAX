function res(whot){
        return whot *(screen.width/1920);
    }
window.onload = function () {
     setTimeout(function(){
       $('#rrt').css({"width":res(600),"font-size": res(30)});
    $('#rr').css({"font-size": res(20)});
    $('.bg').css({"margin-top": res(-20),"background-size":res(1920),"padding":res(40)});
    $('#logo').css({"font-size": res(50),"margin-left":res(15),"margin-top":res(-15)});
    $('.h-l').css({"margin-top":res(-25)});
    $('.map').css({"width": res(600),"margin-top":res(170),"height": res(385)});
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

    
 
    $('.bar').css({"height":"100%"});
    $('.bg').css({"background-size":screen.width-res(530),"height":1080*(screen.width/1920)});

   $('#MM').click(
	function(){
	  $(".bar").css({"margin-left": "0px"});
    }
		);
    $('#M2').click(
	function(){
       
	  $(".bar").css({"margin-left": "-380px"});
    }
		);
    setTimeout(function(){$('#logo').css({ opacity:"1","margin-left": res(20)});},10)
    setTimeout(function(){$('.h-l').css({"width": res(600)});},500)
    setTimeout(function(){$('#ii').css({ opacity:"1","margin-left": "0px"});},50)
    setTimeout(function(){$('#rr').css({ opacity:"0.8"});},900)
    setTimeout(function(){$('.text').css({ opacity:"0.8"});},900)
    setTimeout(function(){$('#rrt').css({ opacity:"0.8"});},1500)
    
    setTimeout(function(){$('#f1').css({ opacity:"0.6"});},1400)
    setTimeout(function(){$('#f2').css({ opacity:"0.6"});},1500)
    setTimeout(function(){$('#f3').css({ opacity:"0.6"});},1600)
    
    setTimeout(function(){$('.map').css({ opacity:"0.9"});},2000)
    
    

    
    
    function dodo(){
        var q=Math.random() * (23 - 1) + 1;
        a ='s';
        b=".html";
    location.href = a+~~q.toString()+b;

    }
