import tmdbApi from "@/api/tmdbApi";
import { useEffect, useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  const [popularMovies, setPopularMovies] = useState();

  const getPopularMovies = async () => {
    const params = {}
    const response = await tmdbApi.getMoviesList('popular', {params})
    console.log(response);
    
  };

  useEffect(() => {
    getPopularMovies()
  }, []);
  return (
    <section className="hero w-full pt-24">
      <div className="hero__container mx-auto w-5/6">Hero</div>
    </section>
  );
};

export default Hero;
