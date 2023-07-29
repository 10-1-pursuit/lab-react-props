export default function Progress({donations, targetAmount}) {
  const raiseMoney = donations.reduce((total,{amount}) =>{
    return(total += amount)
},0)
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${raiseMoney}</span> of {" "}
        <span className="secondary">${targetAmount}</span>
      </h2>
    </section>
  )
}
