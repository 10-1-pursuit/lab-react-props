export default function DonationForm(props) {
  console.log(props.donationsLength)
  return (
      <>
  <section className="donation">
  <h3>You could be donation <span className="secondary">#{props.donationsLength +1}!</span></h3>
  <form>
    <label htmlFor="name"
      >Name<input
        id="name"
        className="name"
        type="text"
        placeholder="Your name..." /></label
    ><label htmlFor="caption"
      >Caption<input
        id="caption"
        className="caption"
        type="text"
        placeholder="Add a brief message..." /></label
    ><label htmlFor="amount"
      >Amount<input
        id="amount"
        className="amount"
        type="number"
        placeholder="0" /></label
    ><button>Donate!</button>
  </form>
</section>
    </>
  )
};
