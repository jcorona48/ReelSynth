
import useSEO from "../Hooks/useSEO.jsx";
import MoviesCards from "../components/Movies/Movies.jsx";
import SeriesCards from "../components/Series/Series.jsx";

export default function Home() {
  useSEO({ title: "Home", description: "Home page" });
  return (
    <div>
          <>
            <MoviesCards />
            
            <SeriesCards />
            
          </>
        
      
    </div>
  );
}
