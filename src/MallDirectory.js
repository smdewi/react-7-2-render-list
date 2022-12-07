import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class MallDirectory extends React.Component {
    state = {
        events: [
            "10% off at Coffee beans",
            "Caroling at Don Don Donki",
            "Free parking vouchers for spending above $100.00"
        ],
        shops: [
            "Macdonalds",
            "Coffee Beans",
            "Uniqo",
            "Don Don Donki",
            "Giants Supermarket",
            "Sephora"
        ]
    };

    render() {
        return (
            <React.Fragment>
                <h1>Generic Mall Shopping Directory</h1>
                <h2>Shops</h2>
                {this.state.shops.map(function (e) {
                    return (
                        <Container>
                            <Row>
                                <Col md={4}>
                                    {e}
                                </Col>
                            </Row>
                        </Container>
                    )
                })}
                <h2>Events</h2>
                {this.state.events.map(function (e) {
                    return (
                        <Card style={{ width: '15rem', backgroundColor: "yellow", margin: "2em 1em", padding: "0.5em"}}>
                            <Card.Body>
                                <Card.Title>Events</Card.Title>
                                <Card.Text>
                                    {e}
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                    )
                })}
            </React.Fragment>
        );
    }

}