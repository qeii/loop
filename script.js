// Create floating hearts
const container = document.getElementById('animation-container');
const heartCount = 20;

for (let i = 0; i < heartCount; i++) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDelay = `${Math.random() * 5}s`;
  container.appendChild(heart);
}

// Export as MP4
document.getElementById('export-btn').addEventListener('click', async () => {
  const { createFFmpeg, fetchFile } = FFmpeg;
  const ffmpeg = createFFmpeg({ log: true });
  
  alert("Exporting... (This may take ~30 seconds)");
  await ffmpeg.load();

  const fps = 30;
  const duration = 3; // 3-second video
  const frames = [];

  // Capture frames
  for (let i = 0; i < fps * duration; i++) {
    const canvas = await html2canvas(container);
    frames.push(await fetchFile(canvas.toDataURL('image/png')));
    await new Promise(r => setTimeout(r, 1000 / fps));
  }

  // Save frames to FFmpeg
  frames.forEach((frame, i) => {
    ffmpeg.FS('writeFile', `frame_${i.toString().padStart(4, '0')}.png`, frame);
  });

  // Convert to MP4
  await ffmpeg.run(
    '-framerate', `${fps}`,
    '-i', 'frame_%04d.png',
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    'output.mp4'
  );

  // Download
  const data = ffmpeg.FS('readFile', 'output.mp4');
  const url = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = 'heart-animation.mp4';
  a.click();
});
