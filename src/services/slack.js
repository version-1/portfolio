import slack from 'slack-notify'

const url = process.env.SLACK_WEBHOOK_URL
const notifier = url ? slack(url) : undefined

export const notify = message => {
  const { content } = message
  if (!notifier || !content) {
    return
  }
  notifier.send({
    channel: '#portfolio',
    icon_emoji: ':penguin:',
    author_name: 'someone',
    text: content,
  })
}
