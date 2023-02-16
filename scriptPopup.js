alert('Hello from popup');
let textContainer = document.getElementById('textContainer');
if (textContainer !== null) {
    textContainer.innerText = 'Hello from text container';
}

function showTextInContainer() {
    let textContainer = document.getElementById('textContainer');
    if (textContainer !== null) {
        textContainer.innerText = 'Hello from text container';
    }
}
