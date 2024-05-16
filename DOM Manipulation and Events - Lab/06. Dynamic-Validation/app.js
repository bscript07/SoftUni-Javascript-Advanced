function validate() {
    const input = document.getElementById(`email`);
    const regex = new RegExp("[a-z]+@[a-z]+.[a-z]+");

    input.addEventListener("change", validation);

    function validation(event) {
        if (regex.test(input.value)) {
            input.className = "";
        } else {
            input.className = "error"
        }
    }
}