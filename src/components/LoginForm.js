import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { Button, Card, CardSection, Input, Spinner } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
  onEmailChange (emailText) {
    this.props.emailChanged(emailText)
  }

  onPasswordChange (passwordText) {
    this.props.passwordChanged(passwordText)
  }

  onButtonPress () {
    const { email, password } = this.props

    this.props.loginUser({ email, password })
  }

  renderError () {
    if (this.props.error) {
      return (
        <Text style={styles.errorTextStyle}>
          Authentication failed!
        </Text>
      )
    }
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    )
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            placeholder={'email@example.com'}
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label={'Password'}
            placeholder={'passw0rd'}
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            secureTextEntry
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#f00'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth

  return { email, password, error, loading }
}

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm)
