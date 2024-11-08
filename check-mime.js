const mimeTypes = [
    // WebM Video
    "video/webm;codecs=vp8,opus",
    "video/webm;codecs=vp9,opus",
    "video/webm;codecs=vp8",
    "video/webm;codecs=vp9",
    
    // MP4 Video
    "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
    "video/mp4;codecs=avc1.64001F,mp4a.40.2",
    "video/mp4;codecs=avc1.4D401E",
    "video/mp4;codecs=hvc1.1.6.L93.B0",  // H.265 / HEVC
    
    // Ogg Video
    "video/ogg;codecs=theora",
    
    // 3GP Video
    "video/3gpp",
    
    // AVI Video
    "video/avi",
    
    // MPEG Video
    "video/mpeg",
    
    // QuickTime Video
    "video/quicktime",
    
    // FLV Video
    "video/x-flv",
    
    // WebM Audio
    "audio/webm;codecs=opus",
    "audio/webm;codecs=vorbis",
    
    // MP3 Audio
    "audio/mp3",
    "audio/mpeg",
    
    // MP4 Audio
    "audio/mp4;codecs=mp4a.40.2",
    
    // Ogg Audio
    "audio/ogg;codecs=opus",
    "audio/ogg;codecs=vorbis",
    
    // WAV Audio
    "audio/wav",
    "audio/x-wav",
    
    // AAC Audio
    "audio/aac",
    
    // FLAC Audio
    "audio/flac",
    
    // PCM Audio
    "audio/L16;rate=44100",
    "audio/L16;rate=48000",
    
    // AMR Audio
    "audio/AMR",
    "audio/AMR-WB",
    
    // Adaptive Bitrate Streaming Formats
    "application/vnd.apple.mpegurl",  // HLS (Apple HTTP Live Streaming)
    "application/x-mpegURL",          // Alternative HLS
    "application/dash+xml",           // MPEG-DASH
    
    // Container Formats
    "application/ogg",
    "application/x-matroska"          // Matroska
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
