// app.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. print cv / download easter egg emoji rain
  const downloadCvBtn = document.getElementById('download-cv-btn');
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', () => {
      triggerEmojiRain();
    });
  }

  function triggerEmojiRain() {
    const emojis = ['💖', '🌸', '💻', '✨', '✿', '★', '💻'];
    const container = document.body;
    
    for (let i = 0; i < 35; i++) {
      const emoji = document.createElement('div');
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.position = 'fixed';
      emoji.style.left = Math.random() * 100 + 'vw';
      emoji.style.top = '-50px';
      emoji.style.fontSize = Math.random() * 20 + 15 + 'px';
      emoji.style.pointerEvents = 'none';
      emoji.style.zIndex = '9999';
      emoji.style.transform = `rotate(${Math.random() * 360}deg)`;
      emoji.style.transition = 'transform 2s linear, top 2s cubic-bezier(0.1, 0.8, 0.3, 1)';
      
      container.appendChild(emoji);
      
      // force repaint and animate
      setTimeout(() => {
        emoji.style.top = '105vh';
        emoji.style.transform = `rotate(${Math.random() * 720 - 360}deg)`;
      }, 50);
      
      // clean up
      setTimeout(() => {
        emoji.remove();
      }, 2500);
    }
  }

  // 2. console easter egg for nosey developers
  console.log(
    '%c✿ mahnoor nadeem portfolio ✿', 
    'color: #f4abbb; font-size: 20px; font-weight: bold; font-family: monospace; text-shadow: 2px 2px #2b1f22;'
  );
  console.log(
    '%cinspecting my code? cheeky. i like that.', 
    'color: #e58c9f; font-size: 14px; font-style: italic;'
  );
  console.log(
    'hello recruiter or fellow developer. yes, everything is styled in lowercase. yes, i actually like cybersecurity. let\'s connect on linkedin!'
  );
});
