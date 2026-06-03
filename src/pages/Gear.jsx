export default function Gear() {
  const rentItems = [
    { label: 'Harness', price: '$8/visit' },
    { label: 'Belay Device', price: '$5/visit' },
    { label: 'Chalk Bag', price: '$3/visit' },
    { label: 'Climbing Shoes', price: '$7/visit' },
  ]
  const buyItems = [
    { label: 'Harness', price: '$85' },
    { label: 'Belay Device', price: '$55' },
    { label: 'Chalk Bag', price: '$20' },
    { label: 'Climbing Shoes', price: '$120' },
  ]

  return (
    <section className="section page-section gear-page">
      <div className="section-header">
        <p className="eyebrow">Gear</p>
        <h1>Gear Rental & Purchase</h1>
      </div>

      <div className="gear-grid">
        <div className="gear-panel card-panel">
          <h2>Rent Per Visit</h2>
          <table>
            <tbody>
              {rentItems.map((item) => (
                <tr key={item.label}>
                  <td>{item.label}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="gear-total">Full kit total: $23/visit</p>
        </div>

        <div className="gear-panel card-panel">
          <h2>Buy Your Own Gear</h2>
          <table>
            <tbody>
              {buyItems.map((item) => (
                <tr key={item.label}>
                  <td>{item.label}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="gear-total">Full kit total: $280</p>
        </div>
      </div>

      <div className="break-even-panel card-panel">
        <p className="eyebrow">Break-Even</p>
        <p className="break-even-copy">
          If you visit more than 13 times, buying your gear is cheaper than renting.
        </p>
        <p className="break-even-advice">
          Invest in your own equipment if you climb regularly, it improves comfort and consistency.
        </p>
      </div>
    </section>
  )
}
