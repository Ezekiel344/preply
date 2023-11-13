document.addEventListener("DOMContentLoaded", function() {
    const audioElements = document.querySelectorAll("#audio-player audio");

    audioElements.forEach(function(audio) {
        audio.addEventListener("play", function() {
            pauseOtherAudios(audio);
        });
    });

    function pauseOtherAudios(currentAudio) {
        audioElements.forEach(function(audio) {
            if (audio !== currentAudio) {
                audio.pause();
            }
        });
    }
});
