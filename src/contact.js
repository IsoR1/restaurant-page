const contact = function() {
    const content = document.getElementById("content");
    
    const contactDiv = () => {
      const div = document.createElement("div");
      div.classList.add("contact-main");
      
      return div
    }

    const person = (imgSrc, firstName, title) => {
      const div = document.createElement("div");
      div.classList.add("contact-card");

      const image = document.createElement("img");
      image.src = imgSrc;
      image.classList.add("person-img");

      const textDiv = document.createElement("div");
      textDiv.classList.add("person-text");

      const name = document.createElement("p");
      name.classList.add("person-name");
      name.textContent = firstName;

      const pos = document.createElement("p");
      pos.classList.add("position");
      pos.textContent = title;

      textDiv.append(name);
      textDiv.append(pos)
      // div.append(name);
      // div.append(pos)
      div.append(textDiv)
      div.append(image);

      return div;
    }

    function createContact() {
        const conDiv = contactDiv();
        content.append(conDiv);

        const owner = person("../dist/assets/owner.jpg", 'Hot Pie', 'Owner')
        const manager = person("../dist/assets/manager.jpg", 'Arya', 'Manager')
        const waiter = person("../dist/assets/waiter.png", 'Gendry ?', 'Waiter')
    
        conDiv.append(owner)
        conDiv.append(manager)
        conDiv.append(waiter)
      }

    createContact();

    return contact
}

export default contact;