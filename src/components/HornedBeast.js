import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';





class HornedBeast extends React.Component {
    constructor(props){
super(props);
this.state={
    vote: 0
}
    }

    voteCounter = () => {
        this.setState({
            vote : this.state.vote + 1
        })

    }


    render() {
        return (<>
            <Card className='card' style={{ width: '15rem'}}>
                <Card.Img variant="top" src={this.props.imageUrl} onClick={this.voteCounter} />
                <Card.Body>
                    <Card.Text>{this.props.title}</Card.Text>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>
                    The Number of Favorites  : {this.state.vote} ❤️
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>



        </>)
    }


}
export default HornedBeast;