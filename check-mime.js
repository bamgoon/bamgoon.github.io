const mimeGroups = {
    "WebM Video": [
        "video/webm;codecs=vp8,opus",
        "video/webm;codecs=vp9,opus",
        "video/webm;codecs=vp8",
        "video/webm;codecs=vp9",
        "video/webm;codecs=vp10",
        "video/webm;codecs=av1,opus"
    ],
    "MP4 Video": [
        "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
        "video/mp4;codecs=avc1.64001F,mp4a.40.2",
        "video/mp4;codecs=avc1.4D401E",
        "video/mp4;codecs=hvc1.1.6.L93.B0",
        "video/mp4;codecs=av01.0.05M.08"
    ],
    "Ogg Video": [
        "video/ogg;codecs=theora"
    ],
    "Other Video": [
        "video/3gpp",
        "video/avi",
        "video/mpeg",
        "video/quicktime",
        "video/x-flv",
        "video/x-matroska;codecs=avc1,opus",
        "video/x-msvideo"
    ],
    "WebM Audio": [
        "audio/webm;codecs=opus",
        "audio/webm;codecs=vorbis",
        "audio/webm;codecs=pcm"
    ],
    "MP3 Audio": [
        "audio/mp3",
        "audio/mpeg"
    ],
    "MP4 Audio": [
        "audio/mp4;codecs=mp4a.40.2",
        "audio/mp4;codecs=aac"
    ],
    "Ogg Audio": [
        "audio/ogg;codecs=opus",
        "audio/ogg;codecs=vorbis",
        "audio/ogg;codecs=flac"
    ],
    "Other Audio": [
        "audio/wav",
        "audio/x-wav",
        "audio/aac",
        "audio/flac",
        "audio/L16;rate=44100",
        "audio/L16;rate=48000",
        "audio/AMR",
        "audio/AMR-WB",
        "audio/x-ms-wma"
    ],
    "Streaming Formats": [
        "application/vnd.apple.mpegurl",
        "application/x-mpegURL",
        "application/dash+xml",
        "application/vnd.ms-sstr+xml"
    ],
    "Container Formats": [
        "application/ogg",
        "application/x-matroska",
        "application/x-quicktimeplayer",
        "application/x-shockwave-flash"
    ]
};

function checkPlaybackSupport(mimeType) {
    const video = document.createElement("video");
    return video.canPlayType(mimeType) ? "O" : "X";
}

function checkRecordingSupport(mimeType) {
    return MediaRecorder.isTypeSupported(mimeType) ? "O" : "X";
}

function displayResults() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // 초기화

    Object.keys(mimeGroups).forEach((group) => {
        const mimeTypes = mimeGroups[group];
        let groupHTML = `<h2>${group}</h2>`;
        groupHTML += "<table><tr><th>번호</th><th>MIME Type</th><th>재생 가능 여부</th><th>녹화 가능 여부</th></tr>";

        mimeTypes.forEach((mimeType, index) => {
            const playback = checkPlaybackSupport(mimeType);
            const recording = checkRecordingSupport(mimeType);

            const playbackClass = playback === "O" ? "supported" : "unsupported";
            const recordingClass = recording === "O" ? "supported" : "unsupported";

            groupHTML += `<tr><td>${index + 1}</td><td>${mimeType}</td><td class="${playbackClass}">${playback}</td><td class="${recordingClass}">${recording}</td></tr>`;
        });

        groupHTML += "</table>";
        resultDiv.innerHTML += groupHTML;
    });
}

window.onload = displayResults;
