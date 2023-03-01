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
  IonRefresher,
  IonRefresherContent,
  IonRouterOutlet,
  IonRow,
  IonTitle,
  RefresherEventDetail
} from '@ionic/react';
import './profile.css';
import { Route } from 'react-router-dom';
import { auth, FirestoreDB, storage } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useHistory } from 'react-router';
import NavBar from '../../components/NavBar';
import newPassword from './newPassword';
import AuthContext from '../../store/auth-context';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { updateDoc } from 'firebase/firestore';

const Profile: React.FC = () => {
  const history = useHistory();
  const ctx = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [team, setTeam] = useState('');
  const [totalDistance, setTotalDistance] = useState(0);
  const [stepGoal, setStepGoal] = useState(0);
  const [photo, setPhoto] = useState<any>(null);
  const [isGoogleUser, setIsGoogleUser] = useState(false);

  useEffect(() => {
    GetRecords();
  }, []);

  async function GetRecords(): Promise<void> {
    if (ctx.user === null) {
      alert('You are not logged in!');
      history.push('/login');
      return;
    }
    const dbRef = doc(FirestoreDB, 'users', auth.currentUser.email as string);
    const dbSnap = await getDoc(dbRef);
    const userData = dbSnap.data();
    setProfilePic(userData.profile_pic);
    setName(userData.name);
    setEmail(userData.email);
    setTeam(userData.team);
    setJoinDate(
      new Date(auth.currentUser.metadata.creationTime).toLocaleDateString()
    );
    setTotalDistance(userData.totalStep / 2000);
    setStepGoal(userData.step_goal);
    setIsGoogleUser(auth.currentUser.providerData[0]?.providerId === 'google.com');
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    const imageRef = ref(storage, auth.currentUser.email + '.png');
    await uploadBytes(imageRef, photo);
    const photoURL = await getDownloadURL(imageRef);
    updateProfile(auth.currentUser, { photoURL }).catch((error: any) => {
      alert(error);
    });
    const dbRef = doc(FirestoreDB, 'users', auth.currentUser.email as string);
    await updateDoc(dbRef, { profile_pic: photoURL })
      .then(() => {
        alert('profile picture updated!');
        setProfilePic(photoURL); // Refresh data
      })
      .catch((error: any) => {
        alert(error);
      });
  };

  const changePassword = () => {
    if (isGoogleUser) {
      return;
    }
    history.push('/app/profile/passwordChange');
  };

  function teamDisplay(){
    if(team === ''){
      return (
        <>
          <IonItem>
            You have not joined a team yet
          </IonItem>
        </>
      );
    }
    else{
      return(
        <>
        <IonItem>
          Team: {team}  
        </IonItem></>
      );
    }
  }

  const signOut = async () => {
    try {
      await auth.signOut();
      history.push('/');
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  // handle refresher
  async function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay execution for 2 seconds
    GetRecords(); // Refresh data
    event.detail.complete(); // Notify the refresher that loading is complete
  }

  // Function to update the step goal in the database
  const updateStepGoal = async (stepGoal: number) => {
    const dbRef = doc(FirestoreDB, 'users', auth.currentUser.email as string);
    await updateDoc(dbRef, { step_goal: stepGoal })
      .then(() => {
        alert('Step Goal updated!');
        history.go(0); //refresh page
      })
      .catch((error: any) => {
        alert(error);
      });
  };

  // Function to handle the step goal submission
  const handleSubmitStepGoal = async (event: React.FormEvent) => {
    event.preventDefault();
    updateStepGoal(stepGoal);
  };

  return (
    <IonPage>
      <IonRouterOutlet>
        <Route
          exact
          path="/app/profile/passwordChange"
          component={newPassword}
        />
      </IonRouterOutlet>
      <IonHeader>
        <NavBar>
          <IonTitle>Profile</IonTitle>
        </NavBar>
      </IonHeader>
      <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol size="auto">
                <IonItem>
                  <IonImg
                    className="profile_pic"
                    src={profilePic}
                    alt="Profile picture for the user signed in"
                  ></IonImg>
                </IonItem>
                <IonItem>
                  <input
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </IonItem>
                <IonItem>
                  <IonButton onClick={handleSubmit}>
                    Change Profile Picture
                  </IonButton>
                </IonItem>
                <IonItem>
                  <h2>{name}</h2>
                </IonItem>
                <IonItem>
                  <p>{email}</p>
                </IonItem>
                <IonItem>
                  {teamDisplay()}
                </IonItem>
                {!isGoogleUser && (
                <IonItem>
                  <IonButton onClick={changePassword}>Change Password</IonButton>
                </IonItem>
                )}
                <IonItem>
                  <IonButton onClick={signOut}>Sign Out</IonButton>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <p>Joined on {joinDate}</p>
                </IonItem>
                <IonItem>
                  <p>{totalDistance} miles walked in total</p>
                </IonItem>
                <form onSubmit={handleSubmitStepGoal}>
                  <IonLabel position="stacked">Set Your Step Goal:</IonLabel>
                  <IonInput
                    min="0"
                    type="number"
                    value={stepGoal}
                    onInput={(event: any) => {
                      setStepGoal(Number(event.target.value));
                    }}
                  />
                  <IonButton expand="block" type="submit">
                    Save
                  </IonButton>
                </form>
                <p>Your current step goal is: {stepGoal} steps!</p>
                <IonItem>
                  <h6>Badges:</h6>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
      </IonContent>
    </IonPage>
  );
};

export default Profile;