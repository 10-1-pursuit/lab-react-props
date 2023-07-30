function AmountRaised({numbersFromDonations}){
    let sumTotal = 0
        for (let donationsAmount of numbersFromDonations)
        sumTotal += donationsAmount.amount
        // console.log(sumTotal)
        // console.log(numbersFromDonations)
    return (
        <h2>
        Raised <span className="secondary">${sumTotal}</span><span> of</span>
      </h2>
    )
}


export default AmountRaised;