import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchFelid, setSearchFelid] = useState("");
  const [title, setTitle] = useState("Monsters Rolodex");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchMonster = event.target.value.toLowerCase();
    setSearchFelid(searchMonster);
  };

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const filteredMonster = monsters.filter((users) => {
    return users.name.toLowerCase().includes(searchFelid);
  });

  return (
    <>
      <div className="App">
        <h1 className="app-title">{title ? title : "Monsters Rolodex"}</h1>

        <input type="search" className="search-box" onChange={onTitleChange} placeholder="change title" />

        <SearchBox type="search" className="search-box" onChangeHandler={onSearchChange} placeholder="search monster" />

        <CardList monsters={filteredMonster} />
      </div>
    </>
  );
};

export default App;
