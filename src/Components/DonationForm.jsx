export default function DonationForm() {


  return (

    <>


      <section className="donation">
        <h3>You could be donation <span class="secondary">#6!</span></h3>
        <form>
          <label htmlFor="name">Name

            <input
            id="name"
        name="name"
        type="text"
        placeholder="Your name..."></input>

          </label>

          <label htmlFor="caption">Caption

            <input
            id="caption"
            name="caption"
            type="text"
            placeholder="Add a brief message..."
            
            ></input>

          </label>

          <label htmlFor="amount">

            <input
            id="amount"
            name="amount"
            text="number"
            placeholder="0"
            ></input>

          </label>

          <button>Donate!</button>

        </form>






      </section>







    </>























  );
}
