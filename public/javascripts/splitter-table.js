document.addEventListener("DOMContentLoaded", () => {
    let isResizing = false;
    let currentSplitter = null;

    document.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("splitter-table")) {
            isResizing = true;
            currentSplitter = e.target;
            document.body.style.cursor = "col-resize";
        }
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing || !currentSplitter) return;

        const previousCell = currentSplitter.previousElementSibling;
        const nextCell = currentSplitter.nextElementSibling;

        if (!previousCell || !nextCell) return;

        const newWidth = e.clientX - previousCell.getBoundingClientRect().left;
        const minWidth = 50;
        const maxWidth = 500;

        if (newWidth >= minWidth && newWidth <= maxWidth) {
            previousCell.style.flex = `0 0 ${newWidth}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        if (isResizing) {
            isResizing = false;
            document.body.style.cursor = "default";
            currentSplitter = null;
        }
    });
});
