import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonTitle,
  RefresherEventDetail
} from '@ionic/react';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where
} from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { auth, FirestoreDB, storage } from '../../firebase';
import { useHistory } from 'react-router';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import AdminContext from '../../store/admin-context';
import AuthContext from '../../store/auth-context';
import TeamLeaderBoardChart from '../../components/LeaderBoard/TeamLeaderboardChart';
import { ChannelData } from '../sampleData';
import WidgetBot from '@widgetbot/react-embed';
import './teamHome.scss';

const TeamHome: React.FC = () => {
  interface memberData {
    name: string;
    email: string;
    profile_pic: string;
    totalStep: number;
  }

  const [leaderboardData, setLeaderboardData] = useState(Array<memberData>);
  const [teamMembers, setTeamMembers] = useState(Array<string>);
  const [profilePic, setProfilePic] = useState('');
  const [userReference, setUserRef] = useState('');
  const [teamReference, setTeamRef] = useState('');
  const [channelId, setChannelId] = useState({});
  const [isLeader, setIsLeader] = useState(false);
  const [buttonValid, setValid] = useState(false);
  const [photo, setPhoto] = useState<any>(null);
  const [userTotalSteps, setUserTotalSteps] = useState(0);
  const [teamTotalSteps, setTeamTotalSteps] = useState(0);

  const history = useHistory(); // for routing

  const ctx = useContext(AuthContext); // auth context
  const adData = useContext(AdminContext); // admin context

  // display team members
  const DisplayTeam = (team: memberData[]): any => {
    if (team.length > 0) {
      return (
        <>
          <IonGrid>
            <IonRow class="top">
              <IonCol
                size="12"
                align-self-center="true"
                class="header-col admin-col"
              >
                Teammates
              </IonCol>
            </IonRow>
            <IonRow class="header-row">
              <IonCol size="6" class="header-col admin-col">
                Members Name
              </IonCol>
              <IonCol size="6" class="header-col admin-col">
                Members email
              </IonCol>
            </IonRow>
            {team.map((item: { name: string; email: string }) => (
              <IonRow key={Math.random()}>
                <IonCol size="6" class="admin-col">
                  {item.name}
                </IonCol>
                <IonCol size="6" class="admin-col">
                  {item.email}
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </>
      );
    }
  };

  // get the data from the database
  async function getData(teamData: any) {
    const members: Array<memberData> = [];
    const emailList: Array<string> = [];
    const currentUserRef = doc(
      FirestoreDB,
      'users',
      auth.currentUser.email as string
    ); // get user reference
    setUserRef(currentUserRef);
    const userSnap = await getDoc(currentUserRef); // grab the user document
    const userData = userSnap.data(); // get the user data
    const dbChannelId = ChannelData.find((c) => c.team == ctx.team)?.id; // get the team channel id
    let channelId = '';
    // if channel not set up with id in database, default to #general
    if (dbChannelId) {
      channelId = dbChannelId;
    } else {
      channelId = '1068966009106600110'; // #general channel id
    }
    setUserTotalSteps(userData.totalStep);
    setIsLeader(userData.team_leader);
    setChannelId(channelId);
    const teamRef = doc(FirestoreDB, 'teams', ctx.team); // get team reference
    setTeamRef(teamRef); // set team reference
    setProfilePic(teamData.profile_pic);
    setTeamTotalSteps(teamData.totalStep);
    // get all the users in the team
    const usersRef = collection(FirestoreDB, 'users'); // get all users reference
    const q = query(usersRef, where('team', '==', ctx.team)); // query team members
    const querySnapshot = await getDocs(q); // get team members data
    querySnapshot.forEach((doc: any) => {
      const member: memberData = {
        name: doc.data().name as string,
        email: doc.data().email as string,
        profile_pic: doc.data().profile_pic as string,
        totalStep: doc.data().totalStep as number
      };
      emailList.push(member.email);
      members.push(member);
    });
    setLeaderboardData(
      members.sort((a: any, b: any) => (a.totalStep > b.totalStep ? -1 : 1))
    ); // set leaderboard data
    setTeamMembers(emailList); // set team members
    const today = new Date();
    const deadline = new Date(adData.teamDate);
    if (deadline < today) {
      // deadline check
      setValid(true);
    } else {
      setValid(false);
    }
  }

  // handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  // handle image upload
  const handleSubmit = async () => {
    const imageRef = ref(storage, ctx.team + '.png');
    await uploadBytes(imageRef, photo);
    const photoURL = await getDownloadURL(imageRef);
    await updateDoc(teamReference, { profile_pic: photoURL })
      .then(() => {
        alert('Team profile picture updated!');
      })
      .catch((error: any) => {
        alert(error);
      });
  };

  // display the change picture button if the user is the leader
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function changePicture() {
    if (isLeader === true) {
      return (
        <>
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
            <IonButton onClick={handleSubmit}>Change Team Picture</IonButton>
          </IonItem>
        </>
      );
    }
  }

  // handle refresher
  async function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay execution for 2 seconds
    event.detail.complete(); // Notify the refresher that loading is complete
  }

  // leave team
  async function leaveTeam() {
    const newTotalStep = teamTotalSteps - userTotalSteps; //new total step for team
    const newAvg = newTotalStep / (teamMembers.length - 1); //new average step for team
    const newMembers: Array<string> = []; //array for members field
    // set new members array
    for (let i = 0; i < teamMembers.length; i++) {
      if (teamMembers[i] !== auth.currentUser.email) {
        newMembers.push(teamMembers[i]);
      }
    }
    // if the user is the leader
    if (isLeader === true) {
      // if the user is the only member of the team
      if (teamMembers.length === 1) {
        await deleteDoc(doc(FirestoreDB, 'teams', ctx.team)) // delete the team document
          .then(() => {
            console.log('Team deleted');
          })
          .catch((error: any) => {
            console.log(error);
          });
        await updateDoc(userReference, {
          // update the user document
          team_leader: false,
          team: ''
        });
        // if the user is not the only member of the team
      } else {
        const newLead = teamMembers[1]; // get the new team leader
        await updateDoc(teamReference, {
          // update the team document
          leader: newLead,
          totalStep: newTotalStep,
          avg_steps: newAvg,
          members: newMembers
        });
        await updateDoc(userReference, {
          // update the user document
          team_leader: false,
          team: ''
        });
        const otherUserRef = doc(FirestoreDB, 'users', newLead as string);
        await updateDoc(otherUserRef, { team_leader: true }); // update the new team leader document
      }
      // if the user is not the leader
    } else {
      await updateDoc(teamReference, {
        // update the team document
        totalStep: newTotalStep,
        avg_steps: newAvg,
        members: newMembers
      });
      await updateDoc(userReference, {
        // update the user document
        team_leader: false,
        team: ''
      });
    }
    history.push('/app/team/join'); // redirect to join team page
  }

  // update the data when the page loads
  // update the data when the team gets updated
  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(FirestoreDB, 'teams', ctx.team),
      (doc: any) => {
        if (doc.data() !== undefined) {
          getData(doc.data());
        }
      }
    );
    return () => {
      console.log('unsubscribing from team home page');
      unsubscribe();
    };
  }, [ctx.user, ctx.team]);

  // team deadline verification
  function verifyCount() {
    if (buttonValid) {
      if (teamMembers.length < adData.minSize) {
        return (
          <b>
            Your team will not be particpating in the Walktober challenge due to
            not having enough teammembers
          </b>
        );
      }
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <NavBar>
          <IonTitle> {ctx.team} </IonTitle>
        </NavBar>
      </IonHeader>
      <IonContent className="body">
        <IonGrid>
          <IonRow>
            <IonCol
              className="boxSize "
              sizeSm="12"
              sizeLg="4"
              sizeMd="6"
              sizeXs="12"
            >
              <TeamLeaderBoardChart
                data={leaderboardData}
              ></TeamLeaderBoardChart>
            </IonCol>
            <IonCol sizeSm="12" sizeLg="4" sizeMd="6" sizeXs="12" className="">
              <WidgetBot
                className="discord-widget"
                server="1068966007886069841"
                channel={channelId}
              />
            </IonCol>
            <IonCol
              className="boxSize"
              sizeSm="12"
              sizeLg="4"
              sizeMd="6"
              sizeXs="12"
            >
              <IonCard className="card-padding-team-home box-size">
                <IonHeader>
                  <IonTitle className="text-center">{`Team ${ctx.team}`}</IonTitle>
                </IonHeader>
                <IonCardContent className="card-content-class">
                  <IonGrid>
                    <IonRow>
                      <IonCol size="12" className="col-from-cards">
                        <IonImg
                          className="profile_pic"
                          src={profilePic}
                          alt={`Profile picture for team ${ctx.team}`}
                        >
                          {' '}
                        </IonImg>
                        {/* <IonItem> {ctx.team} Profile Picture </IonItem>
              {changePicture()} */}
                      </IonCol>
                      <IonCol size="12" className="col-from-cards">
                        <IonButton
                          onClick={leaveTeam}
                          className="leave-team-button"
                        >
                          {' '}
                          Leave team{' '}
                        </IonButton>{' '}
                      </IonCol>
                      <IonCol size="12" className="col-from-cards">
                        {verifyCount()}
                      </IonCol>
                      <IonCol className="team-list">
                        {DisplayTeam(leaderboardData)}
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
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

export default TeamHome;
