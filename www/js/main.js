
$(document).live("mobileinit",function() {
	if (navigator.userAgent.indexOf('Android') != -1) { 
        $.mobile.defaultPageTransition = 'none'; 
        $.mobile.defaultDialogTransition = 'none'; 
    } 
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.page.prototype.options.domCache=true
});
var base={
	author: 'zhangkai',	
    version: '1.0',
    website: 'http://10.21.246.199',
    clock:	12048000
}
 base.utils={
	setParam: function(name,value){
		localStorage.setItem(name,value)
	},
	getParam:function(name){
		return localStorage.getItem(name)
	},
	removeParam:function(name){
		return localStorage.removeItem(name)
	},
	checkclock:function(){
		var time=new Date();  
	    time=time.getTime();
	    var x=time-base.utils.getParam('clock');
	    return x>base.clock;  
	},
	setclock:function(){
		var time=new Date();  
	    time=time.getTime();
		base.utils.setParam("clock",time);
	}
}

/*.....ajax加载器.....*/
function showLoader() {  
	 $.mobile.loading('show', {  
	        text: '加载中...', //加载器中显示的文字  
	        textVisible: true, //是否显示文字  
	        theme: 'a',        //加载器主题样式a-e  
	        textonly: false,   //是否只显示文字  
	        html: ""           //要显示的html内容，如图片等  
	    });  
}  
function hideLoader()  
{  
    $.mobile.loading('hide');  
}  

/*.....下拉刷新器.....*/
var  refresh = function(request,s){ 
var myScroll,
pullDownEl, pullDownOffset,
pullUpEl, pullUpOffset,
generatedCount = 0;

function pullDownAction () {
	request.ajax(1);
}
function pullUpAction () {
	request.ajax(0);
}
function loaded() {
pullDownEl = document.getElementById('pullDown');
pullDownOffset = pullDownEl.offsetHeight;
pullUpEl = document.getElementById('pullUp');	
$(pullUpEl).tap(function(){request.ajax(0);});

myScroll = new iScroll('wrapper', {
	topOffset: pullDownOffset,
	onRefresh: function () {
		if (pullDownEl.className.match('loading')) {
			pullDownEl.className = '';
			pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
		} 
	},
	onScrollMove: function () {
		if (this.y > 5 && !pullDownEl.className.match('flip')) {
			pullDownEl.className = 'flip';
			pullDownEl.querySelector('.pullDownLabel').innerHTML = '松开可刷新...';
			this.minScrollY = 0;
		} else if (this.y < 5 && pullDownEl.className.match('flip')) {
			pullDownEl.className = '';
			pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
			this.minScrollY = -pullDownOffset;
		} 
	},
	onScrollEnd: function () {
		if (pullDownEl.className.match('flip')) {
			pullDownEl.className = 'loading';
			pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';				
			pullDownAction();	
			myScroll.refresh();	
		} 
	}
});
setTimeout(function () { $('#wrapper')[0].style.left = '0'; }, 800);
}
document.addEventListener('touchmove', function (e) { e.preventDefault();}, false);
if(s!=undefined){
s.tap(function(){setTimeout(loaded, 200);});
}
document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
}

var refreshcomment=function(){
	function loaded() {
	comScroll = new iScroll('cwrapper', {
		 vScrollbar:false
	});
}
document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
}


/*----------图片压缩-------------*/

