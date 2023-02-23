/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable multiline-ternary */
import { useState, useContext, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  // useIonToast
} from '@ionic/react';
import WidgetBot from '@widgetbot/react-embed';
import { useHistory } from 'react-router';
import NavBar from '../../components/NavBar';
import './homePage.css';
import ProgressChart from '../../components/ProgressChart';
import AuthContext from '../../store/auth-context';
import { getDoc } from 'firebase/firestore';
import { auth, FirestoreDB } from '../../firebase';
import { doc } from 'firebase/firestore';
//import ExitSurveyModal from '../exitQuestions/exitQuestionsModal';
// import { Health } from '@awesome-cordova-plugins/health';
// import { updateDoc } from 'firebase/firestore';

import LeaderBoardChart from '../../components/LeaderBoard/LeaderBoardChart';
// import { library } from 'ionicons/icons';
interface badgeOutline {
  name: string;
}

interface StepLog {
  date: string;
  steps: number;
}

const HomePage: React.FC = () => {
  const [steps, setSteps] = useState(0);
  const history = useHistory();
  const [badges, setBadges] = useState(Array<badgeOutline>);
  const [pastSevenDaysSteps, setPastSevenDaysSteps] = useState(Array<StepLog>);
  // const [present] = useIonToast();
  // const supportedTypes = [
  //   'steps',
  //   'distance', // Read and write permissions
  //   {
  //     read: ['steps'], // Read only permission
  //     write: ['height', 'weight'] // Write only permission
  //   }
  // ];
  const ctx = useContext(AuthContext);

  useEffect(() => {
    if (ctx.user) {
      console.log('get past seven days steps');
      getPastSevenDaysSteps();
      //GFrequestAuthorization();
    }
  }, [ctx.user]);

  const getPastSevenDaysSteps = async () => {
    if (ctx.user === null) {
      alert('You are not logged in!');
      history.push('/login');
      return;
    }
    const dbRef = doc(FirestoreDB, 'users', auth.currentUser.email as string);
    const dbSnap = await getDoc(dbRef);
    const userData = dbSnap.data();
    const stepsByDate = userData.stepsByDate;
    const today = new Date();
    const pastSevenDays = [];
    for (let i = 0; i < stepsByDate.length; i++) {
      const date = new Date(stepsByDate[i].date);
      const diff = (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
      if (diff < 8 && diff >= 0) {
        pastSevenDays.push(stepsByDate[i]);
      }
    }
    setPastSevenDaysSteps(pastSevenDays);
  };

  // const stepUpdateHandler = (event: any): void => {
  //   const newValue = document.querySelector('#stepsUpdate') as HTMLInputElement;
  //   const newSteps = Number(newValue.value);
  //   if (newSteps > 0) {
  //     setSteps(newSteps);
  //   }
  // };

  const moveToManualSteps = () => {
    history.push('/app/manualsteps');
  };

  return (
    <IonPage>
      <IonHeader>
        <NavBar>
          <IonTitle>Home Page</IonTitle>
        </NavBar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding testing">
        <IonGrid>
          <IonRow>
            <IonCol
              sizeSm="6"
              sizeXs="12"
              sizeMd="6"
              sizeLg="4"
              className="leaderBoard"
            >
              <LeaderBoardChart></LeaderBoardChart>
            </IonCol>
            <IonCol
              sizeSm="6"
              sizeXs="12"
              sizeMd="6"
              sizeLg="4"
              className="todaysSteps"
            >
              <IonLabel className="">
                Todays Steps:{' '}
                <div className="localStepsUpdater">{steps.toString()}</div>
              </IonLabel>
              {/* <IonItem
                className="localStepsUpdater"
                id="stepsUpdate"
                placeholder={steps.toString()}
                onInput={(event: any) => {
                  stepUpdateHandler(event);
                }}
              >
                sad
              </IonItem> */}
              <br />
              click
              <a onClick={moveToManualSteps}> here </a>
              to see previous logs
            </IonCol>
            <IonCol
              sizeSm="6"
              sizeXs="12"
              sizeMd="6"
              sizeLg="4"
              className="personalProgress"
            >
              {pastSevenDaysSteps.length > 1 ? (
                <ProgressChart data={pastSevenDaysSteps} />
              ) : (
                ' '
              )}
            </IonCol>
            <IonCol
              size="3"
              sizeSm="6"
              sizeXs="12"
              sizeMd="6"
              sizeLg="8"
              offsetLg="4"
              className="box-test"
            >
              <WidgetBot
                className="discord-widget"
                server="1068966007886069841"
                channel="1068966009106600110"
              />
            </IonCol>
          </IonRow>

          <IonCol sizeMd="12">
            <IonLabel>
              Badges Acquired:
              <div>
                {badges.map((badge) => (
                  <IonIcon name={badge.name} key={Math.random()}></IonIcon>
                ))}
              </div>
            </IonLabel>
          </IonCol>
        </IonGrid>
        {/* below is only for development testing purposes */}
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
