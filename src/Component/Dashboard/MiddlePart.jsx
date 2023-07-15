import React from 'react';
import PieChart from './Charts/PieChart';
import ScrollGraph from './Charts/ScrollGraph';

const MiddlePart = () => {
    return (
        <>

            <div className="row d-flex align-items-center">

                <div className="col-lg-6">
                    <ScrollGraph />
                </div>
                <div className="col-lg-6 p-5">
                    <PieChart />
                </div>
            </div>

        </>
    );
};

export default MiddlePart;
