// Header.jsx — Red top bar with white logo + language toggle
const Header = ({ lang, onToggleLang }) => (
  <header className="pc-header">
    <div className="pc-header-inner">
      <div className="pc-header-left">
        <img src="../../assets/procredit-logo-white-transparent.png" alt="ProCredit Bank" />
      </div>
      <button className="pc-lang" onClick={onToggleLang}>{lang === 'uk' ? 'EN' : 'UK'}</button>
    </div>
  </header>
);
window.Header = Header;
