import React from "react";
import "../Quiz/Quiz.css";

/*Muestro los botones de las opciones*/
function Options(props) {
  const data = [
    {
      text: "Ver tutorial de HostingBook", /*"Linux",*/
      handler: props.actionProvider.handleTutorialQuiz,
      id: 1
    },
    {
      text: "Contactar con HostingBook", /*"Docker",*/
      handler: props.actionProvider.handleContactarQuiz,
      id: 2
    },
    {
      text: "Redes Sociales HostingBook", /*"Sql",*/
      handler: props.actionProvider.handleRedesQuiz,
      id: 3
    }
  ];
  const optionsList = data.map((option) => (
    <button key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));
  return (
    <div>
      <p>{optionsList}</p>
    </div>
  );
}
export default Options;