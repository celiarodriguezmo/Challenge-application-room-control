import "../styles/App.scss";
import Header from "./Header.js";
import Floor from "./Floor.js";
import { useState } from "react";

function App() {
  const [rooms, setRooms] = useState([]);

  const [room, setRoom] = useState({
    idRoom: 0,
    capacity: "30",
    occupation: "100%",
  });

  const handleAddRoom = (data) => {
    let idButton = data.idButton;

    if (idButton === "addRoom") {
      setRooms([...rooms, room]);
    } else {
    }
  };

  const handleCapacity = (data) => {
    const inputName = data.inputName;
    const inputValue = data.inputValue;
    if (inputName === "capacity") {
      setRoom({ capacity: inputValue });
    }
  };

  const handleOccupation = (data) => {
    const inputName = data.inputName;
    const inputValue = data.inputValue;
    if (inputName === "occupation") {
      setRoom({ occupation: inputValue });
    }
  };

  return (
    <div className='App'>
      <Header />
      <Floor
        handleAddRoom={handleAddRoom}
        rooms={rooms}
        room={room}
        handleCapacity={handleCapacity}
        handleOccupation={handleOccupation}
      />
    </div>
  );
}

export default App;
