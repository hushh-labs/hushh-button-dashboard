"use client";
import React from 'react';
import './BrandCards.css'; // Ensure the correct path to your CSS file
import NavigationBar from '@/app/components/NavigationBar/NavigationBar';
import HeaderBar from '@/app/components/HeaderBar/HeaderBar';

function BrandCardsPage() {
  return (
    <div className="BrandCardsPage__container">
      <div className="BrandCardsPage__nav">
       <NavigationBar/>
      </div>
      <div className="BrandCardsPage__content">
        <div className="BrandCardsPage__header">
         <HeaderBar/>
        </div>
        <div className="BrandCardsPage__mainContent">
          {/* Main content here */}
          <p>Your brand cards content goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default BrandCardsPage;
