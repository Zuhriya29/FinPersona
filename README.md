# 📊 FinPath AI

FinPath AI is an **AI-powered investment personality analyzer** that helps users discover their investor type, risk profile, and personalized learning path based on a simple assessment.

This project simulates how modern fintech apps (like robo-advisors) analyze user behavior and provide financial insights using AI.

---

## 🚀 Live Demo
https://fin-persona.vercel.app/ 


---

## 🧠 Features

### 🧾 Investment Assessment
Users answer 5 simple questions:
- Financial goal
- Risk behavior
- Investment horizon
- Knowledge level
- Saving capacity

---

### 📊 Investor Profiling
Automatically generates:
- Investor Type (Conservative / Moderate / Aggressive)
- Risk Score (0–100 scale)
- Behavioral analysis

---

### 🤖 AI Financial Mentor
Powered by AI to generate:
- Personalized insights
- Investment advice
- Learning recommendations

---

### 📈 Portfolio Simulation
Dynamic asset allocation:
- Stocks
- Bonds
- Cash

Displayed in interactive pie chart visualization.

---

### 📚 Learning Path
AI-generated step-by-step learning recommendations based on user profile.

---

## 🛠️ Tech Stack

- Next.js
- AI SDK (`generateText`)
- Groq (pluggable AI provider)
- Tailwind CSS (optional styling)

---

## ⚙️ How It Works

1. User fills assessment form
2. Answers stored in `localStorage`
3. System calculates risk score using rule-based scoring
4. Investor type is determined
5. AI generates:
   - Investment insight
   - Learning path
6. Result page visualizes:
   - Risk meter
   - Portfolio chart
   - AI recommendations

---

## 📊 Scoring System

The system uses a **rule-based scoring model**:

- Each answer has a weighted value (1–4)
- Total score max: 17
- Converted into percentage (0–100)
- Categorized into:
  - Conservative
  - Moderate
  - Aggressive

---

## 🧠 AI Integration

AI is used to generate:
- Personalized financial explanation
- Investment insights
- Learning roadmap

Prompt structure is strictly formatted to ensure consistent output parsing.

---

## 📷 Screenshots

> Add screenshots here

- Assessment Page  
- Result Dashboard  
- AI Insight Card  
- Portfolio Chart  

---

## ⚠️ Disclaimer

This project is for **educational and portfolio purposes only**.

It does NOT provide real financial advice and should not be used for actual investment decisions.

---

## 👨‍💻 Author

**Tasbi Khatuz Zuhriya**

Frontend Developer | AI Enthusiast | Fintech Explorer

---

## ⭐ Future Improvements

- Add authentication system
- Save user history to database
- Improve AI prompt structuring (JSON output)
- Add real market data integration
- Add interactive chart animations
- Mobile optimization improvements

---

## 📌 Purpose of This Project

This project demonstrates:
- AI integration in web applications
- Frontend state management
- Rule-based scoring systems
- Data visualization (portfolio simulation)
- UX design for fintech applications

---

## 🧩 Getting Started

```bash
npm install
npm run dev
