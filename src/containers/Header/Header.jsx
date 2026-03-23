import React from 'react';
// Make sure your 'image' object is imported correctly based on your folder structure
import image from '../../constants/images'; 
import './Header.css'; 

const Header = () => {
  return (
    <div className='app__header'>
       <Props
            company="Insightblitz Solutions"
            title="The Go-To"
            passage="Agency for"
            passage2="Brands"
            highlightOne="Marketing"
            highlightTwo="Web3"
            description="InsightBlitz Solutions is a leading Web3 marketing agency for Blockchain, NFTs and Crypto."
            buttonText="Book a Call"
            id=""
            showLine={true}
        />
    </div>
  )
}

export default Header;