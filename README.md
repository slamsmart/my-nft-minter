# 🏕️ Camp Genesis Minter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A minimal NFT minting DApp for the [Camp Network](https://camp.network), built for the **Camp x Wizz: Builder Bounty**.  
Users can connect their wallet, mint NFTs using Origin SDK, and view their collection + transaction history in a clean UI.

---

## 🚀 Features

- 🔗 Wallet connection via Origin Modal (Camp Network)
- 🪄 NFT minting form (Name, Creator, Upload trigger)
- 🖼 NFT Gallery (on-chain NFT fetch via BlockScout API)
- 📜 Transaction history (paginated)
- 🌐 Deployed on BaseCamp Testnet

---

## 🧠 NFT Types Explained: Why Some Images Show Up, and Others Don’t

This app interacts with **two types of NFTs** on the Camp Network:

### 1. IP NFTs (File Upload NFTs — e.g. minted via Omnihub)
- Minted by uploading a file directly.
- The file becomes the actual NFT content — no external metadata needed.
- ✅ These NFTs **display properly** in the gallery because the image is embedded and easily detected.

### 2. Metadata-based NFTs (Minted via the in-app form)
- Minted using the in-app form with **NFT Name** and **Creator Name**.
- Expected to generate a `tokenURI` pointing to metadata JSON (containing `image`, `name`, etc.).
- ❌ These NFTs **do not show up** in the gallery — because the current implementation does **not** upload image/metadata to IPFS, nor generate a valid `tokenURI`.

> Even though the form asks for metadata (name/creator), without integrating IPFS storage (e.g., NFT.Storage), the minted NFT lacks proper metadata.
>
> The IPNFT smart contract used via Origin SDK **requires the app to handle metadata creation/upload** — otherwise the NFT ends up with a missing or invalid `tokenURI`.

⚠️ **Planned Improvement:**  
Add support for full image + metadata upload to IPFS, enabling complete NFT metadata generation for in-app minting.

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
