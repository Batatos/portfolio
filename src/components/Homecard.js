import React, {Component} from "react";
import {Card, Button} from "react-bootstrap";
import {Container, Row, Col} from "reactstrap";
import personalImage from "../assets/pp.jpg";
import {SocialIcon} from "react-social-icons";

class Homecard extends Component{
    render(){
        return(
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
            <Card border="dark" style={{ width: '100%' }}>
                <Card.Header>Ahed Istaitih</Card.Header>
                <Container style={{height: '40vh'}}>
                    <Row style={{ height: '80%'}}>
                        <Col md="4">
                            <Card.Img style={{width: '100%', margin: '2%'}} variant="top" src={personalImage} />
                            <SocialIcon target="_blank" url="https://www.linkedin.com/in/ahed-istaitih-96b67a127/" />
                            <SocialIcon target="_blank" url="https://github.com/Batatos/" />
                        </Col>
                        <Col md="8">
                        <Card.Body>
                            <Card.Title>Dark Card Title</Card.Title>
                            <Card.Text>
                                Software Developer
                            </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </Card>
            </div>
        )
    }
}

export default Homecard;