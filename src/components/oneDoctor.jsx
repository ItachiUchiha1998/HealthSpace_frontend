import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import {withStyles} from "@material-ui/core/styles/withStyles";
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
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class oneDoctor extends React.Component{

  constructor(props){

    super(props);
    this.state = {
      doctor_id: props.id.location.state.id,
      data: {
        doctor_id:"",
        doctor_speciality: [],
        doctor_qualification: "",
        doctor_contact : "",
        doctor_name: "" ,
        doctor_email: "",
        doctor_experience: "",
        doctor_profile_image: "",
        doctor_clinics:[]
      },
      clinic_data: [],
      clickedId:"",
      redirect: false,
      alert: null,
      api_url: "",
      redirectAll: false,
      open: true
    };

  }

  // CallReadClinicApi = () => {
  //
  // const CLINIC_URL = 'http://localhost:7000/doctor/readclbydoc/'+this.state.doctor_id;
  //   fetch(CLINIC_URL,{
  //     method : 'POST'
  //   }).then( response => {return response.json();})
  //     .then( json => {
  //       var l = json.data.length;
  //       var clinic_data_array = [];
  //
  //      for(var i=0;i < l;i++) {
  //         clinic_data_array.push(json.data[i]);
  //       }
  //
  //       this.setState({clinic_data: clinic_data_array})
  //
  //     });
  // }

  CallReadApi = () => {
    const BASE_URL = 'http://localhost:7000/doctor/read/'+this.state.doctor_id;
    fetch(BASE_URL,{
      method : 'POST'
    }).then( response => {return response.json();})
      .then( json => {
                      console.log(json.data)
                      let data = Object.assign({},this.state.data);
                       data.doctor_id = json.data.doctor_id;
                       data.doctor_qualification = json.data.doctor_qualification;
                       data.doctor_speciality = json.data.doctor_speciality;
                       data.doctor_contact = json.data.doctor_contact;
                       data.doctor_name = json.data.doctor_name;
                       data.doctor_email = json.data.doctor_email;
                       data.doctor_experience = json.data.doctor_experience;
                       data.doctor_profile_image = json.data.doctor_profile_image;
                       data.doctor_clinics = json.data.doctor_clinics;
                      this.setState({data})
                    });
  }

  componentWillMount(){
    this.CallReadApi();
    // this.CallReadClinicApi();
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

    render() {
    console.log(this.state);
    if (this.state.redirect) {
    return <Redirect to={{pathname: "/doctor/updateClinicMaster", state:{id: this.state.clickedId}}} />;

  }
  if (this.state.redirectAll) {
    return <Redirect to={{pathname: "/doctor/readDoctors"}} />;
  }
    const { classes } = this.props;
    const  data1  = this.state.data;
    const data = this.state.data.doctor_clinics;

    return (
      <div>
      <Card>
  <CardHeader color="rose" text>
    <CardText color="rose">
      <h4>My Profile</h4>
    </CardText>
  </CardHeader>
  <CardBody>
  <GridContainer>
    <GridItem xs={8}>

      <GridItem>
      <h2>{data1.doctor_name}</h2>
      <TagsInput tagProps={{ className: "react-tagsinput-tag info" }} value={data1.doctor_speciality} disabled
                       onChange={this.handleChange} inputProps={{placeholder: ""}} />
      </GridItem>

  <GridItem>

    <GridItem>
        <p><b>{data1.doctor_qualification}</b></p>
        <p>Qualification</p>
    </GridItem>

    <GridItem>
        <p><b>{data1.doctor_contact}</b></p>
        <p>Contact</p>
    </GridItem>

  </GridItem>

  <GridItem>
    <GridItem>
        <p><b>{data1.doctor_email}</b></p>
        <p>Email</p>
    </GridItem>

    <GridItem>
        <p><b>{data1.doctor_experience}</b></p>
        <p>Experiance</p>
    </GridItem>
  </GridItem>

  </GridItem>
    <GridItem>
          <GridItem>
                <img
              data-src="holder.js/100px180/"
              alt="Clinic Image"
              style={{ display: "block",maxWidth:200,maxHeight:200}}
              src={"https://www.w3schools.com/images/w3schools_green.jpg"}
              data-holder-rendered="true"
              />
              </GridItem>
              <GridItem>
              <Button color="info"
        onClick={this.RouteToUpdate(data1.doctor_id)}
       ><Icon>border_color</Icon>Update</Button>
       <br></br>
       <Button color="danger"
          onClick={this.DeleteAlert('Delete',"http://localhost:7000/doctor/delete/" + data1.doctor_id)}
       ><Icon>delete</Icon>Delete</Button>
        </GridItem>
    </GridItem>
  </GridContainer>


  <div>
      <h3><b>My Clinics</b></h3>
      {this.state.alert}
              <ReactTable
                data={ data }
                filterable

                defaultFilterMethod={(filter, row) =>
                  String(row[filter.id]) === filter.value}
                columns={[
                  {
                    columns: [
                      {
                        Header: "Clinic Name",
                        id: "clinic_name",
                        accessor: "clinic_name",
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, { keys: ["clinic_name"] }),
                        filterAll: true
                      },
                      {
                        Header: "Timings",
                        id: "timings",
                        accessor: "timings",
                        Cell: ({index}) =>
                        ( <div>
                            {data[index].timings.map(function(station){
                              return <div> <b> {station.day=="mon"? "Monday" : station.day=="tues" ? "Tuesday": 
                                station.day=="wednes" ? "Wednesday": station.day=="thurs" ? "Thursday":station.day=="fri" ? "Friday":
                                station.day=="satur" ? "Saturday": station.day=="sun" ? "Sunday": "Undefined"
                                   }: </b> {station.open_time!="" ? station.open_time + "-" +  station.close_time : "Closed"}</div>
                            })} 
                          </div>
                        ),
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, { keys: ["timings"] }),
                        filterable: false,
                        sortable: false
                      },
                      {
                        Header: "Services",
                        accessor: "services",
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, { keys: ["services"] }),
                        Cell: ({index}) =>
                        ( <GridContainer>
                          <GridItem>
                             
                              {data[index].services.map(function(station,i){
                                return <div style={{left: '50%',position: 'relative'}}>{[ <b>{station}</b> ]}</div>
                              })}
                            </GridItem>
                          </GridContainer>
                        ),
                        filterable: false,
                        sortable: false
                      },
                      {
                        Header: 'Actions',
                        id: 'request_state',
                        filterable: false,
                        sortable: false,
                        Cell: ({index}) =>
                        ( <div>
                          <Button type="button" color="info"
                             style={{padding:3, left:0}}
                          >
                          <Icon style={{fontSize:22}}>info</Icon>
                          </Button>
                          <Button type="button" color="success"
                             style={{padding:3, left:20}}
                            onClick={this.RouteToUpdate(data[index].clinic_id)}
                          >
                             <Icon style={{fontSize:22}}>edit</Icon>
                          </Button>
                          <Button type="button" color="danger"
                            style={{padding:3, left:40}}
                            onClick={this.DeleteAlert('Delete',"http://localhost:7000/clinic/delete/" + data[index].clinic_id)}
                          >
                             <Icon style={{fontSize:22}}>close</Icon>
                          </Button>
                          </div>
                        )
                      }
                    ]
                  }
                ]}
                defaultPageSize={5}
                className="-striped -highlight"
              />
  </div>

  </CardBody>
  </Card>
  </div>
    );
  }
}

export default (oneDoctor);
