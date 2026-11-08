function randomItems(list) {
    let index = Math.floor(Math.random() * list.length);
    return list[index];
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function fillContact() {
    let firstNames = ["Sara", "Youssef", "Amine", "Lina", "Omar", "Nadia"];
    let lastNames = ["Bennani", "El Idrissi", "Alaoui", "Tazi", "Berrada", "Chraibi"];
    let subjects = ["question", "support", "feedback"];
    let messages = [
        "Hello, I would like more information about your services.",
        "I have a problem with my order, can you help me?",
        "Great website, thank you for your work!",
        "Can you contact me as soon as possible?"
    ];

    let firstName = randomItems(firstNames);
    let lastName = randomItems(lastNames);
    let email = firstName.toLowerCase() + "." + lastName.toLowerCase().replace(" ", "") + randomNumber(1, 99) + "@example.com";
    let phone = "+212 6" + randomNumber(10000000, 99999999);

    document.getElementById('fullName').value = firstName + lastName;
    document.getElementById('email').value = email
    document.getElementById('phone').value = phone
    document.getElementById('subject').value = randomItems(subjects);
    document.getElementById('message').value = randomItems(messages);
}
document.getElementById('fillbtn').addEventListener('click', fillContact);