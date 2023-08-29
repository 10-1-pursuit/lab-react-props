export default function RecentDonations() {
 
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
      caption: "LOL! You are too funny. Happy to do this for you. 😁",
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
  
  // testing if objects in donation array can be properly accessed
  // delete when no longer needed
  console.log("recent donations:", donations);
  console.log("new donator:", donations[3]);
  console.log("donator name:", donations[3].name);

//// JSX Return Below (JSX is always within the return)
  return (
 <div>

  <section>
  <h2>Recent Donations</h2>
  <ul>
    <li><span>{donations[0].name} donated ${donations[0].amount}</span> {donations[0].caption}</li>
    <li><span>{donations[1].name} donated ${donations[1].amount}</span> {donations[1].caption}</li>
    <li><span>{donations[2].name} donated ${donations[2].amount}</span> {donations[2].caption}</li>
    <li><span>{donations[3].name} donated ${donations[3].amount}</span> {donations[3].caption}</li>
    <li><span>{donations[4].name} donated ${donations[4].amount}</span> {donations[4].caption}</li>

  </ul>
</section>

 </div>
 );
}

