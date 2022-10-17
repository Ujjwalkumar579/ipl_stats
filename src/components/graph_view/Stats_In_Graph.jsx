import React, { useState } from "react";
import "./Stats_In_Graph.css";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Stats_In_Graph = ({
  each_year_matches,
  arr_of_teams,
  each_year_win,
  win_by_year,
}) => {
  console.log(win_by_year);
  const [team_select, setTeam_Select] = useState("");
  const teamSelectHandler = (e) => {
    setTeam_Select(e.target.value);
    console.log(team_select);
  };
  return (
    <div>
      <Container fluid>
        <Row className="mb-4">
          <Col>
            <div className="matches_in_year mt-3 mb-4">
              <div className="matches_in_year_head">
                <h2 className="">matches in year</h2>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  width={500}
                  height={300}
                  data={each_year_matches}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="year"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar
                    dataKey="matches"
                    fill="#8884d8"
                    background={{ fill: "#eee" }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 mb-5">
          <Col lg={12}>
            <div className="win_in_year_by_team_head">
              <h2 className="">Win Each Year</h2>
              <p>(Choose team to see graph)</p>
              <Form.Select
                onChange={teamSelectHandler}
                defaultValue={"Select Team"}
              >
                <option value="Select Team">Select Team</option>
                {arr_of_teams.map((team, i) => {
                  return (
                    <option key={i} value={`${team}`}>
                      {team}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </Col>
          <Col lg={12}>
            <div className="win_in_year_by_team">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart
                  width={500}
                  height={200}
                  data={win_by_year[team_select]}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="win"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stats_In_Graph;
