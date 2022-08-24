function r_h_t_s(){
    var h_t_c = document.getElementById('h-t-contents');
    h_t_c.classList.toggle('show');
}


function ctheme(){
    var desc_btn = document.getElementById('desc-btn');
    var desc = document.getElementById('description');
    var d_c = document.getElementById('d-c1');
    var d_c1 = document.getElementById('d-c2');
    d_c.classList.remove('s-none')
    d_c1.classList.remove('s-none')
    desc.classList.remove('s-none')
    desc_btn.classList.add('active')
    document.getElementById('rev-btn').classList.remove('active')
    var desc = document.getElementById('review');
    desc.classList.add('s-none')
}
function ctheme2(){
    var rev_btn = document.getElementById('rev-btn');
    rev_btn.classList.add('active')
    document.getElementById('desc-btn').classList.remove('active')
    var desc = document.getElementById('review');
    desc.classList.remove('s-none')
    var desc = document.getElementById('description');
    desc.classList.add('s-none')
    var d_c = document.getElementById('d-c1');
    var d_c1 = document.getElementById('d-c2');
    d_c.classList.add('s-none')
    d_c1.classList.add('s-none')
}