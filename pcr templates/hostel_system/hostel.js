function size_function(e){
    var element = document.getElementById('create-post-body');
    if (window.innerWidth < 800){
        
        element.innerHTML = "<p class='less-then-800'> This page is only made for desktop </p>"
    }else if(window.innerWidth>800){
       
        location.reload();
    }
        
    

}


window.addEventListener('resize', size_function)