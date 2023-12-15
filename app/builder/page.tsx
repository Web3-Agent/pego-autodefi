
"use client"
import React, { useState } from 'react';
import Head from 'next/head';
export default function Builder() {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  // Features for each template
  const templateFeatures = {
    Token: ['Token minting', 'Token burning', 'Token transfers', 'Limited Supply', 'Buy Sell Fees', 'Anti-Whale', 'Auto Liquidity'],
    NFT: ['Custom Metadata', 'Royalty Settings', 'NFT Minting', 'NFT Burning'],
    Staking: ['Stake Tokens', 'Unstake Tokens', 'Reward Calculation', 'Staking Limits'],
    Farm: ['Yield Calculation', 'Liquidity Pools', 'Farm Tokens', 'Harvesting'],
    Marketplace: ['Listing Items', 'Search Filters', 'Transaction History', 'User Ratings'],
    Launchpad: ['Project Submission', 'Voting System', 'Token Distribution', 'Fundraising Goals'],
    // Define similar arrays for other templates if necessary...
  };
  const selectTemplate = (template) => {
    setSelectedTemplate(template);
  };
  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>AI Builder</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWecC7o1e4e1f84a82a8R2e5QrTsyhVfLk3sbLE1zARNw3c8l+Xm3i0yB5Zp"
          crossOrigin="anonymous"
        />
      </Head>
      <main className="p-8">
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-4">AI Builder</h1>
          <p>Generate your custom DeFi application for</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Select Template</h2>
          <p className="text-gray-400 mb-4">Choose modules to activate on your project, you can configure them later</p>
          <div style={{display:"flex", flexDirection:"row"}} className="grid grid-cols-3 gap-4">
            {Object.keys(templateFeatures).map((template) => (
              <div
                key={template}
                className={`bg-gray-100 p-4 cursor-pointer rounded-lg text-center ${selectedTemplate === template ? 'ring-2 ring-black ' : ''}`}
                onClick={() => selectTemplate(template)}
              >
                <i className={`fa${templateFeatures[template].length ? 's' : 'r'} fa-${template.toLowerCase()} fa-3x mb-2`}></i>
                <h3 className="text-lg">{template}</h3>
                <p className="text-sm text-gray-700">Generate a custom {template}</p>
              </div>
            ))}
          </div>
        </section>
        {selectedTemplate && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Features Request</h2>
            <p className="text-gray-500 mb-4">Choose features to activate on your project</p>
            <form>
              <div style={{display:"flex", flexDirection:"row"}} className="grid grid-cols-2 gap-4 mb-4">
                {templateFeatures[selectedTemplate].map((feature, index) => (
                  <label key={index} className="flex items-center">
                    <input type="checkbox" className="form-checkbox accent-black  h-5 w-5" />
                    <span className="ml-2 text-gray-800">{feature}</span>
                  </label>
                ))}
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full p-2 bg-gray-100 rounded-lg text-gray-300"
                  placeholder="Describe Customisation"
                  rows="4">
                </textarea>
              </div>
              <button type="submit" className="mt-4 text-white bg-black py-2 px-4 rounded-lg  transition duration-300">
                Generate Smart Contract
              </button>
            </form>
          </section>
        )}
        {/* Add additional sections as needed */}
      </main>
    </div>
  );
}