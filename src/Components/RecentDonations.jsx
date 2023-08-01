const RecentDonations=(props)=> {

  const newDonations=props.donations

  

  return(
  
    
  <div id="recent-donations">
    <h1>Recent Donations</h1>
    {newDonations.map((newDonation)=>(


<div>
        
        <h2>{newDonation.name} donated {newDonation.amount}</h2>
        <p>{newDonation.caption}</p>





</div>
    ))};






  </div>
  
  );

}

export default RecentDonations

