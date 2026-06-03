import { useMemo, useState } from 'react'

export default function Memberships() {
  const [visits, setVisits] = useState(3)
  const dailyCost = 25
  const payPerVisitCost = useMemo(
    () => visits * 52 * dailyCost,
    [visits, dailyCost],
  )
  const membershipCost = 799
  const savings = payPerVisitCost - membershipCost
  const savingsLabel =
    savings > 0
      ? `At ${visits} visits/week, the yearly membership saves you $${savings} per year.`
      : `At ${visits} visits/week, the yearly membership costs you $${Math.abs(
          savings,
        )} more per year.`

  return (
    <section className="section page-section memberships-page">
      <div className="section-header">
        <p className="eyebrow">Memberships</p>
        <h1>Memberships & Pricing</h1>
      </div>

      <div className="cards-grid membership-grid">
        <article className="pricing-card">
          <p className="badge">Yearly Membership</p>
          <h2>$799/year</h2>
          <ul>
            <li>Unlimited rope wall access</li>
            <li>Locker access</li>
            <li>2 guest passes/month</li>
            <li>10% gear discount</li>
          </ul>
        </article>
        <article className="pricing-card pricing-card-alt">
          <p className="badge">Pay Per Visit</p>
          <h2>$25/visit</h2>
          <ul>
            <li>Access to all walls for the day</li>
            <li>Gear rental available separately</li>
            <li>No monthly commitment</li>
          </ul>
        </article>
      </div>

      
    </section>
  )
}
