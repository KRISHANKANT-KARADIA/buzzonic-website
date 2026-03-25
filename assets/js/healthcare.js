const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // hide all content + remove animation
        contents.forEach(c => {
            c.classList.add("hidden");
            c.classList.remove("show");
        });

        // show selected content
        const id = btn.getAttribute("data-tab");
        const activeContent = document.getElementById(id);

        activeContent.classList.remove("hidden");

        // animation trigger
        setTimeout(() => {
            activeContent.classList.add("show");
        }, 50);

        // reset all buttons
        buttons.forEach(b => {
            b.classList.remove(
                "bg-gradient-to-r",
                "from-cyan-500/20",
                "to-blue-500/20",
                "border-cyan-400"
            );
            b.classList.add("bg-white/5", "border-transparent");

            // SVG reset
            const svg = b.querySelector("svg");
            if (svg) {
                svg.classList.remove("text-cyan-400");
                svg.classList.add("text-gray-400");
            }
        });

        // activate clicked button
        btn.classList.add(
            "bg-gradient-to-r",
            "from-cyan-500/20",
            "to-blue-500/20",
            "border-cyan-400"
        );
        btn.classList.remove("border-transparent");

        // SVG active
        const activeSvg = btn.querySelector("svg");
        if (activeSvg) {
            activeSvg.classList.remove("text-gray-400");
            activeSvg.classList.add("text-cyan-400");
        }

    });
});