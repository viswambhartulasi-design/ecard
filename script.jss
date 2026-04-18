// TOGGLE FORM
function toggleForm() {
    const form = document.getElementById("contactForm");

    if (form.style.display === "flex") {
        form.style.display = "none";
    } else {
        form.style.display = "flex";
    }
}

// SAVE YOUR CONTACT (vCard)
function downloadContact() {
    const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:Tulasi Viswambhar
TEL:917675969791
EMAIL:your@email.com
END:VCARD
`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "contact.vcf";
    a.click();
}

// STORE OTHER PERSON CONTACT (LOCAL STORAGE)
function saveContact() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    if (!name || !phone) {
        alert("Enter all details");
        return;
    }

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.push({ name, phone });

    localStorage.setItem("contacts", JSON.stringify(contacts));

    alert("Contact saved!");

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}