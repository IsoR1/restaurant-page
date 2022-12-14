const menu = function() {
    const content = document.getElementById("content");

    const menuDiv = () => {
        const div = document.createElement("div");
        div.classList.add("menu-div", "hidden");
        return div;
    }

    const item = (imgSrc, name) => {
        const div = document.createElement("div");
        const textDiv = document.createElement("div");
        div.classList.add("item-card");
        div.classList.add("hvr-grow");
        textDiv.classList.add("card-text");
        textDiv.classList.add("hvr-bounce-to-top");
        
        const image = document.createElement("img");
        image.classList.add("item-image");
        image.src = imgSrc;

        const p = document.createElement("p");
        p.classList.add("item-name");
        p.textContent = name;

        div.append(image);
        textDiv.append(p);
        div.append(textDiv);

        return div;
    }

    function createMenu() {
        const mainDiv = menuDiv();
        const itemCardOne = item('assets/chicken.jpg', 'Honeyed Chicken');
        const itemCardTwo = item('assets/stew.jpg', 'Beef & Barley Stew');
        const itemCardThree = item('assets/wolfbread.jpg', 'Wolf Bread');
        const itemCardFour = item('assets/lemoncake.jpg', 'Lemon Cakes');
        const itemCardFive = item('assets/creamcake.jpg', 'Dornish Cream Cakes');
        const itemCardSix = item('assets/plumwine.jpg', 'Sweet Plum Wine'); 

        content.append(mainDiv);
        mainDiv.append(itemCardOne);
        mainDiv.append(itemCardTwo);
        mainDiv.append(itemCardThree);
        mainDiv.append(itemCardFour);
        mainDiv.append(itemCardFive);
        mainDiv.append(itemCardSix);
    }

    createMenu();
    
    return menu;
}

export default menu