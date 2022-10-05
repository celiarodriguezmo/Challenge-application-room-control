import "../styles/App.scss";
import Header from "./Header.js";
import Floor from "./Floor.js";
import { useState } from "react";

function App() {
  const [paintFloor, setPaintFloor] = useState([]);
  const [rooms1, setRooms1] = useState([]);
  const [rooms2, setRooms2] = useState([]);
  const [selectedFloor, setSelectedFloor] = useState("Planta 1");

  const handleAddRoom = (data) => {
    let idButton = data.idButton;
    let rooms1Length = rooms1.length;
    let rooms2Length = rooms2.length;

    if (selectedFloor === "Planta 1") {
      setRooms1([
        ...rooms1,
        {
          idRoom: rooms1Length,
          capacity: "30",
          occupation: "100%",
        },
      ]);
      setPaintFloor([...rooms1, rooms1]);
    } else if (selectedFloor === "Planta 2") {
      setRooms2([
        ...rooms2,
        {
          idRoom: rooms2Length,
          capacity: "30",
          occupation: "100%",
        },
      ]);
      setPaintFloor([...rooms2, rooms2]);
    }
  };

  const handleCapacity = (data) => {
    const inputName = data.inputName;
    const inputValue = data.inputValue;
    const inputID = data.inputID;

    if (inputName !== "capacity") {
      return;
    }

    rooms1[inputID]["capacity"] = inputValue;
    rooms2[inputID]["capacity"] = inputValue;

    setRooms1([...rooms1]);
    setRooms2([...rooms2]);
  };

  const handleOccupation = (data) => {
    const inputName = data.inputName;
    const inputValue = data.inputValue;
    const inputID = data.inputID;

    if (inputName !== "occupation") {
      return;
    }

    rooms1[inputID]["occupation"] = inputValue;
    rooms2[inputID]["occupation"] = inputValue;

    setRooms1([...rooms1]);
    setRooms2([...rooms2]);
  };

  const handleSelectFloor = (data) => {
    let idFloor = data.idFloor;

    if (idFloor === "Planta 1") {
      setSelectedFloor("Planta 1");
      setPaintFloor([...rooms1]);
    } else {
      setSelectedFloor("Planta 2");
      setPaintFloor([...rooms2]);
    }
  };

  return (
    <div className='App'>
      <Header handleSelectFloor={handleSelectFloor} />
      <Floor
        selectedFloor={selectedFloor}
        handleAddRoom={handleAddRoom}
        paintFloor={paintFloor}
        handleCapacity={handleCapacity}
        handleOccupation={handleOccupation}
      />
    </div>
  );
}

export default App;
