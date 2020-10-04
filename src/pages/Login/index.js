import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
//import logodotei from '../../assets/imagens/logodotei.png'; <img src={logodotei} alt="Logo adotei" />
// para mudar o backgrou vai no global
import {FiLogIn} from 'react-icons/fi'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Form, ResponsiveEmbed, Button, Container, Row, Col} from 'react-bootstrap';

export default function Login(){

    return(
        <ResponsiveEmbed>

            <Container>

                <Row className="justify-content-md-center" style={{ marginTop: '25%', position: 'fixed' }}>

                    <Card style={{ width: '25rem' }} className="text-center">

                        <Form>
                            <Card.Header as="h1">Login Adotei</Card.Header>

                            <Card.Body>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Entre com seu email" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>                        
                                
                            </Card.Body>

                            <Card.Footer>
                                            <Row className="justify-content-md-center">
                                                <Col>
                                                    <Link to="/registeruser">  <FiLogIn size={16} color="black"/> Cadastrar </Link>
                                                </Col>                                            
                                                <Col>
                                                    <Button variant="primary" type="submit">
                                                        Entrar
                                                    </Button>
                                                </Col>
                                            </Row>
                                            <Row className="justify-content-md-center">
                                                <Col>
                                                    <Link  className="fa fa-facebook" to="/adocao"></Link>
                                                </Col>
                                                <Col>
                                                    <Link  className="fa fa-google" to="/adocao"></Link>
                                                </Col>
                                            </Row>
                            </Card.Footer>

                        </Form>
                        
                    </Card>
                </Row>

            </Container>

        </ResponsiveEmbed>
        
    );
}
//flex-direction: column;
//<button className="button" type='submit'>Entrar</button>