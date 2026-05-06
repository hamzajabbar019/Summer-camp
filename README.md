# 🚀 Summer Camp 2k26 - Shah Faisal Chapter

A premium, high-energy, and fully responsive website for the **Summer Camp 2k26**, powered by **Bazm-e-Sathi (Shah Faisal Chapter)** and the **Islamic Society of Children Hobbies**.

![Summer Camp Preview](https://summer-camp-ijtsf.vercel.app/)

---

## ✨ Features

- **🎯 Professional & Playful UI**: A unique "Camp-themed" design with premium animations (Framer Motion) and modern typography.
- **📱 Fully Responsive**: Optimized for every device, from wide-screen desktops to small mobile phones.
- **📝 Google Sheets Integration**: A custom registration form that posts data directly to a Google Spreadsheet.
- **📸 Payment Screenshot Support**: Automatically handles base64 payment screenshots, uploads them to **Google Drive**, and provides clickable links in the spreadsheet.
- **🎨 Visual Excellence**: Glassmorphism effects, interactive hover states, and smooth section transitions.
- **🏞️ Dynamic Gallery**: Optimized memories section with camp-themed doodles and icons.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend**: [Google Apps Script](https://www.google.com/script/start/) (for Sheet & Drive integration)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd summer-camp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📊 Google Sheets & Screenshot Integration

To ensure the registration form works correctly with screenshots, follow these steps:

### 1. Spreadsheet Setup
- Create a new Google Sheet.
- The script will automatically create the headers on the first submission: `Timestamp`, `Child Name`, `Age`, `Parent Name`, `Phone`, `Area`, `Screenshot Link`.

### 2. Apps Script Deployment
- In your Google Sheet, go to **Extensions > Apps Script**.
- Copy the `doPost` function found in the comments of `src/App.tsx`.
- Paste it into the script editor and **Save**.
- Click **Deploy > New Deployment**.
- Select **Web App**:
  - **Execute as**: Me
  - **Who has access**: Anyone
- Copy the **Web App URL** and update the `GOOGLE_SCRIPT_URL` variable in `src/App.tsx`.

> [!IMPORTANT]
> The script requires permission to access **Google Drive** to save screenshots. Ensure you authorize the script during the first deployment.

---

## 📂 Project Structure

```text
summer-camp/
├── public/              # Static assets (logos, camp images)
│   ├── images/          # Gallery and Hero background images
│   └── sponsor/         # Exclusive partner logos
├── src/
│   ├── App.tsx          # Main application core
│   └── index.css        # Custom styles & design tokens
├── README.md            # You are here!
└── package.json         # Project dependencies
```

---

## 🤝 Contact & Sponsorship

For more information, feel free to reach out:

- **Email**: ijtshahfaisalchapter@gmail.com
- **Phone**: +92 332 6999982
- **Facebook**: [Bazm-e-Sathi Shah Faisal](https://www.facebook.com/bazmsathishafaisal/)

---

Developed By **Hamza Jabbar**
