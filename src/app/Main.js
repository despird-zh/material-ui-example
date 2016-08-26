/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';
//
// import {blue500, red500, greenA200} from 'material-ui/styles/colors';
// import SvgIcon from 'material-ui/SvgIcon';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};



function getLang() {
  let DateTimeFormat;

  /**
   * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
   */
  if (areIntlLocalesSupported(['da'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
  } else {
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/da');
  }

  return DateTimeFormat
}

const DatePickerExampleSimple = (a) => (
  <div>
    <DatePicker hintText="local language Portrait Dialog"
      DateTimeFormat={getLang()}
      locale="fr" />
    <DatePicker hintText="Default language Landscape Dialog" mode="landscape" />
    <DatePicker hintText="Dialog Disabled" disabled={true}
       />
  </div>
);

const HelloWorld = () => (
    <b>{parseInt(Math.random()*100000).toString().split("").join(" - ")}</b>
);

// const muiTheme = getMuiTheme({
//   palette: {
//     accent1Color: deepOrange500,
//   },
// });
const muiTheme = getMuiTheme(lightBaseTheme);


class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            <HelloWorld />
            <DatePickerExampleSimple />

          </Dialog>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}



export default Main;
