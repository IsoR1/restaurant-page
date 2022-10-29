const header = function() {
    const content = document.getElementById("content");
    console.log("s")
    const headerDiv = () => {
        const div = document.createElement("div");
        div.classList.add("header-div");
        return div;
    }

    function headerList() {
        const headDiv = headerDiv();
        const ul = document.createElement("ul");

        const liOne = document.createElement("li")
        liOne.classList.add("header-li")
        const liTwo = document.createElement("li")
        liTwo.classList.add("header-li")
        const liThree = document.createElement("li")
        liThree.classList.add("header-li")

        liOne.innerHTML = "Home";
        liTwo.innerHTML = "Menu";
        liThree.innerHTML = 'Contact';

        ul.append(liOne, liTwo, liThree);
        headDiv.append(ul)
        content.append(headDiv)
    }

    headerList();

    return header
}

export default header 