import React from 'react'
import styled from "styled-components"
import Header from '../../components/Header/Header'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container>
        <BackgroundImage />
        <div className="content">
          <Header />
          <div className="body flex column a-center j-center">
              <div className="text flex colum">
                  <h1>Unlimited Movies, TV shows nd more</h1>
                  <h4>Watch anywhere. Cancek anytyime</h4>
                  <h6>Ready to watch? Enter your email to create or restart membership</h6>
              </div>
              <div className="form">
                  <input type="email" placeholder='Email Address' name='email'/>
                  <input type="password" placeholder='Password' name='password' />
                  <button type='submit'>Get Started</button>
                  <Link to={'/Login'}>Log In</Link>
              </div>
          </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh
  }
`;

export default SignUp