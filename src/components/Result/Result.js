import s from './Result.module.css';

const Result = ({ answers, setAnswers }) => {
  const resetHandler = () => {
    setAnswers([
      { Q: null },
      { Q: null },
      { Q: null },
      { Q: null },
      { Q: null },
      { Q: null },
      { Q: null },
      { Q: null },
    ]);
  };

  let arrAnswers = answers.map((a) => a.Q);
  const check = () => {
    for (let index = 0; index < arrAnswers.length; index++) {
      const element = arrAnswers[index];
      if (element === null) {
        continue;
      } else return true;
    }
    return false;
  };
  let full = arrAnswers.includes(null) && check();

  return (
    <div className={s.result}>
      <div>
        <span className={s.percent}>Результат:</span>
        <span className={s.percent}>
          {arrAnswers.reduce((acc, sum) => acc + sum, 0)}%
        </span>
        {full && <span className={s.noFull}>Не все ответы оценены!</span>}
      </div>
      <button onClick={resetHandler} className={s.btn}>
        Обнулить оценки
      </button>
    </div>
  );
};
export default Result;
