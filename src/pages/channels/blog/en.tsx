import React, { useContext } from 'react'
import Blog from 'components/templates/Blog'
import Context from 'context/index'

const BlogEn = () => {
  const context = useContext(Context)
  const {
    mutations: { startLoading },
  } = context

  return (
    <Blog
      title="#blog-en"
      language="en"
      startLoading={startLoading}
    />
  )
}

export default BlogEn
