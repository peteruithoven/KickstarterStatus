import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import ProjectInfo from './ProjectInfo.js';
import Charts from './Charts.js';
import { loadData, loadStats } from './data.js';
import Refreshed from './Refreshed.js';

const REFRESH_STATS_TIMEOUT = 5000;
const CELEBRATE_BACKER_TIMEOUT = 400;
const NEW_BACKER_AUDIO = '/audio/newbacker.wav';
const NOTIFICATION_AUTO_DISMISS = 60;
const ERROR_NOTIFICATION_AUTO_DISMISS = 5000;
const RETRY_TIMEOUT = 5000;

const notificationStyle = {
  NotificationItem: {
    DefaultStyle: { // Applied to every notification, regardless of the notification level
      borderTop: '',
      boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.5)',
      color: '#020621'
    },
    success: { // Applied only to the success notification item
      backgroundColor: '#0BD318'
    }
  },
  Title: {
    DefaultStyle: {
      color: '#020621'
    }
  }
};

export default class App extends Component {
  state = {
    project: location.pathname
  };
  notificationSystem = null;
  newBackers = [];
  celebratingBackers = false;

  componentDidMount() {
    if (this.state.project === '/') {
      this.showError(
        'Please specify project in url',
        'Use part after https://kickstarter.com/projects/',
        0
      );
    } else {
      this.loadProjectData();
      this.refreshStats();
    }
  }
  componentWillUnmount() {
    clearTimeout(this.refreshTimeout);
    clearTimeout(this.retryTimeout);
    clearTimeout(this.celebrateNewBackerTimeout);
    if (this.loadStatsCancelablePromise) {
      this.loadStatsCancelablePromise.cancel();
    }
    if (this.loadDataCancelablePromise) {
      this.loadDataCancelablePromise.cancel();
    }
  }

  loadProjectData = () => {
    this.loadDataCancelablePromise = loadData(this.state.project);
    this.loadDataCancelablePromise.promise
    .then(data => {
      this.setState({
        projectData: data
      });
    })
    .catch(err => {
      this.showError('Couldn\'t load project data', err.message, 5);
      this.retryTimeout = setTimeout(this.loadProjectData, RETRY_TIMEOUT);
    });
  }

  refreshStats = () => {
    this.loadStatsCancelablePromise = loadStats(this.state.project);
    this.loadStatsCancelablePromise.promise
    .then(data => {
      if (data.error) {
        this.showError('Couldn\'t refresh stats', data.error, 5);
      } else {
        this.setStats(data.project);
        this.refreshedMessage.show();
      }
      this.refreshTimeout = setTimeout(this.refreshStats, REFRESH_STATS_TIMEOUT);
    })
    .catch(err => {
      this.showError('Couldn\'t refresh stats', err.message, 5);
      this.refreshTimeout = setTimeout(this.refreshStats, REFRESH_STATS_TIMEOUT);
    });
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
    for (let count = prevBackersCount; count < newBackersCount; count++) {
      this.newBackers.push(count + 1);
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
    }
    this.notificationSystem.addNotification({
      level: 'success',
      title: 'New backer!',
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

  showError = (title, message, autoDismiss = ERROR_NOTIFICATION_AUTO_DISMISS) => {
    this.notificationSystem.addNotification({
      level: 'error',
      title,
      message,
      autoDismiss,
      dismissible: true,
      position: 'br'
    });
  }

  render() {
    const { projectData, project } = this.state;
    // To refresh graph images every hour we generate a different
    // url every hour, causing them to reload every hour
    const hour = new Date().getHours();
    return (
      <div>
        {projectData ? <ProjectInfo projectData={projectData} /> : null}
        {projectData ? <Charts project={project} updateSeed={hour} /> : null}
        <Refreshed ref={c => this.refreshedMessage = c} />
        <NotificationSystem ref={c => this.notificationSystem = c} style={notificationStyle} />
      </div>
    );
  }
}
