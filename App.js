import { useState } from "react";
import { Home, Productos } from "./src/screens";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("")

  return (
    categorySelected ? (<Productos category={setCategorySelected}/>
    ) : (
    <Home setCategorySelected={setCategorySelected} />)
  );
}
