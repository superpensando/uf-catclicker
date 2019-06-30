var cat = document.getElementById('catcute');
var catClicks = document.getElementById('catClicks');
let i=0;
cat.addEventListener('click', function(){
     catClicks.textContent = i; 
     i++;
}, false);