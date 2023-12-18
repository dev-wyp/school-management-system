import React from 'react'
import { useParams } from 'react-router-dom'

const StudentForm = () => {
    const student_id = useParams().stu_id;
  return (
    <div>StudentForm {student_id}</div>
  )
}

export default StudentForm