import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config"; // Ensure this is the correct import path
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";
import React from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const googleProvider = new GoogleAuthProvider();

// AuthProvider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register user function
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user function
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  //signIn with google function
  const signInWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
  };

  //logout function
  const logout =  () => {
    return  signOut(auth);
  };


  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      
      if(user){
        const {email, displayName, photoURL} = user;
        const userData={
          email,
          username:displayName,
          photo:photoURL
        }
      }

    });

    return () => {
      unsubscribe();
    };

  }, []);

  const value = {
    currentUser,
    loading,
    registerUser,
    loginUser,
    signInWithGoogle,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
