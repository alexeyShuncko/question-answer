import { useState } from 'react';
import './App.css';
import Inform from './components/Inform/Inform';
import ListAnswers from './components/ListAnswers/ListAnswers';
import Result from './components/Result/Result';

function App() {
  const [answers, setAnswers] = useState({
    Q1: null,
    Q2: null,
    Q3: null,
    Q4: null,
    Q5: null,
    Q6: null,
    Q7: null,
    Q8: null,
  });

  console.log(answers);

  return (
    <div className="container">
      <Inform />
      <ListAnswers answers={answers} setAnswers={setAnswers} />
      <Result answers={answers} setAnswers={setAnswers} />
    </div>
  );
}

export default App;
