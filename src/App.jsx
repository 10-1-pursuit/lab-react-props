import React from "react";
import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";
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

// RECENT DONATIONS PROPS:
// Map through every donation and return a list item with the name, amount, and caption.
// The .Map high order array function was reacted to add a dynamic rendering of the donations array.... as new donators are added the recent donations list will update automatically.
const recentDonationsProps = donations.map((donations) => { return <RecentDonations key={donations.name} nameAmountCaption={donations} /> })

// PROGRESS BAR PROPS:
// Calculate dynamically the total amount of donations raised.
// This Foreach will continually add the amount of each donation to the donationsTotal variable even as new donations are added.
let donationAmountTotal = 0;
donations.forEach((donation) => {
  donationAmountTotal += donation.amount
  return <Progress key={donations} amountOfDonations={donationAmountTotal} targetAmount={targetAmount} nextDonationUp={donations.length} />
  //
});

function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar"><b><h2>Recent Donations</h2></b>
          {recentDonationsProps}
        </section>
        <section>
          <Progress key={donationAmountTotal} amountOfDonations={donationAmountTotal} targetAmount={targetAmount} nextDonationUp={donations.length + 1} />
          <DonationForm />
        </section>

      </main >
    </>
  );
}

export default App;
