import React from 'react'
import {Card, Button} from 'react-bootstrap';

function ProjectTile({ src, alt, text, link }) {
    return (
        <div className='col col-md-6 col-lg-4'>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={`${src} cap`} height={300} width={150} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default ProjectTile