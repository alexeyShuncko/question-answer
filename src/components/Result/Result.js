import s from './Result.module.css';

const Result = ({ answers, setAnswers }) => {
  const resetHandler = () => {
    setAnswers({
      Q1: null,
      Q2: null,
      Q3: null,
      Q4: null,
      Q5: null,
      Q6: null,
      Q7: null,
      Q8: null,
    });
  };

  let arrAnswers = Object.values(answers);
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
          {Object.values(answers).reduce((acc, sum) => acc + sum, 0)}%
        </span>
        {full && <span className={s.noFull}>!Не все ответы оценены</span>}
      </div>
      <button onClick={resetHandler} className={s.btn}>
        Обнулить оценки
      </button>
    </div>
  );
};
export default Result;
