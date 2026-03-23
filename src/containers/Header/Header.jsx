import React from 'react'
import Props from '../../components/Props/Props'

const Header = () => {
  return (
    <div className='app__header'>
       <Props
            company="Insightblitz Solutions"
            title="The Go-To"
            passage=" for"
            passage2="Brands"
            highlightOne="AI Solutions"
            highlightTwo="Web3"
            description="InsightBlitz Solutions is a leading Web3 marketing agency for Blockchain, NFTs and Crypto."
            buttonText="Book a Call"
            id=""
            showLine={true}
        />
    </div>
  )
}

export default Header