import { CChart } from '@coreui/react-chartjs'
import React from 'react'

const PieChartt = () => {
    return (
        <>
            <div className='card'>
                <CChart className='card-body'
                    type="doughnut"
                    data={{
                        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                        datasets: [
                            {
                                backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                                data: [40, 20, 80, 10],
                            },
                        ],
                    }}
                />
            </div>

        </>



    )
}

export default PieChartt
