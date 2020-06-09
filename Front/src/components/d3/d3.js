import React, { useRef, useEffect } from "react";
import { select } from "d3";
//I'll let D3 handle the Dom over React.

const data = [25, 30, 45, 60, 20];

const Visualization = () => {
  const svgRef = useRef();

  //we have to hook it after its rendered
  useEffect(() => {
    //giving us all d3 methods
    const svg = select(svgRef.current);

    svg
      .selectAll("circle")
      .data(data)
      .join(
        (enter) => enter.append("circle"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove()
      );

   
  }, []);

  return (
    <>
      <div> test</div>
      <svg ref={svgRef}></svg>
    </>
  );
};

export default Visualization;
