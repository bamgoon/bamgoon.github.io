const mimeGroups = {
    "WebM Video": [
        "video/webm;codecs=vp8,opus",
        "video/webm;codecs=vp9,opus",
        "video/webm;codecs=vp8",
        "video/webm;codecs=vp9"
    ],
    "MP4 Video": [
        "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
        "video/mp4;codecs=avc1.64001F,mp4a.40.2",
        "video/mp4;codecs=avc1.4D401E",
        "video/mp4;codecs=hvc1.1.6.L93.B0"
    ],
    "Ogg Video": [
        "video/ogg;codecs=theora"
    ],
    "Other Video": [
        "video/3gpp",
        "video/avi",
        "video/mpeg",
        "video/quicktime",
        "video/x-flv"
    ],
    "WebM Audio": [
        "audio/webm;codecs=opus",
        "audio/webm;codecs=vorbis"
    ],
    "MP3 Audio": [
        "audio/mp3",
        "audio/mpeg"
    ],
    "MP4 Audio": [
        "audio/mp4;codecs=mp4a.40.2"
    ],
    "Ogg Audio": [
        "audio/ogg;codecs=opus",
        "audio/ogg;codecs=vorbis"
    ],
    "Other Audio": [
        "audio/wav",
        "audio/x-wav",
        "audio/aac",
        "audio/flac",
        "audio/L16;rate=44100",
        "audio/L16;rate=48000",
        "audio/AMR",
        "audio/AMR-WB"
    ],
    "Streaming Formats": [
        "application/vnd.apple.mpegurl",
        "application/x-mpegURL",
        "application/dash+xml"
    ],
    "Container Formats": [
        "application/ogg",
        "application/x-matroska"
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

            groupHTML += `<tr>
                <td data-label="번호">${index + 1}</td>
                <td data-label="MIME Type">${mimeType}</td>
                <td data-label="재생 가능 여부" class="${playbackClass}">${playback}</td>
                <td data-label="녹화 가능 여부" class="${recordingClass}">${recording}</td>
            </tr>`;
        });

        groupHTML += "</table>";
        resultDiv.innerHTML += groupHTML;
    });
}

window.onload = displayResults;
