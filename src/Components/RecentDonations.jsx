

const RecentDonations=()=> {
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
  return (
      <div>
             <p> {donations[0].name} donated ${donations[0].amount}</p>
             <p> {donations[0].caption}</p>
             <p> {donations[1].name} donated ${donations[1].amount}</p>
             <p> {donations[1].caption}</p>
             <p> {donations[2].name} donated ${donations[2].amount}</p>
             <p> {donations[2].caption}</p>
             <p> {donations[3].name} donated ${donations[3].amount}</p>
             <p> {donations[3].caption}</p>
             <p> {donations[4].name} donated ${donations[4].amount}</p>
             <p> {donations[4].caption}</p>
             
              

</div>

  )
}



export default RecentDonations
