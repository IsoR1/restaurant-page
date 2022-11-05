const staff = function() {
    const content = document.getElementById("content");
    
    const staffDiv = () => {
      const div = document.createElement("div");
      div.classList.add("staff-main");
      
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

    const person = (imgSrc, firstName, title, location) => {
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

      const loc = document.createElement("p");
      loc.classList.add("location");
      loc.textContent = location;

      textDiv.append(name);
      textDiv.append(pos);
      textDiv.append(loc);
      div.append(textDiv)
      div.append(image);

      return div;
    }

    function createStaff() {
        const conDiv = staffDiv();
        content.append(conDiv);

        const ourStaff = mainTop();
        const staffText = ourStaff();

        const owner = person("assets/owner.jpg", 'Hot Pie', 'Owner', 'The Crossroads')
        const manager = person("assets/manager.jpg", 'Arya', 'Manager', 'Winterfell / The Crossroads')
        const waiter = person("assets/waiter.png", 'Gendry ?', 'Waiter', 'Flea Bottom / The Crossroads')
    
        conDiv.append(staffText);
        conDiv.append(owner);
        conDiv.append(manager);
        conDiv.append(waiter);
      }

    createStaff();

    return staff
}

export default staff;