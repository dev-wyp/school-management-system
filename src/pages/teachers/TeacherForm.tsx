import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { teacherStore } from '../../stores';

const TeacherForm = () => {
    const teacher_id = useParams().tch_id;
    // const inputRef = useRef();
    const [value, setValue] = useState('');
    // const teachers = teacherStore(state => state.teachers)
    const addTeacher = teacherStore(state => state.addTeacher);
    const add = () => {
      addTeacher(value)
      setValue('');
    }
  return (
    <>
      <div>TeacherForm {teacher_id}</div>

      {/* <ul>
      {
        teachers.map(p => (
          <li>{p}</li>
        ))
      }
    </ul> */}
      <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
      <button onClick={add}>Add</button>
    </>
  )
}

export default TeacherForm