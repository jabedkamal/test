function loadTextFile(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

loadTextFile('sample1.txt', 'text1');
loadTextFile('sample2.txt', 'text2');
loadTextFile('sample3.txt', 'text3');
