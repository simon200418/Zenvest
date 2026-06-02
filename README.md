# 📈 Zenvest

Zenvest is a full-stack stock trading dashboard and portfolio tracker, heavily inspired by modern brokerage platforms like Zerodha. It allows users to track market indices, maintain a watchlist, execute buy/sell orders, and manage their long-term holdings and active positions in a seamless, single-page application.

## ✨ Features

* **Secure Authentication:** User registration and login using JWT (JSON Web Tokens) stored in HTTP-only cookies, with password hashing via `bcryptjs`.
* **Real-time Order Execution:** Place Buy/Sell orders through an interactive, draggable floating window. The Orders table updates instantly via React Context API state management without requiring a page refresh.
* **Portfolio Tracking:** * **Holdings:** Track long-term investments with calculated average prices and daily net changes.
  * **Positions:** Monitor short-term, active trading positions.
* **Interactive Watchlist:** View tracked stocks, live prices, and percentage changes with visual indicators (red/green) based on market performance.
* **Data Visualization:** Integrated `react-chartjs-2` for visual portfolio analysis (Doughnut charts for watchlists and Vertical Bar graphs for holdings).
* **Summary Dashboard:** High-level metrics calculating Total Investment, Current Value, and overall Profit & Loss (P&L).

## 🛠️ Tech Stack

**Frontend:**
* React.js (Bootstrapped with Vite)
* React Router DOM (Single Page Navigation)
* Context API (Global State Management)
* Chart.js & `react-chartjs-2` (Data Visualization)
* Axios (API Client)
* Material UI (Icons)

**Backend:**
* Node.js & Express.js (RESTful API)
* MongoDB & Mongoose (Database & Object Data Modeling)
* JWT (Authentication)
* CORS (Cross-Origin Resource Sharing configured for Vercel/Render deployments)

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
* Node.js (v16 or higher)
* MongoDB (Local instance or MongoDB Atlas URI)

### 1. Clone the Repository
```bash
git clone https://github.com/simon200418/zenvest.git
cd zenvest
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a ` .env ` file in the ` backend ` directory and add the following variables:
```bash
PORT=3002
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
````

Start the backend server:
```bash 
npm run dev
# or node index.js
```

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, and install dependencies:
```bash
cd dashboard
npm install
```

Start the Vite development server:
```bash
npm run dev
```

The frontend will be running at ` http://localhost:5173 ` and the backend at ` http://localhost:3002 `.

## 📁 Project Structure
```text
Zenvest/
├── backend/
│   ├── models/            # Mongoose schemas (Holdings, Orders, Positions, Users)
│   ├── middlewares/       # Auth verification middleware
│   ├── controllers/       # Auth logic (Login/Register)
│   └── index.js           # Express server setup and API routes
│
└── dashboard/
    ├── src/
    │   ├── components/    # React components (Dashboard, Orders, BuyActionWindow, etc.)
    │   ├── context/       # GeneralContext.jsx for global state
    │   ├── App.jsx        # App entry point & Routing
    │   └── index.css      # Global styles
    ├── index.html
    └── package.json
```

## 🧠 Key Learnings & Architecture Highlights
- **Avoiding Race Conditions:** Implemented `async/await` patterns between frontend Axios requests and backend Mongoose operations to ensure data consistency before triggering UI re-renders.

- **Component Communication:** Utilized React Context API to enable communication between deeply nested components, such as refreshing the Orders table directly from the BuyActionWindow modal.

- **State Management:** Managed shared application state efficiently using React Context and Hooks.

- **API Integration:** Connected frontend and backend services through RESTful APIs using Axios for seamless data exchange.

## 📄 License
This project is licensed under the MIT License. See the `LICENSE` file for more information.
