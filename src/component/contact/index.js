import "./index.css";
import image from "./ellipse.svg";

export default function Contact({ name, rate, time, info, phone }) {
  return (
    <div className="contact">
      <div className="contact__item">
        <img src={image} alt="avatar" className="contact__image" />
        <div className="contact__details">
          <span className="contact__text">Господар - {name}</span>
          <div className="contact__sub-block">
            <span className="contact__sub-value">{phone}</span>
            <span className="contact__sub-value">{time}</span>
            <span className="contact__sub-value">
              {rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <span className="contact__sub-value">{info}</span>
    </div>
  );
}
