import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
//import ReactDOM from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
//import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import matchSorter from 'match-sorter';
import Button from "components/CustomButtons/Button.jsx";
import Icon from '@material-ui/core/Icon';
//import AlertBox from 'components/AlertBox/alertbox.jsx';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ScaleLoader } from 'react-spinners';

// SweetAlertBox modules
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import SweetAlert from "react-bootstrap-sweetalert";

import { Redirect } from 'react-router';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class ClinicMaster extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:[],
      open: true,//
      element: "",//
      api_url: "",//
      api_status: "",//
      read: false,
      alert: null,
      clickedId:"",
      redirect: false,
      redirectOne: false,
      redirectAdd: false,
      loading: true,
    };
    this.hideAlert = this.hideAlert.bind(this);
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  DeleteAlert = (param1,param2) => (e) => {
    this.setState({
      alert: (
        <Dialog
        open="true"
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">Are you sure you want to Delete?</DialogTitle>

                  <DialogActions>
                    <Button onClick={this.hideAlert}>
                      Disagree
                    </Button>
                    <Button onClick={ this.CallApi } color="danger" autoFocus>
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>
      ),
      element: param1,
      api_url: param2
    });
  }

  componentWillMount(){
    this.CallReadApi();
  }

  CallApi = () => {

    if (this.state.element === 'Update') {
      console.log("Update State");
      this.setState({open: false})
     } else if(this.state.element) {

      fetch(this.state.api_url,{
      method : 'POST'
    }).then( response => {
        return response.json();
      })
      .then( json =>
          {
            console.log(json.data);
            this.setState({api_status: json.status,open: false,read: true,alert: null});
          })
    } else {
      console.log("Wrong element state")
    }

  }

  handleOpen = (param1,param2) => (e) => {  //
    this.setState({ open: true,element: param1,api_url: param2});
  };

  RouteToOpenOneMaster = (param) => (e) => {
    this.setState({clickedId: param});
    console.log(this.state.clickedId);
    this.setState({redirectOne: true});
  }

  RouteToUpdate = (clickedID) => (e) => {
    this.setState({clickedId: clickedID});
    console.log(this.state.clickedId);
    this.setState({redirect: true});
  };

  RouteToAdd = () => {
    this.setState({redirectAdd: true});
  };

  RouteToOneMaster(clickedID) {
    this.setState({clickedId: clickedID});
    console.log(this.state.clickedId);
    this.setState({redirectOne: true});
  }  

  CallReadApi = () => {
    const BASE_URL = 'http://localhost:7000/clinicmaster/read';
    fetch(BASE_URL,{
      method : 'POST'
    }).then( response => {return response.json();}).then( json => { this.setState({data: json.data , loading: false})});
  }

  componentDidUpdate() {
    if (this.state.read) {
      this.CallReadApi();
      this.setState({read: false});
    }
  }


    render() {
    const { data } = this.state;
    console.log(this.state);
    const {classes} = this.props;
    if (this.state.redirect) {
    return <Redirect to={{pathname: "/clinicmaster/updateClinicMaster", state:{id: this.state.clickedId}}} />;
  }
    if (this.state.redirectOne) {
    return <Redirect to={{pathname: "/clinicmaster/readOneClinicMaster", state:{id: this.state.clickedId}}} />;
  }
    if (this.state.redirectAdd) {
    return <Redirect to={{pathname: "/clinicmaster/addClinicMaster"}} />;
  }
  
    return (
      <div>

                      {this.state.alert}

          <Grid container>
          <GridItem xs={12} sm={12} md={4}>
                <Button color="success" onClick={this.RouteToAdd}> <Icon>add</Icon> ADD NEW</Button>
          </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Card>

                <CardHeader color="primary" >
                <div>
                <div>
                  <h4 className={classes.cardTitleWhite}>Clinic Master Table</h4>
                  <p className={classes.cardCategoryWhite}>
                    List of All Clinic Masters
                  </p>
                  </div>
                    </div>
                </CardHeader>
                <CardBody>
                <div>

              </div>

              {this.state.loading ?
     <div className='sweet-loading' style = {{left: '50%',position: 'relative'}}>
        <ScaleLoader
          color={'#123abc'} 
          loading={this.state.loading} 

        />
      </div> :
         <ReactTable
                data={data}
                filterable
                defaultFilterMethod={(filter, row) =>
                  String(row[filter.id]) === filter.value}
                columns={[
                  {
                    columns: [
                      {
                        Header: "Name",
                        accessor: "clinicmaster_name",
                        Cell: ({index}) =>
                        ( <div>
                          <p style={{cursor: 'pointer'}} onClick={this.RouteToOpenOneMaster(data[index].clinicmaster_id)}  >{data[index].clinicmaster_name}</p>
                          </div>
                        ),
                        filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["clinicmaster_name"] }),
                        filterAll: true
                      },
                      {
                        Header: "Company Number",
                        id: "clinicmaster_companynumber",
                        accessor: "clinicmaster_companynumber",
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, { keys: ["clinicmaster_companynumber"] }),
                        filterAll: true
                      },
                      {
                        Header: "Admin Name",
                        accessor: "clinicmaster_adminname",
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, { keys: ["clinicmaster_adminname"] }),
                        filterAll: true
                      },
                      {
                        Header: "Contact",
                        accessor: "clinicmaster_contactinfo",
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, { keys: ["clinicmaster_contactinfo"] }),
                        filterAll: true
                      },
                      {
                        Header: "Actions",
                        id: 'request_state',
                        filterable: false,
                        sortable: false,
                        Cell: ({index}) =>
                        ( <div>
                          <Button type="button" color="info"
                             style={{padding:3, left:0}}
                            onClick={this.RouteToOpenOneMaster(data[index].clinicmaster_id)}
                          >
                          <Icon style={{fontSize:22}}>info</Icon>
                          </Button>
                          <Button type="button" color="success"
                             style={{padding:3, left:20}}
                            onClick={this.RouteToUpdate(data[index].clinicmaster_id)}
                          >
                             <Icon style={{fontSize:22}}>edit</Icon>
                          </Button>
                          <Button type="button" color="danger"
                            style={{padding:3, left:40}}
                            onClick={this.DeleteAlert('Delete',"http://localhost:7000/clinicmaster/delete/" + data[index].clinicmaster_id)}
                          >
                             <Icon style={{fontSize:22}}>close</Icon>
                          </Button>
                          </div>
                        )
                      }
                    ]
                  }
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
              />
       }

               
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
      </div>
    );
  }
}

ClinicMaster.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClinicMaster);
