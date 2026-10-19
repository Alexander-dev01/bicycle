import Item from "./Item";

const Tarifs = () => {
  const arrayTarifs = [
    {
      img: "welik1",
      h2: "Эконом вариант",
      text: [
        "Нет корзинки",
        "Нет переключения скоростей",
        "Нет комфорта",
      ],
      price: "300",
    },
    {
      img: "welik2",
      h2: "Базовый вариант",
      text: [
        "ЕСТЬ корзинка",
        "Нет переключения скоростей",
        "Нет комфорта",
      ],
      price: "400",
    },
    {
      img: "welik3",
      h2: "Скорость",
      text: [
        "ЕСТЬ переключение скорости",
        "ЕСТЬ комфорт",
        "ЕСТЬ стиль",
        "Нет корзинки",
      ],
      price: "500",
    },
    {
      img: "welik4",
      h2: "Премиум",
      text: [
        "ЕСТЬ переключение скорости",
        "ЕСТЬ комфорт",
        "ЕСТЬ стиль",
        "ЕСТЬ личный консультант",
        "Нет корзинки",
      ],
      price: "1000",
    },
  ];

  return (
    <ul className="welik-list">
      {arrayTarifs.map((element, index) => (
        <Item
          key={index}
          img={element.img}
          h2={element.h2}
          text={element.text}
          price={element.price}
        />
      ))}
    </ul>
  );
};

export default Tarifs;