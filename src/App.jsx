import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";
import RecentDonations from "./Components/RecentDonations";

const targetAmount = 1000;
export const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "JoMan",
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
    name: "Julie",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Stef",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

function App() {
  return (
    <>
      <TopBar />

      <main className="container">
        <section className="sidebar"></section>
        <section className="DonationForm">
          <Progress />
          <DonationForm donations={donations} />
         
        </section>
        <RecentDonations />
      </main>
    </>
  );
}

export default App;
