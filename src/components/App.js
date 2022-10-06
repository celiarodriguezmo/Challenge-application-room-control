import "../styles/App.scss";
import Header from "./Header.js";
import Floor from "./Floor.js";
import { useState } from "react";

function App() {
  let rexNum = /^[0-9]*$/;
  let idRoom = "";

  const [paintFloor, setPaintFloor] = useState([]);
  const [rooms1, setRooms1] = useState([]);
  const [rooms2, setRooms2] = useState([]);
  const [selectedFloor, setSelectedFloor] = useState("Planta 1");

  const handleAddRoom = (data) => {
    let idButton = data.idButton;
    let rooms1Length = rooms1.length;
    let rooms2Length = rooms2.length;

    if (selectedFloor === "Planta 1") {
      setPaintFloor([
        ...rooms1,
        {
          idRoom: rooms1Length,
          capacity: "",
          occupation: "",
        },
      ]);

      setRooms1([
        ...rooms1,
        {
          idRoom: rooms1Length,
          capacity: "",
          occupation: "",
        },
      ]);
    } else if (selectedFloor === "Planta 2") {
      setPaintFloor([
        ...rooms2,
        {
          idRoom: rooms2Length,
          capacity: "",
          occupation: "",
        },
      ]);
      setRooms2([
        ...rooms2,
        {
          idRoom: rooms2Length,
          capacity: "",
          occupation: "",
        },
      ]);
    } else {
      setPaintFloor([...rooms1]);
      setPaintFloor([...rooms2]);
    }
  };

  function handleModifyRoom(data) {
    const idModify = data.idModify;
    console.log(idModify);
  }

  const handleDeleteIcon = (data) => {
    let idRoom = data.idRoom;

    if (selectedFloor === "Planta 1") {
      const salaDelete = rooms1.filter(
        (item) => item.idRoom !== parseInt(idRoom)
      );
      setRooms1([...salaDelete]);
      setPaintFloor([...salaDelete]);
    } else if (selectedFloor === "Planta 2") {
      const salaDelete = rooms2.filter(
        (item) => item.idRoom !== parseInt(idRoom)
      );
      setRooms2([...salaDelete]);
      setPaintFloor([...salaDelete]);
    }
  };

  const handleCapacity = (data) => {
    const inputName = data.inputName;
    const inputValue = data.inputValue;

    const inputID = data.inputID;

    if (inputName === "capacity" && selectedFloor === "Planta 1") {
      if (!rexNum.test(inputValue)) {
        console.log("Numbers Only");
      } else {
        rooms1[inputID]["capacity"] = inputValue;
        setPaintFloor([...rooms1]);
      }
    } else if (inputName === "capacity" && selectedFloor === "Planta 2") {
      if (!rexNum.test(inputValue)) {
        console.log("Numbers Only");
      } else {
        rooms2[inputID]["capacity"] = inputValue;
        setPaintFloor([...rooms2]);
      }
    }
  };

  const handleOccupation = (data) => {
    const inputName = data.inputName;
    const inputValue = data.inputValue;

    const inputID = data.inputID;

    if (inputName === "occupation" && selectedFloor === "Planta 1") {
      if (!rexNum.test(inputValue)) {
        console.log("Numbers Only");
      } else {
        rooms1[inputID]["occupation"] = inputValue;
        setPaintFloor([...rooms1]);
      }
    } else if (inputName === "occupation" && selectedFloor === "Planta 2") {
      if (!rexNum.test(inputValue)) {
        console.log("Numbers Only");
      } else {
        rooms2[inputID]["occupation"] = inputValue;
        setPaintFloor([...rooms2]);
      }
    }
  };

  const handleSelectFloor = (data) => {
    let idFloor = data.idFloor;

    if (idFloor === "Planta 1") {
      setSelectedFloor("Planta 1");

      // setRooms1([...rooms1]);

      setPaintFloor([...rooms1]);
    } else {
      setSelectedFloor("Planta 2");
      // setRooms2([...rooms2]);
      setPaintFloor([...rooms2]);
    }
  };

  return (
    <div className='App'>
      <Header handleSelectFloor={handleSelectFloor} />
      <Floor
        idRoom={idRoom}
        rooms1={rooms1}
        rooms2={rooms2}
        handleDeleteIcon={handleDeleteIcon}
        handleModifyRoom={handleModifyRoom}
        selectedFloor={selectedFloor}
        handleAddRoom={handleAddRoom}
        paintFloor={paintFloor}
        setPaintFloor={setPaintFloor}
        handleCapacity={handleCapacity}
        handleOccupation={handleOccupation}
      />
    </div>
  );
}

export default App;
