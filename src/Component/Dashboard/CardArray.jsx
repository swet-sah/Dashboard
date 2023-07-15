import React from 'react'
import Card from 'react-bootstrap/Card';

const cardProps = [
    {
        text: "Tasks in Progress",
        number: 20,
        color: "#ECEDF7",
        textColor: "#3F4AAF",
    },
    {
        text: "Tasks Completed",
        number: 95,
        color: "#E6F7F1",
        textColor: "#07AB70",
    },
    {
        text: "Overdue Tasks",
        number: 2,
        color: "#FFE6E6",
        textColor: "#FF0000",
    },
    {
        text: "Tasks in Progress",
        number: 20,
        color: "#ECEDF7",
        textColor: "#3F4AAF",
    },
    
];
const CardArray = () => {
    return (
        <>
            {
                cardProps.map((ele) => {
                    return (
                        <>
                            <div className="col">
                                <Card
                                    className="w-100 px-3 pt-3 pb-4 my-3"
                                    style={{ backgroundColor: ele.color }}
                                >
                                    <Card.Title className='' >{ele.text}</Card.Title>
                                    <Card.Text style={{ fontSize: '2rem', color: ele.textColor, alignContent: "center" }}>
                                        {ele.number}
                                    </Card.Text>
                                </Card>
                            </div>

                        </>
                    )
                })
            }
        </>
    )
}

export default CardArray
