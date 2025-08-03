import React, { useState } from 'react';
import './App.css';

import { books } from './data/Books';
import { blogs } from './data/Blogs';
import { courses } from './data/Courses';

import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  return (
    <div className="container">
      {/* Course Details */}
      {showCourses && (
        <div className="section0">
          <h1>Course Details</h1>
          <CourseDetails courses={courses} />
        </div>
      )}

      {/* Book Details */}
      {showBooks && (
        <div className="section">
          <h1>Book Details</h1>
          <BookDetails books={books} />
        </div>
      )}

      {/* Blog Details */}
      {showBlogs ? (
        <div className="section">
          <h1>Blog Details</h1>
          <BlogDetails blogs={blogs} />
        </div>
      ) : (
        <p>No blogs to show</p>
      )}
    </div>
  );
}

export default App;
