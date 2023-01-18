import { useState } from 'react';
import './App.css';
import Inform from './components/Inform/Inform';
import ListAnswers from './components/ListAnswers/ListAnswers';
import Result from './components/Result/Result';

function App() {
  const [answers, setAnswers] = useState([
    { Q: null },
    { Q: null },
    { Q: null },
    { Q: null },
    { Q: null },
    { Q: null },
    { Q: null },
    { Q: null },
  ]);

  return (
    <div className="container">
      <Inform />
      <ListAnswers answers={answers} setAnswers={setAnswers} />
      <Result answers={answers} setAnswers={setAnswers} />
    </div>
  );
}

export default App;
