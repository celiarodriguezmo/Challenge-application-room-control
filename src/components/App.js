import "../styles/App.scss";
import Header from "./Header.js";
import Floor from "./Floor.js";
import { useState } from "react";

function App() {
  const [rooms, setRooms] = useState([]);
  const [rooms2, setRooms2] = useState([]);

  const [selectedFloor, setSelectedFloor] = useState("Planta 1");

  const handleAddRoom = (data) => {
    let idButton = data.idButton;
    let roomsLength = rooms.length;

    if (idButton === "addRoom") {
      setRooms([
        ...rooms,
        {
          idRoom: roomsLength,
          capacity: "30",
          occupation: "100%",
        },
      ]);
    } else {
    }
  };

  const handleCapacity = (data) => {
    const inputName = data.inputName;
    const inputValue = data.inputValue;
    const inputID = data.inputID;

    if (inputName !== "capacity") {
      return;
    }

    rooms[inputID]["capacity"] = inputValue;

    setRooms([...rooms]);
  };

  const handleOccupation = (data) => {
    const inputName = data.inputName;
    const inputValue = data.inputValue;
    const inputID = data.inputID;

    if (inputName !== "occupation") {
      return;
    }

    rooms[inputID]["occupation"] = inputValue;

    setRooms([...rooms]);
  };

  const handleSelectFloor = (data) => {
    let idFloor = data.idFloor;
    console.log(idFloor);

    if (idFloor === "Planta 1") {
      setSelectedFloor("Planta 1");
    } else {
      setSelectedFloor("Planta 2");
    }
  };

  return (
    <div className='App'>
      <Header handleSelectFloor={handleSelectFloor} />
      <Floor
        selectedFloor={selectedFloor}
        handleAddRoom={handleAddRoom}
        rooms={rooms}
        rooms2={rooms2}
        handleCapacity={handleCapacity}
        handleOccupation={handleOccupation}
      />
    </div>
  );
}

export default App;
