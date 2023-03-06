// Створити класс  Person class з властивостями name, age, і occupation.
// Створити в  Person  метод introduction котрий повертає текст "Hi, my name is John. I'm 25 years old and I work as a software engineer."
// Створіть класс Form котрий в конструкторі очікує html форму.

// В Form створіть метод handleSubmit котрий дістає значення з полів форми, та створією нового представника класу Person , і виводить представлення себе( introduction) в  DOM.
// Коли по html формі відбувся submit подія викликайте метод handleSubmit

// Форма повинна мати поля name, age, і occupation, та кнопку підтвердження.
// Усі поля обов'язкові до заповнення, мінімальна довжина імені 10 символів,
// Після успішного додавання користувача форма повинна очиститись і знову бути готова до роботи


class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    introduction() {
        return `Hi, my name is ${this.name}. I'm ${this.age} years old and I work as a ${this.occupation}.`
    }
}

class Form {
    constructor(formEl) {
        this.formEl = formEl
        this.nameInput = formEl.querySelector('#name');
        this.ageInput = formEl.querySelector('#age');
        this.occupationInput = formEl.querySelector('#occupation');
        formEl.addEventListener('submit',event => this.handleSubmit(event));
    }

    handleSubmit(event) {
        event.preventDefault()
        const person = new Person(`${this.nameInput.value}`, `${this.ageInput.value}`, `${this.occupationInput.value}`);
        const paragraph = document.getElementById('text');
        paragraph.innerText = person.introduction()
        this.formEl.reset()
    }
}

const form = document.getElementById('form')
const formMain = new Form(form)

