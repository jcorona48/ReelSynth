import useSEO from "../Hooks/useSEO";

export default function Follow() {
  useSEO({ title: "Favorites", description: "Favorites page" });
  return (
    <div>
      <h1>Favorites</h1>
    </div>
  );
}