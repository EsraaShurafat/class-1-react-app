import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Data from './data.json';
import SelectedBeast from './components/SelectedBeast';
import Form from 'react-bootstrap/Form'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      title: '',
      image_url: '',
      description: '',
      horns:'',
      filterdData:Data,
    }

  }

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  showModal = () => {
    this.setState({show: true});
  };

  upDateSlectedData = (title, image_url, description) => {
    this.setState({
      title: title,
      image_url: image_url,
      description: description,
    });
  };

  handleSelect =(event)=>{
    let newArr;
    if(event.target.value==='all'){
       newArr=Data;
    }
    else
    {
    newArr=Data.filter((n)=>n.horns===parseInt(event.target.value))

    }

    this.setState({
      filterdData: newArr
      });
  
   };

 


  render() {
    return (<>
     <Header />
     <Form>
          <Form.Group controlId="horns">
            <Form.Control as="select" onChange={this.handleSelect}>
              <option value="1">one</option>
              <option value="2">two</option>
              <option value="3">three</option>
              <option value="100">Wow</option>
              <option value="all">All</option>
 
            </Form.Control>
          </Form.Group>
        </Form>

      <Main
     
        data={this.state.filterdData}
        showModal={this.showModal}
        upDateSlectedData ={this.upDateSlectedData}

      />
      <SelectedBeast
        handleClose={this.handleClose}
        show={this.state.show}
        title={this.state.title}
        image_url={this.state.image_url}
        description={this.state.description}
      
        
      />
      <Footer />

    </>)
  }

}

export default App;