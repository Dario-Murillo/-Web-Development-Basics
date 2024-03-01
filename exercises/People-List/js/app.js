const personas = [
    new Person("Dario", "Murillo")
];

function showPerson() {
    let text = "";
    personas.forEach(element => {
        text += `<li> ${element._nombre} ${element._apellido}</li>`;
    });
    document.getElementById("personas").innerHTML = text;
}

function addPerson() {
    const form = document.forms["formulario"];
    const name = form["name"];
    const last_name = form["last_name"];
    if (name.value != "" && last_name.value) {
        const person = new Person(name.value, last_name.value);
        personas.push(person);
        showPerson();
    }
}
