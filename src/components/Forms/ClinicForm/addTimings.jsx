import React from "react";
// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";
import moment from "moment";
// react component plugin for creating beatiful tags on an input
import TagsInput from "react-tagsinput";
// react plugin that creates slider
import Nouislider from "react-nouislider";

import Button from "components/CustomButtons/Button.jsx";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// @material-ui/icons
import Today from "@material-ui/icons/Today";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import AvTimer from "@material-ui/icons/AvTimer";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";

//import AlertBox from 'components/AlertBox/alertbox.jsx';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";

class ClinicTimings extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      selectedValue: null,
      selectedEnabled: "b",
      allTimefrom:"",
      allTimeto:"",
      monTimefrom:"",
      tuesTimefrom:"",
      wednesTimefrom:"",
      thursTimefrom:"",
      friTimefrom:"",
      saturTimefrom:"",
      sunTimefrom:"",
      allTimeto:"",
      monTimeto:"",
      tuesTimeto:"",
      wednesTimeto:"",
      thursTimeto:"",
      friTimeto:"",
      saturTimeto:"",
      sunTimeto:"",
      bttnclicked:"custom",
      indexName:["mon","tues","wednes","thurs","fri","satur","sun"],
      validate: "success",
      timings:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
    this.handleDaily = this.handleDaily.bind(this);
    this.handleWeekdays = this.handleWeekdays.bind(this);
    this.handleDailyChange = this.handleDailyChange.bind(this);
    this.handleWeekdaysChange = this.handleWeekdaysChange.bind(this);
    this.handleCustom = this.handleCustom.bind(this);
    this.getValidTimes = this.getValidTimes.bind(this);
    this.setTimingsFormat = this.setTimingsFormat.bind(this);
    this.onClickOK = this.onClickOK.bind(this);
  }

  setTimingsFormat(callback){
    var monopentime = "";
    var tuesopentime = "";
    var wednesopentime = "";
    var thursopentime = "";
    var friopentime = "";
    var saturopentime = "";
    var sunopentime = "";
    var monclosetime = "";
    var tuesclosetime = "";
    var wednesclosetime = "";
    var thursclosetime = "";
    var friclosetime = "";
    var saturclosetime = "";
    var sunclosetime = "";

    if(moment.utc(this.state.monTimefrom).format("hh:mm A") != "Invalid date"){
      monopentime = moment(this.state.monTimefrom).format("hh:mm A");
      //this.setState({monTimefrom: moment.utc(this.state.monTimefrom).format("hh:mm A") })
    }
    if(moment.utc(this.state.tuesTimefrom).format("hh:mm A") != "Invalid date"){
      tuesopentime = moment(this.state.tuesTimefrom).format("hh:mm A");
      //this.setState({tuesTimefrom: moment.utc(this.state.tuesTimefrom).format("hh:mm A") })
    }
    if(moment.utc(this.state.wednesTimefrom).format("hh:mm A") != "Invalid date"){
      wednesopentime = moment(this.state.wednesTimefrom).format("hh:mm A");
      //this.setState({wednesTimefrom: moment.utc(this.state.wednesTimefrom).format("hh:mm A") })
    }
    if(moment.utc(this.state.thursTimefrom).format("hh:mm A") != "Invalid date"){
      thursopentime = moment(this.state.thursTimefrom).format("hh:mm A");
      //this.setState({thursTimefrom: moment.utc(this.state.thursTimefrom).format("hh:mm A") })
    }
    if(moment.utc(this.state.friTimefrom).format("hh:mm A") != "Invalid date"){
      friopentime = moment(this.state.friTimefrom).format("hh:mm A");
      //this.setState({friTimefrom: moment.utc(this.state.friTimefrom).format("hh:mm A") })
    }
    if(moment.utc(this.state.saturTimefrom).format("hh:mm A") != "Invalid date"){
      saturopentime = moment(this.state.saturTimefrom).format("hh:mm A");
      //this.setState({saturTimefrom: moment.utc(this.state.saturTimefrom).format("hh:mm A") })
    }
    if(moment.utc(this.state.sunTimefrom).format("hh:mm A") != "Invalid date"){
      sunopentime = moment(this.state.sunTimefrom).format("hh:mm A");
      //this.setState({sunTimefrom: moment.utc(this.state.sunTimefrom).format("hh:mm A") })
    }
    if(moment.utc(this.state.monTimeto).format("hh:mm A") != "Invalid date"){
      monclosetime = moment(this.state.monTimeto).format("hh:mm A");
      //this.setState({monTimeto: moment.utc(this.state.monTimeto).format("hh:mm A") })
    }
    if(moment.utc(this.state.tuesTimeto).format("hh:mm A") != "Invalid date"){
      tuesclosetime = moment(this.state.tuesTimeto).format("hh:mm A");
      //this.setState({tuesTimeto: moment.utc(this.state.tuesTimeto).format("hh:mm A") })
    }
    if(moment.utc(this.state.wednesTimeto).format("hh:mm A") != "Invalid date"){
      wednesclosetime = moment(this.state.wednesTimeto).format("hh:mm A");
      //this.setState({wednesTimeto: moment.utc(this.state.wednesTimeto).format("hh:mm A") })
    }
    if(moment.utc(this.state.thursTimeto).format("hh:mm A") != "Invalid date"){
      thursclosetime = moment(this.state.thursTimeto).format("hh:mm A");
      //this.setState({thursTimeto: moment.utc(this.state.thursTimeto).format("hh:mm A") })
    }
    if(moment.utc(this.state.friTimeto).format("hh:mm A") != "Invalid date"){
      friclosetime = moment(this.state.friTimeto).format("hh:mm A");
      //this.setState({friTimeto: moment.utc(this.state.friTimeto).format("hh:mm A") })
    }
    if(moment.utc(this.state.saturTimeto).format("hh:mm A") != "Invalid date"){
      saturclosetime = moment(this.state.saturTimeto).format("hh:mm A");
      //this.setState({saturTimeto: moment.utc(this.state.saturTimeto).format("hh:mm A") })
    }
    if(moment.utc(this.state.sunTimeto).format("hh:mm A") != "Invalid date"){
      sunclosetime = moment(this.state.sunTimeto).format("hh:mm A");
      //this.setState({sunTimeto: moment.utc(this.state.sunTimeto).format("hh:mm A") })
    }

   var newTimings = [];
   newTimings.push({"day":"mon", "open_time": monopentime, "close_time": monclosetime},
                    {"day":"tues", "open_time":tuesopentime,"close_time":tuesclosetime},
                    {"day":"wednes", "open_time":wednesopentime,"close_time":wednesclosetime},
                    {"day":"thurs", "open_time":thursopentime,"close_time":thursclosetime},
                    {"day":"fri", "open_time":friopentime,"close_time":friclosetime},
                    {"day":"satur", "open_time":saturopentime,"close_time":saturclosetime},
                    {"day":"sun", "open_time":sunopentime,"close_time":sunclosetime});

    this.setState({timings: newTimings});
    callback(newTimings);
  }

  getValidTimes(callback){
    const { checked } = this.state;
    console.log(this.state.checked);
    if(this.state.monTimefrom === "" && this.state.monTimeto === "" && this.state.tuesTimefrom === "" && this.state.tuesTimeto === "" && this.state.wednesTimefrom === "" && this.state.wednesTimeto === "" && this.state.thursTimefrom === "" && this.state.thursTimeto === "" && this.state.friTimefrom === "" && this.state.friTimeto === "" && this.state.saturTimefrom === "" && this.state.saturTimeto === "" && this.state.sunTimefrom === "" && this.state.sunTimeto === "" ){
      callback("error");
    }
    else{
      var flag = 0;
      var day;
      for(day in checked){
        if( checked[day] == 1 ){
          if(this.state.monTimefrom === "" || this.state.monTimeto === ""){
            flag = 1;
          }
        }
        else if(checked[day] == 2 ){
          if(this.state.tuesTimefrom === "" || this.state.tuesTimeto === ""){
            flag = 1;
        }
      }
        else if(checked[day] == 3 ){
          if(this.state.wednesTimefrom === "" || this.state.wednesTimeto === ""){
            flag = 1;
        }
      }
        else if(checked[day] == 4 ){
          if(this.state.thursTimefrom === "" || this.state.thursTimeto === ""){
            flag = 1;
        }
      }
        else if(checked[day] == 5 ){
          if(this.state.friTimefrom === "" || this.state.friTimeto === ""){
            flag = 1;
        }
      }
        else if(checked[day] == 6 ){
          if(this.state.saturTimefrom === "" || this.state.saturTimeto === ""){
            flag = 1;
        }
      }
        else if(checked[day] == 7 ){
          if(this.state.sunTimefrom === "" || this.state.sunTimeto === ""){
            flag = 1;
        }
      }
      }
      if(flag == 1){
        callback("error");
      }
      else{
        callback("success");
      }
    }
  }

  handleChange(event, stateName, param) {
    const { checked } = this.state;
    var value = this.state.indexName.indexOf(stateName) + 1;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    }
    this.setState({
      checked: newChecked
    });

      this.setState({ [stateName + "Time" + param]: event._d });
      if(stateName === "all" && this.state.bttnclicked === "daily"){
        this.handleDailyChange();
      }
      if(stateName === "all" && this.state.bttnclicked === "weekdays"){
        this.handleWeekdaysChange();
      }
      if(stateName === "all" && this.state.bttnclicked === "custom"){
        this.handleCustom();
      }
  }

  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }

  handleToggle(value,stateName) {
    this.setState({bttnclicked: "custom"});
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      if(this.state.allTimefrom !== "")
      this.setState({ [stateName + "Timefrom" ]: this.state.allTimefrom });
      if(this.state.allTimeto !== "")
      this.setState({ [stateName + "Timeto"]: this.state.allTimeto });
    } else {
      newChecked.splice(currentIndex, 1);
      this.setState({ [stateName + "Timefrom" ]: "" });
      this.setState({ [stateName + "Timeto"]: "" });
    }
    this.setState({
      checked: newChecked
    });

  }

  handleCustom(){
    const { checked } = this.state;
    var day;
    for(day in checked){
      var currentIndex = checked[day];
      this.setState({ [this.state.indexName[currentIndex-1] + "Timefrom" ]: this.state.allTimefrom });
      this.setState({ [this.state.indexName[currentIndex-1] + "Timeto"]: this.state.allTimeto });
    }
  }

  handleDailyChange(){
    const { checked } = this.state;
    var newChecked = [1,2,3,4,5,6,7];
    this.setState({
      checked: newChecked
    });
    this.setState({
      bttnclicked: "daily"
    });

    this.setState({monTimefrom: this.state.allTimefrom});
    this.setState({tuesTimefrom: this.state.allTimefrom});
    this.setState({wednesTimefrom: this.state.allTimefrom});
    this.setState({thursTimefrom: this.state.allTimefrom});
    this.setState({friTimefrom: this.state.allTimefrom});
    this.setState({saturTimefrom: this.state.allTimefrom});
    this.setState({sunTimefrom: this.state.allTimefrom});
    this.setState({monTimeto: this.state.allTimeto});
    this.setState({tuesTimeto: this.state.allTimeto});
    this.setState({wednesTimeto: this.state.allTimeto});
    this.setState({thursTimeto: this.state.allTimeto});
    this.setState({friTimeto: this.state.allTimeto});
    this.setState({saturTimeto: this.state.allTimeto});
    this.setState({sunTimeto: this.state.allTimeto});
  }

  handleWeekdaysChange(){
    const { checked } = this.state;
    var newChecked = [1,2,3,4,5];
    this.setState({
      checked: newChecked
    });

    this.setState({
      bttnclicked: "weekdays"
    });

    this.setState({monTimefrom: this.state.allTimefrom});
    this.setState({tuesTimefrom: this.state.allTimefrom});
    this.setState({wednesTimefrom: this.state.allTimefrom});
    this.setState({thursTimefrom: this.state.allTimefrom});
    this.setState({friTimefrom: this.state.allTimefrom});
    this.setState({saturTimefrom: ""});
    this.setState({sunTimefrom: ""});
    this.setState({monTimeto: this.state.allTimeto});
    this.setState({tuesTimeto: this.state.allTimeto});
    this.setState({wednesTimeto: this.state.allTimeto});
    this.setState({thursTimeto: this.state.allTimeto});
    this.setState({friTimeto: this.state.allTimeto});
    this.setState({saturTimeto: ""});
    this.setState({sunTimeto: ""});
  }

  onClickOK(){
    this.getValidTimes(function(valid){
      console.log(valid);
      if(valid == "error"){
        console.log("error");
      }
      else{
        console.log("hell");
        this.setTimingsFormat(function(time){
          this.props.handleTimings(time);
          this.props.hideAlert();
        }.bind(this));
      }
    }.bind(this))
  }

  handleDaily(){
   const { checked } = this.state;
    if(this.state.bttnclicked === "daily"){
      var day;
      for(day in checked){
        var currentIndex = checked[day];
        this.setState({ [this.state.indexName[currentIndex-1] + "Timefrom" ]: "" });
        this.setState({ [this.state.indexName[currentIndex-1] + "Timeto"]: "" });
      }
      this.setState({bttnclicked: "custom"});
      var newChecked = [];
      this.setState({
        checked: newChecked
      });
    }
    else{
      var newChecked = [1,2,3,4,5,6,7];
      this.setState({
        checked: newChecked
      });
      this.setState({
        bttnclicked: "daily"
      });

      this.setState({monTimefrom: this.state.allTimefrom});
      this.setState({tuesTimefrom: this.state.allTimefrom});
      this.setState({wednesTimefrom: this.state.allTimefrom});
      this.setState({thursTimefrom: this.state.allTimefrom});
      this.setState({friTimefrom: this.state.allTimefrom});
      this.setState({saturTimefrom: this.state.allTimefrom});
      this.setState({sunTimefrom: this.state.allTimefrom});
      this.setState({monTimeto: this.state.allTimeto});
      this.setState({tuesTimeto: this.state.allTimeto});
      this.setState({wednesTimeto: this.state.allTimeto});
      this.setState({thursTimeto: this.state.allTimeto});
      this.setState({friTimeto: this.state.allTimeto});
      this.setState({saturTimeto: this.state.allTimeto});
      this.setState({sunTimeto: this.state.allTimeto});
    }
  }

  handleWeekdays(){
    const { checked } = this.state;
    if(this.state.bttnclicked === "weekdays"){
      var day;
      for(day in checked){
        var currentIndex = checked[day];
        this.setState({ [this.state.indexName[currentIndex-1] + "Timefrom" ]: "" });
        this.setState({ [this.state.indexName[currentIndex-1] + "Timeto"]: "" });
      }
      this.setState({bttnclicked: "custom"});
      var newChecked = [];
      this.setState({
        checked: newChecked
      });
    }
    else{
      var newChecked = [1,2,3,4,5];
      this.setState({
        checked: newChecked
      });

      this.setState({
        bttnclicked: "weekdays"
      });

      this.setState({monTimefrom: this.state.allTimefrom});
      this.setState({tuesTimefrom: this.state.allTimefrom});
      this.setState({wednesTimefrom: this.state.allTimefrom});
      this.setState({thursTimefrom: this.state.allTimefrom});
      this.setState({friTimefrom: this.state.allTimefrom});
      this.setState({saturTimefrom: ""});
      this.setState({sunTimefrom: ""});
      this.setState({monTimeto: this.state.allTimeto});
      this.setState({tuesTimeto: this.state.allTimeto});
      this.setState({wednesTimeto: this.state.allTimeto});
      this.setState({thursTimeto: this.state.allTimeto});
      this.setState({friTimeto: this.state.allTimeto});
      this.setState({saturTimeto: ""});
      this.setState({sunTimeto: ""});
    }
  }

  render(){
    const { classes } = this.props;
    return(
      <div>
    <Card>
      <CardHeader>
        <h4 className={classes.cardIconTitle}>Timings</h4>
      </CardHeader>
      <CardBody>
        <GridContainer xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "From", readOnly:true }}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"all","from")}
              />
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "To", readOnly:true }}
                timeConstraints={{minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"all","to")}
              />
            </FormControl>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <Button color="danger" onClick={this.handleDaily}>Daily</Button>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Button color="success" onClick={this.handleWeekdays}>Weekdays</Button>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Button color="success">Custom</Button>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => this.handleToggle(1,"mon")}
                    checked={
                      this.state.checked.indexOf(1) !== -1
                      ? true
                      : false
                    }
                    checkedIcon={
                      <Check className={classes.checkedIcon} />
                    }
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked
                    }}
                  />
                }
                classes={{
                  label: classes.label
                }}
                label="Monday"
              />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "From", readOnly:true }}
                value={this.state.monTimefrom}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"mon","from")}
              />
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "To", readOnly:true }}
                value={this.state.monTimeto}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"mon","to")}
              />
            </FormControl>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => this.handleToggle(2,"tues")}
                    checked={
                      this.state.checked.indexOf(2) !== -1
                      ? true
                      : false
                    }
                    checkedIcon={
                      <Check className={classes.checkedIcon} />
                    }
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked
                    }}
                  />
                }
                classes={{
                  label: classes.label
                }}
                label="Tuesday"
              />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "From", readOnly:true }}
                value={this.state.tuesTimefrom}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"tues","from")}
              />
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "To", readOnly:true }}
                value={this.state.tuesTimeto}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"tues","to")}
              />
            </FormControl>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => this.handleToggle(3,"wednes")}
                    checked={
                      this.state.checked.indexOf(3) !== -1
                      ? true
                      : false
                    }
                    checkedIcon={
                      <Check className={classes.checkedIcon} />
                    }
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked
                    }}
                  />
                }
                classes={{
                  label: classes.label
                }}
                label="Wednesday"
              />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "From", readOnly:true }}
                value={this.state.wednesTimefrom}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"wednes","from")}
              />
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "To", readOnly:true }}
                value={this.state.wednesTimeto}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"wednes","to")}
              />
            </FormControl>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => this.handleToggle(4,"thurs")}
                    checked={
                      this.state.checked.indexOf(4) !== -1
                      ? true
                      : false
                    }
                    checkedIcon={
                      <Check className={classes.checkedIcon} />
                    }
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked
                    }}
                  />
                }
                classes={{
                  label: classes.label
                }}
                label="Thursday"
              />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "From", readOnly:true }}
                value={this.state.thursTimefrom}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"thurs","from")}
              />
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "To", readOnly:true }}
                value={this.state.thursTimeto}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"thurs","to")}
              />
            </FormControl>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => this.handleToggle(5,"fri")}
                    checked={
                      this.state.checked.indexOf(5) !== -1
                      ? true
                      : false
                    }
                    checkedIcon={
                      <Check className={classes.checkedIcon} />
                    }
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked
                    }}
                  />
                }
                classes={{
                  label: classes.label
                }}
                label="Friday"
              />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "From", readOnly:true }}
                value={this.state.friTimefrom}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"fri","from")}
              />
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "To", readOnly:true }}
                value={this.state.friTimeto}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"fri","to")}
              />
            </FormControl>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => this.handleToggle(6,"satur")}
                    checked={
                      this.state.checked.indexOf(6) !== -1
                      ? true
                      : false
                    }
                    checkedIcon={
                      <Check className={classes.checkedIcon} />
                    }
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked
                    }}
                  />
                }
                classes={{
                  label: classes.label
                }}
                label="Saturday"
              />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "From", readOnly:true }}
                value={this.state.saturTimefrom}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"satur","from")}
              />
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "To", readOnly:true }}
                value={this.state.saturTimeto}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"satur","to")}
              />
            </FormControl>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => this.handleToggle(7,"sun")}
                    checked={
                      this.state.checked.indexOf(7) !== -1
                      ? true
                      : false
                    }
                    checkedIcon={
                      <Check className={classes.checkedIcon} />
                    }
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked
                    }}
                  />
                }
                classes={{
                  label: classes.label
                }}
                label="Sunday"
              />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "From", readOnly:true }}
                value={this.state.sunTimefrom}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"sun","from")}
              />
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <Datetime
                dateFormat={false}
                inputProps={{ placeholder: "To", readOnly:true }}
                value={this.state.sunTimeto}
                timeConstraints={ {minutes: { step: 15 }}}
                onChange={event => this.handleChange(event,"sun","to")}
              />
            </FormControl>
          </GridItem>
        </GridContainer>
        <GridContainer xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={12} md={12}><center><Button color="success" onClick={this.onClickOK}>OK</Button><Button color="error" onClick={this.props.hideAlert}>CANCEL</Button></center></GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  </div>
  );
  }
}

export default withStyles(extendedFormsStyle)(ClinicTimings);
