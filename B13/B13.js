const video = document.getElementById("video");
const timeText = document.getElementById("timeText");
const playBtn = document.getElementById("playBtn");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const muteBtn = document.getElementById("muteBtn");

// 초를 mm:ss 로
function fmt(sec) {
    return new Date(sec * 1000).toISOString().slice(14, 19);
}

// 영상 길이는 메타데이터를 읽은 뒤에 알 수 있음
video.ontimeupdate = video.onloadedmetadata = () => {
    timeText.textContent = `${fmt(video.currentTime)} / ${fmt(video.duration)}`;
}

// 버튼 글자는 재생 상태가 바뀔 때 알아서 따라감
video.onplay = video.onpause = () => {
    playBtn.textContent = video.paused ? "▶ 재생" : "⏸ 일시정지";
}

playBtn.onclick = () => video.paused ? video.play() : video.pause();
backBtn.onclick = () => video.currentTime -= 10;
forwardBtn.onclick = () => video.currentTime += 10;

muteBtn.onclick = () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? "🔇 음소거 해제" : "🔊 음소거";
}
