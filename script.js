const form = document.getElementById("contactForm");
const contactList = document.getElementById("contactList");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;

    const contact = document.createElement("div");

    contact.classList.add("contact");

    contact.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Last Name:</strong> ${lastname}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <button class="delete-btn">Delete</button>
    `;

    contact.querySelector(".delete-btn")
    .addEventListener("click", () => {
        contact.remove();
    });

    contactList.appendChild(contact);

    form.reset();
});