import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const useD3 = (renderChartFn, dependencies) => {
  const ref = useRef();

  useEffect(() => {
    // console.log('from d3: ',ref.curret)
    renderChartFn(d3.select(ref.current));
    return () => {};
  }, dependencies);
  return ref;
};

// import * as d3 from 'd3';
// import React, { Component } from 'react';

// export default function D3blackbox(d3render) {
//   return class Blackbox extends Component {
//     componentDidMount() {
//       d3render.call(this);
//     }
//     componentDidUpdate() {
//       d3render.call(this);
//     }

//     render() {
//       const transform = this.props.transform || '';
//       return <g transform={transform} ref='anchor' />;
//     }
//   };
// }

// export const XAxis = D3blackbox(function () {
//   const axis = d3
//     .axisBottom()
//     .tickFormat((d) => d)
//     .scale(this.props.xScale);

//   d3.select(this.refs.anchor).classed('xAxis', true).transition().call(axis);
// });

// export const YAxis = D3blackbox(function () {
//   const axis = d3
//     .axisLeft()
//     .tickFormat((d) => d)
//     .scale(this.props.yScale);

//   d3.select(this.refs.anchor).classed('yAxis', true).transition().call(axis);
// });

// export const YGrid = D3blackbox(function () {
//   const axis = d3
//     .axisRight()
//     .tickFormat((d) => null)
//     .scale(this.props.yScale)
//     .tickSizeOuter(0)
//     .tickSizeInner(this.props.plotWidth);

//   d3.select(this.refs.anchor).classed('yGrid', true).call(axis);
// });

// export const Bars = D3blackbox(function () {
//   const parent = d3.select(this.refs.anchor).datum(this.props.plotData);

//   const current = parent.selectAll('.bar').data((d) => d);

//   current.interrupt(); //.selectAll("*");

//   current.transition().attr('fill', 'green');

//   const enter = current.enter().append('g').classed('bar', true);
//   enter.attr('fill', 'blue');

//   enter
//     .append('rect')
//     .attr('height', 0)
//     .attr('transform', (d) => `translate(${d.x}, ${this.props.plotHeight})`);

//   const exit = current.exit().classed('bar', false);
//   exit
//     .attr('fill', 'red')
//     .attr('opacity', 1)
//     .transition()
//     .attr('opacity', 0)
//     .remove();

//   const rect = current
//     .merge(enter)
//     .select('rect')
//     .attr('width', (d) => d.width)
//     .transition()
//     .duration(1000)
//     .attr('transform', (d) => `translate(${d.x}, ${d.y})`)
//     .attr('height', (d) => d.height);
// });
