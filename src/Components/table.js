import React from "react";
import {
  Grid,
  Button,
  Typography,
  Box,
  TableCell,
  TableRow,
  Table,
  TableHead,
  TableBody,
  CircularProgress,
} from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { RefForward } from "@fluentui/react-component-ref";
import { useNavigate } from "react-router-dom";
import "./styles.css";
// import { Link } from "react-router-dom";
export default function TableData(props) {
  let navigate = useNavigate();
  const changeBackground = (e) => {
    e.target.style.color = "blue";
    e.target.style.textDecoration = "underline";
  };
  const MouseOut = (event) => {
    event.target.style.color = "#8392AB";
    event.target.style.textDecoration = "none";
  };
  const routeChange = (name) => {
    let path = `/details/${name}`;
    navigate(path);
  };

  return (
    <Table className="tableContainer">
      <TableHead className="tablecolor">
        <TableRow>
          <TableCell className="tableHead">Profile Pic</TableCell>
          <TableCell className="tableHead">Name</TableCell>
          <TableCell className="tableHead">Repo</TableCell>
          <TableCell className="tableHead">Followers</TableCell>
          <TableCell className="tableHead">Actions</TableCell>
        </TableRow>
      </TableHead>
      {props.loading ? (
        <Box>
          <div
            style={{ position: "absolute", width: "100%", textAlign: "center" }}
          >
            <CircularProgress />
          </div>
        </Box>
      ) : (
        <TableBody>
          {props.data &&
            props.data?.map((itm) => {
              return (
                <TableRow key={itm.id}>
                  <TableCell className={"tableCellBody"}>
                    {/* <Link
                to={`/${props.data.id}`}
                style={{
                  cursor: "pointer",
                  color: "#8392AB",
                  textDecoration: "none",
                }}
                onMouseOver={changeBackground}
                onMouseOut={MouseOut}
              ></Link> */}
                    <Avatar>
                      <img src={itm.avatar_url} width="38px" height="49px" />
                    </Avatar>
                  </TableCell>
                  <TableCell className={"tableCellBody"}>{itm.login}</TableCell>

                  <TableCell className={"tableCellBody"}>
                    {itm.repos_url}
                  </TableCell>
                  <TableCell className={"tableCellBody"}>
                    {itm.followers_url}
                  </TableCell>
                  <TableCell
                    className={"tableCellBody"}
                    style={{ cursor: "pointer" }}
                    onClick={() => routeChange(itm.login)}
                  >
                    More Details...
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      )}
      {props.data.length <= 0 && !props.loading && (
        <TableBody>
          <TableRow
            style={{
              position: "absolute",
              width: "100%",
              textAlign: "center",
              fontSize: 20,
              fontWeight: 700,
              marginTop: 10,
            }}
          >
            No Data found
          </TableRow>
        </TableBody>
      )}
    </Table>
  );
}
