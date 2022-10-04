import "../styles/App.scss";
import Header from "./Header.js";
import Floor from "./Floor.js";
import { useState } from "react";

function App() {
  const [rooms, setRooms] = useState([]);

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

  return (
    <div className='App'>
      <Header />
      <Floor
        handleAddRoom={handleAddRoom}
        rooms={rooms}
        handleCapacity={handleCapacity}
        handleOccupation={handleOccupation}
      />
    </div>
  );
}

export default App;
