const buttons = document.querySelectorAll(".boton-superior");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        const block = this.closest(".character-block");
        block.querySelectorAll(".character-tab").forEach(tab => {
            tab.classList.remove("active");
        });
        const selected = this.dataset.tab;
        block.querySelector("." + selected).classList.add("active");
    });
});