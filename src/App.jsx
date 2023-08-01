import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import DonationForm from "./Components/DonationForm";
import { useState } from "react";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";

const targetAmount = 1000;

const Donation=()=>{
const [donations,setDonations] =useState([
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
]);
// const PriceUpdate=()=>{
//   const [progress,setProgress] =useState([
//     {
//       amount: 250,
//       caption: "You really need this. Really.",
//       id: 1,
//       name: "Jo",
//     },
//     {
//       amount: 30,
//       caption: "Here, take a break from work!",
//       id: 2,
//       name: "Rami",
//     },
//     {
//       amount: 20,
//       caption: "LOL! You are too funny. Happy to do this for you. :)",
//       id: 3,
//       name: "Michelle",
//     },
//     {
//       amount: 5,
//       caption: "Have fun!",
//       id: 4,
//       name: "Malinda",
//     },
//     {
//       amount: 30,
//       caption: "Come visit me in Miami!",
//       id: 5,
//       name: "Sam",
//     },
//   ]);


//   return(<div><Progress progress={progress}/></div>);
// }

return (<div><RecentDonations key="recent-donations" donations={donations}/></div>);
}

function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">{<Donation/>}</section>
        <section className="">
          {<Progress/>}
          {<DonationForm/>}
        </section>
      </main>
    </>
  );
}

export default App;
