import React from 'react'
import { Spinner } from 'react-bootstrap'
import Helmet from 'react-helmet';
const Loading = () => {
  return (
    <div className='mt-5'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Loading...</title>
      </Helmet>
      <Spinner animation='border'variant="danger" role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loading
