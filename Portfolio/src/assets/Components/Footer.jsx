const Footer = () => {
  return (
    <footer className="bg-light text-dark p-4  border-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
  
        <div>
          <small className="text-muted">
            © 2026 By <strong>Nirubama A</strong>.
          </small>
        </div>

        
        <div className="row text-center justify-content-center g-5 mx-4 ">
          <div className="col-md-3 ">
            <h6 className="fw-bold ">Call</h6>
            <p className="mb-4">9787317209</p>
          </div>

          
          <div className="col-md-6 ">
            <h6 className="fw-bold">Mail</h6>
            <p className="mb-0">nirubama9787@gmail.com</p>
          </div>

          
          <div className="col-md-3">
            <h6 className="fw-bold">Follow</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-4 fs-4">
              <a href="https://www.linkedin.com/in/nirubama-a-" target="_blank" rel="noopener noreferrer"style={{ color: 'inherit', textDecoration: 'none' }}><i className="bi bi-linkedin cursor-pointer"></i></a>
              <a href="https://www.instagram.com/_.nirubama01._?igsh=dnFtam5pOGdkZGYy" target="_blank" rel="noopener noreferrer"style={{ color: 'inherit', textDecoration: 'none' }}><i className="bi bi-instagram cursor-pointer"></i></a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
