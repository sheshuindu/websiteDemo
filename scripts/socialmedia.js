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

/*For login form*/
function showPasswordForm(event) {
  event.preventDefault();
  registerColumn.style.display = 'none';
  emailEntryForm.style.display = 'none';
  passwordLabel.innerHTML = 'Welcome back, ' + emailAddressField.value + '.';
  passwordEntryForm.style.display = 'initial';
  backButton.style.display = 'inline-block';
  titleText.innerHTML = 'Back'
}

function showLoginForm() {
  registerColumn.style.display = 'initial';
  emailEntryForm.style.display = 'initial';
  passwordLabel.innerHTML = 'Enter your email ID:';
  passwordEntryForm.style.display = 'none';
  backButton.style.display = 'none';
  titleText.innerHTML = 'Log In'
}

function showConfirmation(event) {
  event.preventDefault();
  resetPasswordForm.style.display = 'none';
  resetPasswordButton.style.display = 'none';
  emailConfirmationButton.style.display = 'initial';
  emailConfirmationText.style.display = 'initial';
}

$(document).ready(function () {
  $(document).on('show.bs.modal', '.modal', function (event) {
      var zIndex = 1040 + (10 * $('.modal:visible').length);
      $(this).css('z-index', zIndex);
      setTimeout(function () {
          $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
      }, 0);
  });
});