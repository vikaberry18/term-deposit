// Benefits.jsx — Two-column benefits block
const Benefits = () => (
  <section className="pc-benefits">
    <h2>Чому ПроКредит Банк?</h2>
    <div className="pc-benefits-grid">
      <div className="pc-benefit">
        <h3>Захист даних</h3>
        <p>Захист кожної операції: багатофакторна перевірка, безпечний доступ через відбиток пальця або Face ID, постійний моніторинг підозрілих дій та сучасні технології захисту в мобільному банкінгу.</p>
      </div>
      <div className="pc-benefit">
        <h3>Гарантія повернення коштів</h3>
        <p>Банк-учасник Фонду гарантування вкладів. Під час воєнного стану та 3 місяці після його завершення — відшкодування вкладів у 100 % розмірі, надалі — не менше 600 000 грн.</p>
      </div>
    </div>
  </section>
);
window.Benefits = Benefits;
