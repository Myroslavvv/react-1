import "./index.css";
import Heading from "../heading"; //ЗАГОЛОВОК-"import Heading" має бути якщо є <Heading></Heading>
import Box from "../box"; //РАМКА-"import Box" має бути якщо є <Box></Box>
import ListItem from "../list-item"; //ПІДКРЕСЛЕННЯ-"import ListItem" має бути якщо є <ListItem></ListItem>

export default function Attraction({ list }) {
  return (
    <Box shadow className="attraction__block">
      <Heading>Пам'ятки поблизу</Heading>

      <div className="attraction__list">
        {list.map(({ id, ...rest }) => (
          <ListItem key={id}>
            <Item {...rest} />
          </ListItem>
        ))}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <div className="attraction">
      <span className="attraction__title">
        <a href={link}>{name}</a>
      </span>
    </div>
  );
}
