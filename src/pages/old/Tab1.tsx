import { IonContent, IonPage, IonTitle } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import NavBar from '../../components/NavBar';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <NavBar>
        <IonTitle>Tab 1</IonTitle>
      </NavBar>
      <IonContent fullscreen>
        <NavBar collapse="condense">
          <IonTitle size="large">Tab 1</IonTitle>
        </NavBar>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
