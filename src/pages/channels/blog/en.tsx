import React from 'react'
import Blog from 'components/templates/Blog'

const BlogEn = () => {
  return (
    <Blog
      title="#blog-en"
      language="en"
      startLoading={() => () => {}}
    />
  )
}

export default BlogEn
