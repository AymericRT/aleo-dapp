import React, { useState } from 'react';
import WalletModal from './WalletModal';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState(null);

    const handleWalletSelect = (walletId) => {
        setSelectedWallet(walletId);
        setIsModalOpen(false);
        // IMplement the actual wallet connection lgic here
        console.log(`Connecting to ${walletId}`);
    }

    return (
        <header className="app-header">
            <div className="logo">RareSkills</div>
            {/* Add navigation items */}
            <nav>

            </nav>
            <div className="header-actions">
                <button className="connect-wallet-button" onClick={() => setIsModalOpen(true)}>

                    Connect wallet
                </button>

            </div>
            <WalletModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onWalletSelect={handleWalletSelect}
            />
        </header>
    )
}

export default Header;