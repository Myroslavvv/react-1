import "./index.css"; //імпорт стилів

//створимо компон.Photo,який приймає дві власт.(src, name)-зображ і текст
export default function Photo({ src, name }) {
  return <img src={src} alt={name} className="photo" />; //компонент повертає зображ src; alt-покаже текст,якщо нема зображ;className-додає стилі
}
