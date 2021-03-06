import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import styles from '../css/shared/Project.module.css'
// import newimg from '../../images/therr-app.webp'

const ProjectCard = ({ image, title, description, projectLink, inProgress, deployed }) => {

  if (inProgress) {
    title = `In progress: ${title}`
  }

  return (
    <div style={{ margin: '2rem 0'}}>
      <Card>
        <Card.Body>
          <Container>
            <Row className='align-items-center'>
              <Col lg='2'> 
                <img className={styles.image} src={image} alt={title} style={{ maxHeight: '50vh' }} />
              </Col>
              <Col>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {deployed && <Button target='_blank' href={deployed} style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}>Deployed Site</Button>}
                <Link to={`/project/${projectLink}`}>
                  <Button variant='success' style={{ marginBottom: '0.5rem' }}>Learn More &rarr;</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  )
}


export default ProjectCard
