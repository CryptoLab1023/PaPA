import React from 'react'
import ReactDOM from 'react-dom'
import http from 'http'
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

    const Request = async (object) => {
      if (object.method == "GET")
        return res = await http.get({
          hostname: object.hostname,
          port: object.port,
          path: object.path,
          agent: false // create a new agent just for this one request
        })
      else if (object.method == "POST")
        return res = await http.post({
          hostname: object.hostname,
          port: object.port,
          path: object.path,
          agent: false // create a new agent just for this one request
        })
    }

    await this.contract.loadContract()
    this.contract.addEventListener((v) => {
      this.setState({ value: v._value })
    })
    const object = {
      hostname: "localhost",
      port: "8000",
      path: "/posts",
      method: "GET"
    }
    const responseData = await Request(object)
    console.log(responseData)
    this.setState({responseData})

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

