import React from "react";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => (
  <div className="gradient-bg-transactions ">
   <div className="min-h-screen">
      <div className="">
        <Navbar/>
        <Welcome />
      </div>
      <Services />
      {/* <Transactions /> */}
    </div>
  </div>
   
);

export default App;