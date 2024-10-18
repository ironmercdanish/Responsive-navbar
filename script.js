        const barEle = document.querySelector(".bar button");
        const hideEle = document.querySelector(".hide");
        const closeEle = document.querySelector(".close button");

        barEle.addEventListener("click", () => {
            hideEle.style.display = "flex";
        });

        closeEle.addEventListener("click", () => {
            hideEle.style.display = "none";
        });