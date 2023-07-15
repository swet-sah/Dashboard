import React from 'react';
import VisitorInsight from './Charts/VisitorInsight';

import Adminpage from './Adminpage';
import FundRaiseComponent from './FundRaiseComponent';
import MiddlePart from './MiddlePart';
const Dashboard = () => {
    return (
        <>
            <div className="container">
                <Adminpage />
            </div>

            <div className='container mt-2'>
                <MiddlePart/>
            </div>
            <div className="container mt-2">
                <FundRaiseComponent/>
            </div>
        </>
    );
};

export default Dashboard;
