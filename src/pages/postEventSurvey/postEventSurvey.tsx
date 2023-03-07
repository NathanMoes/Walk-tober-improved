import { useState, useEffect, useContext } from 'react';
import {
  IonButton,
  IonModal,
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonInput,
  IonCardSubtitle,
} from '@ionic/react';
import './postEventSurvey.scss';
import { useHistory } from 'react-router';
import smallLogo from '../../assets/Walktober.png';
import AdminContext from '../../store/admin-context';

function PostEventSurvey() {
  const history = useHistory();
  const [showPostSurvey, setShowPostSurvey] = useState(false);
  const adminInfo = useContext(AdminContext);

  useEffect(() => {
    const today = new Date();
    const eventEnd = new Date(adminInfo.endDate);
    setShowPostSurvey(today < eventEnd);
  }, []);

  const hoursPhysicallyActive = {
    header: 'Please select the approximate hours per week you are currently physically active'
  };
  const minutesPhysicallyActive = {
    header: 'Please select the approximate minutes per day you are currently physically active'
  };
  const recCenterUsage = {
    header: 'Please select the most accurate frequency for your PSU Rec Center usage'
  };
  const wellBeing = {
    header: 'Please select the response that most accurately depicts your thoughts to the statement: Walktober helped improve my health and well-being'
  };
  const participateAgain = {
    header: 'Please select the response that most accurately depicts your thoughts to the statement: I would participate in Walktober again!'
  };
  const submitExitForm = () => {
    // Backend take info
    setShowPostSurvey(false);
    history.push('/app/results');
  };

  return (
      <IonModal isOpen={showPostSurvey} className="survey-modal" >
        <IonCard>
          <img className="exit-logo-modal" alt="Walktober logo" src={smallLogo} />
            <IonCardTitle class="ion-text-center">Thank you for participating in Walktober!</IonCardTitle>
            <div>&nbsp;</div>
            <IonCardSubtitle class="ion-text-center">Please complete the survey to see results!</IonCardSubtitle>
            <div>&nbsp;</div>
          <IonList class="ion-no-padding">
              <IonItem className="modal-field">
                <IonLabel position="floating">How many hours per week are you active?</IonLabel>
                  <IonSelect interfaceOptions={hoursPhysicallyActive} interface="action-sheet" placeholder="Select One">
                    <IonSelectOption value="0">0</IonSelectOption>
                    <IonSelectOption value="1">1</IonSelectOption>
                    <IonSelectOption value="2">2</IonSelectOption>
                    <IonSelectOption value="3">3</IonSelectOption>
                    <IonSelectOption value="4">4</IonSelectOption>
                    <IonSelectOption value="5">5</IonSelectOption>
                    <IonSelectOption value="6">6</IonSelectOption>
                    <IonSelectOption value="7">7+</IonSelectOption>
                  </IonSelect>
              </IonItem>

              <IonItem className="modal-field">
                <IonLabel position="floating">How many minutes of activity per day?</IonLabel>
                  <IonSelect interfaceOptions={minutesPhysicallyActive} interface="action-sheet" placeholder="Select One">
                    <IonSelectOption value="0-15">0-15</IonSelectOption>
                    <IonSelectOption value="16-30">16-30</IonSelectOption>
                    <IonSelectOption value="31-45">31-45</IonSelectOption>
                    <IonSelectOption value="46-60">46-60</IonSelectOption>
                    <IonSelectOption value="60+">60+</IonSelectOption>
                  </IonSelect>
              </IonItem>

              <IonItem className="modal-field">
                <IonLabel position="floating">How often do you use the PSU Rec Center?</IonLabel>
                  <IonSelect interfaceOptions={recCenterUsage} interface="action-sheet" placeholder="Select One">
                    <IonSelectOption value="never">I have never used the Rec Center</IonSelectOption>
                    <IonSelectOption value="1-3">1-3 times total</IonSelectOption>
                    <IonSelectOption value="1-3-times-per-month">1-3 times per month</IonSelectOption>
                    <IonSelectOption value="1-3-times-per-week">1-3 times per week</IonSelectOption>
                    <IonSelectOption value="4+-times-per-week">4+ times per week</IonSelectOption>
                  </IonSelect>
              </IonItem>

              <IonItem className="modal-field">
                <IonLabel position="floating">Participation in Walktober helped me improve my health and well-being.</IonLabel>
                  <IonSelect interfaceOptions={wellBeing} interface="action-sheet" placeholder="Select One">
                    <IonSelectOption value="1">Strongly Disagree</IonSelectOption>
                    <IonSelectOption value="2">Disagree</IonSelectOption>
                    <IonSelectOption value="3">Neither Agree Nor Disagree</IonSelectOption>
                    <IonSelectOption value="4">Agree</IonSelectOption>
                    <IonSelectOption value="5">Strongly Agree</IonSelectOption>
                  </IonSelect>
              </IonItem>

              <IonItem className="modal-field">
                <IonLabel position="floating">I would participate in Walktober again.</IonLabel>
                  <IonSelect interfaceOptions={participateAgain} interface="action-sheet" placeholder="Select One">
                    <IonSelectOption value="1">Strongly Disagree</IonSelectOption>
                    <IonSelectOption value="2">Disagree</IonSelectOption>
                    <IonSelectOption value="3">Neither Agree Nor Disagree</IonSelectOption>
                    <IonSelectOption value="4">Agree</IonSelectOption>
                    <IonSelectOption value="5">Strongly Agree</IonSelectOption>
                  </IonSelect>
              </IonItem>

              <IonItem className="modal-field">
                  <IonLabel position="floating">If you would not participate in Walktober again, why not?</IonLabel>
                  <IonInput></IonInput>
              </IonItem>

              <IonItem className="modal-field">
                  <IonLabel position="floating">Please list any walking events you participated in during Walktober.</IonLabel>
                  <IonInput></IonInput>
              </IonItem>

              <IonItem className="modal-field">
                  <IonLabel position="floating">Please list any ideas for walking activities for future Walktober events.</IonLabel>
                  <IonInput placeholder="In-person guided walks or remote walking activities you'd be interested in?"></IonInput>
              </IonItem>

              <IonItem className="modal-field">
                  <IonLabel position="floating">Please provite us with any other feedback on your Walktober experience.</IonLabel>
                  <IonInput></IonInput>
              </IonItem>
            </IonList>

            <h2 className="survey-divider">
              <span></span>
            </h2>
            <IonButton className="modal-submit" expand="block" onClick={submitExitForm}>Take me to the results!</IonButton>
        </IonCard>
      </IonModal>
  );
}

export default PostEventSurvey;