import React from "react";
import "../stylesheets/App.css";


const Select = (props) => {


    let handleSelect = (evt) => {
        props.selectFun(evt.target.value)
    }

     

  return (
   <div>
     <select value={props.select} onChange={handleSelect}>
        <option value={"all"}>All</option>
        <option value={"descriptionUP"}>Sort by description (ASC)</option>
        <option value={"descriptionDOWN"}>Sort by description (DESC)</option>
        <option value={"categoryUP"}>Sort by category (ASC)</option>
        <option value={"categoryDOWN"}>Sort by category (DESC)</option>
        <option value={"amountUP"}>Sort by amount (ASC)</option>
        <option value={"amountDOWN"}>Sort by amount (DESC)</option>
        <option value={"dateUP"}>Sort by date (ASC)</option>
        <option value={"dateDOWN"}>Sort by date (DESC)</option>
     </select>
   </div>
  )
}

export default Select;