"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Калькулятор монет Minter',
    amountPlaceholder: 'Количество',
    searchPlaceholder: 'Монета',
    forExample: 'Например',
    error: 'Неверное количество или монета не существует',
    modalTitle: 'Почему данные калькулятора не совпадают с реальными?',
    modalText0: `
    <p>
      Данные калькулятора всегда будут неточными.
      Фактический размер награды может отличаться в большую или меньшую сторону:
    </p>

    <ul>
      <li>
        Размер наград зависит от количества делегированных монет всеми участниками сети Minter.
        Невозможно предсказать сколько монет будет делегировано каждый день.
        Постоянная ределегация <b>уменьшает</b> фактический размер награды по сравнению с идеальным результатом.
      </li>
      <li>
        Размер наград зависит от комиссий, которые платят все участники сети Minter.
        Каждая транзакция, каждое сообщение в транзакции, каждый выпуск монет —
        все это требует оплаты комиссии.
        Невозможно предсказать сколько транзакций будет отправлено каждый день.
        Комиссия с транзакций  <b>увеличивает</b> фактический размер награды по сравнению с идеальным результатом.
      </li>
    </ul>
  `
};
//# sourceMappingURL=calc.js.map