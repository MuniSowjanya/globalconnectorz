import React from "react";
import {
  TextField,
  Button,
  Card,
  Grid,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  Table,
  TableHead,
  TableCell,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Chart, defaults } from "react-chartjs-2";
import { TableRow } from "semantic-ui-react";
import { DashboardStatCard } from "./DashboardStatCard";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function Details(props) {
  const params = useParams();
  let navigate = useNavigate();
  const [data, setData] = React.useState({});
  const [chartData, setChartData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const getdata = () => {
    setLoading(true);
    axios
      .get(`https://api.github.com/users/${params.name}`)
      .then((res) => {
        if (res.data) {
          setLoading(false);
          console.log("---user details", res.data);
          setData(res.data);
          const datachart = {
            labels: [
              "Boston",
              "Worcester",
              "Springfield",
              "Lowell",
              "Cambridge",
              "New Bedford",
            ],
            datasets: [
              {
                data: [617594, 181045, 153060, 106519, 105162, 95072],
                //backgroundColor:'green',
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                  "rgba(255, 159, 64, 0.6)",
                  "rgba(255, 99, 132, 0.6)",
                ],
              },
            ],
          };
          setChartData(datachart);
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

  return (
    <div style={{ padding: "10px" }}>
      <Grid container spacing={2} style={{ marginTop: "50px" }}>
        <Grid item md={4}>
          <img
            src={data.avatar_url}
            style={{ width: "50", height: "50", marginRight: "8px" }}
          />

          <div>
            <Typography>
              <b>{data.name}</b>
            </Typography>
            {data.location && (
              <Typography>
                <b>Location:</b>
                {data.location}
              </Typography>
            )}
            <div>
              <b>Followers</b>
              <AiOutlineUserAdd />
              :&nbsp;{data.followers}
            </div>
          </div>
        </Grid>
        <Grid item md={8}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <DashboardStatCard
                  btnIcon={<AiOutlineEye />}
                  btnLabel=""
                  label="Public Repos"
                  count={data.public_repos}
                />
              </Grid>
              <Grid item md={4}>
                <DashboardStatCard
                  btnIcon={<AiOutlineEye />}
                  btnLabel=""
                  label="Following"
                  count={data.following}
                />
              </Grid>
              <Grid item md={4}>
                <DashboardStatCard
                  btnIcon={<AiOutlineEye />}
                  btnLabel=""
                  label="Followers"
                  count={data.followers}
                />
              </Grid>
              <Grid item md={4}>
                <DashboardStatCard
                  btnIcon={<AiOutlineEye />}
                  btnLabel=""
                  label="Public Gists"
                  count={data.public_gists}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography>
                  <b>Twitter:{data.twitter_username}</b>
                </Typography>
                <Typography>
                  <b>Blog:{data.blog}</b>
                </Typography>
                <Typography>
                  <b>Company:{data.company}</b>
                </Typography>
                <Typography>
                  <b>Followers URL:{data.followers_url}</b>
                </Typography>
                <Typography>
                  <b>Repo URL:{data.repos_url}</b>
                </Typography>
                <Typography>
                  <b>Subscription URL:{data.subscriptions_url}</b>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
      <div style={{ float: "right" }}>
        <Button variant="outlined" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
      {/* <Chart data={chartData} /> */}
    </div>
  );
}
