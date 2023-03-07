import React, { useState } from "react";
import Counter from "./components/Counter";
import Paragraph from "./components/paragraph/Paragraph";
import ParagraphList from "./components/paragraph/ParagraphList";
import Section from "./components/userList/Section";

const App = () => {
  const [salary, setSalary] = useState([]);
  let employees = [
    { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
    { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
    { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
    { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
    { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
    { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
    { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
    { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
    { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
    { name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28 },

    { name: "Ilim", surname: "ttt", days: 12, salaryPerDay: 72 },
  ];

  let [value, setValue] = useState([]);
  // console.log(value);

  const handle = (newObj) => {
    let newValue = [...value];

    newValue.push(newObj);

    setValue(newValue);
  };
  return (
    <div>
      <Counter />
      <Paragraph handle={handle} />
      <ParagraphList value={value} />
      <Section users={employees} />
    </div>
  );
};

export default App;
