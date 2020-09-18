import React, { useContext } from 'react'
import Blog from 'components/templates/Blog'
import Context from 'context/index'

const BlogJa = () => {
  const context = useContext(Context)
  const {
    mutations: { startLoading },
  } = context

  return (
    <Blog
      title="#blog-ja"
      language="ja"
      startLoading={startLoading}
    />
  )
}

export default BlogJa
