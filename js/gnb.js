$(function(){

 var gnbA = $('#gnb>li');
 var sub = $('#gnb>li>ul');

 var headerMin = $('#headerBox').height();
 var headerMax = sub.innerHeight()+headerMin;
 
 var state = false;
 var speed = 150;

 gnbA.mouseenter(function(){
  if (!state)
  {$('#headerBox').stop().animate({height:headerMax},speed,function(){
    sub.stop().fadeIn(speed);
  });
    state=true;
  }
  $(this).addClass('on');
  $(this).find(sub).addClass('on');

 });//mouseenter end

 gnbA.mouseleave(function(){
  $(this).removeClass('on');
  $(this).find(sub).removeClass('on');
 });

$('#gheader').mouseleave(function(){
 sub.stop().fadeOut(speed,function(){
  $('#headerBox').stop().animate({height:headerMin},speed);
 });
 state=false;
});

});