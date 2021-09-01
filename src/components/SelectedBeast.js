import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Card';



class SelectedBeast extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            vote: 0
        }
    }

    voteCounter = () => {
        this.setState({
            vote: this.state.vote + 1
        })

    }

    
    
    
  
         render() {
        return (<>
           <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><p>{this.title}</p></Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{this.img_url}</p>
        <p>{this.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


        </>)
    }


}

    


export default SelectedBeast;