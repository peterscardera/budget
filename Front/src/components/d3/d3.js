import React, { useRef, useEffect, useContext } from "react";
import { BudgetContext } from "../../budgetContext";

import * as d3 from "d3";
//I'll let D3 handle the Dom over React.

const Visualization = () => {
//   const data = [25, 30, 45, 60, 20];
  const { incomeState, expenseState, savingsState } = useContext(BudgetContext);
  console.log(incomeState);
  const pieC = useRef();
  const createPie = d3
    .pie()
    .value((d) => d.value)
    .sort(null);
  const createArc = d3.arc().innerRadius(60).outerRadius(100);
  const colors = d3.scaleOrdinal(d3.schemeCategory10);
  const format = d3.format(".2f");

  useEffect(() => {
    const data = createPie([{date:1,value:200}]);
    const group = d3.select(pieC.current);
    const groupWithData = group.selectAll("g.arc").data(data);

    groupWithData.exit().remove();

    const groupWithUpdate = groupWithData
      .enter()
      .append("g")
      .attr("class", "arc");

    const path = groupWithUpdate
      .append("path")
      .merge(groupWithData.select("path.arc"));

    path
      .attr("class", "arc")
      .attr("d", createArc)
      .attr("fill", (d, i) => colors(i));

    const text = groupWithUpdate
      .append("text")
      .merge(groupWithData.select("text"));

    text
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("transform", (d) => `translate(${createArc.centroid(d)})`)
      .style("fill", "white")
      .style("font-size", 10)
      .text((d) => format(d.value));

    //giving us all d3 methods
    // const svg = select(svgRef.current);
    //  svg
    //       .selectAll("circle")
    //       .data(data)
    //       .join(
    //         (enter) =>
    //           enter
    //             .append("circle")
    //             .attr("r", (value) => value)
    //             .attr("cx", (value) => value * 3)
    //             .attr("cy", (value) => value * 2)
    //             .attr("stroke", "red"),
    //         (update) => update.attr("class", "updated"),
    //       //default D3 will do the below anyway
    //         (exit) => exit.remove()
    //       );
    // console.log(svg.selectAll("circle").data(data))
    // enter elements rep all the dom elements entering svg syncing data and dom
    //update doms that need to be updated
    //exit the circle need to be removed
    //.join() entering, updating and exiting callback
    //append will create for every piece of data
    //update will be called for every circle
    //remove will remove a circle if i have <circle> x6 for ie if i only have 5 data points
    //put below after join it gets applied to both updating and entering callback
    // .append("circle")
    // .attr("r", (value) => value)
    // .attr("cx", (value) => value * 3)
    // .attr("cy", (value) => value * 2)
    // .attr("stroke", "red"),
  }, []);

  return (
    <>
      <div> test</div>
      <svg width={200} height={200}>
        <g ref={pieC} transform={`translate(${100} ${100})`} />
      </svg>
    </>
  );
};

export default Visualization;
