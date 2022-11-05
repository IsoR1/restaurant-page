const footer = function() {
    const content = document.getElementById("content");

    const createFooterContent = () => {
        const div = document.createElement("div");
        div.classList.add("footer");

        const text = document.createElement("p");
        text.classList.add("footer-text");
        text.textContent = 'Created by Ramiz';

        div.append(text);
        return div;
    }

    function createFooter() {
        const footerContent = createFooterContent();
        content.append(footerContent);
    }

    createFooter();

    return footer
}

export default footer 