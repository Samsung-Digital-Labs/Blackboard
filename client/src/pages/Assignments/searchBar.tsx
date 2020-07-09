import React, { useState, useEffect } from "react";
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

const SearchBar: React.FC = ({ tasks, setLocation }) => {
  const [searchText, setSearchText] = useState("");
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false);
  const [options, setOptions] = useState([]);
  
  useEffect(() => {
   const opt = tasks;
   setOptions(opt);
  },[]);

  const setAssignment = (a ,i) => {
    setSearchText(a.name);
    setShowSearchbar(false);
    //console.log(searchText);
    setLocation(a,i);
  }
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
              value = {searchText}
              onIonChange={(e: CustomEvent) => setSearchText(e.detail.value)}
              onIonCancel={() => setShowSearchbar(false)}
            ></IonSearchbar>
          )}
          {showSearchbar && (
            <div>
              {options.filter(({ name }) => name.substr(0,searchText.length) === searchText)
                .map((a , i) => {
                return <div
                  onClick = {() => setAssignment(a,i)}
                  key = {i}
                  tabIndex = "0"
                  >
                  <span>{a.name}</span>
                </div>
              })}
            </div>
            )
          }
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
