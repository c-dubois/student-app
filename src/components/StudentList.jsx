import PropTypes from "prop-types";
import './StudentList.css';
import Student from './Student';

const StudentList = (props) => {
    const headingClass = 'student-list__heading';
    const listClass = 'student-list';

    const studentComponents = props.studentData.map((student, index) => {
        return (
            <li key={student.id}>
                <Student
                    id={student.id}
                    name={student.nameData}
                    email={student.emailData}
                    isPresent={student.isPresentData}
                    onPresenceToggle={props.onStudentPresenceToggle}
                ></Student>
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

StudentList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        nameData: PropTypes.string.isRequired,
        emailData: PropTypes.string.isRequired,
        isPresentData: PropTypes.bool.isRequired,
        onPresenceToggle: PropTypes.func.isRequired,
    })),
    onStudentPresenceToggle: PropTypes.func.isRequired,
};

export default StudentList;