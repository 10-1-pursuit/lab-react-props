import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import RecentDonations from './Components/RecentDonations'
import Progress from './Components/Progress'
import Raised from "./Components/Raised";
import DonationForm from './Components/DonationForm'




function App() {
  return (
    <>
      <TopBar />
      
      <main className="container">
    
        <section className="sidebar"><b>Recent Donations</b><RecentDonations /></section>
      
        <section className="">
        <Progress /> <Raised />
        <DonationForm />
          
          
        </section>
     
      </main>
    </>
  );
}

export default App;
