import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';

class Main extends React.Component{
   
    render(){
        return (
            <>
            <Row xs={1} md={3} className="g-4">
           {this.props.data.map(item =>{
               return (
                   <HornedBeast 
                   
                   showModal={this.props.showModal}
                   title={item.title}
                   image_url={item.image_url}
                   description={item.description}
                   horns={item.horns}
                   upDateSlectedData={this.props.upDateSlectedData}
                   />

                   
               )
              
           })}
           </Row>
            </>
           

        )
    }
    
}
export default Main;