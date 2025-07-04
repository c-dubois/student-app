import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
  const studentData = [
    {
      name: 'Ada',
      email: 'ada@dev.org'
    },
    {
      name: 'Soo-ah',
      email: 'sooah@dev.org'
    },
    {
      name: 'Chrissy',
      email: 'chrissy@dev.org'
    }
  ];

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <StudentList studentData={studentData}></StudentList>
    </main>
  );
}

export default App;
