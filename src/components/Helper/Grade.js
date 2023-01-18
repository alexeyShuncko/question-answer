import s from './Grade.module.css';

const Grade = ({ text }) => {
  let color = '';
  if (text === '+') {
    color = '#7cd679';
  } else if (text === '-') {
    color = '#f09898';
  } else if (text === '+-') {
    color = '#d8e74e';
  }
  return (
    <button className={s.grade} style={{ '--clr': color }}>
      <span>{text}</span>
    </button>
  );
};
export default Grade;
