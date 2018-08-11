import React from 'react'
import ReactDOM from 'react-dom'
import Contract from './contract'
import bodyParser from 'body-parser'
import axios from 'axios';

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

    axios.get(`http://localhost:8080/get`)
      .then(res => {
        const address = res.data;
        this.setState({
          address
        });
      }).catch(() => {
        return;
      })
  }

  async sendTheMessage() {
      axios.post(`http://localhost:8080/sendMessage`)
        .then(res => {
          const bool = res.data;
          this.setState({
            sendMessageBoolean: bool
          });
        }).catch(() => {
          return;
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
        <div>
          <Home />
          {this.state.address}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))

