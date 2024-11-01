import "./index.css";
import Heading from "../heading"; //ЗАГОЛОВОК-"import Heading" має бути якщо є <Heading></Heading>
import Box from "../box"; //РАМКА-"import Box" має бути якщо є <Box></Box>
import ListItem from "../list-item"; //ПІДКРЕСЛЕННЯ-"import ListItem" має бути якщо є <ListItem></ListItem>

export default function Additional({
  rules,
  policy,
  transportation,
  languages,
  offers,
  instructions,
}) {
  return (
    //shadow дає тінь до рамки
    <Box shadow className="additional">
      <ul className="additional__list">
        <ListItem>
          <span>
            <Heading>Додаткові властивості</Heading>
          </span>
        </ListItem>

        <ListItem title="Правила дому">
          <span>{rules}</span>
        </ListItem>
        <ListItem title="Політика скасування">
          <span>{policy}</span>
        </ListItem>
        <ListItem title="Місцевий трансорт">
          <span>{transportation}</span>
        </ListItem>
        <ListItem title="Мови хоста">
          <span>{languages}</span>
        </ListItem>
        <ListItem title="Спеціальні пропозиції">
          <span>{offers}</span>
        </ListItem>
        <ListItem title="Інструкції щодо використання">
          <span>{instructions}</span>
        </ListItem>
      </ul>
    </Box>
  );
}
