# 🚀 CampGenesis Minter

A minimalist, full-featured NFT minter for the [Camp Testnet](https://www.campnetwork.io), built with performance and flexibility in mind. Leverages Origin SDK for wallet integration and on-chain minting. Includes real-time gallery and transaction tracking.

---

## ✅ Features

### 🔥 Full NFT Minting Pipeline
- Upload image to IPFS via Pinata
- Dynamically generate metadata
- Mint NFTs on-chain using smart contract (manual and Origin modal)
- Real-time minting status feedback
- Responsive UI with status indicators and loading spinner

### 🛠 Tech Stack
- 🧩 **Origin SDK** – Wallet connection and NFT minting
- ⚛️ **React + Vite + Tailwind CSS** – Fast and responsive frontend
- 🛰 **BlockScout API** – Live transaction feed and NFT gallery integration

### 🖼 NFT Gallery Viewer
- View all minted NFTs
- Includes image previews, metadata, and owner info
- Filter NFTs by wallet address

### 📄 Transaction History
- List of recent minting transactions
- Links directly to BlockScout Explorer
- Displays status: Success, Pending, or Error

### 👀 NFT Preview
- See a preview of your NFT before minting
- Displays uploaded image and structured metadata
- Verifies IPFS CID and JSON structure

---

## 📦 Getting Started

```bash
git clone https://github.com/yourusername/campgenesis-minter.git
cd campgenesis-minter
npm install
npm run dev
```

> ⚠️ Make sure you are connected to **Camp Testnet** and have some testnet VS tokens in your wallet.

---

## 📸 Screenshots (Coming Soon)

---

## 🧪 Notes
- Compatible with Camp Network smart contracts and Origin SDK modal flow
- Optimized for fast iteration during hackathons or bounty contests

---

## 📜 License

MIT License


---

## 📦 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.  
Optimized for best performance. Minified, hashed, and ready for deployment.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**  
Gives full control over Webpack, Babel, and ESLint configs.

---

## 📚 Learn More

- [Create React App Docs](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Docs](https://reactjs.org/)
- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Bundle Size Analysis](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [PWA Guide](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Config](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [Build Minify Troubleshooting](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
