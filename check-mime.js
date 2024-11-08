const mimeTypes = [
    "video/webm;codecs=vp8,opus",
    "video/webm;codecs=vp9,opus",
    "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
    "audio/webm;codecs=opus",
    "audio/mp3",
];

function checkPlaybackSupport(mimeType) {
    const video = document.createElement("video");
    return video.canPlayType(mimeType) ? "지원" : "미지원";
}

function checkRecordingSupport(mimeType) {
    return MediaRecorder.isTypeSupported(mimeType) ? "지원" : "미지원";
}

function displayResults() {
    const resultDiv = document.getElementById("result");
    let resultHTML = "<table><tr><th>MIME Type</th><th>재생 가능 여부</th><th>녹화 가능 여부</th></tr>";

    mimeTypes.forEach((mimeType) => {
        const playback = checkPlaybackSupport(mimeType);
        const recording = checkRecordingSupport(mimeType);
        resultHTML += `<tr><td>${mimeType}</td><td>${playback}</td><td>${recording}</td></tr>`;
    });

    resultHTML += "</table>";
    resultDiv.innerHTML = resultHTML;
}

window.onload = displayResults;
