import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { 
  ProjectTitle,
  ProjectStack,
  ReturnHomeLink,
  ProjectDescription,
  ProjectText,
  ProjectLinks,
  ProjectImage
} from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";
import { netflixImg } from "../assets/imageLinks";
import { animateScroll as scroll } from 'react-scroll'

const NetflixProject = () => {

  const tech = [
    'React',
    'Redux',
    'Styled Components'
  ]

  useEffect(() => {
    scroll.scrollToTop({ duration: 0 })    
  }, [])

  return (
    <Container>
      <Row>
        <Col className='lg-8 mx-auto p-3 py-md-5'>
          <ReturnHomeLink />
          <ProjectTitle title='Netflix Clone' />
          <ProjectStack items={tech} />
          <ProjectDescription 
            text={"Working on the Therr app, I found myself struggling with understanding and using Redux, so I built an app that forced me to heavily rely on Redux for various functionalities, such as storing movie data and opening/closing the pop-up modal."}
            />
          <ProjectImage image={netflixImg} />
          <ProjectText 
            text={"The first and most obvious thing I was able to use Redux for was storing and accessing data related to movies, and dispatching selected movies."} 
            />
          <ProjectText 
            text={"Soon I figured out how I could use the Redux store to control state in other parts of the app, monitoring what was clicked and what was displayed and when."} 
            />
          <ProjectText 
            text={"Another problem I ran into was figuring out how to make the scrolling buttons stop scrolling once the row had reached the edge of the screen. I eventually figured out how to store the position relative to the width of the screen."} 
            />
          <ProjectText 
            text={"Future plans: I would like to use the Youtube API to access and populate data dynamically because currently the data is stored locally. I'd also like to look into creating my own video component because currently I'm relying on a 3rd party library."} 
            />
          <ProjectLinks
            deployed={"https://robscalesdev.github.io/netflix-clone"}
            github={"https://github.com/robscalesdev/netflix-clone"}
            />
          <ContactMe />
        </Col>
      </Row>
    </Container>
  )
}

export default NetflixProject
