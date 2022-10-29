   const home = function() {
    
   const content = document.getElementById("content");

    function createImage() {
        const image = document.createElement("img");
        image.classList.add("bg-img");
        image.src = "../dist/assets/inn.jpg";
        content.appendChild(image);
    }

    const bodyDiv = () => {
        // const bodyHomePageDiv = bodyDiv()
        const div = document.createElement("div");
        div.classList.add('body-div');
        
        content.append(div);
        return div;
    }

    const createCenterDiv = () => {
        
        const div = document.createElement("div");
        div.classList.add("body-center-div");
        // bodyHomePageDiv.append(div);

        return div
    }

    const createBodyPhotoDiv = () => {
        // const bodyCenterDiv = createCenterDiv();
        const div = document.createElement("div");
        div.classList.add('photo-body-div');
        
        // bodyCenterDiv.append(div);
        return div;
    }

    const createBodyPhoto = () => {
        // const photoDiv = createBodyPhotoDiv();

        const image = document.createElement("img");
        image.classList.add("body-home-image");
        image.src = "../dist/assets/hotpie.jpg";
        // photoDiv.appendChild(image);
        return image
    }

    const createText = () => {
        const textDiv = document.createElement("div");
        const pOne = document.createElement("p");
        const pTwo = document.createElement("p");

        textDiv.classList.add("text");

        pOne.textContent = 'The Best Lemon Cakes in Westeros';
        pTwo.textContent = 'Made with love since the reign of Jaehaerys I';

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
        
        const bodyHomePageDiv = bodyDiv()
        const bodyCenterDiv = createCenterDiv();
        const text = createText();
        const photoDiv = createBodyPhotoDiv();
        const createPhoto = createBodyPhoto();
        const cta = createCallToAction();

        bodyHomePageDiv.append(bodyCenterDiv);
        bodyCenterDiv.append(text);
        photoDiv.append(createPhoto);
        bodyCenterDiv.append(photoDiv);
        bodyCenterDiv.append(cta);
    }

    createHomeTab();

    return home;
}

export default home;
    