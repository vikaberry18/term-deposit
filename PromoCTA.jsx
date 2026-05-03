// PromoCTA.jsx — Late-page red banner with phone product photo
const PromoCTA = () => (
  <section className="pc-promo">
    <div>
      <h2>Оформити вклад під 15 % річних</h2>
      <p>у застосунку ProCredit Bank Ukraine</p>
      <div className="qr-row">
        <div style={{
          width: 80, height: 80, background: '#fff', borderRadius: 8,
          display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gridTemplateRows: 'repeat(8, 1fr)', gap: 1, padding: 6
        }}>
          {Array.from({length: 64}).map((_, i) => {
            const on = ((i * 11 + (i % 7) * 3) % 13) > 5;
            return <div key={i} style={{ background: on ? '#000' : 'transparent' }} />;
          })}
        </div>
        <span>Відскануйте QR-код, щоб завантажити застосунок</span>
      </div>
    </div>
    <div className="phone-shot">
      <img src="../../assets/hero-photo-oranges.jpg" alt="Phone showing ProCredit app" />
    </div>
  </section>
);
window.PromoCTA = PromoCTA;
