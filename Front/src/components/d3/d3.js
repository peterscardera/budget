import React, { useRef, useEffect, useContext } from "react";
import { BudgetContext } from "../../budgetContext";

import { select } from "d3";
//I'll let D3 handle the Dom over React.

const data = [25, 30, 45, 60, 20];

const Visualization = () => {
    const { incomeState, expenseState, savingsState } = useContext(BudgetContext);
console.log(incomeState)
  const svgRef = useRef();

  //we have to hook it after its rendered
  useEffect(() => {
    //giving us all d3 methods
    const svg = select(svgRef.current);

    // svg
    //   .selectAll("circle")
    //   .data(data)
    //   .join(
    //     (enter) =>
    //       enter
    //         .append("circle")
    //         .attr("r", (value) => value)
    //         .attr("cx", (value) => value * 3)
    //         .attr("cy", (value) => value * 2)
    //         .attr("stroke", "red"),
    //     (update) => update.attr("class", "updated"),
    //     //default D3 will do the below anyway
    //     (exit) => exit.remove()
    //   );

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
      <svg ref={svgRef}></svg>
    </>
  );
};

export default Visualization;
