import React from "react";

//Ninjas dejó de ser una clase componente y se convirtió en una función ya que no necesita un state

//se puede dejar (props) o se puede poner ({ninjas})
const Ninjas = ({ ninjas, deleteNinja }) => {
  //const { ninjas } = props; //se elimina porque se dejó ({ninjas}) en lugar de (props)
  const ninjaList = ninjas.map(ninja => {
    if (ninja.age > 20) {
      return (
        //se pone () => {deleteNinja(ninja.id)} en lugar de solamente deleteNinja(ninja.id) porque no queremos invocar la funcion todo el tiempo (cuando se crea la lista), sólo cuando se da clic al botón. Por eso se cambia a funcion flecha
        <div className="Ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
          <button
            onClick={() => {
              deleteNinja(ninja.id);
            }}
          >
            Delete ninja
          </button>
        </div>
      );
    } else {
      return null;
    }
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
