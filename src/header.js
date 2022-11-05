const header = function() {
    const content = document.getElementById("content");

    const headerDiv = () => {
        const div = document.createElement("div");
        div.classList.add("header-div");
        return div;
    }

    const headerText = () => {
        const div = document.createElement("div");
        div.classList.add("header-text");

        const text = document.createElement("p");
        text.classList.add("header-text-content");
        text.textContent = 'The Inn at the Crossroads';

        div.append(text);
        return div;
    }

    function headerList() {
        const headDiv = headerDiv();
        const headText = headerText();
        const ul = document.createElement("ul");

        const liOne = document.createElement("li");
        liOne.classList.add("header-li", 'home-li');
        const liTwo = document.createElement("li");
        liTwo.classList.add("header-li", "menu-li");
        const liThree = document.createElement("li");
        liThree.classList.add("header-li", "staff-li");

        liOne.innerHTML = "Home";
        liTwo.innerHTML = "Menu";
        liThree.innerHTML = 'Staff';

        headDiv.append(headText)
        
        ul.append(liOne, liTwo, liThree);
        headDiv.append(ul)
        content.append(headDiv)
    }

    headerList();

    return header
}

export default header 