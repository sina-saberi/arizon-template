(() => {
    const tabContainer = document.querySelector(".tab-container");
    if (!tabContainer) return;
    const buttons = tabContainer.querySelectorAll(".tab-button");
    const content = tabContainer.querySelectorAll(".tab-content");

    if (buttons && content) {
        buttons.forEach((item, i) => {
            item.addEventListener("click", (e) => {
                const target = e.target as HTMLDivElement;
                const index = parseInt(target.dataset.tab) || i;
                buttons.forEach(x => {
                    x.ariaSelected = "false";
                })
                target.ariaSelected = "true";

                const selectedTab = content.item(index);
                content.forEach(x => {
                    x.classList.remove("block", "flex");
                    x.classList.add("hidden");
                })
                if (selectedTab) {
                    selectedTab.classList.remove("hidden");
                    selectedTab.classList.add("block");
                }
            });
        });


        content.forEach((x: HTMLDivElement) => {
            x.classList.add("hidden");
            x.classList.remove("block", "flex");
            buttons.forEach(x => x.ariaSelected = "false");
        });

        const first = content.item(0);
        if (first) {
            first.classList.add("block");
            first.classList.remove("hidden");
            const firstButton = buttons.item(0);
            firstButton.ariaSelected = "true";
        } 
    }
})()