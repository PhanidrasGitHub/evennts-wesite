import { FaMapMarkerAlt } from "react-icons/fa";

function getDirectImageUrl(driveUrl) {
  const match = driveUrl.match(/\/d\/([^/]+)\//);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  return driveUrl;
}

const UpcomingEvents = (props) => {
  const { listitemDetails } = props;
  const { cityName, distanceKm, eventName, weather, imgUrl } = listitemDetails;
  const directImgUrl = getDirectImageUrl(imgUrl);
  const distance = parseInt(distanceKm / 1000);
  console.log(directImgUrl);
  return (
    <li>
      <img src={directImgUrl} alt={eventName} />
      <div className="upcoming-card-content">
        <div className="location">
          <h2>After Note Near</h2>
          <p>
            <FaMapMarkerAlt /> {cityName}
          </p>
        </div>
        <div className="date-weather">
          <p>
            {weather}| {distance} Km
          </p>
        </div>
      </div>
    </li>
  );
};

export default UpcomingEvents;
