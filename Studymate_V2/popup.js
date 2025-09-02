// UI logic for StudyMate popup.html

document.getElementById('settings-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const apiKey = document.getElementById('apiKey').value;
  const provider = document.getElementById('provider').value;

  chrome.storage.local.set({ apiKey, provider }, function() {
    document.getElementById('save-message').textContent = "Settings saved!";
    document.getElementById('save-message').style.color = "#0ff";
    setTimeout(() => { document.getElementById('save-message').textContent = ""; }, 2000);
  });
});

// Example to send a message to background for popup open
function openPopup() {
  chrome.runtime.sendMessage({ action: "openPopup" });
}

// On load, restore settings
window.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get(['apiKey', 'provider'], function(data) {
    if (data.apiKey) document.getElementById('apiKey').value = data.apiKey;
    if (data.provider) document.getElementById('provider').value = data.provider;
  });
});