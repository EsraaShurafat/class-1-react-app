import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import data from './data.json';
import SelectedBeast from './components/SelectedBeast';
import Row from 'react-bootstrap/Row';

class App extends React.Component {


 allData =()=>{
  data.map(item =>{
    return item
  })
 }


  render() {
     return (
     <>
      <Header />
      <Main dataArr={this. allData}/>
    
            <Row xs={1} md={3} className="g-4">
           {data.map(item =>{
               return (
                   < SelectedBeast title={item.title}
                   image_url={item.image_url}
                   description={item.description}
                   />

                   
               )
              
           })}
           </Row>
          
      <Footer />

    </>)
  }

}

export default App;