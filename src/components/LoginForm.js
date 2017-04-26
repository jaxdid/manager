import React, { Component } from 'react'
import { Button, Card, CardSection, Input } from './common'

class LoginForm extends Component {
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            placeholder={'email@example.com'}
          />
        </CardSection>
        <CardSection>
          <Input
            label={'Password'}
            placeholder={'passw0rd'}
            secureTextEntry
          />
        </CardSection>
        <CardSection>
          <Button />
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
