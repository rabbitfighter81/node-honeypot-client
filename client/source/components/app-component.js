import React from 'react'
import Header from './header-component.js'
import Results from './results-area-component.js'
import Footer from './footer-component.js'
import fetch from '../scripts/promise-fetch-server-data.js'


export default React.createClass({
  
  displayName: 'App',

  getInitialState() {
      return {
          clientData: [],
          openIndex: null,
          error: null
      }
  },

  componentDidMount() {
  	  console.log("App mounted")
  	  
      var promise = fetch(this.props.source)

      promise.then((data) => {
      	  let clientData = data.trim().split('\n') // Split into array
          this.setState({
	      	  clientData: clientData,
	      	  error: null
	      })
	      console.log(data)
      })
      .catch((err) => {
      	  this.setState({
          	  clientData: [],
          	  error: err
          })
          console.error(err)
      })
      // Just to display async   
      console.log("Here" + this.state.clientData)
  },

  componentWillUnmount() {
      console.log("App un-mounted")
  },

  render() {
      return (
          <div>
              <Header className='header center' text={this.props.source} />
        	  <Results className='results' data={this.state.clientData} />
        	  <Footer className='footer center' source={this.props.source} />
      	  </div>
      )
  }

})
