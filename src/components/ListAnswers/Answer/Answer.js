import Grade from '../../Helper/Grade';
import s from './Answer.module.css';

const Answer = ({ data, index, answers, setAnswers }) => {
  const clickGrade = (e) => {
    if (e.target.localName !== 'div') {
      if (e.target.innerText === '+') {
        answers[index].Q = 12.5;
        setAnswers([...answers]);
      } else if (e.target.innerText === '-') {
        answers[index].Q = 0;
        setAnswers([...answers]);
      } else {
        answers[index].Q = 6.25;
        setAnswers([...answers]);
      }
    }
  };

  const checkSign = () => {
    if (answers[index].Q === 12.5) {
      return '+';
    } else if (answers[index].Q === 6.25) {
      return '+-';
    } else if (answers[index].Q === 0) {
      return '-';
    }
  };

  const sign = checkSign();
  const checkColor = () => {
    if (answers[index].Q === 12.5) {
      return '#7cd679';
    } else if (answers[index].Q === 6.25) {
      return '#d8e74e';
    } else if (answers[index].Q === 0) {
      return '#f09898';
    }
  };
  let bgClr = checkColor();

  return (
    <div className={s.container}>
      <div className={s.grade}>{sign && <Grade text={sign} />}</div>
      <div className={s.answer}>
        <div className={s.answerText} style={{ backgroundColor: bgClr }}>
          <div>
            <span className={s.nameText}>Вопрос:</span> {data.Q.question}
          </div>
          <div>
            <span className={s.nameText}>Ответ:</span>{' '}
            <span style={{ whiteSpace: 'pre-line', fontStyle: 'italic' }}>
              {data.Q.answer}
            </span>
          </div>
        </div>
        <div className={s.blockBtn} onClick={clickGrade}>
          <Grade text="+" />
          <Grade text="+-" />
          <Grade text="-" />
        </div>
      </div>
    </div>
  );
};
export default Answer;
