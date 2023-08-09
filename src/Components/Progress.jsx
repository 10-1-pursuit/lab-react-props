
export default function Progress(props) {
  console.log(props.targetAmountFromApp)
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">$90</span> of
        <span className="secondary"> $    {props.targetAmountFromApp} </span>
      </h2>
    </section>
  )
}


// export default function Progress( targetAmountFromApp) {
//   return (
//     <>  
//     <section className="progress">
//     <h2>
//       Raised <span className="secondary">$0</span> of
//       <span className="secondary">$1000</span>
//     </h2>
//   </section>
//     <section className="progress">
// <h2>
// Raised  <span className= "secondary"> $5  </span> of 
// <span className= "secondary"> {$props.targetAmountFromApp} </span>
// </h2>
//     </section>
//     </>
//   )
//   null;
// }
