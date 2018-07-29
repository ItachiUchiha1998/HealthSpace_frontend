import React from "react";
import {Redirect} from "react-router";
//import ReactDOM from "react-dom";
 import withStyles from "@material-ui/core/styles/withStyles";
import DoctorSubsribeForm from "components/Forms/DoctorForm/AddExistingForm.jsx";
import DoctorForm from "components/Forms/DoctorForm/DoctorForm.jsx";
import SearchComponent from "components/Search/AutoCompleteComponent.jsx";

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

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class AddDoctor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      addNew: false,
      addExisting: false,
      alert: null,
      selected_doctorID: '',
    }
        this.getSuggestionValue = this.getSuggestionValue.bind(this);
        this.addNewClick = this.addNewClick.bind(this);
  };

  getSuggestionValue = (suggestion) => {
     this.setState({selected_doctorID: suggestion.doctor_id});
     this.setState({addExisting: true});
     this.setState({addNew: false});
      return suggestion.doctor_name;
    }

    addNewClick(){
      this.setState({addExisting:false});
      this.setState({addNew: true});
    }

  render(){
    const { classes } = this.props;
    console.log(this.props);

      return(
        <div>
        {this.state.alert}
        <GridContainer>
  <GridItem xs={12} sm={12} md={12} >
  <Card>
    <CardHeader color="rose" text>
      <CardText color="rose">
        <h4 className={classes.cardTitle}>Add Doctor</h4>
      </CardText>
    </CardHeader>
    <CardBody>
      <GridContainer xs={12} md={12} sm={12}>
        <GridItem xs={12} md={12} sm={12}>
        <GridContainer xs={12} md={12} sm={12}>
          <GridItem xs={12} md={6} sm={6}>
            <SearchComponent getSuggestionValue={this.getSuggestionValue}/>
          </GridItem>
            <p>or</p>
          <GridItem xs={12} md={4} sm={4}>
            <Button color="rose" onClick={this.addNewClick}>Add New</Button>
          </GridItem>
        </GridContainer>
        </GridItem>
        {this.state.addExisting ? (<GridItem xs={12} md={12} sm={12}>
        <DoctorSubsribeForm id={this.state.selected_doctorID} clinicId={this.props.location.state.id} clinicName={this.props.location.state.name}/>
      </GridItem>):(<p></p>)
        }
        {this.state.addNew ? (<GridItem xs={12} md={12} sm={12}>
        <DoctorForm clinicId={this.props.location.state.id} clinicName={this.props.location.state.name}/>
      </GridItem>):(<p></p>)
        }
      </GridContainer>
    </CardBody>
  </Card>
  </GridItem>
  </GridContainer>
</div>);
  }
}

export default withStyles(styles)(AddDoctor);
