import { useState } from 'react';
import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import { kInitialStudentData } from './data/studentData';

function App() {
  const [studentData, setStudentData] = useState(kInitialStudentData);

  const toggleStudentPresence = (studentId) => {
    const students = studentData.map((student) => {
      if (student.id === studentId) {
        return {
          ...student,
          isPresentData: !student.isPresentData,
        };
      } else {
        return student;
      }
    });
    setStudentData(students);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <StudentList 
      studentData={studentData}
      onStudentPresenceToggle={toggleStudentPresence}
      ></StudentList>
    </main>
  );
}

export default App;
