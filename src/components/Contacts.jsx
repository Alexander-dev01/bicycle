const Contacts = () => {
  return (
    <div className="contacts-parent">
      <div >
        <iframe style={{borderRadius:'20px'}}
          src="https://yandex.ru/map-widget/v1/?ll=42.162026%2C47.516433&mode=poi&poi%5Bpoint%5D=42.158979%2C47.515218&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D141118479806&source=serp_navig&z=16.6"
          width="560"
          height="400"
        />
      </div>

      <ul className="welik-text">
        <li>
          <b>Телефон</b>: 8 909 922 92 92
        </li>
        <li>
          <b>Адрес</b>: Улица Пушкина, дом Колотушкина
        </li>
        <li>
          <b>ИНН</b>: 123123123123123123
        </li>
      </ul>
    </div>
  )
}
export default Contacts
