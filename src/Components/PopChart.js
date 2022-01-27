import React from 'react'
import Chart from 'react-apexcharts'

const PopChart = ({updatedData}) => {
    const options = {
        chart: {
            background: '#f4f4f4',
            forecolor: '#4d4ae8'
        },
        xaxis: {
           type: 'number'
        },
        stroke: {
            width: 2,
            // curve: "smooth"
        },
        fill: {
            colors: ['#f44336']
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        title: {
            text: 'Apple Stocks',
            align: 'center',
            margin: 20,
            offsetY: 20,
            style: {
                fontSize: '25px'
            }
        }
    }
    // const [options, setOptions] = useState()

    //useState of Series
    const series = [{
        name: 'Price',
        data: updatedData
    }]

    // const [series, setSeries] = useState()

    return (
        <div>
            <Chart 
                options={options}
                series={series}
                type='line'
                height='450'
                width='100%'
            />
        </div>
    )
}

export default PopChart
