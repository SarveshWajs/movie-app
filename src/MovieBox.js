
import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';

const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox =({original_title, poster_path, vote_average, release_date, overview,popularity,original_language})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return(
        
        <div className="card text-center  mb-4">
                 <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img className="card" src={API_IMG+poster_path} />
    </div>
    <div class="flip-card-back">
      <h3>{original_title}</h3> 
      <p>IMDb: {vote_average}</p> 
      <p>Release Date: {release_date}</p>
      
      <p>Movie Popularity: {popularity}</p>
      <p>Movie Language: {original_language}</p>
      <div className="card-body">
                  <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <h6>Overview</h6>
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                        
                          <Button align="center" onClick={handleShow}>Add To Wish List</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
      

    
    </div>
  </div>
</div>
            
        </div>
        
    )
    
}

export default MovieBox;