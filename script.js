function changeClass() {
    // document.getElementById("demo").innerHTML="Paragraph changed.";
    
    document.getElementById("nav").classList.remove('navbar-opacity');
    // document.getElementById("nav").classList.add('blue');
    
  
  }

  window.addEventListener('scroll', function(){ 
    document.getElementById("nav").classList.remove('navbar-opacity');

    
  }, true)