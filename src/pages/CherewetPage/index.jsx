import React, { useState, useRef } from "react";
import "./index.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBb7DubdUVr8aHLpcZ_mbjlDg4gO9MQags",
  authDomain: "cherewet-bgt.firebaseapp.com",
  projectId: "cherewet-bgt",
  storageBucket: "cherewet-bgt.appspot.com",
  messagingSenderId: "442297329224",
  appId: "1:442297329224:web:03faaf38bacdfaadd0da7d",
  measurementId: "G-W2WRYHBEZJ",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const CherewetPage = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button className="sign-in" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
};

const SignOut = () => {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};

const ChatRoom = () => {
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(25);
  const [messages, loadingMessages, error] = useCollectionData(query, {
    idField: "id",
  });
  const scrollMsg = useRef();

  const [inputMsg, setInputMsg] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    console.log(auth.currentUser);

    await messageRef.add({
      text: inputMsg,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setInputMsg("");

    scrollMsg.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span  ref={scrollMsg}></span >
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={inputMsg}
          onChange={(e) => setInputMsg(e.target.value)}
          placeholder="apa gitu"
        />
        <button type="submit" disabled={!inputMsg}>
          👄
        </button>
      </form>
    </>
  );
};

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.id ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  );
};

export default CherewetPage;
