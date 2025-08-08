import React from 'react';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <div style={styles.container}>
      <CourseDetails />
      <BookDetails />
      <BlogDetails />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '40px',
    fontFamily: 'Arial, sans-serif'
  }
};

export default App;