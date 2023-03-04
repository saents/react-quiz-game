import React from "react";

const ResultModal = ({ correct, questionsLib }) => {
  return (
    <div className='result'>
      <img
        src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
        alt='img'
      />
      <h2>
        Вы отгадали {correct} ответа из {questionsLib.length}
      </h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
};

export default ResultModal;
