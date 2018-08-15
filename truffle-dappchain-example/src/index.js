import React from 'react'
import ReactDOM from 'react-dom'
import Contract from './contract'
import axios from 'axios'

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

    console.log(await this.contract.getContractAddress())
    console.log(await this.contract.getAccountAddress())
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

