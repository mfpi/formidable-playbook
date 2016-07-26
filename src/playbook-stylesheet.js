import Color from "color";
import theme from "./playbook-theme";

// begin stylesheet
export default {
  "*, *:before, *:after": {
    boxSizing: "inherit"
  },
  html: {
    backgroundColor: theme.charcoal,
    msTextSizeAdjust: "100%",
    WebkitTextSizeAdjust: "100%"
  },
  body: {
    backgroundColor: theme.white,
    boxSizing: "border-box",
    color: theme.black,
    fontFamily: theme.serif,
    fontSize: "16px",
    lineHeight: 1.4,
    margin: 0
  },
  "html, body": {
    overflowX: "hidden",
    height: "100%"
  },
  "body::selection, body::-moz-selection": {
    background: "#FFFEC2"
  },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary": {
    display: "block"
  },
  "h1, h2, h3, h4, h5, h6, ul, ol, dd, p, figure, pre, table, fieldset, hr, .highlight": {
    marginTop: "1.25rem",
    marginBottom: 0
  },
  "ul ul": {
    marginTop: "0"
  },
  "h1, h2, h3, h4, h5, h6, hgroup": {
    fontFamily: theme.sansSerif,
    letterSpacing: ".02em"
  },
  a: {
    color: theme.red,
    transition: "color 150ms ease-in"
  },
  "a:hover": {
    color: Color(theme.red).lighten(.2).hexString(),
    transition: "color 150ms ease-out"
  },
  p: {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: theme.black,
    WebkitFontSmoothing: "antialiased"
  },
  code: {
    padding: "0.2em 5px",
    margin: "0px",
    fontSize: "85%",
    background: "rgba(0,0,0,0.05)",
    borderRadius: "3px",
    fontFamily: theme.code
  },
  li: {
    fontSize: "1rem",
    lineHeight: 1.8
  },
  img: {
    maxWidth: "100%"
  },
  h1: {
    fontSize: "3rem"
  },
  h2: {
    fontSize: "2rem"
  },
  h3: {
    fontSize: "1.55rem"
  },
  h4: {
    fontSize: "1.2rem"
  },
  svg: {
    fill: "currentColor"
  },
  table: {
    padding: "0px"
  },
  "table tr": {
    borderTop: "1px solid #cccccc",
    backgroundColor: "white",
    margin: "0px",
    padding: "0px"
  },
  "table tr:nth-child(2n)": {
    backgroundColor: "#f8f8f8"
  },
  "table tr th": {
    fontWeight: "bold",
    border: "1px solid #cccccc",
    textAlign: "left",
    margin: "0px",
    padding: "6px 13px"
  },
  "table tr td": {
    border: "1px solid #cccccc",
    textAlign: "left",
    margin: "0px",
    padding: "6px 13px"
  },
  "table tr th:first-child, table tr td:first-child": {
    marginTop: "0px"
  },
  "table tr th:last-child, table tr td:last-child": {
    marginBottom: "0px"
  },
  // Markdown-processed styles
  ".page-home .md p:first-child": {
    fontSize: "1.3em"
  },
  ".page-home .md ul": {
    margin: "1.25rem 0px"
  },
  ".page-home .md ul ul": {
    margin: "0px"
  },
  ".page-home .md ul li": {
    position: "relative",
    listStyle: "none"
  },
  ".page-home .md ul li a": {
    position: "relative",
    fontSize: "1.2em"
  },
  ".page-home .md ul li a:before": {
    content: "''",
    display: "block",
    position: "absolute",
    left: "-15px",
    top: "50%",
    width: "5px",
    height: "5px",
    borderRadius: "25px",
    backgroundColor: theme.red,
    transform: "translateY(-50%)"
  },
  ".page-home .md h2": {
    marginTop: "1.5em"
  }
};
