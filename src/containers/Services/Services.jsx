import React, { useState } from 'react';
import TabContent from './TabContent';
import { navigationData, servicesData } from './TabData';
import Props from '../../components/Props/Props'
import './Services.css'

const Services = () => {
const [activeTab, setActiveTab] = useState(navigationData[0].id);
  return (
    <div className='Services '>
        <Props
            company="Services"
            title="From"
            passage="to"
            passage2=""
            highlightOne="Strategy"
            highlightTwo="Scale"
            description="From narrative to launch to scale, we run disciplined go-to-market systems for Web3 teams."
            buttonText=""
            id="Services"
            showLine={false}
        /> 
        <div className="services-section">
            {/* Tab Navigation using navigationData object */}
            <div className="tabs-menu-2" role="tablist">
                {navigationData.map((tab) => (
                <span
                    key={tab.id}
                    className={`tab-link ${activeTab === tab.id ? 'w--current' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    role="tab"
                >
                    {tab.label}
                </span>
                ))}
            </div>

            {/* Tab Content rendering from servicesData object */}
            <div className="w-tab-content">
                <TabContent data={servicesData[activeTab]} />
            </div>
        </div>
    </div>
  )
}

export default Services