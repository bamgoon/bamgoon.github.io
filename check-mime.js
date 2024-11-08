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
