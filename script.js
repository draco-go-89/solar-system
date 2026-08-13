const music = document.getElementById("bgMusic");

document.addEventListener("click", () => { 
    music.play();
}, { once: true }); // The { once: true } option ensures that the event listener is removed after the first click, so the music won't restart on subsequent clicks.