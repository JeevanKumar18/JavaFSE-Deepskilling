import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 1, name: "Angular", date: "4/5/2021" },
    { id: 2, name: "React", date: "6/3/2021" }
  ];

  return (
    <div style={styles.box}>
      <h2>Course Details</h2>
      {courses.map(course => (
        <div key={course.id}>
          <strong>{course.name}</strong>
          <div>{course.date}</div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  box: {
    padding: '10px',
    borderRight: '3px solid green',
    minWidth: '200px'
  }
};

export default CourseDetails;