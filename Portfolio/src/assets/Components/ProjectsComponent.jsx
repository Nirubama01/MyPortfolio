import React from 'react'
import project1Img from '../Project1.png'
import project2Img from '../Project2.png'
import project3Img from '../Project3.png'
import project4Img from '../Project4.png'
import project5Img from '../Project5.png'
import { useEffect } from 'react'

const ProjectsComponent = () => {
  const [projects, setProjects] = React.useState([]);
    const projectImages = [
    project1Img,
    project2Img,
    project3Img,
    project4Img,
    project5Img
  ];
  const fetchProjects=async()=>{
    try{
      const response = await fetch("http://65.2.207.141:5000/api/projects");
      const data = await response.json();
      setProjects(data?.data);
      console.log("Projects fetched:", data);
    }catch(err){
      console.error("Error fetching projects:", err);
    }
  }
useEffect(()=>{
  fetchProjects();
},[])

  return (
  <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1 bg-danger-subtle text-dark">
        <div>
          <h1 className="text-center mt-5">
            <strong>Projects</strong>
          </h1>
          <p
            className="text-center mx-auto my-5"
            style={{ maxWidth: "800px" }}
          >
            This section highlights the projects I have worked on as part of my
            academic curriculum, self-learning, and practical experience. These
            projects cover a variety of domains and technologies and reflect my
            interest in learning, problem-solving, and applying concepts in
            real-world scenarios. Through these projects, I have gained
            hands-on experience, improved my technical and analytical skills,
            and developed a better understanding of how theoretical knowledge
            can be transformed into practical solutions.
          </p>
        </div>

        {projects?.map((project, index) => (
          <div
            key={project?._id || index}
            className="row d-flex justify-content-center bg-white rounded mx-auto my-5"
            style={{ maxWidth: "800px", minHeight: "500px" }}
          >
            <div className="col-md-6 p-5">
              <h4 className="text-primary fw-bold">
                {project?.title ?? "Project Title"}
              </h4>
              <p className="text-muted mb-2">
                {project?.category ?? "Category"}
              </p>
              <p>{project?.description ?? "Description not available."}</p>
              <p className="fw-semibold mb-1">Technologies Used:</p>
              <p className="text-muted">
                {project?.technologies?.join(", ") ?? "N/A"}
              </p>
            </div>
            <div
              className="col-md-6 d-flex justify-content-center align-items-center p-4"
              style={{ minHeight: "450px" }}
            >
              <div className="p-4 w-100">
                <img
                  src={projectImages[index] ?? project1Img}
                  alt={project?.title ?? "Project"}
                  className="img-fluid rounded"
                  style={{ maxHeight: "400px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsComponent