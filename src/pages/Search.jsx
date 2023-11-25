
import useSEO from "../Hooks/useSEO.jsx";
import MoviesCards from "../components/Movies/Movies.jsx";
import SeriesCards from "../components/Series/Series.jsx";
import { useParams } from "react-router-dom";

export default function Search() {
  useSEO({ title: "Home", description: "Home page" });
  const { title: titleParams } = useParams();
  const title = titleParams.replace(/-/g, " ");
  return (
    <div>
          <>
            <MoviesCards input={{title}} />
            
            <SeriesCards input={{title}} />
            
          </>
        
      
    </div>
  );
}
