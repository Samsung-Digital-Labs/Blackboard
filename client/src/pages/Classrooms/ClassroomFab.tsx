import { IonFab, IonFabButton, IonIcon, IonFabList } from "@ionic/react";
import { logoVimeo, logoInstagram, addOutline, personAdd, addCircle, paperPlane } from "ionicons/icons";
import React, { useState } from "react";

const ClassroomFab: React.FC = () => {
  const openSocial = (network: string) => {};

  return (
    <>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton>
          <IonIcon icon={addOutline} />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton
            color="vimeo"
            href="/page/create"
            onClick={() => openSocial("Vimeo")}
          >
            <IonIcon icon={addCircle} />
            {/* Create */}
          </IonFabButton>
          <IonFabButton
            color="instagram"
            href="/page/join"
            onClick={() => openSocial("Instagram")}
          >
            <IonIcon icon={paperPlane} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </>
  );
};

export default ClassroomFab;
