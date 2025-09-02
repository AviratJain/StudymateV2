// StudyMate Chrome Extension Background Script

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Open popup programmatically
  if (message.action === 'openPopup') {
    chrome.action.openPopup();
    return true;
  }

  // Example: AI action stub (expand for real API integration)
  if (message.action === 'aiRequest') {
    import('./modalService.js').then(({ handleAIRequest }) => {
      handleAIRequest(message.payload)
        .then(response => sendResponse(response))
        .catch(error => sendResponse({ error: error.message }));
    });
    return true; // Indicates async sendResponse
  }

  // Add other actions as needed
  return false;
});