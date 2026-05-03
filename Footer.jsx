// Footer.jsx — Red footer band with phones, app stores, socials
const Footer = () => (
  <footer className="pc-footer">
    <div className="pc-footer-inner">
      <div>
        <a className="phone" href="tel:0800500990"><p className="phone">0 800 50 09 90</p></a>
        <p className="phone-cap">Безкоштовно для дзвінків по Україні</p>
        <a className="phone" href="tel:+380445901000"><p className="phone">+380 44 590 10 00</p></a>
        <p className="phone-cap">Для дзвінків з-за кордону</p>
      </div>
      <div>
        <p style={{ fontSize: 14, margin: '0 0 12px', color: '#F8C9CE' }}>Застосунок ProCredit Bank Ukraine</p>
        <div className="app-row">
          <div className="uaflag">
            <div style={{ width: 36, height: 24, borderRadius: 4, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1, background: '#005BBB' }}></div>
              <div style={{ flex: 1, background: '#FFD500' }}></div>
            </div>
          </div>
          <a className="pc-store" href="https://play.google.com/store/apps/details?id=com.procredit.bank.ukraine" target="_blank" rel="noopener noreferrer">
            <span style={{ fontSize: 18 }}>▶</span>
            <div><small>Завантажити з</small><strong>Google Play</strong></div>
          </a>
          <a className="pc-store" href="https://apps.apple.com/ua/app/procredit-bank-ukraine/id1234567890" target="_blank" rel="noopener noreferrer">
            <span style={{ fontSize: 18 }}></span>
            <div><small>Завантажити з</small><strong>App Store</strong></div>
          </a>
        </div>
      </div>
      <div>
        <p style={{ fontSize: 14, margin: '0 0 12px', color: '#F8C9CE', textAlign: 'right' }}>Наші соцмережі</p>
        <div className="pc-socials">
          <a href="https://www.facebook.com/ProCreditBankUkraine" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
          <a href="https://www.instagram.com/procreditbank_ukraine/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          <a href="https://www.linkedin.com/company/procredit-bank-ukraine/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg></a>
        </div>
      </div>
    </div>
    <div className="pc-footer-bottom">
      <span>АТ «ПроКредит Банк» є учасником Фонду гарантування вкладів фізичних осіб.<br/>© АТ «ПроКредит Банк». Ліцензія НБУ №195 від 13.10.2011. У державному реєстрі банків №276.</span>
      <img src="../../assets/procredit-logo-white-transparent.png" alt="ProCredit Bank" />
    </div>
  </footer>
);
window.Footer = Footer;
