// nav bar javascript

function resultF(){
    var ele = document.getElementById('r-semesters');
    var routine = document.getElementById('e-semesters');
    routine.classList.remove('r-disable');
    var rit = document.getElementById('exam-i-t');

    rit.classList.remove('t-bg');
    ele.classList.toggle('r-disable');
}
document.getElementsByName

function routineF(){
    var ele = document.getElementById('e-semesters');
    var result = document.getElementById('r-semesters');
    var eit = document.getElementById('result-i-t');
    eit.classList.remove('t-bg');
    result.classList.remove('r-disable');
    ele.classList.toggle('r-disable');
}


function ebg(){
    var ele = document.getElementById('exam-i-t');
    ele.classList.toggle('t-bg')
}

function myFunction() {
            
    var element = document.getElementById("toggle-nav");
    element.classList.toggle("disable");
}

function rbg(){
    var element = document.getElementById('result-i-t');
    element.classList.toggle('t-bg')
}


// nav bar javascript end 


//container

function sideroutineF(){
    var ele = document.getElementById('side-e-semesters');
    var result = document.getElementById('side-r-semesters');
    var eit = document.getElementById('side-result-i-t');
    eit.classList.remove('side-bg');
    
    ele.classList.toggle('side-disable');
}



function sebg(){
    var ele = document.getElementById('side-exam-i-t');
    ele.classList.toggle('side-bg')
}

// container main

function odots(){
    var dot = document.getElementById('toggle-option');
    dot.classList.toggle('o-t-eneble')
    
}

function readMore(){
    var readmore = document.getElementsByClassName('see-more')[0];
    
    readmore.classList.toggle('d-show');

    var rmb = document.getElementsByClassName('read-more-btn')[0];
    rmb.classList.toggle('d-none');

    var seeless = document.getElementsByClassName('see-less')[0];

    seeless.classList.add('d-show')

}

function readLess(){
    var readmore = document.getElementsByClassName('see-more')[0];
    
    readmore.classList.remove('d-show');

    var rmb = document.getElementsByClassName('read-more-btn')[0];
    rmb.classList.remove('d-none');
    var seeless = document.getElementsByClassName('see-less')[0];

    seeless.classList.remove('d-show')
}




function likebutton(){
    var like = document.getElementsByClassName('like-btn')[0];
    like.classList.toggle('like-btn-toggle')
}
// function likebutton(){

//    // var postid = none
//     var like = document.getElementById('like-btn' + postid);
//     like.classList.toggle('like-btn-toggle')
// }
function show_notification(){
    var obj = document.getElementById('notification-toggle1');
    obj.classList.toggle('d-none');

}
function show_notification2(){
    var obj = document.getElementById('notification-toggle2');
    obj.classList.toggle('d-none');

}
