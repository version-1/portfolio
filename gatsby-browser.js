import React from 'react'
import { Provider } from 'context'

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>
}
