import Grade from '../Helper/Grade';
import s from './Inform.module.css';

const Inform = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Level I</h1>
      <div className={s.info}>
        Ниже приведены ответы на Ваши вопросы с возможностью оценить ответ и в
        конце получить результат по всем ответам. Под каждым ответом есть три
        варианта оценки:
      </div>
      <ul className={s.list}>
        <li>
          <Grade text="+" />
          <span className={s.description}>- ответ понравился</span>
        </li>
        <li>
          <Grade text="+-" />
          <span className={s.description}>
            - неполный ответ, можно было лучше
          </span>
        </li>
        <li>
          <Grade text="-" />
          <span className={s.description}>- плохой ответ</span>
        </li>
      </ul>
    </div>
  );
};
export default Inform;
