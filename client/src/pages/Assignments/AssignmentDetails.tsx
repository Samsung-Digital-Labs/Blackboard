import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonText,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { withRouter, RouteComponentProps } from "react-router";
import { starOutline, star, share, cloudDownload } from "ionicons/icons";
import "./AssignmentDetail.scss";
import Assignment from "../../models/Assignment";

interface OwnProps extends RouteComponentProps {}

interface StateProps {
  assignment?: Assignment;
}

interface DispatchProps {}

type AssignmentDetailProps = OwnProps & StateProps & DispatchProps;

const AssignmentDetail: React.FC<{match: any, location: any}> = (props) => {
  if (!props) {
    return <div>Assignment not found</div>;
  }

  const assignment = props.location.assignment;
  return (
    <IonPage id="assignment-detail-page">
      <IonHeader>
        <IonToolbar color = "primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/schedule"></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton 
            // onClick={() => toggle Favorite()}
            >
            {/* Is bookmarked to be checked here */}
              {true ? (
                <IonIcon slot="icon-only" icon={star}></IonIcon>
              ) : (
                <IonIcon slot="icon-only" icon={starOutline}></IonIcon>
              )}
            </IonButton>
            <IonButton 
            // onClick={() => shareSession}
            >
              <IonIcon slot="icon-only" icon={share}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-padding">
          <h1>{assignment.name}</h1>
          <span>{assignment.classroom}</span>
          <p>{assignment.description}</p>
          <IonText color="medium">
            {assignment.timeStart} &ndash; {assignment.timeEnd}
            <br />
            {assignment.classroom}
          </IonText>
        </div>
        <IonList>
          <IonItem onClick={() => ("watch")} button>
            <IonLabel color="primary">Watch</IonLabel>
          </IonItem>
          <IonItem onClick={() => ("add to calendar")} button>
            <IonLabel color="primary">Add to Calendar</IonLabel>
          </IonItem>
          <IonItem onClick={() => ("mark as unwatched")} button>
            <IonLabel color="primary">Mark as Unwatched</IonLabel>
          </IonItem>
          <IonItem onClick={() => ("download video")} button>
            <IonLabel color="primary">Download Video</IonLabel>
            <IonIcon
              slot="end"
              color="primary"
              size="small"
              icon={cloudDownload}
            ></IonIcon>
          </IonItem>
          <IonItem onClick={() => ("leave feedback")} button>
            <IonLabel color="primary">Leave Feedback</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(AssignmentDetail);
