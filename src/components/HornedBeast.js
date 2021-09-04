import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Card';







class HornedBeast extends React.Component {
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

        
        this.props. upDateSlectedData(this.props.title, this.props.image_url, this.props.description,this.props.horns);

    }


    render() {
        return (<>
            <Col>
                <Card className='card'
                    style={{ width: '18rem' }}
                    bg="dark"
                    text="light"
                    onClick={this.voteCounter}
                >
                    <Card.Img variant="top" src={this.props.image_url} />
                    <Card.Body>
                        <Card.Text>{this.props.title}</Card.Text>
                        <Card.Text>{this.props.description}</Card.Text>

                        <Card.Text>
                            ❤️  : {this.state.vote}
                        </Card.Text>
                      

                    </Card.Body>
                </Card>
            </Col>


        </>)
    }


}
export default HornedBeast;