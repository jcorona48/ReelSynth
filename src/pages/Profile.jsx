import useSEO from "../Hooks/useSEO.jsx";
import ProfileUser from "../components/Profile/Profile.jsx";

export default function Home() {
  useSEO({ title: "Profile", description: "Profile page" });
  return (
    <div>
          <>
            <ProfileUser />
          </>
        
      
    </div>
  );
}