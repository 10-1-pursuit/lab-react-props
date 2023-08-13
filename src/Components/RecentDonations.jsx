const RecentDonations = ({ nameAmountCaption }) => {
  return (
    <>
      <ul>
        <li><span>{nameAmountCaption.name} donated ${nameAmountCaption.amount}</span></li>
        <ul>{nameAmountCaption.caption}</ul>
      </ul>
    </>

  )
}
export default RecentDonations;
