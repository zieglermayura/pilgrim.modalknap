document.getElementById('open-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  });
  
  document.getElementsByClassName('modal-close')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  
  window.addEventListener('scroll', function() {
    var button = document.getElementById('open-modal');
    if (window.pageYOffset > 200) {
      button.style.display = 'none';
    } else {
      button.style.display = 'block';
    }
  });
  