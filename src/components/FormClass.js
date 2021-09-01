import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

class FormClass extends React.Component {
    render() {
        return (
            <>
                <Form.Select   onChange={this.props.handleSelect}
   
                 aria-label="Default select example">
                    <option >Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="100">All</option>
                </Form.Select>
            </>
        )
    }
} 
export default FormClass;