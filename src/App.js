import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { abi } from "./WIZZCAMP_ABI";
import axios from "axios";

const CONTRACT_ADDRESS = "0x7648e0877AB3bcc71bA26797C993A409D404D264";
const PINATA_API_KEY = "dd54fb6e0639abca768a";
const PINATA_SECRET_API_KEY = "18b87e343a0586d2f7cdce3be7493df1a4c87565fb76dfb433c73828add22d96";

export default function NFTMinter() {
  const [wallet, setWallet] = useState("");
  const [file, setFile] = useState(null);
  const [nftName, setNftName] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const [status, setStatus] = useState("");
  const [mintedCount, setMintedCount] = useState(0);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Install MetaMask dulu.");
    const [address] = await window.ethereum.request({ method: "eth_requestAccounts" });
    setWallet(address);
  };

  const mintNFT = async () => {
    if (!file || !nftName || !creatorName) return alert("Lengkapi semua isian dulu.");

    try {
      setStatus("📤 Uploading image...");
      const formData = new FormData();
      formData.append("file", file);

      const imageUpload = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        headers: {
          pinata_api_key: PINATA_API_KEY,
          pinata_secret_api_key: PINATA_SECRET_API_KEY,
        },
      });

      const imageUrl = `ipfs://${imageUpload.data.IpfsHash}`;

      setStatus("📝 Uploading metadata...");
      const metadata = {
        name: nftName,
        description: `Creator: ${creatorName}`,
        image: imageUrl,
      };

      const metadataUpload = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", metadata, {
        headers: {
          pinata_api_key: PINATA_API_KEY,
          pinata_secret_api_key: PINATA_SECRET_API_KEY,
        },
      });

      const metadataURI = `ipfs://${metadataUpload.data.IpfsHash}`;

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

      const tx = await contract.safeMint(wallet, metadataURI);
      setStatus("⏳ Minting...");
      await new Promise(resolve => setTimeout(resolve, 1000));
      await tx.wait();
      setStatus("✅ NFT Successfully Created!");
      setMintedCount(prev => prev + 1);
    } catch (error) {
      console.error(error);
      setStatus("❌ mint NFT Failed. Check the API key and network.");
    }
  };

  return (
    <div
      className="min-h-screen text-gray-900 flex flex-col items-center justify-center px-4 relative overflow-hidden"
      style={{
        backgroundImage: "url('/camp-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-orange-50/60 to-orange-200/60 backdrop-blur-sm"></div>

      <div className="relative z-10 rounded-xl shadow-xl p-8 max-w-lg w-full text-center bg-black/60 backdrop-blur-md">
        <div className="flex justify-center items-center gap-4 mb-4">
          <img src="/logo-wizz.png" alt="Wizz Logo" className="h-14" />
          <div>
            <h1 className="text-3xl font-bold text-white">🔥 NFT Minter 🔥</h1>
            <h2 className="text-xl font-semibold text-white">Built on Camp</h2>
          </div>
          <img src="/logo-camp.png" alt="Camp Logo" className="h-12" />
        </div>

        {!wallet && (
          <button onClick={connectWallet} className="bg-orange-600 text-white px-6 py-2 rounded mb-4">
            Connect Wallet
          </button>
        )}

        {wallet && <p className="mb-4 font-semibold text-white">Connected: {wallet}</p>}

        <input
          type="text"
          placeholder="Nama NFT"
          className="p-2 mb-2 w-full border border-orange-300 rounded"
          value={nftName}
          onChange={(e) => setNftName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Nama Creator"
          className="p-2 mb-2 w-full border border-orange-300 rounded"
          value={creatorName}
          onChange={(e) => setCreatorName(e.target.value)}
        />

        <div className="mb-4 w-full">
          <input
            type="file"
            className="w-full text-black file:text-black file:cursor-pointer file:bg-white"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button
          onClick={mintNFT}
          className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded w-full"
        >
          Upload & Mint
        </button>

        {status && <p className="mt-4 text-sm font-medium text-white">{status}</p>}

        <p className="mt-4 text-white text-sm">Total Minted NFTs: {mintedCount}</p>

        <p className="text-orange-300 text-sm mt-2">
          Need Faucet? <a href="https://faucet.campnetwork.xyz/" target="_blank" rel="noopener noreferrer" className="underline">Claim here</a>
        </p>
      </div>

      <footer className="mt-6 text-white text-xs relative z-10">
        © 2025 by slamsmart
      </footer>
    </div>
  );
}
