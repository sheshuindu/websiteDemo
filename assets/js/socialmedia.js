/*Script to hide social media icon at particular height in index page */
document.getElementsByClassName('mu-top-social-nav')[0].style.opacity=0;
document.addEventListener('scroll',setVisibility);
function setVisibility(){
  var height=document.getElementsByClassName('mu-service-area')[0].clientHeight;
  var position=window.pageYOffset;
  var element=document.getElementsByClassName('mu-top-social-nav')[0];
  if(position>=height+20){
    element.style.opacity=1;
  }else{
    element.style.opacity=0;
  }
}