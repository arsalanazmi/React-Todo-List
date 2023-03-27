import React from "react";
import { DataProvider } from "./components/DataProvider";
import Footer from "./components/Footer";
import FormInput from "./components/FormInput";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <h1>To Do List</h1>
        <FormInput />
        <List />
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
