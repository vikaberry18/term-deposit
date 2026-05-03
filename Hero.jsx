// Hero.jsx — Full-bleed two-column hero: red panel with right-rounded corners + lifestyle photo
const Hero = ({ title, qrCaption }) => (
  <section className="pc-hero">
    <div className="pc-hero-card">
      <h1>{title}</h1>
      <div className="pc-hero-qr">
        <div className="qr-img" style={{
          display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gridTemplateRows: 'repeat(8, 1fr)', gap: 1
        }} aria-label="QR code">
          {Array.from({length: 64}).map((_, i) => {
            const on = ((i * 7 + (i % 5) * 3) % 11) > 4;
            return <div key={i} style={{ background: on ? '#000' : 'transparent' }} />;
          })}
        </div>
        <p>{qrCaption}</p>
      </div>
    </div>
    <div className="pc-hero-photo">
      <img src="../../assets/hero-photo-oranges.jpg" alt="Phone with banking app, oranges, wallet, tea" />
    </div>
  </section>
);
window.Hero = Hero;
