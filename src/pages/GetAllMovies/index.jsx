import { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import CardMovie from "../../components/CardMovie";

export default function GetAllMovies() {
  const [movies, setMovies] = useState([]);

  const getAllMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://cine-afro-backend.onrender.com/movies"
      );
      setMovies(data.movies);
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <>
      <section>
        <div>
          <Header />
        </div>
        <div className="mt-20">
          <div className="flex justify-start ml-40">
            <h1 className="text-dark_orange text-3xl underline">Filmes</h1>
          </div>
          <div className="flex flex-wrap justify-evenly gap-8 mt-20">
            {Array.isArray(movies) &&
              movies.map((i) => (
                <CardMovie
                  key={i.id}
                  title={i.title}
                  image={i.url_image}
                  synopsis={i.synopsis}
                  link_trailer={i.trailer}
                  link_watch={i.streaming}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
