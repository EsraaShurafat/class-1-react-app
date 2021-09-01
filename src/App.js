import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Data from './data/data.json';
import SelectedBeast from './components/SelectedBeast';
import FormClass from './components/FormClass'
import { NavItem } from 'react-bootstrap';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      title: '',
      image_url: '',
      description: '',
      horns:'',
      dataArr:'',



    }

  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  showModal = () => {
    this.setState({
      show: true
    })
  }

  upDateSlectedData = (title, image_url, description,dataArr) => {
    this.setState({
      title: title,
      image_url: image_url,
      description: description,
      dataArr:dataArr,
      

    })
  }

  handleSelect(e) {
    this.setState({
      selectValue: e.target.value,


    })
    this.filter();
    this.upDateSlectedData();
 }

 filter = () =>{
this.dataArr=Data;
   this.dataArr.filter(n => {
if (this.selectValue===n.horns) {
  return n;
}
   })
 }


 


  render() {
    return (<>
     <Header />
    <FormClass
     handleSelect= {this.handleSelect}
     />
     
      <Main
        data={Data}
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