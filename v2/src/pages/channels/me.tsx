import React from 'react'

import { P } from 'components/styles'
import Message from 'components/domains/channel/message'
import Page from 'components/shared/templates/page'
import constants from 'constants/index'

const Component: React.FC = () => {
  return (
    <Page>
      <Message
        title={constants.author}
        body={
          <>
            <P>
              If you want to contact me, please send message on this channel.
            </P>
            <P>
              I can't reply your message here so send message with your contact
              if you want it
            </P>
          </>
        }
      />
      <Message
        title={constants.author}
        body={
          <>
            <P>
              Don't Worry. YOUR MESSAGE IS NOT SHARED OTHERS THROUGH THIS SITE.
            </P>
          </>
        }
      />
    </Page>
  )
}

export default Component
