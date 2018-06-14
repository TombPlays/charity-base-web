import React, { Component } from 'react'
import { Button, message } from 'antd'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class CopyUrl extends Component {
  onCopy = () => {
    message.success('copied to clipboard')
  }
  render() {
    return (
      <CopyToClipboard
        text={window.location.href}
        onCopy={this.onCopy}
      >
        <Button icon='share-alt' style={{ width: '100%', color: '#EC407A', borderColor: '#EC407A' }}>
          Copy URL
        </Button>
      </CopyToClipboard>
    )
  }
}

export { CopyUrl }
