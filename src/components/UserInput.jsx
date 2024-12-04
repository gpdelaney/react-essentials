export default function UserInput({onChangeInput, investment}) {


  return <section id="user-input">
    <div className="input-group">
      <p>
        <label>Initial Investment</label>
        <input type="number" value={investment.initialInvestment} required
               onChange={(event) => {
                 onChangeInput('initialInvestment', event.target.value);
               }}/>
      </p>
      <p>
        <label>Annual Investment</label>
        <input type="number" value={investment.annualInvestment} required
               onChange={(event) => {
                 onChangeInput('annualInvestment', event.target.value);
               }}/>
      </p>
      <p>
        <label>Expected Return</label>
        <input type="number" value={investment.expectedReturn} required
               onChange={(event) => {
                 onChangeInput('expectedReturn', event.target.value);
               }}/>
      </p>
      <p>
        <label>Duration</label>
        <input type="number" value={investment.duration} required
               onChange={(event) => {
                 onChangeInput('duration', event.target.value);
               }} min="1"/>
      </p>
    </div>
  </section>
}