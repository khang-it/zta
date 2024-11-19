document.addEventListener("DOMContentLoaded", () => {
    let isResizing = false;
    let currentSplitter = null;

    document.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("splitter")) {
            isResizing = true;
            currentSplitter = e.target;
            document.body.style.cursor = "col-resize";
        }
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing || !currentSplitter) return;

        const previousElement = currentSplitter.previousElementSibling;
        const nextElement = currentSplitter.nextElementSibling;

        if (!previousElement || !nextElement) return;

        const newWidth = e.clientX - previousElement.getBoundingClientRect().left;
        const minWidth = parseInt(previousElement.style.minWidth || "0", 10);
        const maxWidth = parseInt(previousElement.style.maxWidth || "1000", 10);

        if (newWidth >= minWidth && newWidth <= maxWidth) {
            previousElement.style.width = `${newWidth}px`;
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
