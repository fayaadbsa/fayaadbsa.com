import React from "react";
import { createUseStyles } from "react-jss";
import { Button } from "../ButtonElements";
import { Link as LinkS } from "react-scroll";
import { EXPERIENCE_CONTENT, PROJECT_CONTENT } from "./ContentData";

const useStyles = createUseStyles({
  contentRow: {
    display: "flex",
    marginBottom: 40,
    flexDirection: (props) => (props.imgStart ? "row-reverse" : "row"),

    "@media screen and (max-width: 768px)": {
      flexDirection: "column-reverse",
    },
  },
  heading: {
    fontSize: 36,
    backgroundColor: "#F98D36",
    backgroundImage: "linear-gradient(45deg, #F98D36, #FBE10F)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "-moz-background-clip": "text",
    "-moz-text-fill-color": "transparent",

    "@media screen and (max-width: 425px)": {
      fontSize: 32,
    },
  },
  headingIcon: {
    "-webkit-text-fill-color": "black",
    "-moz-text-fill-color": "black",
  },
  subheading: {
    color: "#fff",
    fontSize: 18,
    margin: "16px 0",

    "@media screen and (max-width: 425px)": {
      fontSize: 14,
    },
  },
  column1: {
    alignSelf: "start",
    marginBottom: "16px",
    padding: "0 32px",
    gridArea: "col1",
  },
  column2: {
    marginBottom: "16px",
    padding: "0 32px",
    gridArea: "col2",
  },
  textWrapper: {
    maxWidth: "540px",
    paddingTop: "0",
    paddingBottom: "60px",
  },
  btnWrap: {
    display: "flex",
    justifyContent: "flex-start",
  },
  imgWrap: {
    maxWidth: "555px",
    height: "100%",
  },
  img: {
    width: "100%",
    margin: "0 0 10px 0",
    paddingRight: "0",
  },
});

const ContentHeader = (props) => {
  const content =
    props.type === "project"
      ? PROJECT_CONTENT
      : props.type === "experience"
      ? EXPERIENCE_CONTENT
      : "";
  const classes = useStyles(content);

  return (
    <div className={classes.contentRow}>
      <div className={classes.column1}>
        <div className={classes.textWrapper}>
          <h2 className={classes.heading}>
            {content.heading}
            <span className={classes.headingIcon}>{content.headingIcon}</span>
          </h2>
          <p className={classes.subheading}>{content.subheading}</p>
          {content.hasButton ? (
            <div className={classes.btnWrap}>
              <LinkS
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <Button large>See More</Button>
              </LinkS>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={classes.column2}>
        <div className={classes.imgWrap}>
          <img className={classes.img} src={content.image} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
