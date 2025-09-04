import { FaMapMarkerAlt } from "react-icons/fa";

function getDirectImageUrl(driveUrl) {
  const match = driveUrl.match(/\/d\/([^/]+)\//);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  return driveUrl;
}
const dateconversion = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
const RecommenedShow = (props) => {
  const { itemDetails } = props;
  const { cityName, date, distanceKm, eventName, weather, imgUrl } =
    itemDetails;
  const directImgUrl = getDirectImageUrl(imgUrl);
  const formattedDate = dateconversion(date);
  const distance = parseInt(distanceKm / 1000);
  console.log(directImgUrl);
  return (
    <li
      className="recomented-shows-item"
      style={{
        backgroundImage: `url(${directImgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        width: "250px",
      }}
    >
      <div className="card-content">
        <div className="location">
          <h2>Make Agree</h2>
          <p>
            <FaMapMarkerAlt /> {cityName}
          </p>
        </div>
        <div className="date-weather">
          <h4>{formattedDate}</h4>
          <p>
            {weather}| {distance} Km
          </p>
        </div>
      </div>
    </li>
  );
};

export default RecommenedShow;
