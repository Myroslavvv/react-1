import "./index.css"; //імпорт стилів
import Heading from "../heading"; //імпорт компон.function Heading({ children, border }) з src/component/heading

//експ.компон.Description,який приймає свойства(пропси) title,children
export default function Description({ title, children }) {
  return (
    <div className="description">
      <Heading>{title}</Heading>
      <p className="description__text">{children}</p>
    </div>
  );
}
