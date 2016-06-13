// JavaScript Document
(function(){
	var music=getId('music');
	var audio=document.getElementsByTagName("audio")[0];
	var page1=getId('page1');
	var page2=getId('page2');
	var page3=getId('page3');
	
	//点击音乐图标，控制音乐播放交互
	music.addEventListener('touchstart',function(event){
	  if( audio.paused){
			audio.play();
			this.style.animationPlayState='running';
		}else{
			audio.pause();
			this.style.animationPlayState='paused';
		}
 },false);
  //音乐播放结束
	audio.addEventListener('ended',function(event){
		music.style.animationPlayState='paused';
		},false);
	//点击第一页的交互效果
	page1.addEventListener('touchstart',function(event){
		this.style.display='none';
		page2.style.display='block';
		page3.style.display='block';
		page3.style.top='100%';

  setTimeout(function(){
			page2.setAttribute('class','page fadeOut');
			page3.setAttribute('class','page fadeIn');
			
			
		},5000);
		
		},false);
		//点击第三页让回到第一页
	page3.addEventListener('touchstart',function(event){
			this.style.display='none';
			page1.style.display='block';
			setTimeout(function(){
				page3.setAttribute('class','page fadeIn');
				
				})
		},false);

})();

