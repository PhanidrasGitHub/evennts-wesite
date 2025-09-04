import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import { LuMoveRight } from "react-icons/lu";
import RecommenedShow from "../components/RecommenedShow";
import UpcomingEvents from "../components/UpcomingEvents";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const token = JSON.parse(localStorage.getItem("jwtToken"));
  const navigate = useNavigate();
  if (token === null) {
    navigate("/login");
  }
  const [recommenedEventsList, setrecommendedEventList] = useState([]);
  const [isloading, setisLoading] = useState(true);
  const [upcomingEventslist, setUpcomingList] = useState([]);
  const code = import.meta.env.VITE_AZURE_KEY;


  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    const getdata = async () => {
      try {
        const res = await fetch(
          `https://gg-backend-assignment.azurewebsites.net/api/Events?code=${code}&type=reco`
        );
        const data = await res.json();
        const upcomingrep = await fetch(
          `https://gg-backend-assignment.azurewebsites.net/api/Events?code=${code}&page=1&type=upcoming`
        );
        const upcomingdata = await upcomingrep.json();
        //console.log(data.events);
        setrecommendedEventList(data.events);
        //console.log(upcomingdata.events);
        setUpcomingList(upcomingdata.events);
        setisLoading(false);
      } catch (error) {
        //console.log(error);
      }
    };
    getdata();
  }, [token, navigate]);

  return (
    <div className="main-container">
      <Navbar />
      <div className="main">
        <div className="main-text">
          <h1>
            Discover Exiciting Events happening Near you - stay tuned for
            Updates!
          </h1>
          <p>
            Dorem ipsum dolor sit,amet consectetur adipiscing elit.Nunc
            vulputate libero et velit interdum ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
        <div className="recomented-shows">
          <div className="side-heading-container">
            <div className="heading-container">
              {" "}
              <h2 className="recommended-heading">
                Recommented Shows <LuMoveRight />
              </h2>
            </div>

            <p className="seeall">see all</p>
          </div>

          {isloading ? (
            <div className="spinner"></div>
          ) : (
            <ul className="recomented-shows-list">
              {recommenedEventsList.map((event) => (
                <RecommenedShow key={event.cityName} itemDetails={event} />
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="upcoming-events">
        <div className="side-heading-container">
          <div className="heading-container">
            <h2 className="upcoming-heading">
              Upcoming Events
              <LuMoveRight />
            </h2>
          </div>
          <p className="upcom-sellall">sell all</p>
        </div>

        {isloading ? (
          <div className="spinner"></div>
        ) : (
          <ul className="upcoming-event-list">
            {upcomingEventslist.map((event) => (
              <UpcomingEvents key={event.eventName} listitemDetails={event} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
