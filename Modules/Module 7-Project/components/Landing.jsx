import React from 'react'
export default class Landing extends React.Component {
  constructor(props) {
    super(props)
   this.state = {
    loading: true,
    rocket: null
  }
}
  async componentDidMount() {
    const launch = "https://ll.thespacedevs.com/2.0.0/launch/";
    const response = await fetch(launch);
    const data = await response.json();
    this.setState({ rocket: data.results[0], loading: false });
    console.log(this.state.rocket)
   }

    render() {
    return (
      <div className='text-center bg-gray-400 m-10'>
        <h2>Here you will find all information on all upcoming launches and Rockets</h2>
          <div>
            {this.state.loading || !this.state.rocket ? (
            <div>loading...</div>
             ) : (
             <div>
               <div>
                {this.state.rocket}
               </div>
             </div>
            )}
          </div>
      </div>
    );
  }
}