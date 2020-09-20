import React from 'react'
import Message from 'components/molecules/Message'
import Page from 'components/templates/Page'
import vuexThumbnail from 'assets/vuex-contribution.png'
import { Thumbnail } from 'components/styles/index'

const Component: React.FC = () => {
  return (
    <Page>
      <Message
        title="Contributed Vuex"
        body={
          <>
            Tiny contrubition to fix typo of Japanese Documents.
            <p>
              <Thumbnail src={vuexThumbnail} alt="papyrus thumbanail" />
            </p>
            <p>
              Link:{' '}
              <a href="https://github.com/vuejs/vuex/pull/1825">
                https://github.com/vuejs/vuex/pull/1825
              </a>
            </p>
          </>
        }
      />
      <Message
        title="Cnstnts"
        body={
          <>
            npm package. Easily define "Plain Object-base" enum helper. It is
            good to use it for Redux or Hooks API useReducer's actions.
            <p>
              Link:{' '}
              <a href="https://github.com/version-1/cnstnts">
                https://github.com/version-1/cnstnts
              </a>
            </p>
          </>
        }
      />
      <Message
        title="React Native Various Form"
        body={
          <>
            npm package. It provides some components for Input Form. You can
            implement Field, Form and Validator easily on React Native.
            <p>
              Link:{' '}
              <a href="https://github.com/version-1/react-native-various-form">
                https://github.com/version-1/react-native-various-form
              </a>
            </p>
          </>
        }
      />
    </Page>
  )
}

export default Component
