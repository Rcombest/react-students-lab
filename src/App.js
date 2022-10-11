import './App.css';
import { studentsList } from './data';
import Student from './Student';

function App() {
  return (
    <div>
      {studentsList.map(student =>
        <Student key={student.name} student={student} />
      )}
      
    </div>
  );
}

export default App;
