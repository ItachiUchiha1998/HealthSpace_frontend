import Dashboard from "views/Dashboard/Dashboard.jsx";
import Buttons from "views/Components/Buttons.jsx";
import GridSystem from "views/Components/GridSystem.jsx";
import Panels from "views/Components/Panels.jsx";
import SweetAlert from "views/Components/SweetAlert.jsx";
import Notifications from "views/Components/Notifications.jsx";
import Icons from "views/Components/Icons.jsx";
import Typography from "views/Components/Typography.jsx";
import RegularForms from "views/Forms/RegularForms.jsx";
import ExtendedForms from "views/Forms/ExtendedForms.jsx";
import ValidationForms from "views/Forms/ValidationForms.jsx";
import Wizard from "views/Forms/Wizard.jsx";
import RegularTables from "views/Tables/RegularTables.jsx";
import ExtendedTables from "views/Tables/ExtendedTables.jsx";
import ReactTables from "views/Tables/ReactTables.jsx";
import GoogleMaps from "views/Maps/GoogleMaps.jsx";
import FullScreenMap from "views/Maps/FullScreenMap.jsx";
import VectorMap from "views/Maps/VectorMap.jsx";
import Charts from "views/Charts/Charts.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import Widgets from "views/Widgets/Widgets.jsx";
import UserProfile from "views/Pages/UserProfile.jsx";
import TimelinePage from "views/Pages/Timeline.jsx";
import RTLSupport from "views/Pages/RTLSupport.jsx";
import ClinicMaster from "views/ClinicMasters/ClinicMasters.jsx";
import addClinicMaster from "views/ClinicMasters/addClinicMaster.jsx";
import oneClinicMaster from "views/ClinicMasters/oneClinicMaster.jsx";
import updateClinicMaster from "views/ClinicMasters/updateClinicMaster.jsx";
import Clinic from "views/Clinics/Clinics.jsx";
import addClinic from "views/Clinics/addClinic.jsx";
import updateClinic from "views/Clinics/updateClinic.jsx";
import oneClinic from "views/Clinics/oneClinic.jsx";
import Doctor from "views/Doctors/Doctors.jsx";
import oneDoctor from "views/Doctors/oneDoctor.jsx";
import addDoctor from "views/Doctors/addDoctor.jsx";

import pagesRoutes from "./pages.jsx";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
import Apps from "@material-ui/icons/Apps";
import ContentPaste from "@material-ui/icons/ContentPaste";
import GridOn from "@material-ui/icons/GridOn";
import Place from "@material-ui/icons/Place";
import WidgetsIcon from "@material-ui/icons/Widgets";
import Timeline from "@material-ui/icons/Timeline";
import DateRange from "@material-ui/icons/DateRange";

var pages = [
  {
    path: "/timeline-page",
    name: "Timeline Page",
    mini: "TP",
    component: TimelinePage
  },
  {
    path: "/user-page",
    name: "User Profile",
    mini: "UP",
    component: UserProfile
  },
  {
    path: "/rtl/rtl-support-page",
    name: "RTL Support",
    mini: "RS",
    component: RTLSupport
  }
].concat(pagesRoutes);

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },
  {
    collapse: true,
    path: "-page",
    name: "Pages",
    state: "openPages",
    icon: Image,
    views: pages
  },
  {
    collapse: true,
    path: "/components",
    name: "Components",
    state: "openComponents",
    icon: Apps,
    views: [
      {
        path: "/components/buttons",
        name: "Buttons",
        mini: "B",
        component: Buttons
      },
      {
        path: "/components/grid-system",
        name: "Grid System",
        mini: "GS",
        component: GridSystem
      },
      {
        path: "/components/panels",
        name: "Panels",
        mini: "P",
        component: Panels
      },
      {
        path: "/components/sweet-alert",
        name: "Sweet Alert",
        mini: "SA",
        component: SweetAlert
      },
      {
        path: "/components/notifications",
        name: "Notifications",
        mini: "N",
        component: Notifications
      },
      { path: "/components/icons", name: "Icons", mini: "I", component: Icons },
      {
        path: "/components/typography",
        name: "Typography",
        mini: "T",
        component: Typography
      }
    ]
  },
  {
    collapse: true,
    path: "/forms",
    name: "Forms",
    state: "openForms",
    icon: ContentPaste,
    views: [
      {
        path: "/forms/regular-forms",
        name: "Regular Forms",
        mini: "RF",
        component: RegularForms
      },
      {
        path: "/forms/extended-forms",
        name: "Extended Forms",
        mini: "EF",
        component: ExtendedForms
      },
      {
        path: "/forms/validation-forms",
        name: "Validation Forms",
        mini: "VF",
        component: ValidationForms
      },
      { path: "/forms/wizard", name: "Wizard", mini: "W", component: Wizard }
    ]
  },
  {
    collapse: true,
    path: "/tables",
    name: "Tables",
    state: "openTables",
    icon: GridOn,
    views: [
      {
        path: "/tables/regular-tables",
        name: "Regular Tables",
        mini: "RT",
        component: RegularTables
      },
      {
        path: "/tables/extended-tables",
        name: "Extended Tables",
        mini: "ET",
        component: ExtendedTables
      },
      {
        path: "/tables/react-tables",
        name: "React Tables",
        mini: "RT",
        component: ReactTables
      }
    ]
  },
  // {
  //   collapse: true,
  //   path: "/maps",
  //   name: "Maps",
  //   state: "openMaps",
  //   icon: Place,
  //   views: [
  //     {
  //       path: "/maps/google-maps",
  //       name: "Google Maps",
  //       mini: "GM",
  //       component: GoogleMaps
  //     },
  //     {
  //       path: "/maps/full-screen-maps",
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //       component: FullScreenMap
  //     },
  //     {
  //       path: "/maps/vector-maps",
  //       name: "Vector Map",
  //       mini: "VM",
  //       component: VectorMap
  //     }
  //   ]
  // },
  {
    path: "/clinicmaster/readClinicMaster",
    name: "ClinicMasters",
    icon: Place,
    component: ClinicMaster,
  },
  {
    path: "/clinicmaster/addClinicMaster",
    name: "Add ClinicMaster",
    component: addClinicMaster,
    invisible: true
  },
  {
    path: "/clinicmaster/readOneClinicMaster",
    name: "Clinic Master View",
    component: oneClinicMaster,
    invisible: true
  },
  {
    path: "/clinicmaster/updateClinicMaster",
    name: "Update ClinicMaster",
    component: updateClinicMaster,
    invisible: true
  },
  {
    path: "/clinic/readClinic",
    name: "Clinics",
    icon: WidgetsIcon,
    component: Clinic
  },
  {
    path: "/clinic/addClinic",
    name: "Add Clinic",
    icon: WidgetsIcon,
    component: addClinic,
    invisible: true
  },
  {
    path: "/clinic/updateClinic",
    name: "Update Clinic",
    icon: WidgetsIcon,
    component: updateClinic,
    invisible: true
  },
  {
    path: "/clinic/oneClinic",
    name: "Clinic View",
    icon: WidgetsIcon,
    component: oneClinic,
    invisible: true
  },
  {
    path: "/doctor/addDoctor",
    name: "Add Doctor",
    icon: WidgetsIcon,
    component: addDoctor,
    invisible: true
  },
  {
    path: "/doctor/readDoctors",
    name: "Doctors",
    icon: WidgetsIcon,
    component: Doctor
  },
  {
    path: "/doctor/oneDoctor",
    name: "One Doctor",
    icon: WidgetsIcon,
    component: oneDoctor,
    invisible: true
  },
  { path: "/charts", name: "Charts", icon: Timeline, component: Charts },
  { path: "/calendar", name: "Calendar", icon: DateRange, component: Calendar },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
