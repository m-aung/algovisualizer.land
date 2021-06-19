import * as d3 from 'd3';
import { useD3 } from '../d3/d3file';
import React ,{useState,useEffect}from 'react';
import {useReducer} from'react-router-dom';

const BarChart = ({ data , randomClicks, sortClicks, sortTime}) =>{
  // const [state, dispatch] = useReducer(chartReducer,initialState)
  console.log('BarChart is updated!')
  const ref = useD3(
    (svg) => {
      console.log('svg updated!')
      // console.log('data from svg: ',data[0]["sales"])
      const height = 550;
      const width = 600;
      const margin = { top: 30, right: 30, bottom: 10, left: 40 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.id))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.sales)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            /*
            .tickValues(
              d3
                .ticks(...d3.extent(x.domain()), width / 40)
                .filter((v) => x(v) !== undefined)
            )
            .tickSizeOuter(0)
            */
        );

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "steelblue")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);

      svg
        .select(".plot-area")
        .attr("fill", "steelblue")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d.id))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.sales))
        .attr("height", (d) => y1(0) - y1(d.sales));
    },
    [data, randomClicks, sortClicks, sortTime]
  );
  return (
    <svg
      ref={ref}
      style={{
        height: 600,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}
export default BarChart;

/* -------------------------------------------------------------------------- */
/*                                  new style                                 */
/* -------------------------------------------------------------------------- */

// import React, { Component } from "react";
// import * as d3 from "d3";
// import { XAxis, YAxis, YGrid, Bars } from "../d3/d3file";

// class BarChart extends Component {
//   constructor(props) {
//     super();

//   }
  
//   updateScale(props) {
//     const data = props.data;

//     const xScale = d3.scaleBand();
//     const yScale = d3.scaleLinear().nice();
    
    
//     const xDomain = data.map(props.xFn);
//     const yDomain = [0, d3.max(data, d => props.yFn(d))];

    
    
//     xScale
//       .domain(xDomain)
//       .range([0, props.width - (props.margin.left + props.margin.right)])
//       .paddingInner(props.paddingInner)
//       .paddingOuter(props.paddingOuter);
//     yScale
//       .domain(yDomain)
//       .range([props.height - (props.margin.top + props.margin.bottom), 0]);     
//       return {xScale, yScale};
//   }
  
//   updatePlotSize(props){
//     const plotWidth =
//       props.width - (props.margin.left + props.margin.right);
//     const plotHeight =
//       props.height - (props.margin.top + props.margin.bottom);
      
//       return {plotWidth, plotHeight}
    
//   }

  
  
//   render() {
//     console.log('props from barChart:', this.props)
//     const {xScale, yScale} =  this.updateScale(this.props);
//     const {plotWidth, plotHeight} = this.updatePlotSize(this.props);

//     const metaData = {
//       xScale: xScale,
//       yScale: yScale,
//       plotWidth: plotWidth,
//       plotHeight: plotHeight
//     };
//     const plotData = {
//       plotData: this.props.data.map((d, i) => {
//         return {
//           id: i,
//           data: d,
//           x: xScale(this.props.xFn(d)),
//           y: yScale(this.props.yFn(d)),
//           width: xScale.bandwidth(),
//           height: plotHeight - yScale(this.props.yFn(d))
//         };
//       })
//     };

//     return (
//       <svg width={this.props.width} height={this.props.height}>
//         <g
//           transform={`translate(${this.props.margin.left},${this.props.margin.top})`}
//         >
//           <rect width="17" height="17" fill="blue" y="-27" />
//           <text textAnchor="start" dominantBaseline="central" y="-18" x="1.1em">
//             Enter
//           </text>
//         </g>

//         <g
//           transform={`translate(${this.props.margin.left + 70},${this.props.margin.top})`}
//         >
//           <rect width="17" height="17" fill="green" y="-27" />
//           <text textAnchor="start" dominantBaseline="central" y="-18" x="1.1em">
//             Update
//           </text>
//         </g>

//         <g
//           transform={`translate(${this.props.margin.left + 160},${this.props
//             .margin.top})`}
//         >
//           <rect width="17" height="17" fill="red" y="-27" />
//           <text textAnchor="start" dominantBaseline="central" y="-18" x="1.1em">
//             Exit
//           </text>
//         </g>

//         <g
//           className="axisLaeyr"
//           width={plotWidth}
//           height={plotHeight}
//           transform={`translate(${this.props.margin.left}, ${this.props.margin.top})`}
//         >
//           <YGrid {...metaData} />
//           <XAxis {...metaData} transform={`translate(0,${plotHeight})`} />
//           <YAxis {...metaData} />
//         </g>
//         <g
//           className="plotLayer"
//           width={plotWidth}
//           height={plotHeight}
//           transform={`translate(${this.props.margin.left}, ${this.props.margin.top})`}
//         >
//           <Bars {...metaData} {...plotData} />
//         </g>
//       </svg>
//     );
//   }
// }

// export default BarChart;