const content = document.getElementById("content");

function createImage() {
    const image = document.createElement("img");
    image.src = "https://cdna.artstation.com/p/assets/images/images/011/503/172/large/greg-bobrowski-gt-k0234-d5519-22340-theinnatthecrossrox-grzegorzbobrowski.jpg?1529930412";
    content.appendChild(image);
}

function headerList() {
    const ul = document.createElement("ul");
    
    const liOne = document.createElement("li")
    const liTwo = document.createElement("li")
    const liThree = document.createElement("li")

    liOne.innerHTML = "Home";

    liTwo.innerHTML = "Menu";

    liThree.innerHTML = 'Contact';

    ul.append(liOne, liTwo, liThree);
    content.append(ul)
}

export { createImage, headerList }