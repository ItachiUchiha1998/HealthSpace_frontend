import React from "react";
import PropTypes from "prop-types";
import className from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import NavPills from "components/NavPills/NavPills.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Icon from '@material-ui/core/Icon';
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Muted from "components/Typography/Muted.jsx";
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Redirect } from 'react-router';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import Tags from 'react-material-tags';
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// icons
import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Language from "@material-ui/icons/Language";



import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class oneClinicMaster extends React.Component{

  constructor(props){

    super(props);
    this.state = {
      clinicmaster_id: props.id.location.state.id,
      data: {
        clinicmaster_id:"",
        clinicmaster_clinics: [],
        clinicmaster_companynumber: "",
        clinicmaster_contactinfo: "",
        clinicmaster_name: ""  
      },
      clinic_data: [],
      clickedId:"",
      redirect: false,
      alert: null,
      api_url: "",
      redirectAll: false,
      open: true,
      redirectAdd: false,
      redirectClinic: false
    };

  }

  CallReadClinicApi = () => {
  
  const CLINIC_URL = 'http://localhost:7000/clinic/readbycm/'+this.state.clinicmaster_id;
    fetch(CLINIC_URL,{
      method : 'POST'
    }).then( response => {return response.json();})
      .then( json => { 
        var l = json.data.length;
        var clinic_data_array = [];
       
       for(var i=0;i < l;i++) {
          clinic_data_array.push(json.data[i]);
        }
       
        this.setState({clinic_data: clinic_data_array})
      
      });
  

  }

  CallReadApi = () => {
    const BASE_URL = 'http://localhost:7000/clinicmaster/read/'+this.state.clinicmaster_id;
    fetch(BASE_URL,{
      method : 'POST'
    }).then( response => {return response.json();})
      .then( json => { 
                      let data = Object.assign({},this.state.data);
                      data.clinicmaster_id = json.data.clinicmaster_id;
                      data.clinicmaster_adminname = json.data.clinicmaster_adminname;
                      data.clinicmaster_contactinfo = json.data.clinicmaster_contactinfo;
                      data.clinicmaster_name = json.data.clinicmaster_name;
                      data.clinicmaster_clinics = json.data.clinicmaster_clinics;
                      data.clinicmaster_companynumber = json.data.clinicmaster_companynumber;
                      this.setState({data})
                    });
  }

  componentWillMount(){
    this.CallReadApi();
    this.CallReadClinicApi();
  }

  RouteToUpdate = (clickedID) => (e) => {
    this.setState({clickedId: clickedID});
    console.log(this.state.clickedId);
    this.setState({redirect: true});
  };

  hideDeleteAlert = () => {
    this.setState({
      alert: null
    });
  }

  RouteToUpdateClinic = (clickedID) => (e) => {
    this.setState({clickedId: clickedID});
    console.log(this.state.clickedId);
    this.setState({redirectClinic: true});
  };

  DeleteAlert = (param1,param2) => (e) => {
    this.setState({
      alert: (
        <Dialog
        open={this.state.open}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">Are you sure you want to Delete?</DialogTitle>

                  <DialogActions>
                    <Button onClick={this.hideDeleteAlert}>
                      Disagree
                    </Button>
                    <Button onClick={ this.CallApi } color="danger" autoFocus>
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>
      ),
      api_url: param2
    });
  }

  RouteToAddClinic = (param) => (e) => {
    this.setState({clickedId: param});
    console.log(this.state.clickedId);
    this.setState({redirectAdd: true});
  }

  CallApi = () => {

    fetch(this.state.api_url,{
      method : 'POST'
    }).then( response => {
        return response.json();
      })
      .then( json =>
          {
            console.log(json.data);
            this.setState({alert: null,redirectAll: true});
          })

  }

    render() {
          const { classes } = this.props;

    console.log(this.state);
    if (this.state.redirect) {
    return <Redirect to={{pathname: "/clinicmaster/updateClinicMaster", state:{id: this.state.clickedId}}} />;

  }

  if (this.state.redirectClinic) {
    return <Redirect to={{pathname: "/clinic/updateClinic", state:{id: this.state.clickedId}}} />;
  }

  if (this.state.redirectAll) {
    return <Redirect to={{pathname: "/clinicmaster/readClinicMaster"}} />;
  }
  if (this.state.redirectAdd) {
    return <Redirect to={{pathname: "/clinic/addClinic", state:{id: this.state.clickedId} }}  />;
  }
    const { data } = this.state;
    const Test = ({stations}) => (

            <div>
            {this.state.alert}
              {stations.map(function(station,i){
               return <div style={{display: 'inline-block'}} key={i}> 
                          {[ 

                  <div>
                  <GridContainer>
          <GridItem>
            <Card className={classes.cardHover}  style={{minWidth: 250 , maxWidth: 250,minHeight: 400 , maxHeight: 550}} >
              <CardHeader image className={classes.cardHeaderHover}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src alt="..." 
                      style={{maxWidth:200}} />
                </a>
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                  <Tooltip
                    id="tooltip-top"
                    title="View"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="transparent" simple justIcon>
                      <ArtTrack className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top"
                    title="Edit"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="success" simple justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top"
                    title="Remove"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="danger" simple justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <GridItem>
                  <h4 className={classes.cardProductTitle}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    {station.clinic_name}
                  </a>
                </h4>
                <TagsInput tagProps={{ className: "react-tagsinput-tag info" }} 
                                    disabled
                                      value={station.clinic_categories} 
                                      inputProps={{placeholder: ""}}/>
                <p className={classes.cardProductDesciprion}  style={{color: 'black'}} >
                  {station.clinic_description ? station.clinic_description : "No Description"  }
                </p>
                </GridItem>
                <GridItem>
                            <p className={classes.cardProductDesciprion}  style={{color: 'black'}}>
                                  <b>Contact: </b>{station.clinic_contact}
                                </p>
                            <p className={classes.cardProductDesciprion}  style={{color: 'black'}}>
                                  <b>Email:</b> {station.clinic_email}</p>
                      </GridItem>
                <GridItem className={classes.cardProductDesciprion} style={{color: 'black'}}>
                  <Place /> {station.clinic_address.locality !== "" ?  station.clinic_address.locality : "N/A"  }
                </GridItem>
              </CardBody>
                
            </Card>
          </GridItem>
        </GridContainer>
                      </div>
                          ]}
                      </div>; 
             })}
            </div>
          );
    return (
      <div>
      <Card>
  <CardHeader color="rose" text>
    <CardText color="rose">
      <h4>Clinic Master</h4>
    </CardText>
  </CardHeader>
  <CardBody>
  <GridContainer>
  <GridItem xs={12} sm={5} md={8}>
            <h2  style={{margin:20}} >{data.clinicmaster_name}</h2>
              <div style={{margin:20}} >
                <br></br>
                 <h3><b>{data.clinicmaster_companynumber}</b></h3>
                 <h4>Company Number</h4>
                 <h3><b>{data.clinicmaster_adminname}</b></h3>
                 <h4>Admin</h4>
                 <h3><b>{data.clinicmaster_contactinfo}</b></h3> 
                 <h4>Contact Number</h4>               
            </div>
            </GridItem>
  <GridItem xs={12} sm={5} md={4} style={{marginTop:100}} >
            <div>
              <Button color="info" 
                  onClick={this.RouteToUpdate(data.clinicmaster_id)}
                 ><Icon>border_color</Icon>Update</Button>
                 <br></br>
                 
            </div>
            <br></br>
            
            </GridItem>
            </GridContainer>

            <div>
                <h3><b>List of Clinics</b></h3><Button color="success" onClick={this.RouteToAddClinic(data.clinicmaster_id)}> <Icon>add</Icon> ADD NEW</Button>
                <br></br><br></br><br></br><br></br>
                <Test stations={this.state.clinic_data} update={this.RouteToUpdateClinic} />
            </div>

            </CardBody>
            </Card>
      </div>
    );
  }
}

oneClinicMaster.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(dashboardStyle)(oneClinicMaster);

