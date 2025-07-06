import { useState } from 'react';
import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import { kInitialStudentData } from './data/studentData';

function App() {
  const [studentData, setStudentData] = useState(kInitialStudentData);

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <StudentList studentData={studentData}></StudentList>
    </main>
  );
}

export default App;
