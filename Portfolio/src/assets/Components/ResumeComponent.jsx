import React from 'react';

const ResumeComponent = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1 bg-light text-dark">
        <div className="container py-5">

          <h1 className="mb-5 d-flex justify-content-center">
            <strong>Resume</strong>
          </h1>

          <div className="card shadow my-5">
            <div className="card-header bg-danger-subtle text-white fw-bold fs-5">
              Education
            </div>
            <div className="card-body p-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Bachelor of Engineering in Computer Science</strong><br />
                  Government College Of Engineering, Tirunelveli<br />
                  2024 – 2028 | Current CGPA : <strong>9.23</strong>
                </li>
                <li className="list-group-item">
                  <strong>Higher Secondary</strong><br />
                  St. Joseph's Matric Higher Secondary School, Alangulam<br />
                  94.83%
                </li>
              </ul>
            </div>
          </div>

          <div className="card shadow my-5">
            <div className="card-header bg-danger-subtle text-white fw-bold fs-5">
              Skills
            </div>
            <div className="card-body p-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Web Development: HTML, CSS, JavaScript, React.js, Bootstrap
                </li>
                <li className="list-group-item">
                  Programming Languages: C, Python, Java
                </li>
                <li className="list-group-item">
                  Database Management: MongoDB
                </li>
                <li className="list-group-item">
                  Tools & Platforms: GitHub, VS Code
                </li>
              </ul>
            </div>
          </div>

          <div className="card shadow my-5">
            <div className="card-header bg-danger-subtle text-white fw-bold fs-5">
              Internship
            </div>
            <div className="card-body p-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Internship at J7 Solutions Pvt. Ltd. – Currently working as a Web Development Intern, gaining hands-on experience in React.js, Bootstrap, and modern web technologies.
                </li>
              </ul>
            </div>
          </div>

          <div className="card shadow my-5">
            <div className="card-header bg-danger-subtle text-white fw-bold fs-5">
              Achievements
            </div>
            <div className="card-body p-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Secured First Prize in Paper Presentation at IGNITE AI Symposium at Einstein Engineering College.
                </li>
                <li className="list-group-item">
                  Runner-up in Tech Pirates Symposium at National Engineering College.
                </li>
                <li className="list-group-item">
                  Participated in Paper Presentation at National Engineering College.
                </li>
                <li className="list-group-item">
                  Centum in Computer Science 12th Grade – Academic Excellence Award.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
