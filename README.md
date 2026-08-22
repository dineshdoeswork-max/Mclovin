Markdown
# McLovin 🪪

> **your fav fake id supplier in town (better than bart)**

🚀 **Live Demo:** [Generate your ID here!](https://your-project-name.vercel.app) *(<- Replace with your actual Vercel link!)*

A sleek, dark-mode React application that lets users generate pixel-perfect, cinematic credentials for their favorite pop culture universes. Swipe through the cinematic 3D carousel, customize your details, upload a selfie, and download print-ready IDs.

## ✨ Features

*   🌌 **3D Universe Selector:** A smooth, Framer Motion-powered Coverflow carousel for browsing movie and TV show universes.
*   📸 **Cinematic Photo Blending:** Upload a selfie and watch the CSS magic happen. The app uses advanced CSS filters (grayscale, contrast adjustments) and `mix-blend-mode: multiply` to seamlessly burn your photo into the textures of the ID cards—just like a real movie prop.
*   🖨️ **Print-Ready Exports:** Download your front and back ID cards as individual PNGs, a neatly packaged `.zip` archive, or a perfectly sized CR80 (85.6mm × 53.98mm) Print PDF.
*   🕶️ **Premium UI:** Built with a global dark mode, Aceternity UI interactive background grids, and Shadcn-inspired reusable components.
*   ⚡ **Zero Backend:** Everything runs client-side in the browser for maximum speed and privacy.

## 🎬 Available Universes

Currently, the generator supports the following pixel-perfect templates:
*   **Superbad** (The iconic McLovin Hawaii Driver's License)
*   **Fight Club** (Project Mayhem Gritty Mugshot ID)
*   **Severance** (Lumon Industries Employee Badge)
*   **Jurassic Park** (InGen Employee & Visitor Passes)
*   **The Amazing Spider-Man** (Oscorp Industries Badge)

## 💡 How the Photo Blending Works
To achieve the gritty, printed-on-paper look (especially for the Fight Club template), the app uses CSS `mix-blend-mode: multiply`. For the best results, users should upload a selfie taken against a **solid white or very light background**. The white background becomes 100% transparent on the card, allowing the original paper textures and height charts to bleed through the photo perfectly.

## 🛠️ Tech Stack & Deployment

*   **Framework:** React (via Vite)
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion
*   **UI Components:** Custom Shadcn-inspired architecture (CVA, tailwind-merge)
*   **Export Engine:** `html2canvas`, `jsPDF`, and `jszip`
*   **Deployment:** Vercel

## 💻 Local Development 

Want to run this locally or contribute a new ID template? 

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/mclovin-id-generator.git](https://github.com/yourusername/mclovin-id-generator.git)
Install dependencies:

Bash
npm install
Start the dev server:

Bash
npm run dev
🤝 Contributing
Got a blank template for another cinematic universe? Feel free to fork the repo, add your template components to src/templates/, update titles.json, and open a Pull Request!

📜 License
This project is for educational and entertainment purposes only. Please don't try to buy a six-pack with a McLovin ID.
