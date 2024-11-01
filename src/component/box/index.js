import "./index.css"; //імпорт стилів

//експ.компон.Box,який приймає свойства(пропси) children, className, shadow
export default function Box({ children, className, shadow }) {
  return (
    // повернемо: елем.div з класом box(РАМКА),а також додається умовний клас box--shadow,якщо shadow true
    // всередині div відображ.дочірні елем
    <div className={`box ${shadow ? "box--shadow" : ""} ${className} `}>
      {children}
    </div>
  );
}
