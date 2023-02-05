import { IonContent, IonItem, IonPage, IonRow, IonCol, IonGrid, IonTitle } from '@ionic/react';
import WidgetBot from '@widgetbot/react-embed';
import NavBar from '../../components/NavBar';
import './TeamHome.scss';
import FirstTimeModal from './FirstTimeModal';

const TeamHome: React.FC = () => {
  return (
    <IonPage>
      <NavBar>
        <IonTitle>My Team</IonTitle>
      </NavBar>
      <IonContent fullscreen>
          <IonGrid>
              <IonRow>
                  <IonCol>
                  <FirstTimeModal/>
                  </IonCol>
                  <IonCol>
        { /*
           * TODO: change channel based on current team
           *
           * To find channel ID:
           * 1. Discord user settings (next to mute/deafen buttons) > Advanced
           *      > enable "Developer Mode"
           * 2. Right-click on channel name in server
           * 3. Click "Copy ID"
           */ }
          <WidgetBot className="discord-widget"
            server="1068966007886069841"
            channel="1068966009106600110"
          />
          </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TeamHome;
