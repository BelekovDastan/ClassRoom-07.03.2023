import React from "react";
import "./Section.css";

const Section = (props) => {
  console.log(props.employees);
  return (
    <div id="section">
      <table>
        <tr>
          <td>Surname</td>
          <td>Name</td>
          <td>WorkDay</td>
          <td>SalaryPerDay</td>
        </tr>
        {props.users.map((item) => (
          <tr key={item.id}>
            <td>{item.surname}</td>
            <td>{item.name}</td>
            <td>{item.days}</td>
            <td>{item.salaryPerDay}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Section;
