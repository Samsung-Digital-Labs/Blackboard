import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonToggle,
} from "@ionic/react";

import React from "react";
import { useLocation } from "react-router-dom";
import {
  paperPlaneOutline,
  logOutOutline,
  logOut,
  bookOutline,
  book,
  handRightOutline,
  handRight,
  fileTrayFullOutline,
  fileTrayFull,
  paperPlane,
  addCircle,
  addCircleOutline,
  moonOutline,
  personOutline,
  person,
  clipboardOutline,
  clipboard,
  libraryOutline,
  library,
} from "ionicons/icons";
import "./Menu.css";

// Redux imports
import { connect } from "react-redux";
import {
  loadUser,
  setName,
  toggleDarkMode,
} from "../../data/users/actions/actions";

// Abstract class/interface for
// information about each page
interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

// Declaring all the app pages
const appPages: AppPage[] = [
  {
    title: "Classrooms",
    url: "/page/classrooms",
    iosIcon: bookOutline,
    mdIcon: book,
  },
  {
    title: "Join",
    url: "/page/join",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlane,
  },
  {
    title: "Create",
    url: "/page/create",
    iosIcon: addCircleOutline,
    mdIcon: addCircle,
  },
  {
    title: "Assignments",
    url: "/page/assignments",
    iosIcon: fileTrayFullOutline,
    mdIcon: fileTrayFull,
  },
  {
    title: "Resouces",
    url: "/page/resources",
    iosIcon: libraryOutline,
    mdIcon: library,
  },
  {
    title: "Queries",
    url: "/page/queries",
    iosIcon: handRightOutline,
    mdIcon: handRight,
  },
];

// Labels TODO
const labels = ["LABEL1", "LABEL2", "LABEL3", "LABEL4", "LABEL5", "Reminders"];

const Menu: React.FC<{
  loadUser: any;
  user: any;
  toggleDarkMode: any;
}> = (props) => {
  const location = useLocation();

  // User email to display on menu
  // const user_email = localStorage.getItem("user_email");

  const logout = () => {
    localStorage.removeItem("auth_token");
    props.loadUser(false);
    window.location.reload(false);
  };

  if (
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup"
  ) {
    return null;
  }

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Pragyaan</IonListHeader>
          <IonNote>{props.user.user ? props.user.user.email : null}</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonList id="labels-list">
          <IonMenuToggle autoHide={false}>
            <IonListHeader>Account</IonListHeader>
            <IonItem lines="none" detail={false} routerLink="/page/account">
              <IonIcon slot="start" ios={personOutline} md={person} />
              <IonLabel>Account</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonItem
            lines="none"
            detail={false}
            onClick={logout}
            className="pointer"
          >
            <IonIcon slot="start" ios={logOutOutline} md={logOut} />
            <IonLabel>Logout</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonIcon slot="start" icon={moonOutline}></IonIcon>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle
              checked={props.user.darkMode}
              onClick={() => props.toggleDarkMode(!props.user.darkMode)}
            />
          </IonItem>
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadUser: (isUserLoggedIn: boolean) => {
      dispatch(loadUser(isUserLoggedIn, {}, ""));
    },
    setName: (name: string) => {
      dispatch(setName(name));
    },
    toggleDarkMode: (darkMode: boolean) => {
      dispatch(toggleDarkMode(darkMode));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
