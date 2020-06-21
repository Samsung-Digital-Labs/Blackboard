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
  bookmarkOutline,
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
  chatboxEllipses,
  chatboxEllipsesOutline,
  addCircle,
  addCircleOutline,
  moonOutline,
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
    url: "/join",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlane,
  },
  {
    title: "Create",
    url: "/create",
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
    title: "Chat",
    url: "/page/chat",
    iosIcon: chatboxEllipsesOutline,
    mdIcon: chatboxEllipses,
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
  darkMode: any;
  toggleDarkMode: any;
}> = (props) => {
  const location = useLocation();

  // User email to display on menu
  const user_email = localStorage.getItem("user_email");

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_email");
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
          <IonListHeader>BlackBoard</IonListHeader>
          <IonNote>{props.user}</IonNote>
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

          <IonMenuToggle autoHide={false}>
            <IonItem className="pointer" onClick={logout}>
              <IonIcon slot="start" ios={logOutOutline} md={logOut} />
              <IonLabel>Logout</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonItem>
            <IonIcon slot="start" icon={moonOutline}></IonIcon>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle
              checked={props.darkMode}
              onClick={() => props.toggleDarkMode(props.darkMode)}
            />
          </IonItem>
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.userReducer,
    darkMode: state.darkMode,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadUser: (isUserLoggedIn: boolean) => {
      dispatch(loadUser(isUserLoggedIn));
    },
    setName: (name: string) => {
      dispatch(setName(name));
    },
    toggleDarkMode: (DarkMode: boolean) => {
      dispatch(toggleDarkMode(DarkMode));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
