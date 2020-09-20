
export default {
  author: 'version-1',
  origin: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:8000',
  development: process.env.NODE_ENV === 'development',
  production: process.env.NODE_ENV === 'production',
  slackWebhookURL: 'https://hooks.slack.com/services/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',
  headerHeight: '100px',
  sidebarWidth: '256px',
  sidebarLeftWidth: '80px',
  sidebarRightWidth: '176ox',
  url: {
    papyrus: 'https://papyrus-app.org',
    blog: 'https://ver-1-0.net',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/jiro-onodera-1b3766145',
    twitter: 'https://twitter.com/version1_2017'
  }
}
