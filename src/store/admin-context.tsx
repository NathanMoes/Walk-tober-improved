/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { doc, onSnapshot } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { FirestoreDB } from '../firebase';

const AdminContext = createContext({
  maxSize: 0,
  minSize: 0,
  regDate: '',
  teamDate: ''
});

export const useAdminContext = () => useContext(AdminContext);

export const AdminContextProvider: React.FC<{ children: any }> = ( props: any ) => {
  const [maxSize, setMax] = useState(0);
  const [minSize, setMin] = useState(0);
  const [regDate, setRegDate] = useState("");
  const [teamDate, setTeamDate] = useState("");
  const [complete, setComplete] = useState(false);

  // update admin team settings whenever there is an update in firestore database
  useEffect(() => {
    const unsubcribe = onSnapshot(doc(FirestoreDB, "admin", "admin"), (doc: any) => {
      setMax(doc.data().max_team_size as number);
      setMin(doc.data().min_team_size as number);
      setRegDate(doc.data().registration_deadline);
      setTeamDate(doc.data().team_creation_due);
      setComplete(true);
    });
    return unsubcribe;
  }, []);

  return (
    <AdminContext.Provider value={{ maxSize, minSize, regDate, teamDate }}>
      {complete && props.children}
    </AdminContext.Provider>
  );
};

export default AdminContext;