// RatesGrid.jsx — Five term/rate tiles, two of which are highlighted
const RATES = [
  { months: '3 місяці',  days: '93 дні', pct: '15', tone: 'best'  },
  { months: '6 місяців', days: '93 дні', pct: '15', tone: 'best'  },
  { months: '12 місяців',days: '93 дні', pct: '13', tone: 'plain' },
  { months: '18 місяців',days: '93 дні', pct: '12', tone: 'plain' },
  { months: '24 місяці', days: '93 дні', pct: '12', tone: 'plain' },
];

const RatesGrid = () => (
  <section className="pc-rates">
    <h2>Примножуйте заощадження</h2>
    <p className="sub">Сума вкладу — від 50 000 UAH</p>
    <div className="pc-rates-grid">
      {RATES.map((r, i) => (
        <div className={`pc-rate ${r.tone}`} key={i}>
          <div className="pc-rate-top">{r.months} <span className="days">({r.days})</span></div>
          <div className="pct">{r.pct}&nbsp;%</div>
        </div>
      ))}
    </div>
  </section>
);
window.RatesGrid = RatesGrid;
