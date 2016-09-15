import React, { PropTypes, Component} from 'react';
import ProjectInfo from './ProjectInfo.js';
import Charts from './Charts.js';
import { loadData, loadStats } from './data.js';
import NotificationSystem from 'react-notification-system';

const REFRESH_STATS_TIMEOUT = 5000;
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
  notificationSystem = null;
  newBackers = [];
  celebratingBackers = false;
  setRefreshed = () => {
    this.setState({
      refreshed: true
    });
    this.resetRefreshTimeout = setTimeout(() => {
      if (!this.mounted) return;
      this.setState({
        refreshed: false
      });
    }, 1000*1);
  }

  setStats = (data) => {
    this.celebrateNewBackers(data);
    this.setState({
      projectData: {
        ...this.state.projectData,
        backers_count: data.backers_count,
        pledged: parseFloat(data.pledged)
      }
    });
  }
  celebrateNewBackers = (data) => {
    if (!this.state.projectData) return;
    const prevBackersCount = this.state.projectData.backers_count;
    const newBackersCount = data.backers_count;
    for (var count = prevBackersCount; count < newBackersCount; count++) {
      this.newBackers.push(count+1);
    }
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
    this.notificationSystem.addNotification({
      level: 'success',
      title: `New backer!`,
      message: `#${backer}`,
      autoDismiss: NOTIFICATION_AUTO_DISMISS,
      dismissible: false,
      position: 'br'
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

  loadProjectData = () => {
    this.setState({
      errorText: ''
    });
    this.loadDataCancelablePromise = loadData(location.pathname);
    this.loadDataCancelablePromise.promise
    .then(data => {
      this.setState({
        projectData: data
      });
    })
    .catch(err => {
      console.log(`Couldn't load project data: `, err);
      this.setState({
        errorText: err.message
      });
    });
  }
  refreshStats = () => {
    this.setState({
      errorText: ''
    });
    this.loadStatsCancelablePromise = loadStats(location.pathname);
    this.loadStatsCancelablePromise.promise
    .then(data => {
      this.setStats(data.project);
      this.setRefreshed();
      this.refreshTimeout = setTimeout(this.refreshStats, REFRESH_STATS_TIMEOUT);
    })
    .catch(err => {
      console.log(`Couldn't refresh stats: `, err);
      this.setState({
        errorText: err.message
      });
      this.refreshTimeout = setTimeout(this.refreshStats, REFRESH_STATS_TIMEOUT)
    });
  }
  componentDidMount() {
    this.loadProjectData();
    this.refreshStats();
    this.notificationSystem = this.refs.notificationSystem;
  }
  componentWillUnmount() {
    clearTimeout(this.refreshTimeout);
    clearTimeout(this.celebrateNewBackerTimeout);
    clearTimeout(this.resetRefreshTimeout);
    this.loadStatsCancelablePromise.cancel();
    this.loadDataCancelablePromise.cancel();
  }
  render () {
    const { projectData, refreshed, errorText } = this.state;
    // To refresh graph images every hour we generate a different
    // url every hour, causing them to reload every hour
    const hour = new Date().getHours();
    return (
      <div>
        {projectData ? <ProjectInfo projectData={projectData}/> : null}
        <Charts project={location.pathname} updateSeed={hour} />
        <div className="message">
          {refreshed? `Refreshed` : ``}
          {errorText? `Error: ${errorText}` : ``}
        </div>
        <NotificationSystem ref="notificationSystem" style={notificationStyle}/>
      </div>
    );
  }
}
