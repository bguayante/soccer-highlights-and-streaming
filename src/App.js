import React, { Component } from 'react';
import ReactPlayer from 'react-player'
// import MoviePlayer from './components/MoviePlayer'
import FullMatchList from './components/FullMatchList'

class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    videoURL: '',
    matches: [],
    embed: '',
    thumbnail: '',
    date: ''
  }
}

loadHandler = () => {
  const url = 'https://www.scorebat.com/video-api/v1/';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      this.setState({matches: data}, )
    })
}

componentDidMount(){
  this.loadHandler()
}



// iFrame = () => {
//   return (
//     {__html: this.state.embed}
//   )
// }

  render() {
    return (
			<>
        {/* <div dangerouslySetInnerHTML={this.iFrame()}/> */}
				{/* <MoviePlayer /> */}
        {/* {this.state.embed} */}
				<FullMatchList matches={this.state.matches} />
			</>


		);
  }
}

export default App;