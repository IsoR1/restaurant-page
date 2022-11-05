   const home = function() {
    
   const content = document.getElementById("content");

    function createImage() {
        const image = document.createElement("img");
        image.classList.add("bg-img");
        image.src = "assets/inn.jpg";
        content.appendChild(image);
    }

    const createCenterDiv = () => {
        const div = document.createElement("div");
        div.classList.add('main-body');

        return div
    }

    const createBodyPhotoDiv = () => {
        const div = document.createElement("div");
        div.classList.add('img-container');
        
        
        return div;
    }

    const createBodyPhoto = () => {
        const image = document.createElement("img");
        image.classList.add("main-img");
        image.src = "assets/hotpie.jpg";
        return image
    }

    const createText = () => {
        const textDiv = document.createElement("div");
        const pOne = document.createElement("p");
        const pTwo = document.createElement("p");

        textDiv.classList.add("text");

        pOne.textContent = 'The Best Lemon Cakes in Westeros';
        pTwo.textContent = 'Serving you every morrow since the reign of Jaehaerys I';

        textDiv.append(pOne);
        textDiv.append(pTwo);

        return textDiv;
    }

    const createCallToAction = () => {
        const div = document.createElement("div");
        const ctaText = document.createElement("p");

        div.classList.add("cta-div");

        ctaText.classList.add("cta-text");
        ctaText.textContent = 'Order by raven or visit us!';

        div.append(ctaText);
        return div;
    }

    function createHomeTab() {
        createImage();
        
        const bodyCenterDiv = createCenterDiv();
        const text = createText();
        const photoDiv = createBodyPhotoDiv();
        const createPhoto = createBodyPhoto();
        const cta = createCallToAction();

        content.append(bodyCenterDiv)
        bodyCenterDiv.append(text);
        photoDiv.append(createPhoto);
        bodyCenterDiv.append(photoDiv);
        bodyCenterDiv.append(cta);
    }

    createHomeTab();

    return home;
}

export default home;
    