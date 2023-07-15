import React from 'react';

const Card = ({ title, value, icon }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{value}</p>
        <i className={`card-icon ${icon}`}></i>
      </div>
    </div>
  );
};

const FundRaiseCard = () => {
  const cardData = [
    {
      title: "Total Funds Raised",
      value: "$50000",
      icon: "fas fa-donate animate__animated animate__heartBeat"
    },
    {
      title: "Total Contributors",
      value: "100",
      icon: "fas fa-users animate__animated animate__bounce"
    },
    {
      title: "Total Population Benefited",
      value: "1000",
      icon: "fas fa-smile animate__animated animate__pulse"
    }
   
  ];

  return (
    <div className="container-fluid">
      <h2 className="text-center mt-5">Fund Raise Dashboard</h2>

      <div className="row justify-content-center mt-4">
        {cardData.map((card, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <Card title={card.title} value={card.value} icon={card.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundRaiseCard;
