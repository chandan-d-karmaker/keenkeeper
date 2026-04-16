# 🫂KeenKeeper - Keep Your Relationships Alive

**KeenKeeper** is a modern, responsive web application designed to help users **track, manage, and nurture personal relationships**. It provides smart reminders, interaction tracking, and insightful analytics to ensure no meaningful connection fades away.

🔗 **[Live Demo](https://kinkeeper-ck.vercel.app/)** 
📂 **[GitHub Repo](https://github.com/chandan-d-karmaker/kinkeeper )**  


## 🚀 Features

### 🧑‍🤝‍🧑 Friend Management
- A comprehensive overview of your social circle with summary cards tracking your overall contact status.

- **Smart Status Tracking:** Dynamic friend cards that change color based on urgency instantly see who is "On-track," "Almost Due," or "Overdue" for a chat.

- **Visual status indicators:**
  - 🔴 Overdue
  - 🟡 Almost Due
  - 🟢 On Track

---

### 📊 Smart Relationship Tracking
- Track **days since last contact**
- Set a **relationship goal** (e.g., contact every 14 days)
- Automatically calculates:
  - **Contact status**
  - **Next due date**
- Helps maintain consistent communication habits

---

### ⚡ Quick Check-In System
- Instantly **log interactions** with one click:

  - 📞 Call
  - 💬 Text
  - 🎥 Video
- Automatically:
  - Adds **timeline entries**
  - Records date & interaction type
- Real-time **toast notifications** for feedback

---

### 📜 Timeline History
- View complete history of **all interactions**
- Each entry shows:
  - 📅 Date
  - 📌 Interaction type (Call/Text/Video)
  - 📝 Description (e.g., "Call with John")
- **Filter** interactions by type:
  - Call / Text / Video

---

### 📈 Friendship Analytics
- Interactive **Pie Chart (Recharts)** visualization
- Displays distribution of:

  - Calls
  - Texts
  - Video calls
- Provides insight into communication patterns

---

### 🎯 Friend Details Dashboard
- Dedicated page for each friend

- Includes:
  - Profile overview
  - Contact stats
  - Relationship goal tracking
  - Quick action buttons
- Clean two-column layout for better usability

---

### 🎨 Modern UI/UX
- Built with a clean and intuitive interface
- Smooth navigation using React Router
- Icon-based navigation for better experience
- Fully **responsive**:

  - 📱 Mobile
  - 📲 Tablet
  - 💻 Desktop

---

### ⚙️ Additional Functionalities
- 🔄 Loading animation while fetching data
- 🚫 Custom 404 Page for invalid routes
- 🔔 Toast notifications for user actions
- 🔁 Page reload support without breaking routes
- 📌 Active route highlighting in Navbar

---

## 🛠️ Tech Stack

- **Frontend:** React.js + Next.js 
- **Routing:** App Router 
- **Styling:** Tailwind CSS + Component Library ( DaisyUI ) 
- **Charts:** Recharts  
- **Notification:** React Toastify  
- **Icons:** React Icons  
- **State Management:** React Hooks  
- **Deployment:** Vercel  

---

## 📦 Installation & Setup

Run this project locally by following these steps:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/chandan-d-karmaker/kinkeeper.git
```
### 2️⃣ Navigate to the project folder
```bash
cd kinkeeper
```
### 3️⃣ Install dependencies
```bash
npm install
```
### 4️⃣ Start development server
```bash
npm run dev
```
### 5️⃣ Open in browser
```bash
http://localhost:5173
```
### 📂 Project Structure
```
.
├── src/
│   ├── app/                    # Main application routes (Next.js App Router)
│   │   ├── [friendId]/         # Dynamic route for a friend's details page
│   │   ├── contextAPI/         # Global state management using React Context
│   │   ├── data/               # Folder containing data files like friends.json
│   │   ├── stats/              # Route for the Friendship Analytics page
│   │   ├── timeline/           # Route for the Interaction Timeline page
│   │   ├── error.jsx           # Global error handling component
│   │   ├── favicon.ico         # App favicon
│   │   ├── global-not-found.jsx # 404 page for invalid routes
│   │   ├── globals.css         # Global CSS styles
│   │   ├── layout.js           # Root layout component
│   │   ├── loading.jsx         # Global loading component
│   │   └── page.js             # Root page component (Home page)
│   └── components/             # Reusable UI components (Navbar, Footer, etc.)

```

### 🎦 Preview

<div>

<img scr=".src/app/data/preview/banner.png">
<img scr=".src/app/data/preview/friends.png">
<img scr=".src/app/data/preview/friends-details.png">
<img scr=".src/app/data/preview/timeline.png">
<img scr=".src/app/data/preview/stats-hl.png"> 

</div>

---

### 🤝 Contributing
### Contributions are welcome!

1. Fork the repository
2. Create a new branch

  ```
    git checkout -b feature/AmazingFeature
  ```
3. Commit your changes

```
git commit -m "Add Amazing Feature"
```
4. Push to GitHub

```
git push origin feature/AmazingFeature
```
5. Open a Pull Request

---


### 📄 License

### This project is licensed under the **MIT License**.

---
<div align='center'>

### 👨‍💻 Developed by Chandan Karmaker

### [Github](https://github.com/chandan-d-karmaker)
### [LinkedIn](https://www.linkedin.com/in/chandankarmaker/)

</div>

---