let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
xhr.onload = function(){
    let ourData = JSON.parse(xhr.responseText);
    console.log(ourData[0]);
};
xhr.send();


