import { auth, firestore, googleAuthProvider } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LogIn_Button = () => {
  const [user] = useAuthState(auth as any);
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
    const userDoc = firestore.doc(`users/${user?.uid}`);
    const batch = firestore.batch();
    batch.set(userDoc, {
      uid: user?.uid,
      photoURL: user?.photoURL,
      username: user?.displayName,
    });
    await batch.commit();
  };
  return (
    <button
      className="px-4 py-[5px] font-bold text-sm text-gray-500 hover:text-gray-700"
      onClick={signInWithGoogle}
    >
      Log In
    </button>
  );
};

export default LogIn_Button;
