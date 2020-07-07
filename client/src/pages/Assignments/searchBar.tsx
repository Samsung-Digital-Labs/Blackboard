import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonFooter,
  IonButton,
  IonMenuButton,
  IonButtons,
  IonIcon,
} from "@ionic/react";
import { search } from "ionicons/icons";
import "./searchbar.scss"

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false);

  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar color = "primary">
          {!showSearchbar && (
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
          )}
          {!showSearchbar && <IonTitle>assignments</IonTitle>}
          {showSearchbar && (
            <IonSearchbar id = "noShadow"
            color = "primary"
              showCancelButton="always"
              placeholder="Search"
              autocomplete = "on"
              onIonChange={(e: CustomEvent) => setSearchText(e.detail.value)}
              onIonCancel={() => setShowSearchbar(false)}
            ></IonSearchbar>
          )}
          <IonButtons slot="end">
            {!showSearchbar && (
              <IonButton onClick={() => setShowSearchbar(true)}>
                <IonIcon slot="icon-only" icon={search}></IonIcon>
              </IonButton>
            )}
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default SearchBar;
