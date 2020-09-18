
export const scrollBottom = () => {
  const body = document.body.querySelector('.content-body')
  if (body) {
    body.scrollTo({ top: body.scrollHeight, behavior: 'smooth' })
  }
}

