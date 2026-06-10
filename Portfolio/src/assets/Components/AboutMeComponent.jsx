import React from 'react';
import profileImg from '../Nirubama Uniform Pic.jpeg';
import { useNavigate } from 'react-router-dom';

const AboutMeComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container my-5">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5">

          
          <div className="card shadow" style={{ width: '18rem' }}>
            <div className="bg-danger-subtle text-center">
              <img
                src={profileImg}
                alt="About me"
                className="rounded-circle mt-3"
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />

              <div className="card-body">
                <h5 className="card-title mb-1">Nirubama A</h5>
                <hr />
                <p className="mb-0">S T U D E N T</p>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-4 fs-4 my-3">
              <a href='https://www.linkedin.com/in/nirubama-a-' target="_blank" rel="noopener noreferrer"style={{ color: 'inherit', textDecoration: 'none' }}><i className="bi bi-linkedin cursor-pointer"></i></a> 
              <a href='https://www.instagram.com/_.nirubama01._?igsh=dnFtam5pOGdkZGYy'target="_blank" rel="noopener noreferrer"style={{ color: 'inherit', textDecoration: 'none' }}><i className="bi bi-instagram cursor-pointer"></i></a>
            </div>
          </div>

          
          <div>
            <h1><strong>Hello</strong></h1>
            <p className="text-muted">Here's who I am & what I do</p>

            <div className="d-flex gap-3 mb-3">
              <button type="button" className="btn btn-primary rounded-5 px-4" onClick={() => navigate("/Resume")} >
                Resume
              </button>
              <button type="button" className="btn btn-outline-dark rounded-5 px-4"onClick={() => navigate("/Projects")}>
                Projects
              </button>
            </div>

            <p style={{ maxWidth: '600px' }}>
              I am a Computer Science Engineering student with a strong interest in
              web development and modern technologies. I enjoy creating clean,
              user-friendly interfaces and turning ideas into functional
              applications. I am continuously improving my skills through
              hands-on projects and self-learning. With a positive mindset and a
              strong desire to grow, I aim to build a successful career in the
              software industry and contribute meaningfully to real-world projects.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutMeComponent;
