import React from 'react';
import { Redirect } from 'react-router';

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";


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

// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";


class ValidationForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // validation
      number: "",
      numberState: "",
      name:"",
      nameState:"",
      adminName:"",
      adminNameState:"",
      contactNumber:"",
      contactNumberState:"",
      companyNumber:"",
      companyNumberState:"",
      alert: null,
      open:true,
      redirect: false,
      generatedclinicmaster_id:""
    };
    this.hideAlert = this.hideAlert.bind(this);
    this.typeClick = this.typeClick.bind(this);
  }

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

  verifyPhoneNumber(value){
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value) && value.length === 10) {
      return true;
    }
    return false;
  }

  change(event, stateName, type, stateNameEqualTo, maxValue) {
    this.setState({ [stateName]: event.target.value});
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "name":
        if (this.verifyName(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "phonenumber":
          if (this.verifyPhoneNumber(event.target.value)) {
            this.setState({ [stateName + "State"]: "success" });
          } else {
            this.setState({ [stateName + "State"]: "error" });
          }
          break;
        case "number":
            if (this.verifyNumber(event.target.value)) {
              this.setState({ [stateName + "State"]: "success" });
            } else {
              this.setState({ [stateName + "State"]: "error" });
            }
            break;
      default:
        break;
    }
  }

  CallCreateApi (data) {
    console.log("inside create");
    const BASE_URL = 'http://localhost:7000/clinicmaster/create';
    fetch(BASE_URL,{
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      method : 'POST',
      body: JSON.stringify(data)
    }).then( response => {  if (!response) { var reason = "BAD REQUEST! "; this.CreateAlertonADD(reason); } else { return response.json(); }}).then( json => { console.log(json); if(json.status == "failed") { var reason = json.reason; this.CreateAlert(reason);} else { this.setState({generatedclinicmaster_id: json.data.clinicmaster_id}, () => {
    this.setState({redirect: true})
    })} });
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  CreateAlert(reason) {
    console.log("increatealert");
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
    if (this.state.nameState === "") {
      this.setState({ nameState: "error" });
    }
    if (this.state.companyNumberState === "") {
      this.setState({ companyNumberState: "error" });
    }
    if (this.state.contactNumberState === "") {
      this.setState({ contactNumberState: "error" });
    }
    if (this.state.adminNameState === "") {
      this.setState({ adminNameState: "error" });
    }
    if(this.state.nameState === "success" && this.state.contactNumberState === "success" && this.state.companyNumberState === "success" && this.state.adminNameState === "success"  ){
    var data = {
        clinicmaster_name: this.state.name,
        company_number: this.state.companyNumber,
        admin_name: this.state.adminName,
        contact_info: this.state.contactNumber
      }
      console.log(data);
      this.CallCreateApi(data);
    }
  }
  render() {
    const { classes } = this.props;
    if (this.state.redirect) {
    return <Redirect to={{pathname: "/clinicmaster/readOneClinicMaster", state:{id: this.state.generatedclinicmaster_id}}} />;
  }
    return (
      <div>
      {this.state.alert}
      <GridContainer>
<GridItem xs={12} sm={12} md={12} >
<Card>
  <CardHeader color="rose" text>
    <CardText color="rose">
      <h4 className={classes.cardTitle}>Add ClinicMaster</h4>
    </CardText>
  </CardHeader>
  <CardBody>
    <form>
      <GridContainer>
        <GridItem xs={12} sm={2}>
          <FormLabel className={classes.labelHorizontal}>
            Name *
          </FormLabel>
        </GridItem>
        <GridItem xs={12} sm={7}>
          <CustomInput
            success={this.state.nameState === "success"}
            error={this.state.nameState === "error"}
            id="name"
            formControlProps={{
              fullWidth: true,
              required: true
            }}
            inputProps={{
              onChange: event =>
                this.change(event, "name", "name")
            }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>

        <GridItem xs={12} sm={2}>
          <FormLabel className={classes.labelHorizontal}>
            Company Number *
          </FormLabel>
        </GridItem>
        <GridItem xs={12} sm={7}>
          <CustomInput
            success={this.state.companyNumberState === "success"}
            error={this.state.companyNumberState === "error"}
            id="companynumber"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event =>
                this.change(event, "companyNumber", "number")
            }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={2}>
          <FormLabel className={classes.labelHorizontal}>
            Admin Name *
          </FormLabel>
        </GridItem>
        <GridItem xs={12} sm={7}>
          <CustomInput
            success={this.state.adminNameState === "success"}
            error={this.state.adminNameState === "error"}
            id="adminname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event =>
                this.change(event, "adminName", "name")
            }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={2}>
          <FormLabel className={classes.labelHorizontal}>
            Contact Number *
          </FormLabel>
        </GridItem>
        <GridItem xs={12} sm={7}>
          <CustomInput
            success={this.state.contactNumberState === "success"}
            error={this.state.contactNumberState === "error"}
            id="url"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "contactNumber", "phonenumber")
            }}
          />
        </GridItem>
      </GridContainer>
    </form>
  </CardBody>
  <CardFooter className={classes.justifyContentCenter}>
    <Button color="rose" onClick={this.typeClick}>
      Add
    </Button>
  </CardFooter>
</Card>
</GridItem>
</GridContainer>
</div>
);
}

 }

export default withStyles(validationFormsStyle)(ValidationForms);
