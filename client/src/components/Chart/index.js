import React, { Component } from "react";
import Chart from "react-apexcharts";

const ChartComponent = () => {

    const chart = {
        options: {
            chart: {
              id: "basic-bar",
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
              name: "series-2",
              data: [10, 45, 65, 20, 39, 80, 53, 81]
            }
          ]
        }
    


    return ( 
        <div style={{width:"100%", height:"100%"}}>
           <Chart
           style={{minWidth:"100%", height:"100%"}}
              options={chart.options}
              series={chart.series}
              type="line"
              width="100%"
              height="350"

            />
        </div>
     );
}
 
export default ChartComponent;