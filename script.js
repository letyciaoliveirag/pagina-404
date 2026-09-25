window.addEventListener("load", () => {
    const video = document.createElement("video");
    const divVideo = document.querySelector(".divVideo");

    console.log(video);

    video.src = "assets/video-monstrinho.mp4";
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    divVideo.appendChild(video);
})





