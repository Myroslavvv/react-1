import "./index.css";
import Heading from "../heading"; //ЗАГОЛОВОК-"import Heading" має бути якщо є <Heading></Heading>
import Box from "../box"; //РАМКА-"import Box" має бути якщо є <Box></Box>
import ListItem from "../list-item"; //ПІДКРЕСЛЕННЯ-"import ListItem" має бути якщо є <ListItem></ListItem>
import quest from "./quests.svg"; //ІКОНКА-для quests(дописали в ListItem imageSrc={quest})
import bedroom from "./bedrooms.svg";
import bed from "./beds.svg";
import bath from "./baths.svg";

export default function Room({ guests, bedrooms, beds, baths }) {
  //guests дописуєм в App.js( <Room guests={data.property_details.guests}) />
  //bedrooms дописуєм в App.js( <Room bedrooms={data.property_details.bedrooms}) />
  return (
    //shadow дає тінь до рамки
    <Box shadow className="room">
      <ul className="room__item">
        <ListItem>
          <span>
            <Heading>Деталі властивості:</Heading>
          </span>
        </ListItem>

        <ListItem imageSrc={quest}>
          {/* <ListItem> */}
          <span>{guests}</span>
          <span>Гості</span>
        </ListItem>
        <ListItem imageSrc={bedroom}>
          <span>{bedrooms}</span>
          <span>Спальні</span>
        </ListItem>
        <ListItem imageSrc={bed}>
          <span>{beds}</span>
          <span>Ліжко</span>
        </ListItem>
        <ListItem imageSrc={bath}>
          <span>{baths}</span>
          <span>Спальна кімната</span>
        </ListItem>
      </ul>
    </Box>
  );
}
