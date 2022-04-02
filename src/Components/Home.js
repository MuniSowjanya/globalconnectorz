import "../App.css";
import { TextField, Button, Grid, CardContent } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { InputAdornment } from "@material-ui/core";
import { AiFillGithub, AiOutlineSearch } from "react-icons/ai";
import Table from "./table";
import { Switch, Route, Redirect } from "react-router";

export default function Home() {
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const getdata = () => {
    setLoading(true);
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setData(res.data);
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  React.useEffect(() => {
    getdata();
  }, []);
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    if (search !== "") {
      setLoading(true);
      axios
        .get(`https://api.github.com/users/${search}`)
        .then((res) => {
          if (res.data) {
            setLoading(false);
            const result = data.filter((itm) => itm.login === res.data.login);

            setData(result);
          } else {
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      getdata();
    }
  };
  return (
    <div>
      <div className="navbar">
        <div style={{ float: "left", marginTop: "-10px" }}>
          <AiFillGithub width="25px" />
          Github
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item md={4}></Grid>
        <Grid item md={4}>
          <div className="search">
            <TextField
              fullWidth
              size="small"
              placeholder={"Search Repos"}
              // value={props.value}
              variant="outlined"
              onChange={handleChangeSearch}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="start"
                    style={{ cursor: "pointer" }}
                  >
                    <AiOutlineSearch onClick={handleSearch} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
      <div className="card">
        <CardContent>
          <Table data={data} loading={loading} />
        </CardContent>
      </div>
    </div>
  );
}
