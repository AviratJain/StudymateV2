# StudyMate Chrome Extension

A student learning companion: summarize, flashcards, Q&A, focus overlay, and more.

## How to test locally

1. Clone this repo and make sure the following files exist in the root:
   - `manifest.json`
   - `background.js`
   - `modalService.js`
   - `content.js`
   - `popup.html`
   - `popup.js`
   - `styles.css`
   - `icons/` (with at least `icon32.png`)

2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode**
4. Click **Load unpacked** and select the StudyMate repo folder

## Usage

- Click the StudyMate extension icon in Chrome.
- Enter your AI provider API key and choose a model (OpenAI or Gemini).
- Use the extension features: summarize, flashcards, Q&A, focus overlay.

## Ready for Chrome Web Store

- Zip the folder and upload to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole).

## Customization

- Expand `modalService.js` to connect with real APIs.
- Modify `content.js` for more learning features.
- Style in `styles.css`.

---

© 2025 StudyMate by [AviratJain](https://github.com/AviratJain)