import React, { PropTypes, Component} from 'react';
import ProjectInfo from './ProjectInfo.js';
import Charts from './Charts.js';
import loadData from './data.js';
import NotificationSystem from 'react-notification-system';

// const KICKTRAC_PROJECT = 'kmi/boppad-smart-fabric-drum-pad-from-keith-mcmillen';
const KICKTRAC_PROJECT = '1238747394/the-vamp-stereo-speaker-bring-back-the-sound';
const REFRESH_DATA_TIMEOUT = 5000;
const CELEBRATE_BACKER_TIMEOUT = 400;
const NEW_BACKER_AUDIO = '/audio/newbacker.wav';
const NOTIFICATION_AUTO_DISMISS = 60;

var notificationStyle = {
  NotificationItem: {
    DefaultStyle: { // Applied to every notification, regardless of the notification level
      borderTop: '',
      boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.5)',
      color: '#020621'
    },
    success: { // Applied only to the success notification item
      backgroundColor: '#0BD318',
    }
  },
  Title: {
    DefaultStyle: {
      color: '#020621'
    }
  }
}

export default class App extends Component {
  state = {
    refreshed: false,
    errorText: ''
  }
  _notificationSystem = null;
  mounted = false;
  newBackers = [];
  celebratingBackers = false;
  setRefreshed = () => {
    this.setState({
      refreshed: true
    });
    setTimeout(() => {
      if (!this.mounted) return;
      this.setState({
        refreshed: false
      });
    }, 1000*1);
  }

  setProjectData = (data) => {
    this.celebrateNewBackers(data);
    this.setState({
      projectData: data
    });
  }
  celebrateNewBackers = (data) => {
    if (!this.state.projectData) return;
    const prevBackersCount = this.state.projectData.backers_count;
    const newBackersCount = data.backers_count;
    for (var count = prevBackersCount; count < newBackersCount; count++) {
      this.newBackers.push(count+1);
    }
    console.log('celebrateNewBackers: ', this.newBackers);
    if (!this.celebratingBackers) {
      this.celebratingBackers = true;
      this.celebrateNewBacker();
    }
  }
  celebrateNewBacker = () => {
    const backer = this.newBackers.shift();
    if (!backer) {
      this.celebratingBackers = false;
      return;
    };
    console.log('celebrate backer: ', backer);
    this.addNotification({
      title: `New backer!`,
      message: `#${backer}`,
      autoDismiss: NOTIFICATION_AUTO_DISMISS,
      dismissible: false
    });
    const newBackerAudio = new Audio(NEW_BACKER_AUDIO);
    newBackerAudio.play();
    if (this.newBackers.length > 0) {
      clearTimeout(this.celebrateNewBackerTimeout);
      this.celebrateNewBackerTimeout = setTimeout(this.celebrateNewBacker, CELEBRATE_BACKER_TIMEOUT);
    } else {
      this.celebratingBackers = false;
    }
  }

  refreshData = () => {
    this.setState({
      errorText: ''
    });
    loadData()
    .then(data => {
      if (!this.mounted) return;
      this.setProjectData(data);
      this.setRefreshed();
      this.timeout = setTimeout(this.refreshData, REFRESH_DATA_TIMEOUT);
    })
    .catch(err => {
      console.log(`Couldn't refresh data: `, err);
      if (!this.mounted) return;
      this.setState({
        errorText: err.message
      });
      this.timeout = setTimeout(this.refreshData, REFRESH_DATA_TIMEOUT)
    });
  }

  addNotification = (data) => {
    this._notificationSystem.addNotification({
      level: 'success',
      ...data
    });
  }
  componentDidMount() {
    this.mounted = true;
    this.refreshData();
    this._notificationSystem = this.refs.notificationSystem;
    window.addNotification = this.addNotification;
  }
  componentWillUnmount() {
    this.mounted = false;
    clearTimeout(this.timeout);
    clearTimeout(this.celebrateNewBackerTimeout);
  }
  render () {
    const { projectData, refreshed, errorText } = this.state;
    // To refresh graph images every hour we generate a different
    // url every hour, causing them to reload every hour
    const hour = new Date().getHours();
    return (
      <div>
        {projectData ? <ProjectInfo projectData={projectData}/> : null}
        <Charts project={KICKTRAC_PROJECT} updateSeed={hour} />
        <div className="message">
          {refreshed? `Refreshed` : ``}
          {errorText? `Error: ${errorText}` : ``}
        </div>
        <NotificationSystem ref="notificationSystem" style={notificationStyle}/>
      </div>
    );
  }
}
