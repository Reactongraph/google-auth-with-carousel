import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  // Catch error
  componentDidCatch(error, info) {
    console.log('error', error)
    console.log('error-info', info)

    this.setState({ hasError: true })
  }

  render() {
    const { children } = this.props
    if (this.state.hasError) {
      return (
        <div className="" style={{ margin: '50px' }}>
          <div>
            {/* <h1>4e4</h1> */}
            <h3>
              <i className="fa fa-warning" /> Oops! Something went wrong
            </h3>
            <p>Reload the page after some time</p>
          </div>
        </div>
      )
    } else {
      return children
    }
  }
}

export default ErrorBoundary
