import React from 'react'

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      results: null
    }
  }
  
  async componentDidMount() {
    const launch = "https://ll.thespacedevs.com/2.0.0/launch/";
    const response = await fetch(launch);
    const data = await response.json();
    this.setState({ results: data.results, loading: false });
  }

  render() {
    return (
      <div className='text-center bg-gray-400 m-10'>
        <h2>Here you will find all information on all upcoming launches and Rockets</h2>
          <div>
            {this.state.loading || !this.state.results ? (<div>loading...</div>) : (
              <div>
                <div>
                  {Object.keys(this.state.results).map((launch) => {     
                    return (
                    <div style={{padding: "5px"}}>
                        <p>Rocket: {this.state.results[launch].name}</p>
                        <p>Launch Facility: {this.state.results[launch].pad.location.name}</p>
                        <p>Launch Locaton: {this.state.results[launch].pad.name}</p>
                        <p>Mission Status: {this.state.results[launch].status.name}</p>
                    </div>)
                  })}
                </div>
              </div>
            )}
          </div>
      </div>
    );
  }
}