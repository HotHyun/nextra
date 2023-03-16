import { auth, firestore, googleAuthProvider } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

const LogIn_Button = () => {
  const [user] = useAuthState(auth as any);
  useEffect(() => {
    if (user) {
      const userDoc = firestore.doc(`users/${user?.uid}`);
      const batch = firestore.batch();
      batch.set(userDoc, {
        uid: user?.uid,
        photoURL: user?.photoURL,
        username: user?.displayName,
      });
      const timer = setTimeout(() => {
        batch.commit();
      }, 1000);
    }
  }, [user]);
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
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
