import React from "react";
import { createUseStyles } from "react-jss";
import ContentHeader from "../../components/ContentHeader";

const useStyles = createUseStyles({
  experienceContainer: {
    color: "#fff",
    background: "#191919",
    minHeight: "fit-content",
    display: "flex",
    justifyContent: "center",

    "@media screen and (max-width: 768px)": {
      padding: "100px 0",
    },
  },
  experienceWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    width: 1200,
    padding: "50px 20px",
    margin: 30,

    background: "#212121",
    borderRadius: 40,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

    "@media screen and (max-width: 425px)": {
      padding: "40px 10px",
      margin: 10,
      borderRadius: 20,
    },
  },

  timelineWrapper: {
    // display: "flex",
    // "&:before": {
    //   content: '""',
    //   position: "fixed",
    //   top: "0px",
    //   left: "50%",
    //   bottom: "0px",
    //   transform: "translateX(-50%)",
    //   width: "4px",
    //   backgroundColor: "#fff",
    // },
  },
  verticalLine: {
    borderLeft: "4px solid white",
    height: "850px",
    zIndex: "3",
    position: "absolute",
    width: "4px",
    left: "0px",
    right: "0px",
    marginLeft: "auto",
    marginRight: "auto",
    // position: "fixed",
    // top: "0px",
    // left: "50%",
    // bottom: "0px",
    // transform: "translateX(-50%)",
    // width: "4px",
    // backgroundColor: "#fff",
  },
  timeColumn: {
    // display: "flex",
    // flexDirection: "column",
    // maxWidth: "800px",
    // margin: "60px",
    width: "calc(100% - 80px)",
    maxWidth: "800px",
    margin: "auto",
    position: "relative",
    left: "-5px",
  },
  timeCard: {
    width: "calc(50% - 80px)",
    float: "left",
    padding: "20px",
    clear: "both",
    textAlign: "right",

    "&:nth-child(2n)": {
      textAlign: "left",
      float: "right",
    },
  },
  timeTitle: {
    fontSize: "32px",
    marginBottom: "12px",
    position: " relative",
    color: "#fff",

    // "&:before": {
    //   content: '""',
    //   position: " absolute",
    //   width: "8px",
    //   height: "8px",
    //   border: "4px solid #ffffff",
    //   backgroundColor: "#1D1D1D",
    //   borderRadius: "100%",
    //   top: "50%",
    //   transform: "translateY(-50%)",
    //   right: "-73px",
    //   zIndex: "1000",
    // },
  },
  timeBody: {
    color: "#aaa",
  },
});

const ExperienceSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.experienceContainer} id="experiences">
      <div className={classes.experienceWrapper}>
        <ContentHeader type="experience" />
        <div className={classes.timelineWrapper}>
          <div className={classes.verticalLine}></div>
          <div className={classes.timeColumn}>
            <div className={classes.timeCard}>
              <h2 className={classes.timeTitle}>2011</h2>
              <p className={classes.timeBody}>
                Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum
                suscipit eveniet amet dignissimos. Doloremque et distinctio quod
                molestiae ut.
              </p>
            </div>
            <div className={classes.timeCard}>
              <h2 className={classes.timeTitle}>2012</h2>
              <p className={classes.timeBody}>
                Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum
                suscipit eveniet amet dignissimos. Doloremque et distinctio quod
                molestiae ut.
              </p>
            </div>
            <div className={classes.timeCard}>
              <h2 className={classes.timeTitle}>2013</h2>
              <p className={classes.timeBody}>
                Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum
                suscipit eveniet amet dignissimos. Doloremque et distinctio quod
                molestiae ut.
              </p>
            </div>
            <div className={classes.timeCard}>
              <h2 className={classes.timeTitle}>2014</h2>
              <p className={classes.timeBody}>
                Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum
                suscipit eveniet amet dignissimos. Doloremque et distinctio quod
                molestiae ut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
