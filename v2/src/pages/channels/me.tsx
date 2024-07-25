import React from 'react'

import { P } from 'components/styles'
import Message from 'components/domains/channel/message'
import Page from 'components/shared/templates/page'
import constants from 'constants/index'

const Component: React.FC = () => {
  return (
    <Page title="DM">
      <Message
        title={constants.author}
        body={
          <>
            <P>
              Don't Worry. Your message is not going to be shared with OTHERS INCLUDING ME.
            </P>
          </>
        }
      />
    </Page>
  )
}

export default Component
