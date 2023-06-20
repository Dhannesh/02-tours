import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tourData, setTourData] = useState(true);
  const removeTour = (tourId) => {
    const newTour = tours.filter((tour) => tour.id !== tourId);
    setTours(newTour);
  };

  useEffect(() => {
    const getTours = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const tours = await response.json();
        setTours(tours);
        setTourData(tours);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getTours();
  }, []);
  // console.log(tours);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            type="button"
            className="btn"
            onClick={() => setTours(tourData)}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
