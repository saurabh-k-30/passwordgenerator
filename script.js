document.addEventListener('DOMContentLoaded', function () {
    let passwordInput = document.getElementById('passwordText');

    document.querySelector('#btn').addEventListener('click', () => {
        let password = generatePassword();
        // console.log("Generated Password: " + password);

        // Set the generated password as the value of the input field
        passwordInput.value = password;
    });

    function generatePassword() {
        let pass = "";
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

        for (let i = 0; i < 8; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }

        return pass;
    }
});
