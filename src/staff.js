const staff = function() {
  const content = document.getElementById("content");
  
  const staffDiv = () => {
    const div = document.createElement("div");
    // div.setAttribute("id", "staff-main");
    div.classList.add("staff-main", "hidden");
    
    return div
  }

  const mainTop = () => {
    const div = document.createElement("div");
    div.classList.add("staff-top");

    const topText = document.createElement("p");
    topText.textContent = 'Our Staff';
    
    div.append(topText)
    return div
  }

  const ourStaffText = () => {
    const p = document.createElement("div");
    p.classList.add("our-staff");
    p.textContent = 'Our Staff'



    return p;
  }

  const person = (imgSrc, firstName, title) => {
    const div = document.createElement("div");
    div.classList.add("staff-card");

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
    textDiv.append(pos);
    div.append(textDiv)
    div.append(image);

    return div;
  }

  function createStaff() {
      const conDiv = staffDiv();
      content.append(conDiv);

      const ourStaff = mainTop();
      const staffText = ourStaffText();

      const owner = person("../dist/assets/owner.jpg", 'Hot Pie', 'Owner')
      const manager = person("../dist/assets/manager.jpg", 'Arya', 'Manager')
      const waiter = person("../dist/assets/waiter.png", 'Gendry ?', 'Waiter')
  
      conDiv.append(staffText);
      conDiv.append(owner);
      conDiv.append(manager);
      conDiv.append(waiter);
    }

  createStaff();

  return staff
}

export default staff;