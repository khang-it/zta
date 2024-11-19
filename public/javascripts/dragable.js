document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const columns = document.querySelectorAll(".column");

    let draggedCard = null;

    // Khi bắt đầu kéo thẻ
    cards.forEach((card) => {
        card.addEventListener("dragstart", (e) => {
            draggedCard = card;
            setTimeout(() => (card.style.display = "none"), 0);
        });

        card.addEventListener("dragend", (e) => {
            setTimeout(() => (card.style.display = "block"), 0);
            draggedCard = null;
        });
    });

    // Xử lý sự kiện thả vào cột
    columns.forEach((column) => {
        column.addEventListener("dragover", (e) => {
            e.preventDefault(); // Cho phép thả
        });

        column.addEventListener("dragenter", (e) => {
            e.preventDefault();
            column.style.backgroundColor = "#f0f0f0";
        });

        column.addEventListener("dragleave", () => {
            column.style.backgroundColor = "";
        });

        column.addEventListener("drop", (e) => {
            column.style.backgroundColor = "";
            if (draggedCard) {
                column.appendChild(draggedCard);
            }
        });
    });
});
