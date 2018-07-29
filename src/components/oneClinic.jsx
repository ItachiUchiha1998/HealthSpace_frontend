import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
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

import 'react-tagsinput/react-tagsinput.css'

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class oneClinicMaster extends React.Component{

  constructor(props){

    super(props);
    this.state = {
      clinic_id: props.id.location.state.id,
      data: {
        clinic_id:"",
        clinic_closetime: "",
        clinic_email: "",
        clinic_images: [],
        clinic_opentime: "",
        clinic_parentclinicid: "",
        clinic_services: [],
        clinic_website: "",
        clinic_workingdays: "",
        clinic_address: {
          addressline: "",
          city: "",
          locality: "",
          state: "",
          pincode: "",
        },
        clinic_categories: [],
        clinic_contact: "",
        clinic_name: "",
        clinic_timings: [{
                          open_time: "",
                          close_time: "",
                          day:""
                        },{
                          open_time: "",
                          close_time: "",
                          day:""
                        },{
                          open_time: "",
                          close_time: "",
                          day:""
                        },{
                          open_time: "",
                          close_time: "",
                          day:""
                        },{
                          open_time: "",
                          close_time: "",
                          day:""
                        },{
                          open_time: "",
                          close_time: "",
                          day:""
                        },{
                          open_time: "",
                          close_time: "",
                          day:""
                        },]
      },
      doctor_data: [],
      clickedId:"",
      redirect: false,
      alert: null,
      api_url: "",
      redirectAll: false,
      open: true,
      redirectAdd: false
    };

  }

  CallReadClinicApi = () => {

  const CLINIC_URL = 'http://localhost:7000/clinic/read/'+this.state.clinic_id;
    fetch(CLINIC_URL,{
      method : 'POST'
    }).then( response => {return response.json();})
      .then( json => {
                console.log(json.data)
                let data = Object.assign({},this.state.data);
                      data.clinic_id = json.data.clinic_id;
                      data.clinic_name = json.data.clinic_name;
                      data.clinic_closetime = json.data.clinic_closetime;
                      data.clinic_email = json.data.clinic_email;
                      data.clinic_images = json.data.clinic_images;
                      data.clinic_opentime = json.data.clinic_opentime;
                      data.clinic_parentclinicid = json.data.clinic_parentclinicid;
                      data.clinic_services = json.data.clinic_services;
                      data.clinic_website = json.data.clinic_website;
                      data.clinic_address = json.data.clinic_address;
                      data.clinic_categories = json.data.clinic_categories;
                      data.clinic_description = json.data.clinic_description;
            data.clinic_contact = json.data.clinic_contact;
            data.clinic_timings = json.data.clinic_timings;
                      this.setState({data})
                    });

  }

  RouteToAddDoctor = (param) => (e) => {
    this.setState({clickedId: param});
    console.log(this.state.clickedId);
    this.setState({redirectAdd: true});
  }

  CallReadDoctorApi = () => {

  const DOCTOR_URL = 'http://localhost:7000/doctor/readbycl/'+this.state.clinic_id;
    fetch(DOCTOR_URL,{
      method : 'POST'
    }).then( response => {return response.json();})
      .then( json => {
        var l = json.data.length;
        var doctor_data_array = [];

       for(var i=0;i < l;i++) {
          doctor_data_array.push(json.data[i]);
        }

        this.setState({doctor_data: doctor_data_array})

      });

  }

  componentWillMount(){
    this.CallReadClinicApi();
    this.CallReadDoctorApi();
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

  handleChange(tags) {
    console.log("tags")
  }


    render() {
    console.log(this.state);
    if (this.state.redirect) {
    return <Redirect to={{pathname: "/clinic/updateClinic", state:{id: this.state.clickedId}}} />;

  }
  if (this.state.redirectAll) {
    return <Redirect to={{pathname: "/clinic/readClinicMaster"}} />;
  }

  if (this.state.redirectAdd) {
    return <Redirect to={{pathname: "/doctor/addDoctor", state:{id: this.state.data.clinic_id , name: this.state.data.clinic_name} }}  />;
  }
    const { classes } = this.props;
    const { data } = this.state;
    const Test = ({stations}) => (
            <div>
            {this.state.alert}
              {stations.map(function(station,i){
               return <div style={{display: 'inline-block'}} key={i}>
                          {[


                            <div>
                  <GridContainer>
          <GridItem >
            <Card className={classes.cardHover}  style={{marginLeft: 5 , minWidth: 250 , maxWidth: 250,minHeight: 500 , maxHeight: 500 }} >
              <CardHeader image className={classes.cardHeaderHover}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="..." 
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
                  </a>
                </h4>
                <TagsInput tagProps={{ className: "react-tagsinput-tag info" }} 
                                    disabled
                                      value={station.doctor_speciality} 
                                      inputProps={{placeholder: ""}}/>
                <p className={classes.cardProductDesciprion}  style={{color: 'black'}} >
                  {station.doctor_name}
                </p>
                </GridItem>
                <GridItem>
                            <p className={classes.cardProductDesciprion}  style={{color: 'black'}}>
                                  <b>Contact: </b>{station.doctor_contact}
                                </p>
                            <p className={classes.cardProductDesciprion}  style={{color: 'black'}}>
                                  <b>Email:</b> {station.doctor_email !== "" ? station.doctor_email : "N/A" } </p>
                            <p className={classes.cardProductDesciprion}  style={{color: 'black'}}>
                                  <b>Qualification:</b> {station.doctor_qualification !== "" ? station.doctor_qualification : "N/A" } </p>
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
      <CardHeader>
            <h2>{data.clinic_name}</h2>
            <TagsInput tagProps={{ className: "react-tagsinput-tag info" }} value={data.clinic_categories} disabled
                       onChange={this.handleChange} inputProps={{placeholder: ""}} />
              </CardHeader>
      <CardBody>

      <GridContainer>

        <GridItem xs={12}>


          <h4>{data.clinic_description}</h4>

        </GridItem>

        <GridItem md={4}>

            <GridItem xs={12}>
              <h4><b>{data.clinic_address.addressline !== ""? data.clinic_address.addressline  + ",": ""}{data.clinic_address.locality !== ""? data.clinic_address.locality  + ",": ""}<br></br>
                    {data.clinic_address.city !== ""? data.clinic_address.city  + ",": "Address Not Available"}{data.clinic_address.state !== "" ? data.clinic_address.state: "" }</b></h4>
              <h5>Address</h5>
            </GridItem>
            <GridItem xs={12}>
              <h4><b>{data.clinic_contact}</b></h4>
              <h5>Contact</h5>
            </GridItem>
            <GridItem xs={12}>
              <h4><b>Timings:</b></h4>
                <h5><b>Monday</b>: {data.clinic_timings[0].open_time !== "" ? data.clinic_timings[0].open_time + "-" + data.clinic_timings[0].close_time  : "Closed" }</h5>
                <h5><b>Tuesday</b>: {data.clinic_timings[1].open_time !== "" ? data.clinic_timings[1].open_time + "-" + data.clinic_timings[1].close_time  : "Closed" } </h5>
                <h5><b>Wednesday</b>:{data.clinic_timings[2].open_time !== "" ? data.clinic_timings[2].open_time + "-" + data.clinic_timings[2].close_time  : "Closed" }</h5>
                <h5><b>Thursday</b>: {data.clinic_timings[3].open_time !== "" ? data.clinic_timings[3].open_time + "-" + data.clinic_timings[3].close_time  : "Closed" }</h5>
                <h5><b>Friday</b>: {data.clinic_timings[4].open_time !== "" ? data.clinic_timings[4].open_time + "-" + data.clinic_timings[4].close_time  : "Closed" }</h5>
                <h5><b>Saturday</b>:{data.clinic_timings[5].open_time !== "" ? data.clinic_timings[5].open_time + "-" + data.clinic_timings[5].close_time  : "Closed" }</h5>
                <h5><b>Sunday</b>: {data.clinic_timings[6].open_time !== "" ? data.clinic_timings[6].open_time + "-" + data.clinic_timings[6].close_time  : "Closed" }</h5>
            </GridItem>

        </GridItem>

        <GridItem md={4}>

              <GridItem xs={12} md={12}>
                <h4><b>{data.clinic_website != "" ? data.clinic_website: "Not Available" }</b></h4>
                <h5>Website</h5>
               </GridItem>
               <GridItem xs={12} md={12} >
                <h4><b>{data.clinic_email != "" ? data.clinic_email: "Not Available" }</b></h4>
                <h5>Email</h5>
               </GridItem>
               <GridItem xs={12} md={12}>
              <h4><b>Services:</b></h4>
                {
                  data.clinic_services.map(function(object, i){
                                return <h5> {object} </h5>;
                            })}
            </GridItem>

        </GridItem>

        <GridItem md={4}>
          <GridItem>
          <img
              data-src="holder.js/100px180/"
              alt="Clinic Image"
              style={{ display: "block",maxWidth:200,maxHeight:200}}
              src= {data.clinic_images ? data.clinic_images[0] : '' }
              data-holder-rendered="true"
              />
            </GridItem>
              <GridItem>
            <Button color="info"
                onClick={this.RouteToUpdate(data.clinic_id)}
                ><Icon>border_color</Icon>Update</Button>
                 <br></br>
          </GridItem>

        </GridItem>

      </GridContainer>

            <div>
                <h3><b>List of Doctors</b></h3>
                <Button color="success" onClick={this.RouteToAddDoctor(data.clinic_id)}>
              <Icon>add</Icon> ADD NEW
            </Button>
                            <br></br><br></br><br></br><br></br>

                <Test stations={this.state.doctor_data} />
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
