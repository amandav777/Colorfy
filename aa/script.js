function togglePassword() {
    const senhaInput = document.getElementById("senha");
    const senhaToggle = document.querySelector(".password-toggle");

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }
}