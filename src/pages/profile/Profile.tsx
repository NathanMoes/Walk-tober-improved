/* eslint-disable @typescript-eslint/space-before-function-paren */
import { useContext, useEffect, useState } from 'react';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonText,
  IonTitle
} from '@ionic/react';
import './Profile.css';
import { Route } from 'react-router-dom';
import { auth, FirestoreDB } from '../../firebase';
import { doc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { useHistory } from 'react-router';
import NavBar from '../../components/NavBar';
import newPassword from './newPassword';
import changeAvatar from './changeAvatar';
import AuthContext from '../../store/auth-context';

const Profile: React.FC = () => {
  const [email, setEmail] = useState('');
  const [joinDate, setJoinDate] = useState(new Date());
  const [joinDateString, setJoinDateString] = useState('');
  const [name, SetName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [totalDistance, setTotalDistance] = useState(0);
  const [username, setUsername] = useState('');
  const history = useHistory();
  // let badges;

  const ctx = useContext(AuthContext);

  async function GetRecords(): Promise<void> {
    if (ctx.user === null) {
      alert('You are not logged in!');
      history.replace("/login");
      return;
    }
    const dbRef = doc(FirestoreDB, 'users', auth.currentUser.email as string);
    const dbSnap = await getDoc(dbRef);
    const userData = dbSnap.data();
    
    setProfilePic(userData.profile_pic);
    SetName(userData.name);
    setUsername('');
    setEmail(userData.email);
    setJoinDate(new Date(auth.currentUser.metadata.creationTime));
    setJoinDateString(joinDate.toLocaleDateString());
    setTotalDistance(userData.totalStep / 2000);
  }

  useEffect(() => {
    GetRecords();
  }, []);

  const newAvatar = () => {
    history.push('/app/profile/newAvater');
  };

  const changePassword = () => {
    history.push('/app/profile/passwordChange');
    return;
  };
  const moveToCreateTeam = () => {
    history.push('/app/teamcreation');
  };

  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path="/app/profile/passwordChange" component={newPassword} />
        <Route exact path="/app/profile/newAvatar" component={changeAvatar} />
      </IonRouterOutlet>
      <IonHeader>
        <NavBar>
          <IonTitle>Profile</IonTitle>
        </NavBar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonGrid>
            <IonRow>
              <IonCol size="auto">
                <IonText>
                  <IonImg
                    className="profile_pic"
                    src={profilePic}
                    alt="Profile picture for the user signed in"
                  ></IonImg>
                  <IonButton onClick={newAvatar}>
                    Change Profile Picture
                  </IonButton>
                  <h2>{name}</h2>
                  <p>
                    {username}
                    <IonButton fill="clear" size="small">
                      Change Username
                    </IonButton>
                  </p>
                  <p>{email}</p>
                  <IonButton onClick={changePassword}>
                    Change Password
                  </IonButton>{' '}
                  <br></br>
                  <IonButton>Change Health App Preferences</IonButton>
                  <IonButton onClick={moveToCreateTeam}>Create a Team</IonButton>
                </IonText>
              </IonCol>
              <IonCol>
                <IonText>
                  <p>Joined on {joinDateString}</p>
                  <p>{totalDistance} miles walked in total</p>
                  <IonLabel>Step Goal: </IonLabel>
                  <IonItem fill="outline">
                    <IonInput value="10,000" size={100}></IonInput>
                  </IonItem>
                  <h6>Badges:</h6>
                  {/* TODO: Put badges here */}
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Profile;