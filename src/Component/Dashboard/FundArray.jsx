import React from 'react';

const FundArray = () => {
  const funds = [
    { id: 1, source: 'Donor A', amount: 1000 },
    { id: 2, source: 'Donor B', amount: 500 },
    { id: 3, source: 'Donor C', amount: 2000 },
  ];

  const totalFunds = funds.reduce((acc, fund) => acc + fund.amount, 0);

  return (
    <div className="fund-raise">
      <h2 className="fund-raise__title">Fund Raise Dashboard</h2>
      <h3 className="fund-raise__total">Total Funds Raised: ${totalFunds}</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Source</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {funds.map((fund) => (
            <tr key={fund.id}>
              <td>{fund.source}</td>
              <td>${fund.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FundArray;
