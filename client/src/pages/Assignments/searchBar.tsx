import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter, IonButton, IonMenuButton } from '@ionic/react';

 const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <>
        {/* <IonHeader translucent = {true}>
            <IonToolbar>
                {!showSearchBar &&
                    <IonButton slot = "start">
                        <IonMenuButton />
                    </IonButton>
                }
          {!ios && !showSearchbar &&
            <IonTitle>Schedule</IonTitle>
          }
          {showSearchbar &&
            <IonSearchbar showCancelButton="always" placeholder="Search" onIonChange={(e: CustomEvent) => setSearchText(e.detail.value)} onIonCancel={() => setShowSearchbar(false)}></IonSearchbar>
          }

          <IonButtons slot="end">
            {!ios && !showSearchbar &&
              <IonButton onClick={() => setShowSearchbar(true)}>
                <IonIcon slot="icon-only" icon={search}></IonIcon>
              </IonButton>
            }

            </IonToolbar>
        </IonHeader> */}
    </>
  );
};


export default SearchBar;