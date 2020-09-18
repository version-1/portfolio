import { useEffect, useState } from 'react'
import { breakpoints } from 'components/styles'

const usePage = () => {
  const [mobile, setMobile] = useState(true)
  const [pathname, setPathname] = useState('')

  useEffect(() => {
    if (!window) {
      return
    }

    setMobile(window.parent.screen.width <= breakpoints.mobile)
    setPathname(window.location.pathname)
  }, [])

  return {
    mobile,
    pathname
  }
}

export default usePage
