import React from "react";
import "./TotalCards.css";
function Cards({title,value, greenValue, greenText, redValue, redText}) {
  return (
    <div className="TotalCards__mainContainer">
      <div className="TotalCards__mainContainer__innerContainer">
        <div className="TotalCards__mainContainer__innerContainer__title" >{title}</div>
        <div><h4 className="TotalCards__mainContainer__innerContainer_value">{value}</h4></div>
        <div className="TotalCards__mainContainer__spaceDiv"></div>
        <div className="TotalCards__mainContainer__innerContainer_bottom">
            <div className="TotalCards__mainContainer__innerContainer_bottom1">
                <h4>{greenValue} </h4>
                <p>{greenText}</p>
            </div>
            <div className="TotalCards__mainContainer__innerContainer_bottom2">
            <h4>{redValue}</h4>
            <p>{redText}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
