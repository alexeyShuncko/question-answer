import { data } from '../Data';
import Answer from './Answer/Answer';

const ListAnswers = ({ answers, setAnswers }) => {
  return (
    <div style={{ marginBottom: '40px', marginTop: '40px' }}>
      {data.map((a, i) => (
        <Answer
          key={i}
          answers={answers}
          index={i}
          setAnswers={setAnswers}
          data={data[i]}
        />
      ))}
    </div>
  );
};
export default ListAnswers;
