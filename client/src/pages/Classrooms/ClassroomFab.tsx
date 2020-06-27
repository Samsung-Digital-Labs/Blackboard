import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonItem,
} from "@ionic/react";
import { addOutline, addCircle, paperPlane } from "ionicons/icons";
import React from "react";

const ClassroomFab: React.FC = () => {
  return (
    <>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton>
          <IonIcon icon={addOutline} />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton routerLink="/page/create">
            <IonIcon icon={addCircle} />
          </IonFabButton>
          <IonFabButton routerLink="/page/join">
            <IonIcon icon={paperPlane} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </>
  );
};

export default ClassroomFab;
