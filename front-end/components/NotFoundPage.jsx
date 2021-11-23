import React from 'react'
import {useLocation} from 'react-router-dom'

const NotFoundPage = () => {
  const location = useLocation()
  return (
    <div>
      Error 404: <code>{location.pathname}</code> Page not Found
    </div>
  )
}

export default NotFoundPage
