<<<<<<< HEAD
# 🧘 CalmMind — Mental Wellness Platform

## Quick Start

```bash
npm install
npm start
```
Open http://localhost:3000

---

## Project Structure

```
src/
│
├── styles/
│   ├── theme.js        ← ALL colors, fonts, spacing (edit here!)
│   └── index.css       ← Global CSS + animations
│
├── data/
│   └── index.js        ← All static data (nav, features, chat messages)
│
├── components/
│   ├── layout/
│   │   ├── AppLayout.jsx   ← Sidebar + TopBar shell (wraps all app pages)
│   │   ├── Sidebar.jsx     ← Navigation sidebar with React Router NavLink
│   │   └── TopBar.jsx      ← Top header bar
│   │
│   └── ui/
│       ├── Brand.jsx       ← Logo + MeditationSVG illustration
│       ├── Button.jsx      ← Reusable button (primary/secondary/ghost)
│       ├── Card.jsx        ← Reusable card wrapper
│       ├── Badge.jsx       ← Colored badge/pill
│       └── MoodChart.jsx   ← SVG mood line chart
│
├── pages/
│   ├── Landing.jsx         ← Public landing page (/)
│   ├── Dashboard.jsx       ← Main dashboard (/dashboard)
│   ├── Chat.jsx            ← AI Chat (/chat)
│   ├── MoodTracking.jsx    ← Phase 2 (/mood)
│   ├── Journal.jsx         ← Phase 2 (/journal)
│   ├── Appointments.jsx    ← Phase 2 (/appointments)
│   ├── Settings.jsx        ← Phase 2 (/settings)
│   └── NotFound.jsx        ← 404 page
│
├── App.jsx                 ← Routes defined here
└── index.jsx               ← Entry point
```

---

## How to Make Changes

### Change any color
Edit `src/styles/theme.js` → `colors` object:
```js
purple: "#7C3AED",  // ← change this
```

### Add a new page
1. Create `src/pages/MyPage.jsx`
2. Add route in `src/App.jsx`:
   ```jsx
   <Route path="/mypage" element={<MyPage />} />
   ```
3. Add nav item in `src/data/index.js`:
   ```js
   { icon: "⭐", label: "My Page", path: "/mypage" }
   ```

### Add a new nav item
Edit `src/data/index.js` → `NAV_ITEMS` array.

### Change chart data
Edit `src/data/index.js` → `MOOD_DATA` array.

---

## Roadmap

| Phase | Features |
|-------|----------|
| ✅ Phase 1 | Landing, Dashboard, AI Chat, Navigation |
| 🔜 Phase 2 | Login/Signup, Mood Tracker UI, Journal editor |
| 🔜 Phase 3 | Appointment booking, Therapist profiles |
| 🔜 Phase 4 | Real AI chatbot (API integration) |
| 🔜 Phase 5 | Backend, database, authentication |
=======
# **CalmMind – AI Mental Wellness Platform**

**CalmMind** is a web-based application designed to support mental health through professional therapy services and AI assistance. It allows users to track their mood, book appointments, chat with therapists, and receive **24/7 support from an AI chatbot**.

---

## **Team**

- **Ayesha Nadeem**
- **Kainat**
- **Yousuf Hussain Khan**

---

## **Key Features**

- **User registration & login**
- **Appointment booking system**
- **Real-time mood tracking**
- **AI mental health chatbot**
- **Private journal**
- **Reward & streak system**

---

## **Tech Stack**

**Frontend:** Next.js, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB / MySQL  
**AI:** OpenAI API  
**Real-time:** Socket.io  
**Deployment:** Vercel  
>>>>>>> 22f8ec9146ac0888da2ca8d9f82f1d5c8c4b968a
