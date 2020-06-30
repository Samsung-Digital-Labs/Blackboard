import React from 'react';
import { IonItem, IonLabel, IonReorder, IonReorderGroup, IonContent } from '@ionic/react';
import { ItemReorderEventDetail } from '@ionic/core';

function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
  event.detail.complete();
}

const Assignments: React.FC = () => (
  <IonContent>
    {/*-- The reorder gesture is disabled by default, enable it to drag and drop items --*/}
    <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
      {/*-- Default reorder icon, end aligned items --*/}
      <IonItem>
        <IonLabel>Item 1</IonLabel>
        <IonReorder slot="end" />
      </IonItem>
      <IonItem>
        <IonLabel>Item 2</IonLabel>
        <IonReorder slot="end" />
      </IonItem>
    </IonReorderGroup>
  </IonContent>
);

export default Assignments;