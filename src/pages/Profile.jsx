import useSEO from "../Hooks/useSEO.jsx";


export default function Profile() {
  useSEO({ title: "Profile", description: "Perfil page" });
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}