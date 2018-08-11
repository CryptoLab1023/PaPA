import React from 'react'
import ReactDOM from 'react-dom'
import Contract from './contract'
import Home from './components/home'

const Index = class Index extends React.Component {
  constructor(props) {
    super(props)

    this.contract = new Contract()
    this.value = 0

    this.state = {
      value: 0,
      isValid: false,
      tx: null
    }
  }

  async componentWillMount() {
    await this.contract.loadContract()
    this.contract.addEventListener((v) => {
      this.setState({ value: v._value })
    })
  }

  onChangeHandler(event) {
    this.value = event.target.value
    const isValid = this.value > 0
    this.setState({ isValid })
  }

  async confirmValue() {
    const tx = await this.contract.setValue(this.value)
    this.setState({ tx })
  }

  render() {
    return (
      <div className="container" style={{ marginTop: 10 }}>
        <Home />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))

