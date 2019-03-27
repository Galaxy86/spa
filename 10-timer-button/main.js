$(function(){
  var n=6;
  var $btnAgree = $('input{type="button"}');
  var time r= window.setInterval(function(){
  n--;
  if(n==0){
    window.clearInterval(timer);
    $btnAgree.removeAttr('disable');
    $btnAgree.val('同意');
  }else{
    $btnAgree.val('同意('+n+'s)');
  },1000);

  $btnAgree.click(function(){
    alert('SPA! 10-timer-button task!');
  });

});
