const menuLinks = [
    "Home",
    "About",
    "Menu",
    "Service",
    "Contact"
];

const ourService = [
    "Web Design",
    "Web Development",
    "Marketing",
    "Product Management",
    "Graphic Design"
];

const information = [
    "About Us",
    "Delivery Information",
    "Privacy Policy",
    "Terms & Conditions"
];

function populateSelect(selectId, options) {
    const select = document.getElementById(selectId);
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
}

populateSelect("menuLinks", menuLinks);
populateSelect("ourService", ourService);
populateSelect("information", information);

