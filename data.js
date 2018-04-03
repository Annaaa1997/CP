let animalContainer = document.getElementById("animal-info");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    xhr.onload = function(){
        let ourData = JSON.parse(xhr.responseText);
        renderHTML(ourData);
    };
    xhr.send();
});

function renderHTML(data){
    let htmlString = "";

    for ( i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species +  "</p>";
    };

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}