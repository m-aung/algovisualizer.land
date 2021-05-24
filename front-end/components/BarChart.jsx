import * as d3 from 'd3';
import { useD3 } from '../d3/d3file';
import React ,{useState,useEffect}from 'react';
import AlgoBoard from './Sort-board';
// import * as SORT from '../algorithms/sorts/SORTS'

const BarChart = ({ data , isClicked, sortClicks}) =>{
  console.log('data: ', data)
  console.log('isClicked: ', isClicked)
    const ref = useD3(
      (svg) => {
        const height = 650;
        const width = 600;
        const margin = { top: 30, right: 30, bottom: 30, left: 40 };
  
        const x = d3
          .scaleBand()
          .domain(data.map((d) => d.id))
          .rangeRound([margin.left, width - margin.right])
          .padding(0.3);
  
        const y1 = d3
          .scaleLinear()
          .domain([0, d3.max(data, (d) => d.sales)])
          .rangeRound([height - margin.bottom, margin.top]);
  
        const xAxis = (g) =>
          g.attr("transform", `translate(0,${height - margin.bottom})`).call(
            d3
              .axisBottom(x)
              /*
              to divide into partition
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
      [data,isClicked, sortClicks]

    );


  
    return (
      <svg
        ref={ref}
        style={{
          height: 700,
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