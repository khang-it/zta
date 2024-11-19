document.addEventListener("DOMContentLoaded", () => {
    const splitter = document.getElementById("splitter");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    let isResizing = false;

    splitter.addEventListener("mousedown", (e) => {
        isResizing = true;
        document.body.style.cursor = "col-resize";
        document.addEventListener("mousemove", resize);
        document.addEventListener("mouseup", stopResize);
    });

    function resize(e) {
        if (!isResizing) return;
        const sidebarWidth = e.clientX;
        const minWidth = 0;
        const maxWidth = 1000;
        console.log('clientX:', sidebarWidth, minWidth, maxWidth)

        // if (sidebarWidth > minWidth && sidebarWidth < maxWidth) {
        sidebar.style.width = `${sidebarWidth}px`;
        mainContent.style.flex = "1";
        // }
    }

    function stopResize() {
        isResizing = false;
        document.body.style.cursor = "default";
        document.removeEventListener("mousemove", resize);
        document.removeEventListener("mouseup", stopResize);
    }
});
