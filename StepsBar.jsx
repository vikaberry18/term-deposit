// StepsBar.jsx — Three numbered onboarding steps
const Steps = () => (
  <section className="pc-steps">
    <h2>Швидке відкриття депозиту онлайн</h2>
    <div className="pc-steps-grid">
      <div className="pc-step">
        <div className="num">1</div>
        <div className="title">Завантажте застосунок</div>
        <p className="body">Доступний для <a href="#">Android</a> та <a href="#">iOS</a></p>
      </div>
      <div className="pc-step">
        <div className="num">2</div>
        <div className="title">Пройдіть реєстрацію</div>
        <p className="body">Онлайн для відкриття рахунку</p>
      </div>
      <div className="pc-step">
        <div className="num">3</div>
        <div className="title">Відкрийте гривневий депозит</div>
        <p className="body">У застосунку за 2–3 хвилини</p>
      </div>
    </div>
  </section>
);
window.Steps = Steps;
