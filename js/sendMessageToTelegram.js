const TOKEN = "6221091346:AAHGF7saVRZPyqGLovANeIYffmU0P_dqBbE";
const CHAT_ID = "-1001557781870";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("formSent").addEventListener("submit", function (event) {
    event.preventDefault();

    let text = `Заявка з сайту!\n`;
    text += `Відправник: ${this.name.value}\n`;
    text += `Номер телефону: ${this.phone.value}\n`;
    text += `Пошта: ${this.email.value}\n`;
    text += `Повідомлення: ${this.message.value}`;

    // Send message to Telegram
    if (ifFormIsNotEmpty() && ifEmailIsCorrect()) {
        const data = {
            chat_id: CHAT_ID,
            text: text
        };
        fetch(URI_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    alert("Повідомлення успішно відправлено");
                    document.getElementById("formSent").reset();
                } else {
                    alert("Пимилка при надсиланні повідомлення, спробуйте ще раз");
                }
            })
            .catch(error => {
                alert("Виникла помилка: " + error.message);
            });
    }

});

function ifFormIsNotEmpty() {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.value === '') {
            formAddError(input);
            error++;
        }
    }
    if (error != 0) {
        alert('Заповніть всі обов\'язкові поля');
        return false;
    }

    return true;
}

function ifEmailIsCorrect() {
    let input = document.querySelector('._email');
    formRemoveError(input);
    isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    if (!isValidEmail) {
        console.log("email not valid");
        formAddError(input);
        alert("Будь ласка введіть правильний email");
        return false;
    }
    return true;
}

function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}

function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}


