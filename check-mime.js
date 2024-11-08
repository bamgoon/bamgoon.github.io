const mimeTypes = [
    "video/webm;codecs=vp8,opus",
    "video/webm;codecs=vp9,opus",
    "video/webm;codecs=vp8",
    "video/webm;codecs=vp9",
    "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
    "video/mp4;codecs=avc1.64001F,mp4a.40.2",
    "video/mp4;codecs=avc1.4D401E",
    "video/mp4;codecs=hvc1.1.6.L93.B0",
    "video/ogg;codecs=theora",
    "video/3gpp",
    "video/avi",
    "video/mpeg",
    "video/quicktime",
    "video/x-flv",
    "audio/webm;codecs=opus",
    "audio/webm;codecs=vorbis",
    "audio/mp3",
    "audio/mpeg",
    "audio/mp4;codecs=mp4a.40.2",
    "audio/ogg;codecs=opus",
    "audio/ogg;codecs=vorbis",
    "audio/wav",
    "audio/x-wav",
    "audio/aac",
    "audio/flac",
    "audio/L16;rate=44100",
    "audio/L16;rate=48000",
    "audio/AMR",
    "audio/AMR-WB",
    "application/vnd.apple.mpegurl",
    "application/x-mpegURL",
    "application/dash+xml",
    "application/ogg",
    "application/x-matroska"
];

function checkPlaybackSupport(mimeType) {
    const video = document.createElement("video");
    return video.canPlayType(mimeType) ? "O" : "X";
}

function checkRecordingSupport(mimeType) {
    return MediaRecorder.isTypeSupported(mimeType) ? "O" : "X";
}

function displayResults() {
    const resultDiv = document.getElementById("result");
    let resultHTML = "<table><tr><th>번호</th><th>MIME Type</th><th>재생 가능 여부</th><th>녹화 가능 여부</th></tr>";

    mimeTypes.forEach((mimeType, index) => {
        const playback = checkPlaybackSupport(mimeType);
        const recording = checkRecordingSupport(mimeType);
        
        const playbackClass = playback === "O" ? "supported" : "unsupported";
        const recordingClass = recording === "O" ? "supported" : "unsupported";
        
        resultHTML += `<tr><td>${index + 1}</td><td>${mimeType}</td><td class="${playbackClass}">${playback}</td><td class="${recordingClass}">${recording}</td></tr>`;
    });

    resultHTML += "</table>";
    resultDiv.innerHTML = resultHTML;
}

window.onload = displayResults;
