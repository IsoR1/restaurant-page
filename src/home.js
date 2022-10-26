
function createImage() {
    const image = document.createElement("img");
    const content = document.getElementById("content");
    image.src = "https://cdna.artstation.com/p/assets/images/images/011/503/172/large/greg-bobrowski-gt-k0234-d5519-22340-theinnatthecrossrox-grzegorzbobrowski.jpg?1529930412";
    content.appendChild(image);
}


export { createImage }