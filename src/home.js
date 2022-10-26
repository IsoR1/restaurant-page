const content = document.getElementById("content");

function createImage() {
    const image = document.createElement("img");
    image.src = "https://cdna.artstation.com/p/assets/images/images/011/503/172/large/greg-bobrowski-gt-k0234-d5519-22340-theinnatthecrossrox-grzegorzbobrowski.jpg?1529930412";
    content.appendChild(image);
}

// function headerDiv() {
//     const div = document.createElement("div");
//     div.classList.add("header-div");
// }

const headerDiv = () => {
        const div = document.createElement("div");
        div.classList.add("header-div");
        return div;
}

function headerList() {
    const hDiv = headerDiv();
    const ul = document.createElement("ul");
    
    const liOne = document.createElement("li")
    const liTwo = document.createElement("li")
    const liThree = document.createElement("li")

    liOne.innerHTML = "Home";

    liTwo.innerHTML = "Menu";

    liThree.innerHTML = 'Contact';

    ul.append(liOne, liTwo, liThree);
    hDiv.append(ul)
    content.append(hDiv)
}

export { createImage, headerList }