// Calculator.jsx — Income calculator with slider + term chips + result panel
const TERM_OPTIONS = [
  { months: 3,  days: 93, rate: 0.15 },
  { months: 6,  days: 186, rate: 0.15 },
  { months: 12, days: 365, rate: 0.13 },
  { months: 18, days: 547, rate: 0.12 },
  { months: 24, days: 730, rate: 0.12 },
];

const fmt = (n) => Math.round(n).toLocaleString('uk-UA').replace(/,/g, '\u00A0');
const fmt2 = (n) => n.toLocaleString('uk-UA', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, '\u00A0').replace(/\./, ',');

const Calculator = () => {
  const [amount, setAmount] = React.useState(16081780);
  const [termIdx, setTermIdx] = React.useState(0);
  const term = TERM_OPTIONS[termIdx];

  const min = 50000, max = 50000000;
  const pct = Math.max(0, Math.min(1, (amount - min) / (max - min)));
  const fillPct = pct * 100;

  const trackRef = React.useRef(null);
  const drag = (e) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const v = Math.round((min + Math.max(0, Math.min(1, x)) * (max - min)) / 1000) * 1000;
    setAmount(v);
  };
  const onMouseDown = (e) => {
    drag(e);
    const onMove = (ev) => drag(ev);
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  // Income calculation (simplified): amount * rate * (days/365); tax 19.5%
  const grossIncome = amount * term.rate * (term.days / 365);
  const tax = grossIncome * 0.195;
  const netIncome = grossIncome - tax;
  const netRate = term.rate * (1 - 0.195);

  return (
    <div className="pc-calc-wrap">
      <div className="pc-calc">
        <div>
          <h3>Розрахунок доходу</h3>
          <div className="field-label">Сума вкладу, UAH</div>
          <div className="amount">
            {fmt(amount)}
            <span className="pencil" title="Edit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
            </span>
          </div>
          <div className="pc-track-wrap" ref={trackRef} onMouseDown={onMouseDown}>
            <div className="pc-track"></div>
            <div className="pc-fill" style={{ width: `${fillPct}%` }}></div>
            <div className="pc-thumb" style={{ left: `${fillPct}%` }}></div>
          </div>
          <div className="pc-ends">
            <span>Від {fmt(min)}</span>
            <span>До {fmt(max)}</span>
          </div>
          <div className="pc-term-row">
            <div className="field-label">Строк вкладу, міс.</div>
            <div className="pc-chips">
              {TERM_OPTIONS.map((t, i) => (
                <button key={i} className={`pc-chip ${i === termIdx ? 'active' : ''}`} onClick={() => setTermIdx(i)}>
                  {t.months}
                </button>
              ))}
            </div>
            <div className="pc-helper">{term.days} дні · Виплата відсотків щомісячно</div>
          </div>
        </div>
        <div className="pc-result">
          <div className="pc-result-row head">
            <div>
              <div className="lbl">Ставка за депозитом</div>
              <div className="rate">{(term.rate * 100).toFixed(0)}&nbsp;%</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="lbl">Дохід після оподаткування <span className="info-icon">ⓘ</span></div>
              <div className="gain">{fmt(netIncome)} UAH</div>
            </div>
          </div>
          <div className="pc-result-row"><span className="lbl">Дохід до оподаткування</span><span className="val">{fmt2(grossIncome)} UAH</span></div>
          <div className="pc-result-row"><span className="lbl">Загальна сума податків і зборів</span><span className="val">{fmt2(tax)} UAH</span></div>
          <div className="pc-result-row"><span className="lbl">Ставка після оподаткування</span><span className="val">{(netRate * 100).toFixed(2).replace('.', ',')}&nbsp;%</span></div>
          <div className="pc-result-row"><span className="lbl">Обслуговування тарифного пакету «Classic»</span><span className="val">0 UAH</span></div>
          <button className="pc-cta">Відкрити депозит у застосунку</button>
          <p className="pc-tiny-disclaimer">
            <span style={{ color: 'rgb(0, 0, 0)' }}>Розрахунки є орієнтовними. У розрахунок не включено витрати за обслуговування тарифних пакетів «Platinum» та «Infinite». Сума податків і зборів розрахована за розміром 23 % (18 % ПДФО та 5 % військового збору).</span>
          </p>
        </div>
      </div>
    </div>
  );
};
window.Calculator = Calculator;
