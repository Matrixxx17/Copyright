# 🎬 LictrAI - The AI-Powered Copyright & Licensing Compliance Assistant for Content Creators

This Chrome Extension helps content creators (e.g., YouTubers, OTT platforms like Aha) detect copyright risks in their videos before publishing. It uses AI to analyze audio, video, and text from uploaded content, ensuring licensing compliance and reducing legal risks.

Built using Google Cloud services like Vertex AI, Google Cloud Functions, and Google Video Intelligence, and developed using Google IDX for rapid iteration.

---

## 🚀 Features

- 🔍 Automated detection of copyrighted audio, video, and textual content
- 🧠 AI-driven real-time content analysis before upload
- 📄 Auto-extract contract/license metadata via NLP (for enterprise use)
- 📈 Dashboard to track flagged content and compliance history
- 🚨 Real-time alerts with recommendations to replace risky content

---

## 🧱 Tech Stack

### 🧩 Chrome Extension

- Plasmo Framework + React.js — Extension scaffolding & UI
- TailwindCSS — UI Styling

### 🧠 AI & ML (Vertex AI + Google Services)

| Component                     | Tool / API                                                                 |
|------------------------------|----------------------------------------------------------------------------|
| Audio Fingerprinting          | Vertex AI Custom Model / Audd.io (optional fallback)                      |
| Speech-to-Text                | Google Speech-to-Text API                                                 |
| On-Screen Text Extraction     | Tesseract.js (OCR)                                                        |
| Text Plagiarism Detection     | PlagiarismCheck.org API (or free LLM-based semantic check via Vertex AI) |
| Scene Detection               | Google Cloud Video Intelligence API                                       |
| Contract Analysis (NLP)       | Vertex AI PaLM 2 / Gemini Model + Cloud Document AI (optional)           |

### ⚙️ Backend & Infra

| Component                     | Service                                                                  |
|------------------------------|--------------------------------------------------------------------------|
| ML Inference / Trigger        | Google Cloud Functions (No billing if within free tier)                  |
| Content Matching DB           | Firebase Realtime DB or Firestore (Free Tier)                            |
| Authentication (if needed)    | Firebase Auth                                                            |
| Dashboard / Analytics         | React + Firebase + Chart.js / Recharts                                   |

### 🧪 Development Environment

- Google IDX — Dev environment for building extension backend (Node.js / Python) and deploying ML services
- Vertex AI Studio — Model training, prediction, and fine-tuning
- GitHub — Version control & CI/CD

---

## 📎 APIs Used

- [Google Cloud Speech-to-Text API](https://cloud.google.com/speech-to-text)
- [Google Video Intelligence API](https://cloud.google.com/video-intelligence)
- [Tesseract.js (OCR)](https://github.com/naptha/tesseract.js)
- [Vertex AI (PaLM / Gemini Models)](https://cloud.google.com/vertex-ai)
- [PlagiarismCheck.org API](https://plagiarismcheck.org/)
- [YouTube Data API](https://developers.google.com/youtube/) (for optional Content ID lookup)

---

## 🧑‍💻 How It Works

1. 🖥️ User visits YouTube Studio or other upload platform
2. 🧠 Our extension intercepts the upload process and:
   - Extracts audio → checks for music rights using ML
   - Extracts text from video → checks for lyrics/scripts using OCR + NLP
   - Extracts spoken audio → converts to text → checks for plagiarism
   - Analyzes video frames for known copyrighted visuals
3. 📊 AI processes content using Vertex AI and Google APIs
4. ⚠️ Shows report:
   - ✅ Safe
   - ⚠️ Warning
   - ❌ Blocked / Replace Required

---

## 📊 Rights Management Dashboard (Planned)

- Visual tracker for:
  - Active licenses
  - Content compliance status
  - Geo & time restrictions
- Admin login to upload new contract rules (enterprise mode)

---

## 🤝 Team

| Name         | Role                         |
|--------------|------------------------------|
| Your Name    | Full Stack / AI Developer    |
| Teammate 1   | UI/UX Designer               |
| Teammate 2   | Cloud & Infra Specialist     |
| Teammate 3   | API Integrator / QA Tester   |

---
