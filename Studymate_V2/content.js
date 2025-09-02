// Content script for StudyMate extension

// Listen for messages from popup or background
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Example: show overlay or highlight
  if (message.action === 'showOverlay') {
    showFocusOverlay(message.payload);
    sendResponse({ success: true });
  }
});

// Example overlay function
function showFocusOverlay(text) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position:fixed;top:0;left:0;width:100vw;height:100vh;
    background:rgba(32,32,64,0.85);color:#fff;z-index:99999;
    display:flex;align-items:center;justify-content:center;font-size:2em;
  `;
  overlay.textContent = text || 'Stay Focused!';
  document.body.appendChild(overlay);
  setTimeout(() => overlay.remove(), 3000);
}