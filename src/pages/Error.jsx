import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'
const Error = () => {
  const error = useRouteError()
  //console.log(error) In error object we have status key
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not found' />
          <h3>Ohhh</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to={'/'}>Back Home</Link>
        </div>
      </Wrapper>
    )
  }

  return <div>Something went wrong</div>
}

export default Error
