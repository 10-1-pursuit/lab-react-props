import React from "react";
import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import "./App.css";

const targetAmount = 1000;
const donations = [
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

// Map through every donation and return a list item with the name, amount, and caption.
const recentDonationsProps = donations.map((donations) => { return <RecentDonations key={donations.name} nameAmountCaption={donations} /> })

function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar"><b><h2>Recent Donations</h2></b>
          {recentDonationsProps}
        </section>
        <section className=""></section>
      </main >
    </>
  );
}

export default App;
