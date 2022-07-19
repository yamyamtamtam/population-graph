import React from "react";

let activePrefCode:string[] = [];

const PrefecturesClick = (prefcode:string) => {
  if(activePrefCode.includes(prefcode)){
    activePrefCode = activePrefCode.filter((item) => item !== prefcode);
  }else{
    activePrefCode.push(prefcode);
  }
};

export default PrefecturesClick;
