import './StudentList.css';
import Student from './Student';

const StudentList = (props) => {
    const headingClass = 'student-list__heading';
    const listClass = 'student-list';

    const studentComponents = props.studentData.map((student, index) => {
        return (
            <li key={index}>
                <Student name={student.name} email={student.email}></Student>
            </li>
        );
    });

    return (
        <section>
            <h2>Student List</h2>
            <ul>
                {studentComponents}
            </ul>
        </section>
    );
};

export default StudentList;