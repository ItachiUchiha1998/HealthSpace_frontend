import React from 'react';
import { Redirect } from 'react-router';

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";


// @material-ui/core components
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";
// material ui icons
import MailOutline from "@material-ui/icons/MailOutline";
import Contacts from "@material-ui/icons/Contacts";
import Check from "@material-ui/icons/Check";

//import AlertBox from 'components/AlertBox/alertbox.jsx';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import ClinicTimingsEdit from "components/Forms/ClinicForm/updateTimings.jsx";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import TagInputAutoSuggest from "components/Forms/ClinicForm/TagInputAutoSuggest.jsx";
import ClinicTimings from "components/Forms/ClinicForm/addTimings.jsx";

// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";
import Icon from '@material-ui/core/Icon';


class ValidationForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specialities:[],
      timings:[],
      name:"",
      nameState:"",
      phoneNumberState:"",
      phoneNumber:"",
      mciNumber:"",
      mciNumberState: "",
      alert: null,
      open:true,
      experience: "",
      experienceState: "",
      qualification:"",
      qualificationState:"",
      imageurl:"",
      registerEmail:"",
      registerEmailState:"",
      gender:"male",
      genderState:"",
      redirect: false,
      simpleSelect:"",
      role:"doctor",
      timingsadded: false,
      selectedValue: null,
      services: [],
      clinic_id: props.clinicId,
      clinic_name: props.clinicName,
      generateddoctor_id: ""
    };
    this.hideAlert = this.hideAlert.bind(this);
    this.typeClick = this.typeClick.bind(this);
    this.CreateAlertForEdit = this.CreateAlertForEdit.bind(this);
    this.CreateAlertonADD = this.CreateAlertonADD.bind(this);
    this.CreateAlert = this.CreateAlert.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
  }

  componentDidUpdate(){
    console.log(this.state.tags);
    console.log(this.state.imageurl);
  }

  CallTagMasterSpecialities () {
    var data = {
      speciality_text: this.state.specialities ,
      speciality_role: this.state.role
    }
    console.log("inside tag master")
    const BASE_URL = 'http://localhost:7000/speciality/create';
    fetch(BASE_URL,{
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method : 'POST',
      body: JSON.stringify(data)
    }).then( response => {  if (!response) { var reason = "BAD REQUEST! "; this.CreateAlertonADD(reason); } else { return response.json(); }}).then( json => { console.log(json); if(json.status == "failed") { var reason = json.reason; this.CreateAlertonADD(reason);} else { console.log("done");} });
  }

  CallTagMasterServices() {
   var data = {
      service_text: this.state.services ,
      service_role: this.state.role
    }
    console.log("inside tag master")
    const BASE_URL = 'http://localhost:7000/service/create';
    fetch(BASE_URL,{
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method : 'POST',
      body: JSON.stringify(data)
    }).then( response => {  if (!response) { var reason = "BAD REQUEST! "; this.CreateAlertonADD(reason); } else { return response.json(); }}).then( json => { console.log(json); if(json.status == "failed") { var reason = json.reason; this.CreateAlertonADD(reason);} else { console.log("done");} });
  }

  CreateAlertonADD(reason){
    this.setState({
      alert: (
        <Dialog
        open={this.state.open}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{reason}</DialogTitle>

                  <DialogActions>
                    <Button onClick={this.hideAlert}>
                      OK
                    </Button>
                  </DialogActions>
                </Dialog>
      )
    });
  }

  handleChangeServices(services) {
    this.setState({services});
  }

  handleChangeSpecialities(specialities) {
    this.setState({specialities});
  }

  handleTimings(timings){
    this.setState({timings});
    this.setState({timingsadded: true});
  }

  handleImageUrl(url){
    this.setState({imageurl: url});
  }

  CreateAlertForEdit() {
    console.log("ineditalert");
    this.setState({
      alert: (
        <Dialog
        open={this.state.open}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title"><ClinicTimingsEdit handleTimings={this.handleTimings.bind(this)} hideAlert={this.hideAlert.bind(this)} timings={this.state.timings} /></DialogTitle>
                </Dialog>
      )
    });
  }

  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // function that returns true if value is email, false otherwise
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }

  verifyName(value) {
    var nameRex = /^(?![ .]+$)[a-zA-Z .]+$/;
    if (nameRex.test(value)){
      return true;
    }
    return false;
  }
  // function that verifies if value contains only numbers
  verifyNumber(value) {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  }

  verifyAlphaNum(value) {
    var alphanumRex = new RegExp("^[a-zA-Z0-9\\-\\s]+$");
    if (alphanumRex.test(value)) {
      return true;
    }
    return false;
  }

  verifyPhoneNumber(value){
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value) && value.length === 10) {
      return true;
    }
    return false;
  }

  change(event, stateName, type, inputType, maxValue) {
    this.setState({ [stateName]: event.target.value});
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else if (event.target.value === "" && inputType == "optional"){
          this.setState({ [stateName + "State"]: "none" });
        }
        else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "name":
        if (this.verifyName(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else if (event.target.value === "" && inputType == "optional"){
          this.setState({ [stateName + "State"]: "none" });
        }
        else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "number":
          if (this.verifyNumber(event.target.value)) {
            this.setState({ [stateName + "State"]: "success" });
          } else if (event.target.value === "" && inputType == "optional"){
            this.setState({ [stateName + "State"]: "none" });
          }
          else {
            this.setState({ [stateName + "State"]: "error" });
          }
          break;
      case "phonenumber":
          if (this.verifyPhoneNumber(event.target.value)) {
            this.setState({ [stateName + "State"]: "success" });
            } else if (event.target.value === "" && inputType == "optional"){
              this.setState({ [stateName + "State"]: "none" });
            }
            else {
              this.setState({ [stateName + "State"]: "error" });
            }
          break;
      case "alphanum":
          if (this.verifyAlphaNum(event.target.value)) {
            this.setState({ [stateName + "State"]: "success" });
          }else if (event.target.value === "" && inputType == "optional"){
            this.setState({ [stateName + "State"]: "none" });
          }
           else {
            this.setState({ [stateName + "State"]: "error" });
          }
          break;
          case "novalidation":
          if (event.target.value === "" && inputType == "optional"){
            this.setState({ [stateName + "State"]: "none" });
          }
          else if (event.target.value === "" && inputType == "required"){
            this.setState({ [stateName + "State"]: "error" });
          }
          else{
            this.setState({[stateName + "State"]: "success"});
          }
            break;
      default:
        break;
    }
  }

  CreateAlert() {
    console.log("increatealert");
    console.log(this.state.timings);
    this.setState({
      alert: (
        <Dialog
        open={this.state.open}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title"><ClinicTimings handleTimings={this.handleTimings.bind(this)} hideAlert={this.hideAlert.bind(this) }/></DialogTitle>
                </Dialog>
      )
    });
  }

  CallCreateApi (data) {
    console.log("inside create: " + data.doctor_name);
    const BASE_URL = 'http://localhost:7000/doctor/create';
    fetch(BASE_URL,{
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method : 'POST',
      body: JSON.stringify(data)
    }).then( response => {  if (!response) { var reason = "BAD REQUEST! "; this.CreateAlertonADD(reason); } else { return response.json(); }}).then( json => { console.log(json); if(json.status == "failed") { var reason = json.reason; this.CreateAlertonADD(reason);} else {this.setState({redirect: true})} });
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  handleChangeGender(event) {
     this.setState({
      gender: event.target.value
    });
  }

  setGender(event) {
    console.log("sd: " + event.target.value);
    this.setState({ gender: event.target.value })
  }

  typeClick() {
    if (this.state.nameState === "") {
      this.setState({ nameState: "error" });
    }
    if (this.state.phoneNumberState === "") {
      this.setState({ phoneNumberState: "error" });
    }
    if(this.state.nameState === "success" &&
        this.state.phoneNumberState === "success" &&
        this.state.mciNumberState !== "error" &&
        this.state.registerEmailState != "error" && this.state.experienceState !="error" && this.state.qualificationState !="error")
    {
      var clinicsobject = {"timings": this.state.timings, "services":this.state.services, "clinic_id":this.state.clinic_id, "clinic_name":this.state.clinic_name }
      var data = {
        speciality:this.state.specialities,
        doctor_name:this.state.name,
        contact:this.state.phoneNumber,
        MCI_Number:this.state.mciNumber,
        experience: this.state.experience,
        qualification:this.state.qualification,
        imageurl:this.state.imageurl,
        email:this.state.registerEmail,
        gender:this.state.gender,
        clinics: clinicsobject,
        clinic_id: this.state.clinic_id
      }
      console.log(data);
      this.CallCreateApi(data);
      this.CallTagMasterSpecialities();
      this.CallTagMasterServices();
    }
  }
  render() {
    const { classes } = this.props;
    console.log(this.props);
    if (this.state.redirect) {
    return <Redirect to={{pathname: "/clinic/OneClinic", state:{id: this.state.clinic_id}}} />;
  }
    return (
      <div>
      {this.state.alert}
      <GridContainer>
<GridItem xs={12} sm={12} md={12} >
    <form>
      <GridContainer>
        <GridItem xs={12} sm={5} md={5}>
          <CustomInput
            labelText="Name"
            id="name"
            success={this.state.nameState === "success"}
            error={this.state.nameState === "error"}
            formControlProps={{
              fullWidth: true,
              required: true
            }}
            inputProps={{
              onChange: event =>
                this.change(event, "name", "name","required")
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={7} md={5}>
          <CustomInput
            success={this.state.registerEmailState === "success"}
            error={this.state.registerEmailState === "error"}
            labelText="Email "
            id="registeremail"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event =>
                this.change(event, "registerEmail", "email","optional"),
              type: "email"
            }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={5}>
          <CustomInput
            labelText="Phone Number"
            success={this.state.phoneNumberState === "success"}
            error={this.state.phoneNumberState === "error"}
            id="phonenumber"
            formControlProps={{
              fullWidth: true,
              required: true
            }}
            inputProps={{
              onChange: event =>
                this.change(event, "phoneNumber", "phonenumber","required")
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={6} md={5}>
          <CustomInput
            labelText="MCI Number"
            success={this.state.mciNumberState === "success"}
            error={this.state.mciNumberState === "error"}
            id="mci"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event =>
                this.change(event, "mciNumber", "alphanum","optional")
            }}
          />
                  </GridItem>

          <GridItem xs={12} sm={6} md={5}>
          <CustomInput
            labelText="Qualification"
            success={this.state.qualificationState === "success"}
            error={this.state.qualificationState === "error"}
            id="mci"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event =>
                this.change(event, "qualification", "novalidation", "optional")
            }}
          />
        </GridItem>
        <GridItem xs={5} >
              <legend>Specialities</legend>
                <GridItem xs={12} sm={12} md={12}>
                  <TagInputAutoSuggest handleChangeSpecialities={this.handleChangeSpecialities.bind(this)} specialities={this.state.specialities} role={this.state.role} tagname={"speciality"}/>
                </GridItem>
          </GridItem>

        <GridItem xs={5} >
          <CustomInput
            labelText="Experience"
            success={this.state.experienceState === "success"}
            error={this.state.experienceState === "error"}
            id="experience"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event =>
                this.change(event, "experience", "novalidation", "optional")
            }}
          />
        </GridItem>

        <GridItem xs={5}  >
          <p ><b>Gender:</b></p>
            <label>
              <input
                type="radio"
                value="male"
                name="gender"
                checked={this.state.gender === "male"}
                onChange={this.handleChangeGender}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.handleChangeGender}
              />
              Female
            </label>


          </GridItem>

        <GridItem xs={12} >
            <ImageUpload
              addButtonProps={{
                color: "rose",
                round: true
              }}
              changeButtonProps={{
                color: "rose",
                round: true
              }}
              removeButtonProps={{
                color: "danger",
                round: true
              }}
              handleImageUrl={this.handleImageUrl.bind(this)}
              role={"Doctor"}
            />
          </GridItem>
                    <GridContainer>
            <GridItem xs={12} sm={6} md={5}>
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
               <legend>Timings</legend>
               </GridItem>
              {this.state.timingsadded ? (
                <GridItem xs={12} sm={12} md={8}>
                  <GridContainer>
                <GridItem xs={12} sm={4} md={6}>
             <Button color="danger"><Icon style={{fontSize:15, marginRight: "15%"}}>done</Icon>Added</Button>
             </GridItem>
             <GridItem xs={12} sm={4} md={6}>
             <Button color="success" onClick={this.CreateAlertForEdit}>Edit</Button>
             </GridItem></GridContainer> </GridItem>) : ( <GridItem xs={12} sm={4} md={3}>
             <Button color="success" onClick={this.CreateAlert}>Add</Button>
             </GridItem>) }

              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={6} md={5}>
                <legend>Services</legend>
                  <GridItem xs={12} sm={12} md={12}>
                    <TagInputAutoSuggest handleChangeServices={this.handleChangeServices.bind(this)} services={this.state.services} role={this.state.role} tagname="service"/>
                  </GridItem>
            </GridItem>
          </GridContainer>
      </GridContainer>
    </form>
  <CardFooter className={classes.justifyContentCenter}>
    <Button color="rose" onClick={this.typeClick}>
      Add
    </Button>
  </CardFooter>
</GridItem>
</GridContainer>
</div>
);
}

 }

export default withStyles(validationFormsStyle,extendedFormsStyle)(ValidationForms);
