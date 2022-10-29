   const home = function() {}
   const content = document.getElementById("content");

    function createImage() {
        const image = document.createElement("img");
        image.classList.add("bg-img");
        image.src = "../dist/assets/inn.jpg";
        content.appendChild(image);
    }

    const bodyDiv = () => {
        const div = document.createElement("div");
        div.classList.add('body-div');
        
        content.append(div);
        return div;
    }

    const createCenterDiv = () => {
        const bodyHomePageDiv = bodyDiv()
        
        const div = document.createElement("div");
        div.classList.add("body-center-div");
        bodyHomePageDiv.append(div);

        return div
    }

    const createBodyPhotoDiv = () => {
        const bodyCenterDiv = createCenterDiv();
        const div = document.createElement("div");
        div.classList.add('photo-body-div');
        
        bodyCenterDiv.append(div);
        return div;
    }

    function createBodyPhoto() {
        const photoDiv = createBodyPhotoDiv();

        const image = document.createElement("img");
        image.classList.add("body-home-image");
        image.src = "../dist/assets/hotpie.jpg";
        photoDiv.appendChild(image);
    }



    function createHomeTab() {
        createImage();
        // headerList();
        createBodyPhoto();
    }

export { createHomeTab }