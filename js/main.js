
// examole 1

document.querySelectorAll('button').forEach(function(y){
  y.onclick=function(){
 document.querySelector('#demo').style.color = y.dataset.hh  
 document.querySelector('#demo').style.textAlign = y.dataset.ss  
  }
 
})


// examole 2
document.querySelector('#myform').addEventListener('submit', function(event) {
    var works = document.querySelector('#works').value;
    var result = document.querySelector('#result');
    
    if (works == '') {
        alert('enter data');
        event.preventDefault();
    } else {
      
        var myli = document.createElement('li');
        myli.innerHTML = works;

       
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌'; 
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.onclick = function() {
            myli.remove(); 
        };       
        myli.appendChild(deleteBtn);
        result.append(myli);

       
        document.querySelector('#works').value = '';
        event.preventDefault();
    }
});
