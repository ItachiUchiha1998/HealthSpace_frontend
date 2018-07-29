import React from 'react';
import { Redirect } from 'react-router';

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";


import TextField from '@material-ui/core/TextField';

import SelectAutoCompleteCity from "components/Forms/ClinicForm/selectAutoCompleteCity.jsx"
import SelectAutoCompleteState from "components/Forms/ClinicForm/selectAutoCompleteState.jsx"

// @material-ui/core components
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

// material ui icons
import MailOutline from "@material-ui/icons/MailOutline";
import Contacts from "@material-ui/icons/Contacts";
import Check from "@material-ui/icons/Check";

//import AlertBox from 'components/AlertBox/alertbox.jsx';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Icon from '@material-ui/core/Icon';

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
import ClinicTimingsEdit from "components/Forms/ClinicForm/updateTimings.jsx";
// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";


class ValidationForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories:[],
      clinic_master_id: props.id.location.state.id,
      timings:[{"day":"mon", "open_time": "","close_time": ""},
                       {"day":"tues", "open_time":"","close_time":""},
                       {"day":"wednes", "open_time":"","close_time":""},
                       {"day":"thurs", "open_time":"","close_time":""},
                       {"day":"fri", "open_time":"","close_time":""},
                       {"day":"satur", "open_time":"","close_time":""},
                       {"day":"sun", "open_time":"","close_time":""}],
      selectedOptionState:'',
      selectedOptionCity:'',
      selectedcityvalue:'',
      selectedstatevalue:'',
      selectedcitylabel:'Delhi',
      selectedstatelabel:'Delhi',
      // validation
      number: "",
      numberState: "",
      name:"",
      nameState:"",
      addressline:"",
      addresslineState:"",
      locality:"",
      localityState:"",
      pincode:"",
      pincodeState:"",
      registerEmail:"",
      registerEmailState:"",
      phoneNumber:"",
      phoneNumberState:"",
      website:"",
      websiteState:"",
      location:"",
      services:"",
      description:"",
      alert: null,
      open:true,
      redirect: false,
      simpleSelect:"",
      role:"clinic",
      timingsadded: false,
      imageurl:'',
      generatedclinic_id:""
    };
    this.hideAlert = this.hideAlert.bind(this);
    this.typeClick = this.typeClick.bind(this);
    this.CreateAlert = this.CreateAlert.bind(this);
    this.CreateAlertForEdit = this.CreateAlertForEdit.bind(this);
    this.CreateAlertonADD = this.CreateAlertonADD.bind(this);
  }

  cancelHandler = (event) => {
    this.props.history.go(-1)
  }

  componentDidUpdate(){
    console.log(this.state.tags);
    console.log(this.state.timings);
    console.log(this.state.selectedstatelabel);
    console.log(this.state.selectedcitylabel);
    console.log(this.state.imageurl);
  }

  handleSelectStateChange(selectedOptionState) {
    this.setState({ selectedOptionState });
    if (selectedOptionState) {
      this.setState({selectedstatevalue: selectedOptionState.value});
      this.setState({selectedstatelabel: selectedOptionState.label});
    }
  }

  handleSelectCityChange(selectedOptionCity){
    this.setState({ selectedOptionCity });
    if (selectedOptionCity) {
      this.setState({selectedcityvalue: selectedOptionCity.value});
      this.setState({selectedcitylabel: selectedOptionCity.label});
    }
  }

  handleChangeCategories (categories) {
    this.setState({categories})
  }

  handleImageUrl(url){
    this.setState({imageurl: url});
  }

  handleTimings(timings){
    this.setState({timings});
    this.setState({timingsadded: true});
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

  verifyPincode(value){
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value) && value.length === 6) {
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

  verifyUrl(value) {
    var urlRex = /[.]/;
    if (urlRex.test(value)) {
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
        else{
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
      case "pincode":
          if (this.verifyPincode(event.target.value)) {
              this.setState({ [stateName + "State"]: "success" });
              }else if (event.target.value === "" && inputType == "optional"){
                this.setState({ [stateName + "State"]: "none" });
              }
               else {
              this.setState({ [stateName + "State"]: "error" });
            }
          break;
      case "url":
          if (this.verifyUrl(event.target.value)) {
            this.setState({ [stateName + "State"]: "success" });
          }else if (event.target.value === "" && inputType == "optional"){
            this.setState({ [stateName + "State"]: "none" });
          } else {
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

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  CreateAlert() {
    console.log("increatealert");
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


  typeClick() {
    if (this.state.name === "") {
      this.setState({ nameState: "error" });
    }
    if (this.state.phoneNumber === "") {
      this.setState({ phoneNumberState: "error" });
    }
    if(this.state.nameState === "success" && this.state.phoneNumberState === "success" && this.state.addresslineState != "error" && this.state.registerEmailState != "error" && this.state.websiteState != "error" && this.state.localityState != "error" && this.state.pincodeState != "error"){
       var address = {"addressline":this.state.addressline, "locality":this.state.locality, "city":this.state.selectedcitylabel, "state":this.state.selectedstatelabel,"pincode": this.state.pincode}
       var images = [];
       console.log("ran away");
       images.push(this.state.imageurl);
       var data = {
         clinic_name: this.state.name,
         website: this.state.website,
         contact: this.state.phoneNumber,
         timings: this.state.timings,
         email: this.state.registerEmail,
         images: images,
         description: this.state.description,
         location: this.state.location,
         categories: this.state.categories,
         address: address,
         services: this.state.services,
         clinicmaster_id: this.state.clinic_master_id
       }
       console.log(data);
       this.CallCreateApi(data);
       this.CallTagMaster();
     }
  }

  handleDescriptionChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  CallCreateApi (data) {
    console.log("inside create");
    const BASE_URL = 'http://localhost:7000/clinic/create';
    fetch(BASE_URL,{
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method : 'POST',
      body: JSON.stringify(data)
    }).then( response => {  if (!response) { var reason = "BAD REQUEST! "; this.CreateAlertonADD(reason); } else { return response.json(); }}).then( json => { console.log(json); if(json.status == "failed") { var reason = json.reason; this.CreateAlertonADD(reason);} else { this.setState({generatedclinic_id: json.data.clinic_id}, () => {
    this.setState({redirect: true})
    })} });
  }

  CallTagMaster () {
    var data = {
      category_text: this.state.categories ,
      category_role: this.state.role
    }
    console.log("inside tag master")
    const BASE_URL = 'http://localhost:7000/category/create';
    fetch(BASE_URL,{
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method : 'POST',
      body: JSON.stringify(data)
    }).then( response => {  if (!response) { var reason = "BAD REQUEST! "; this.CreateAlertonADD(reason); } else { return response.json(); }}).then( json => { console.log(json); if(json.status == "failed") { var reason = json.reason; this.CreateAlertonADD(reason);} else { console.log("done");  }});
  }

  render() {
    console.log(this.state)
    const { classes } = this.props;
    if (this.state.redirect) {
    return <Redirect to={{pathname: "/clinic/OneClinic", state:{id: this.state.generatedclinic_id}}} />;
  }
    return (
      <div>
      {this.state.alert}
      <GridContainer>
<GridItem xs={12} sm={12} md={12} >
<Card>
  <CardHeader color="rose" text>
    <CardText color="rose">
      <h4 className={classes.cardTitle}>Add Clinic</h4>
    </CardText>
  </CardHeader>
  <CardBody>
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
            labelText="Website"
            success={this.state.websiteState === "success"}
            error={this.state.websiteState === "error"}
            id="phonenumber"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event =>
                this.change(event, "website", "url","optional")
            }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={5}>
          <GridItem xs={12} sm={12} md={12}>
            <TextField
            id="multiline-flexible"
            label="Description"
            multiline
            rows="4"
            value={this.state.description}
            onChange={this.handleDescriptionChange('description')}
            className={classes.textField}
            style = {{width: "100%"}}
            margin="normal"
          />
          </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <legend>Address</legend>
              <CustomInput
                labelText="Address Line 1"
                success={this.state.addresslineState === "success"}
                error={this.state.addresslineState === "error"}
                id="addressline"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event =>
                    this.change(event, "addressline", "novalidation","optional")
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Locality"
                success={this.state.localityState === "success"}
                error={this.state.localityState === "error"}
                id="locality"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event =>
                    this.change(event, "locality", "novalidation","optional")
                }}
              />
            </GridItem>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <SelectAutoCompleteState handleSelectStateChange={this.handleSelectStateChange.bind(this)} selectedstatevalue={this.state.selectedstatevalue}/>
              </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <SelectAutoCompleteCity handleSelectCityChange={this.handleSelectCityChange.bind(this)} selectedcityvalue={this.state.selectedcityvalue}/>
            </GridItem>
          </GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Pincode"
              success={this.state.pincodeState === "success"}
              error={this.state.pincodeState === "error"}
              id="pincode"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: event => this.change(event, "pincode", "pincode","optional")
              }}
            />
          </GridItem>
        </GridItem>
        <GridItem xs={12} sm={6} md={5}>
          <GridItem xs={12} sm={12} md={12}>
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
          <GridItem xs={12} sm={12} md={12}>
              <legend>Categories</legend>
                <GridItem xs={12} sm={12} md={12}>
                  <TagInputAutoSuggest handleChangeCategories={this.handleChangeCategories.bind(this)} categories={this.state.categories} role={this.state.role} tagname="category"/>
                </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
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
              role={"Clinic"}
            />
          </GridItem>
        </GridItem>
      </GridContainer>
    </form>
  </CardBody>
  <CardFooter className={classes.justifyContentCenter}>
    <Button color="rose" onClick={this.typeClick}>
      Add
    </Button>
    <Button color="success" onClick={this.cancelHandler}>
      Cancel
    </Button>
  </CardFooter>
</Card>
</GridItem>
</GridContainer>
</div>
);
}

 }

export default withStyles(validationFormsStyle,extendedFormsStyle)(ValidationForms);
