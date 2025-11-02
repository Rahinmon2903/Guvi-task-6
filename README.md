🛒 React Shopping Cart
A simple, responsive shopping cart application built with React. It demonstrates state management, conditional rendering, localStorage persistence, and clean UI/UX practices.

🚀 Features
Add to Cart: Add products with quantity initialized to 1.

Increment/Decrement: Update product quantities safely (never below 1).

Remove Items: Optionally remove products when quantity hits 0 (configurable).

Persistent Cart: Cart data is saved in localStorage and restored on refresh.

Responsive UI: TailwindCSS for styling, mobile‑friendly layout.

Routing: Navigate between product listing and cart page using React Router.

Icons: FontAwesome / React Icons for polished visuals.

🛠️ Tech Stack
React (functional components + hooks)

React Router (navigation)

TailwindCSS (styling)

FontAwesome / React Icons (icons)

localStorage API (persistence)

📂 Project Structure
Code
src/
 ├── components/
 │    └── Header.jsx
 ├── pages/
 │    ├── Home.jsx
 │    └── Cart.jsx
 ├── App.jsx
 ├── main.js
 └── styles/
      └── index.css
⚡ Getting Started
1. Clone the repo
bash
git clone https://github.com/Rahinmon2903/Guvi-task-6
cd react-cart
2. Install dependencies
bash
npm install
3. Run locally
bash
npm start
App runs at http://localhost:3000.

🌐 Deployment
This project is ready for Netlify deployment:

Push your repo to GitHub.

Connect GitHub repo to Netlify.

Netlify auto‑builds and deploys on every push to main.