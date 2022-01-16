import React from "react";
import { createUseStyles } from "react-jss";
import ProfilePicture from "../../images/fayaad.jpg";
import Styles from "../../App.css";

const useStyles = createUseStyles({
  introContainer: {
    paddingTop: 80,
    background: "#191919",
    minHeight: "fit-content",
    display: "flex",
    justifyContent: "center",
  },
  introWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 1200,
    padding: 40,

    "@media only screen and (max-width: 1024px)": {
      flexDirection: "column",
      justifyContent: "start",
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  textWrapper: {
    flex: "2",
    width: "100%",
    textAlign: "left",

    "@media only screen and (max-width: 1024px)": {
      flex: "0",
      textAlign: "center",
    },
    "@media only screen and (max-width: 425px)": {
      textAlign: "left",
    },
  },
  heading: {
    fontFamily: "Inter",
    fontSize: 52,
    fontWeight: 700,
    backgroundColor: "#F98D36",
    backgroundImage: "linear-gradient(45deg, #F98D36, #FBE10F)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "-moz-background-clip": "text",
    "-moz-text-fill-color": "transparent",
  },
  headingIcon: {
    "-webkit-text-fill-color": "black",
    "-moz-text-fill-color": "black",
  },
  subheading: {
    color: "#BDBDBD",
    fontFamily: "Inter",
    fontSize: 18,
  },
  imageWrapper: {
    flex: "1",
    maxWidth: 400,
    paddingTop: 40,
  },
  image: {
    borderRadius: "20px",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3))",
  },
});

const IntroSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.introContainer}>
      <div className={classes.introWrapper}>
        <div className={classes.textWrapper}>
          <h1 className={classes.heading}>
            Hi! <span className={classes.headingIcon}>👋</span> <br />
            I'm Fayaad, <br />
            A Website Enthusiast. <br />
          </h1>
          <h2 className={classes.subheading}>
            I love playing online games 🎮, watch netflix 🎥, and traveling too
            🏖 !
          </h2>
        </div>
        <div className={classes.imageWrapper}>
          <img
            className={classes.image}
            src={ProfilePicture}
            alt="Fayaad Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
