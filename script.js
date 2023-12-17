
function yes(){
    window.location.href = "yes.html";
}

function no(){
    alert('wrong answer pookie bear!');
}


const b = document.getElementById('no');
const height = window.innerHeight - 55;
const width = window.innerWidth - 95;


b.addEventListener("mouseover", moveHover)

function moveHover(){
    b.style.left = Math.floor(Math.random() * (width + 1)) + 'px';
    b.style.top = Math.floor(Math.random() * (height + 1)) + 'px';
    /*b.style.top = Math.floor(Math.random() * (window.innerHeight)) +'px';*/
}

