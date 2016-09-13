import React, { PropTypes, Component} from 'react';
import ProjectInfo from './ProjectInfo.js';
import loadData from './data.js';

const kicktraqProjectURL = 'http://www.kicktraq.com/projects/kmi/boppad-smart-fabric-drum-pad-from-keith-mcmillen';

export default class App extends Component {
  state = {
    refreshed: false,
    errorText: ''
  }
  refreshData = () => {
    this.setState({
      errorText: ''
    });
    loadData()
    .then(data => {
      this.setState({
        projectData: data,
        refreshed: true
      });
      setTimeout(() => {
        this.setState({
          refreshed: false
        });
      }, 1000*1);
      this.timeout = setTimeout(this.refreshData, 1000*5);
    })
    .catch(err => {
      console.log(`Couldn't refresh data: `, err);
      this.setState({
        errorText: err.message
      });
      this.timeout = setTimeout(this.refreshData, 1000*5)
    });
  }
  componentDidMount() {
    this.refreshData();
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  render () {
    const { projectData, refreshed, errorText } = this.state;
    const day = new Date().getDate();
    return (
      <div>
        {projectData ? <ProjectInfo projectData={projectData}/> : null}
        <div className="graphs">
          <img src={`${kicktraqProjectURL}/dailychart.png?day=${day}`} />
          <img src={`${kicktraqProjectURL}/dailypledges.png?day=${day}`} />
          <img src={`${kicktraqProjectURL}/dailybackers.png?day=${day}`} />
          <img src={`${kicktraqProjectURL}/dailycomments.png?day=${day}`} />
          <img src={`${kicktraqProjectURL}/exp-cone.png?day=${day}`} />
        </div>
        <div className="message">
          {refreshed? `Refreshed` : ``}
          {errorText? `Error: ${errorText}` : ``}
        </div>
      </div>
    );
  }
}
