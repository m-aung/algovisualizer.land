import * as d3 from 'd3';
import { useD3 } from '../d3/d3file';
import React ,{useState,useEffect}from 'react';
import AlgoBoard from './Sort-board';
// import * as SORT from '../algorithms/sorts/SORTS'

const BarChart = ({ data , isClicked, algorithm}) =>{
  const randomSales = (data = []) => {
      //36 years
      // console.log('data from BarChart: ', data);
      let year = 1980;
      let counter = 0;
      while(counter < 36){
        let curObj = {}
        curObj["year"] = year + (counter * 5 )
        curObj["efficiency"] = (Math.random()*(40-24)+24).toPrecision(3)
        curObj["sales"] = Math.floor(Math.random()*(120-45)+45)*10000
        data.push(curObj)
        counter++;
      }
      return;
  }
  
  if(!data || isClicked) {
    data = [];
    randomSales(data);
  }
  // switch(algorithm){
  //   case 'bubble':
  //     SORT.bubbleSort(data,setGraph())
  //     console.log(`${algorithm} sorting completed...`)
  //     break;
  //   case 'insertion':
  //     SORT.insertionSort()
  //     console.log(`${algorithm} sorting completed...`)
  //     break; 
  //   case 'merge':
  //     SORT.mergeSort()
  //     console.log(`${algorithm} sorting completed...`)
  //     break;  
  //   case 'selection':
  //     SORT.selectionSort()
  //     console.log(`${algorithm} sorting completed...`)
  //     break;
  //   case 'quick':
  //     SORT.quickSort()
  //     console.log(`${algorithm} sorting completed...`)
  //     break; 
  //   case 'heap':
  //     SORT.heapSort()
  //     console.log(`${algorithm} sorting completed...`)
  //     break; 
  //   default:
  //     console.log('This is default');
  //     break;
  // }
  // const [graph, setGraph] = useState(data);
  // const callback = setGraph();

  useEffect(() => {
    console.log('state updated!')
  }, [graph])
    const ref = useD3(
      (svg) => {
        const height = 800;
        const width = 600;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  
        const x = d3
          .scaleBand()
          .domain(data.map((d) => d.year))
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
              .tickValues(
                d3
                  .ticks(...d3.extent(x.domain()), width / 40)
                  .filter((v) => x(v) !== undefined)
              )
              .tickSizeOuter(0)
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
          .attr("x", (d) => x(d.year))
          .attr("width", x.bandwidth())
          .attr("y", (d) => y1(d.sales))
          .attr("height", (d) => y1(0) - y1(d.sales));
      },
      [data.length, isClicked]
    );


  
    return (
      <svg
        ref={ref}
        style={{
          height: 500,
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