import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';

class Main extends React.Component{
    render(){
        return (
            <>
            <Row xs={1} md={3} className="g-4">
           {data.map(item =>{
               return (
                   <HornedBeast title={item.title}
                   image_url={item.image_url}
                   description={item.description}
                   />

                   
               )
              
           })}
           </Row>
            </>
           

        )
    }
    
}
export default Main;