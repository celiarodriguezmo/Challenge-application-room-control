import SelectFloor from "./SelectFloor.js";

function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>Salas</h1>
      <SelectFloor />
      <span className='header__separator'></span>
    </header>
  );
}

export default Header;
