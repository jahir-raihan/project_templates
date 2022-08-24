var slider = document.getElementById("range-slide");
var output = document.getElementById("val");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
}

function show_filter_toggle(){
    var ele = document.getElementById('filter-toggle');
    ele.classList.toggle('d-none')
}