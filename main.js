let containerElement = document.getElementById('container');

for (let i = 0; i < 1000; i++) {
    console.log('Ciclo; ' + i)
    containerElement.innerHTML += "<div class='box'>"+ i +"</div>"
}