import Grade from '../Helper/Grade';
import s from './Inform.module.css';

const Inform = (props) => {
  return (
    <div>
      <div className={s.info}>
        Ниже приведены ответы на Ваши вопросы с возможностью оценить ответ и в
        конце получить результат по всем ответам. Под каждым ответом есть три
        варианта оценки:
      </div>
      <ul className={s.list}>
        <li>
          <Grade text="+" />
          <span>- ответ понравился</span>
        </li>
        <li>
          <Grade text="+-" />
          <span>- неполный ответ, можно было лучше</span>
        </li>
        <li>
          <Grade text="-" />
          <span>- плохой ответ</span>
        </li>
      </ul>
    </div>
  );
};
export default Inform;
