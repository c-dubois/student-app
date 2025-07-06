import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
  const studentData = [
    {
      id: 1,
      name: 'Ada',
      email: 'ada@dev.org',
      isPresentData: false,
    },
    {
      id: 2, 
      name: 'Soo-ah',
      email: 'sooah@dev.org',
      isPresentData: false,
    },
    {
      id: 3, 
      name: 'Chrissy',
      email: 'chrissy@dev.org',
      isPresentData: true,
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
