import React, { useState } from 'react';
import { faqData } from './FaqData';
import Props from '../../components/Props/Props';
import FaqItem from './FaqItem';
import Block from './Block';
import './Faq.css';


const Faq = () => {
  // Track which FAQ ID is open (null means all are closed)
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className='Faq section'>
      <Props
        company="FAQ"
        title="Before We"
        passage="Together"
        passage2=""
        highlightOne="Work"
        highlightTwo=""
        description="Everything you need to know about working with Insightblitz and scaling your Web3 project."
        buttonText=""
        id="FAQ"
        showLine={false}
      />

      <div className="faq-section-wrapper">
        <div className="faq-wrapper">
          {faqData.map((item) => (
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onClick={() => toggleFaq(item.id)}
            />
          ))}
        </div>
      </div>
      <Block
      title='Ready'
      title3='Traction?'
      word='to'
      word2='real'
      title2='Build'
      description="We partner with focused Web3 teams to design and execute go-to-market systems that drive measurable adoption."
      cta = "Book a Call"
      />
    </div>
  );
};

export default Faq;