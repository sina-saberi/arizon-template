(() => {
    const triggerId = "arizon-menu-trigger";
    const targetId = "arizon-menu";
    const button = document.getElementById(triggerId);
    const menu = document.getElementById(targetId);
    const close = document.querySelector(`#${targetId} #close`);

    if (!button || !menu || !close) return;

    button.addEventListener("click", () => {
        menu.ariaDisabled = "false";
    });

    close.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.ariaDisabled = "true";
    });

    document.addEventListener("click", (e) => {
        const eventTarget = e.target as HTMLElement | null;
        if (!eventTarget?.closest(`#${targetId}`) && !eventTarget?.closest(`#${triggerId}`)) {
            menu.ariaDisabled = "true";
        }
    });
})()