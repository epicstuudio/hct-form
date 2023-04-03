import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import Data from "../data.json";
import { useState } from "react";

function App() {
  const [tableData, setTableData] = useState(Data);
  return (
    <div className="px-4 md:px-8 lg:container lg:mx-auto">
      <h1 className="text-3xl font-bold underline mt-32">HCT Form</h1>
      <div className="lg:grid lg:grid-cols-2 lg:gap-48">
        <Form tableData={tableData} setTableData={setTableData} />
        <Table tableData={tableData} />
      </div>
    </div>
  );
}

export default App;
