import "./index.css";
import Heading from "../heading"; //ЗАГОЛОВОК-"import Heading" має бути якщо є <Heading></Heading>
import Box from "../box"; //РАМКА-"import Box" має бути якщо є <Box></Box>
import ListItem from "../list-item"; //ПІДКРЕСЛЕННЯ-"import ListItem" має бути якщо є <ListItem></ListItem>
import hasPoolIcon from "./hasPool.svg"; //ІКОНКА-для hasPool(дописали в ListItem imageSrc={hasPoolIcon})
import hasGymIcon from "./hasGym.svg";
import hasFreeBreakfastIcon from "./hasFreeBreakfast.svg";
import hasFreeWiFiIcon from "./hasFreeWiFi.svg";
import hasParkingIcon from "./hasParking.svg";
import hasPetsAllowedIcon from "./hasPetsAllowed.svg";
import hasAirportShuttleIcon from "./hasAirportShuttle.svg";
import hasConciergeServiceIcon from "./hasConciergeService.svg";
import hasRoomServiceIcon from "./hasRoomService.svg";
import hasChildFriendlyIcon from "./hasChildFriendly.svg";

export default function Comfort({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  //guests дописуєм в App.js( <Room guests={data.property_details.guests}) />
  //bedrooms дописуєм в App.js( <Room bedrooms={data.property_details.bedrooms}) />
  return (
    //shadow дає тінь до рамки
    <Box shadow className="comfort">
      <ul className="comfort__list">
        <ListItem>
          <span>
            <Heading>Зручності</Heading>
          </span>
        </ListItem>

        <ListItem imageSrc={hasPoolIcon}>
          <span>Басейн</span>
        </ListItem>
        <ListItem imageSrc={hasGymIcon}>
          <span>Спортивний зал</span>
        </ListItem>
        <ListItem imageSrc={hasFreeBreakfastIcon}>
          <span>Безкоштовний сніданок</span>
        </ListItem>
        <ListItem imageSrc={hasFreeWiFiIcon}>
          <span>Безкоштовний Wi-Fi</span>
        </ListItem>
        <ListItem imageSrc={hasParkingIcon}>
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>
        <ListItem imageSrc={hasPetsAllowedIcon}>
          <span>Дозволено розміщення з домашніми тваринами</span>
        </ListItem>
        <ListItem imageSrc={hasAirportShuttleIcon}>
          <span>Трансфер до/з аеропорту</span>
        </ListItem>
        <ListItem imageSrc={hasConciergeServiceIcon}>
          <span>Консьєрж-сервіс</span>
        </ListItem>
        <ListItem imageSrc={hasRoomServiceIcon}>
          <span>Обслуговування номерів</span>
        </ListItem>
        <ListItem imageSrc={hasChildFriendlyIcon}>
          <span>Підходить для дітей</span>
        </ListItem>
      </ul>
    </Box>
  );
}
