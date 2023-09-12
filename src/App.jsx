import React from "react";
import TopBar from "./Components/TopBar.jsx";
import RecentDonations from "./Components/RecentDonations.jsx"
import DonationForm from "./Components/DonationForm.jsx"
import Progress from "./Components/Progress.jsx"

import "./App.css";

const targetAmount = 1000;
/*const donations = [  
  > Temporarily commented out to work in RecentDonations.jsx
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];
*/

function App() {
  return (
    <>
    {/* JSX */}
    
    <h1>Winter is coming...</h1>
      <TopBar />
      <DonationForm />
      <Progress />
      <RecentDonations />
      
      <main className="container">
        <section className="sidebar">{/*Recent Donations*/}</section>
        <section className="">
          {/* Progress */}
          {/* Donation Form */}
        </section>
      </main>
    </>
  );
}

export default App;


// Make certain that all components can be rendered
// to App.jsx