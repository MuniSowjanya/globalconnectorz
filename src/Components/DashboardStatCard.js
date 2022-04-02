import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.14)",
    borderRadius: 10,
    padding: "10px 20px",
  },
  iconWrapper: {
    marginRight: 20,
    backgroundColor: " #F3F5FF",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    position: "relative",
    top: "-10px",
    height: 45,
    border: "1px solid #e1e1e1",
    "& svg": {
      width: 32,
      height: 32,
      padding: "5px",
    },
  },
  contentWrapper: {
    textAlign: "center",
    "& h4": {
      color: "#8392AB",
      fontSize: 18,
      letterSpacing: 1,
      fontWeight: 500,
      margin: 10,
    },
    "& h2": {
      margin: "12px 0px",
      color: "#4D72F8",
      fontSize: 30,
    },
    "& button": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#4D72F8",
      border: "1px solid #E2E2E2",
      backgroundColor: "#FFFFFF",
      padding: "6px 16px",
      borderRadius: 20,
      minWidth: 170,
      fontSize: 12,
      fontWeight: 700,
      marginBottom: 10,
      "& svg": {
        position: "relative",
        left: "-15px",
      },
    },
  },
});

// interface DashboardStatCardProps {
//   label: string;
//   count: number;
//   btnLabel: string;
//   btnIcon: JSX.Element;
//   [key: string]: any;
// }

export const DashboardStatCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.iconWrapper}>
        <BarsIcon />
      </div>
      <div className={classes.contentWrapper}>
        <h4>{props.label}</h4>
        <h2>{props.count}</h2>
        {/* <button onClick={props?.path} style={{ cursor: "pointer" }}>
          {props.btnIcon} {props.btnLabel}
        </button> */}
      </div>
    </div>
  );
};

function BarsIcon(props) {
  return (
    <svg
      width={29}
      height={31}
      viewBox="0 0 29 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.125 24.25H1.833V12.583h7.292V24.25zm8.75 0h-7.292V6.75h7.292v17.5zm8.75 0h-7.292V.917h7.292V24.25zm1.458 5.833H.375v-2.916h27.708v2.916z"
        fill="#4D72F8"
      />
    </svg>
  );
}
