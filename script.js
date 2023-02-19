const thumbnailSwapper = function () {
    document.querySelectorAll("#dismissible").forEach(function (thumbnail) {
        if (
            ["style-scope ytd-rich-grid-media", "style-scope ytd-grid-video-renderer"].includes(thumbnail.className) &&
            thumbnail.childElementCount === 3
        ) {
            thumbnail.id = "addedIframe";

            let vid = document.createElement("iframe");
            vid.id = "playbackView";
            vid.height = "100%";
            vid.width = "100%";
            vid.src = `https://www.youtube.com/embed/${thumbnail.children[0].children[0].href.slice(32)}`;
            vid.frameborder = "0";
            vid.style = "display: none";

            thumbnail.prepend(vid);

            thumbnail.children[1].onmouseover = function () {
                let videoLink = this.parentElement.children[0].src;

                if (!sessionStorage.getItem(videoLink)) {
                    sessionStorage.setItem(videoLink, 0);
                }

                this.style = "display: none";

                this.parentElement.children[0].style = "";
                this.parentElement.children[0].src += `?autoplay=1&start=${Math.trunc(
                    sessionStorage.getItem(videoLink)
                )}`;
            };

            thumbnail.children[0].onmouseout = function () {
                let videoLink = this.src.split("?")[0];

                sessionStorage.setItem(videoLink, this.contentDocument.querySelector("video").currentTime);

                this.src = videoLink;
                this.style = "display: none";
                this.parentElement.children[1].style = "";
            };
        }
    });
};

const changeSpeed = function () {
    const ytVideo = document.querySelector("video");

    const speedInput = document.createElement("input");
    speedInput.setAttribute("type", "number");
    speedInput.setAttribute("value", "1");
    speedInput.setAttribute("min", "0.05");
    speedInput.setAttribute("max", "16");
    speedInput.setAttribute("step", "0.05");
    speedInput.setAttribute("id", "speedInput");
    speedInput.style =
        "width: 50px; height: 25px; border: 0; padding: 0; margin-left: 10px; margin-block: auto; text-align: center; background-color: rgb(240, 240, 240)";

    speedInput.addEventListener("click", function () {
        ytVideo.playbackRate = this.value;
        this.blur();
    });

    document.querySelector(".ytp-left-controls").appendChild(speedInput);

    document.addEventListener("keydown", function (k) {
        if (k.key === "ArrowUp" && k.ctrlKey) {
            speedInput.stepUp();
            ytVideo.playbackRate = speedInput.value;
            ytVideo.parentElement.parentElement.classList.remove("ytp-autohide");
        } else if (k.key === "ArrowDown" && k.ctrlKey) {
            speedInput.stepDown();
            ytVideo.playbackRate = speedInput.value;
            ytVideo.parentElement.parentElement.classList.remove("ytp-autohide");
        }
    });

    setInterval(() => {
        if (ytVideo.playbackRate !== speedInput.value) {
            ytVideo.playbackRate = speedInput.value;
        }
    }, 1000);
};

const adBlocker = function () {
    setInterval(() => {
        if (document.querySelector(".ytp-ad-persistent-progress-bar-container").style.display === "") {
            document.querySelector("video").playbackRate = 16;
            setTimeout(() => {
                try {
                    document.querySelector(".ytp-ad-skip-button.ytp-button").click();
                } catch (e) {}
            }, 200);
            console.log("Ad Cleared!");
        }
    }, 100);
};

if (location.pathname === "/watch") {
    window.onpageshow = function () {
        changeSpeed();
        // adBlocker();
    };
} else if ((location.pathname === "/") | location.pathname.includes("/videos")) {
    setInterval(thumbnailSwapper, 5000);
}
