/*Code by android developers start here*/

var startLoc = null;
//var contentName = '152';
//step 1:-
var contentName = parseInt(localStorage.getItem("currentbrand"));
var currentContentId  = parseInt(localStorage.getItem('currentcontent'));
//ends
checkClickThrough();

document.getElementById("main_content").addEventListener("touchmove", touchHandler, false);
document.getElementById("main_content").addEventListener("touchstart", touchHandler, false);
function touchHandler(e) {

	if (e.type == "touchstart") {

			 if( e.touches.length == 1 ) { // one finger touch
			 	var touch = e.touches[ 0 ];
			 	startLoc = { x : touch.pageX, y : touch.pageY };
			 }

			} else if (e.type == "touchmove") {
				if( startLoc ) {
					var touch = e.touches[ 0 ];

					if( Math.abs( startLoc.x - touch.pageX ) > Math.abs( startLoc.y - touch.pageY ) )
					{
						e.preventDefault();
					}
					startLoc = null;
				}

			}
		}
		/*Code by android developers ends here*/
		$(document).ready(function(){

			var ua = navigator.userAgent;
	//var event = "touchstart";
	var event = (ua.match(/Ipad/i)) ? "touchstart" : "click";


	$(".left_arrow").click(function(event) {
		go_nav('b');
	});

	$(".right_arrow").click(function(event) {
		go_nav('f');
	});

	$(".slides").click(function(){
		var slideNum =	$(this).index()+1;
		console.log(slideNum);
		open_page("",slideNum);

	});

	$(".reference").removeClass("active");

	$('.reference').on('swipeleft swiperight', function(event) {
		event.stopPropagation();
	});

	$(".box_btn").bind("click",function(){
		$(".reference").toggleClass("active");
	});

	currentSlide();

		$("#main_content").swipe({
	   swipeLeft:function(event, direction, distance, duration, fingerCount) {
		
		//alert("swipeleft");
		//myconsole("swipeleft");
		var page_id =  parseInt($("#wrapper").attr("rel"));
		var last_page_id = $(".slides").length;
		var slide_jumper_open = $(".reference").hasClass("active");
		if(page_id == last_page_id+1)	{
			return
		} else{
			go_nav('f');
		}
	  },

	  swipeRight:function(event, direction, distance, duration, fingerCount) {
		
			//alert("swiperight");
		//myconsole("swiperight");
		var page_id =  parseInt($("#wrapper").attr("rel"));
		var slide_jumper_open = $(".reference").hasClass("active");

		if(page_id == 0){
			//console.log("First Slide");
			//myconsole("First Slide");
			return
		} else {
			go_nav('b');
		}

	  } ,

        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:0
	});
});

function go_nav(direction) {
var page_id =  parseInt($("#wrapper").attr("rel"));
			
		
var flag=0;
if(direction == 'b') {


	if(page_id >= 0){
		page_id = page_id - 1;
		//alert(page_id);
		//console.log(page_id);
		if(page_id == 0){
            flag=2;
        }
	}
	 if(flag == 2){
        localStorage.setItem("gotoNextPrevBrand" ,2);//if one than next if 2 than prev
        //flag == 0;
		var objectData={

         "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
          "previousslide": localStorage.getItem("previousslide"),
         "slideId": page_id
         };
  var params = {
  "query" : objectData,
  "type" : "brandNavigation",
  "callback" : "checkLastPgFn"
  };

	//window.messageHandler.postMessage(JSON.stringify(params)); //pageswipe
	
		//window.location = "js-call:" + "1" + ":" + encodeURIComponent(JSON.stringify({query:'NODATA', type:'brandNavigation', callback:'checkLastPgFn'}));
    }else{
        localStorage.setItem("gotoNextPrevBrand" ,0);
		var objectData={

         "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
          "previousslide": localStorage.getItem("previousslide"),
         "slideId": page_id
         };
  var params = {
  "query" : objectData,
  "type" : "brandNavigation",
  "callback" : "checkLastPgFn"
  };

	//window.messageHandler.postMessage(JSON.stringify(params)); //pageswipe
	}
	
}else {
	

	if(page_id <= 8){
		page_id = page_id + 1;
		//alert(page_id);
		if(page_id == 9){
            flag=1;
        }
	}
	    if(flag == 1){
        localStorage.setItem("gotoNextPrevBrand" ,1);//if one than next if 2 than prev
         flag == 0;
		 var objectData={

         "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
          "previousslide": localStorage.getItem("previousslide"),
         "slideId": page_id
         };
  var params = {
  "query" : objectData,
  "type" : "brandNavigation",
  "callback" : "checkLastPgFn"
  };


	//window.messageHandler.postMessage(JSON.stringify(params)); //pageswipe
		 //window.location = "js-call:" + "1" + ":" + encodeURIComponent(JSON.stringify({query:'NODATA', type:'brandNavigation', callback:'checkLastPgFn'}));
    }else{
        localStorage.setItem("gotoNextPrevBrand" ,0);
		var objectData={

         "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
          "previousslide": localStorage.getItem("previousslide"),
         "slideId": page_id
         };
  var params = {
  "query" : objectData,
  "type" : "brandNavigation",
  "callback" : "checkLastPgFn"
  };

	//window.messageHandler.postMessage(JSON.stringify(params)); //pageswipe
  
    }


}



$("#wrapper").attr("rel",page_id);

var content="";
if(flag==0){
var pg_content = set_pg_content(page_id);

	$("#main_content").html(pg_content);
}
	//console.log("pg : "+page_id);
	if(page_id==4){
		/* $(".box2").click(function(event) {
			open_page("",5)
		});
		$(".box3").click(function(event) {
			open_page("",6)
		});
		$(".box4").click(function(event) {
	 		open_page("",7)
	 	});
		$(".box5").click(function(event) {
	 		open_page("",8)
	 	});
		$(".box6").click(function(event) {
	 		open_page("",9)
	 	});
		$(".box7").click(function(event) {
	 		open_page("",10)
	 	});
		$(".box8").click(function(event) {
	 		open_page("",11)
	 	}); */
		
	}
	 checkClickThrough();
}

function set_pg_content(pg_id){
//step 6:-
//console.log("++++++++pg_id++++"+pg_id+"+++++++currentslide++++++"+localStorage.getItem("currentslide")+"++++++previousslide++++++"+localStorage.getItem("previousslide"));
		
$(".reference").removeClass("active");
currentSlide();
var selectedContentPath='';
switch(pg_id){
	case 1:
	content='<link rel="stylesheet" type="text/css" href="slide1/slide1.css" media="screen"/><div class="background"><img src="slide1/1.jpg" width="1024" height="768" alt=""></div>';
	break;
	case 2:
	content='<link rel="stylesheet" type="text/css" href="slide2/slide2.css" media="screen"/><div class="background"><img src="slide2/1.png" width="1024" height="768" alt=""></div><div class="intro"><img src="slide2/2.png"></div><div class="logo"><img src="slide2/3.gif"></div><div class="punch"><img src="slide2/4.png"></div>';
	break;
	case 3:
	content='<link rel="stylesheet" type="text/css" href="slide3/slide3.css" media="screen"/><div class="background"><img src="slide3/1.jpg" width="1024" height="768" alt=""></div>';
	break;
	case 4:
	content='<link rel="stylesheet" type="text/css" href="slide4/slide4.css" media="screen"/><div class="background"><img src="slide4/1.jpg" width="1024" height="768" alt=""></div><div class="switchOut1" onclick="switchOut1();"></div><div class="switchOut2" onclick="switchOut2();"></div><div class="switchOut3" onclick="switchOut3();"></div><div class="switchOut4" onclick="switchOut4();"></div>';
	break;
	case 5:
	content='<link rel="stylesheet" type="text/css" href="slide5/slide5.css" media="screen"/><div class="background"><img src="slide5/1.jpg" width="1024" height="768" alt=""></div><div class="hit_1"><img src="slide5/2.jpg" width="1024" height="768" alt=""/></div><div class="hit_pop1" onclick="hit_pop1()"></div><div class="hit_close1" onclick="hit_close1()"></div><div class="takeCover" onclick="takeCover();"></div>';
	break;
	case 6:
	content='<link rel="stylesheet" type="text/css" href="slide6/slide6.css" media="screen"/><div class="background"><img src="slide6/1.jpg" width="1024" height="768" alt=""></div><div class="hit_1"><img src="slide6/2.jpg" width="1024" height="768" alt=""/></div><div class="hit_pop1" onclick="hit_pop1()"></div><div class="hit_2"><img src="slide6/3.jpg" width="1024" height="768" alt=""/></div><div class="hit_pop2" onclick="hit_pop2()"></div><div class="hit_close1" onclick="hit_close1()"></div><div class="takeCover" onclick="takeCover();"></div>';
	break;
	case 7:
	content='<link rel="stylesheet" type="text/css" href="slide7/slide7.css" media="screen"/><div class="background"><img src="slide7/1.jpg" width="1024" height="768" alt=""></div><div class="hit_1"><img src="slide7/2.jpg" width="1024" height="768" alt=""/></div><div class="hit_pop1" onclick="hit_pop1()"></div><div class="hit_2"><img src="slide7/3.jpg" width="1024" height="768" alt=""/></div><div class="hit_pop2" onclick="hit_pop2()"></div><div class="hit_close1" onclick="hit_close1()"></div><div class="takeCover" onclick="takeCover();"></div>';
	break;
	case 8:
	content='<link rel="stylesheet" type="text/css" href="slide8/slide8.css" media="screen"/><div class="background"><img src="slide8/1.jpg" width="1024" height="768" alt=""></div><div class="hit_1"><img src="slide8/2.jpg" width="1024" height="768" alt=""/></div><div class="hit_pop1" onclick="hit_pop1()"></div><div class="hit_2"><img src="slide8/3.jpg" width="1024" height="768" alt=""/></div><div class="hit_pop2" onclick="hit_pop2()"></div><div class="hit_3"><img src="slide8/4.jpg" width="1024" height="768" alt=""/></div><div class="hit_pop3" onclick="hit_pop3()"></div><div class="hit_close1" onclick="hit_close1()"></div><div class="takeCover" onclick="takeCover();"></div>';
	break;
}

return content;

}

function showDiv() {
   document.getElementById('welcomeDiv').style.display = "block";
}
function showDiv2() {
   document.getElementById('welcomeDiv2').style.display = "block";
}


function open_page(url,page_id){
	 //alert("===openpage====");
	localStorage.getItem('currentbrand');
    localStorage.getItem('currentcontent');
    localStorage.getItem('currentcontentbrandId');
    localStorage.getItem('current');
	localStorage.setItem("gotoNextPrevBrand" ,0);
	//alert("====currentbrand======"+localStorage.getItem('currentbrand'));
	//alert("====currentcontent======"+localStorage.getItem('currentcontent'));
	//alert("====currentcontentbrandId======"+localStorage.getItem('currentcontentbrandId'));
	//alert("====current======"+localStorage.getItem('current'));
	//alert("====previousslide======"+localStorage.getItem("previousslide"));
	//alert("====page_id======"+page_id);
		var objectData={

         "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
          "previousslide": localStorage.getItem("previousslide"),
         "slideId": page_id
         };
  var params = {
  "query" : objectData,
  "type" : "brandNavigation",
  "callback" : "checkLastPgFn"
  };

	//window.messageHandler.postMessage(JSON.stringify(params)); //pageswipe
	
	 $("#wrapper").attr("rel",page_id);
	 var content="";
	 var pg_content = set_pg_content(page_id);

	 	$("#main_content").html(pg_content);

	 if(page_id==4){
		$(".box2").click(function(event) {
			open_page("",5)
		});
		$(".box3").click(function(event) {
			open_page("",6)
		});
		$(".box4").click(function(event) {
	 		open_page("",7)
	 	});
		$(".box5").click(function(event) {
	 		open_page("",8)
	 	});
		$(".box6").click(function(event) {
	 		open_page("",9)
	 	});
		$(".box7").click(function(event) {
	 		open_page("",10)
	 	});
		$(".box8").click(function(event) {
	 		open_page("",11)
	 	});
	 }
	  checkClickThrough();
	}

	function checkClickThrough(){
	var currentslide=localStorage.getItem("currentslide");
	//alert(currentslide);
	document.getElementById("click_through").innerHTML='';

	if(currentslide == 1){
	document.getElementById("click_through").innerHTML='';
		}
    if(currentslide == 2){
	document.getElementById("click_through").innerHTML='';
		}

	}

	function checkBtns(refNum){
		switch(refNum){
			case 1:
			open_page('',1);
            break;
		}
	}

	function currentSlide(){
		var curr_id =  parseInt($("#wrapper").attr("rel"));
		$(".slides").removeClass("active");
		$(".slides:nth-child("+curr_id+")").addClass("active");
	}

	var ln = 0;
	function myconsole(msg){

		var oldMsg = "</br>"+ln+". "+$("#myconsole").html();
		ln++
		$("#myconsole").html(msg+oldMsg);
	}

function currentTimeInDatabaseFormat(){//to get current time in dd-mm-yyyy hh:mm:ss
	var year = new Date().getFullYear();
	var month = new Date().getMonth();
		month = parseInt(month)+1;
	if(month.toString().length==1){
		month="0"+month;
	}

	var date = new Date().getDate();
	if(date.toString().length==1){
		date="0"+date;
	}

	var hour = new Date().getHours();
	if(hour.toString().length==1){
		hour="0"+hour;
	}

	var minutes = new Date().getMinutes();
	if(minutes.toString().length==1){
		minutes="0"+minutes;
	}

	var seconds = new Date().getSeconds();
	if(seconds.toString().length==1){
		seconds="0"+seconds;
	}

	var duration= year+"-"+month+"-"+date+"-"+hour + ":" + minutes + ":" + seconds;
	return duration;
}

$(document).ready(function(){
	$('body').on('click','.touchbtn',function(){
		$('.right_arrow').trigger( "click" );
	})

	$(document).on('click','.btnshow',function(){
//alert('hi')
		$('.touchbtn').css("display","block");
	})
})

/*--------------------- animation javascript -----------------------*/

function hit_pop1() {
	$('.hit_1').css("display","block");
	$('.hit_close1').css("display","block");
	$('.hit_pop1').css("display","none");
}

function hit_pop2() {
	$('.hit_2').css("display","block");
	$('.hit_close1').css("display","block");
	$('.hit_pop2').css("display","none");
}

function hit_pop3() {
	$('.hit_3').css("display","block");
	$('.hit_close1').css("display","block");
	$('.hit_pop3').css("display","none");
}

function hit_pop4() {
	$('.hit_4').css("display","block");
	$('.hit_close1').css("display","block");
	$('.hit_pop4').css("display","none");
}

function hit_close1() {
	$('.hit_1').css("display","none");
	$('.hit_2').css("display","none");
	$('.hit_3').css("display","none");
	$('.hit_4').css("display","none");
	$('.hit_close1').css("display","none");
	$('.hit_pop1').css("display","block");
	$('.hit_pop2').css("display","block");
	$('.hit_pop3').css("display","block");
	$('.hit_pop4').css("display","block");
}


function switchOut1() {
		open_page("",5);
}

function switchOut2() {
		open_page("",6);
}

function switchOut3() {
		open_page("",7);
}

function switchOut4() {
		open_page("",8);
}

function takeHome() {
		open_page("",1);
}

function takeCover() {
		open_page("",4);
}

function startAnime() {
	$('.s1_2').css("display","block");
	$('.s1_4').removeClass("pulseUp");
	$('.s1_4').addClass("shiftLeft");
	$('.s1_5').css("display","block");
}