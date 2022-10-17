/* eslint-disable no-loop-func */
/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { Col, Container, Row, Tab, TabContent, Tabs } from "react-bootstrap";
import data from "../../data/matches.json";
import Ipl_Stats from "../ipl_stats/Ipl_Stats";
import "./Tab_Switch.css";
import Stats_In_Graph from "../graph_view/Stats_In_Graph";
import Header from "../header/Header";

const Tab_Switch = ({ matchDetail, setMatchDerail }) => {
  const [key, setKey] = useState("home");
  let arr_of_year = []; // retrive years from data array to map in select tag sort by year &&
  let arr_of_teams = []; // retrive teams name from data to map in select tag for sort by team  &&
  let arr_of_venue = []; // retrive city name from data to map in select tag for sort by city (venue)
  data.forEach((ele) => {
    if (!arr_of_year.includes(ele.season)) {
      arr_of_year.push(ele.season);
    }
    if (!arr_of_teams.includes(ele.team1)) {
      arr_of_teams.push(ele.team1);
    }
    if (!arr_of_venue.includes(ele.city)) {
      arr_of_venue.push(ele.city);
    }
  });
  arr_of_year.sort((a, b) => {
    return a - b;
  });

  let in_2008 = 1;
  let in_2009 = 1;
  let in_2010 = 1;
  let in_2011 = 1;
  let in_2012 = 1;
  let in_2013 = 1;
  let in_2014 = 1;
  let in_2015 = 1;
  let in_2016 = 1;
  let in_2017 = 1;
  let matches_count = {};
  data.forEach((ele) => {
    if (ele.season === 2008) {
      matches_count = {
        ...matches_count,
        2008: in_2008++,
      };
    } else if (ele.season === 2009) {
      matches_count = {
        ...matches_count,
        2009: in_2009++,
      };
    } else if (ele.season === 2010) {
      matches_count = {
        ...matches_count,
        2010: in_2010++,
      };
    } else if (ele.season === 2011) {
      matches_count = {
        ...matches_count,
        2011: in_2011++,
      };
    } else if (ele.season === 2012) {
      matches_count = {
        ...matches_count,
        2012: in_2012++,
      };
    } else if (ele.season === 2013) {
      matches_count = {
        ...matches_count,
        2013: in_2013++,
      };
    } else if (ele.season === 2014) {
      matches_count = {
        ...matches_count,
        2014: in_2014++,
      };
    } else if (ele.season === 2015) {
      matches_count = {
        ...matches_count,
        2015: in_2015++,
      };
    } else if (ele.season === 2016) {
      matches_count = {
        ...matches_count,
        2016: in_2016++,
      };
    } else if (ele.season === 2017) {
      matches_count = {
        ...matches_count,
        2017: in_2017++,
      };
    }
  });

  let each_year_matches = [];
  for (const ele in matches_count) {
    each_year_matches = [
      ...each_year_matches,
      {
        year: ele,
        matches: matches_count[ele],
      },
    ];
  }

  let sh_win = 0;
  let mi_win = 0;
  let gl_win = 0;
  let rps_win = 0;
  let rcb_win = 0;
  let kkr_win = 0;
  let dd_win = 0;
  let kxp_win = 0;
  let csk_win = 0;
  let rr_win = 0;
  let dc_win = 0;
  let ktk_win = 0;
  let pw_win = 0;

  let winCount = {};
  let team_win_arr_2017 = [];
  let team_win_arr_2015 = [];

  // MI: [
  //   { year: 2017, win: 12 }
  //   { year: 2018, win: 20 }
  // ]

  let team_arr = [];

  for (let i = 0; i <= 11; i++) {
    team_arr[i] = {
      year: 2007 + i,
      win: "10",
    };
  }

  console.log(team_arr);

  // let SH = {};
  let obj = {};
  // for (let i = 2011; i < 2013; i++) {

  let SH = [];
  let MI = [];
  let GL = [];
  let RPS = [];
  let RCB = [];
  let KKR = [];
  let DD = [];
  let KXP = [];
  let CSK = [];
  let RR = [];
  let DC = [];
  let KTK = [];
  let PW = [];
  for (let i = 2008; i < 2018; i++) {
    sh_win = 0;
    mi_win = 0;
    gl_win = 0;
    rps_win = 0;
    rcb_win = 0;
    kkr_win = 0;
    dd_win = 0;
    kxp_win = 0;
    csk_win = 0;
    rr_win = 0;
    dc_win = 0;
    ktk_win = 0;
    pw_win = 0;
    data.forEach((ele) => {
      if (
        (ele.team1 === "Sunrisers Hyderabad" ||
          ele.team2 === "Sunrisers Hyderabad") &&
        ele.season === i &&
        ele.winner === "Sunrisers Hyderabad"
      ) {
        sh_win++;
      } else if (
        (ele.team1 === "Mumbai Indians" || ele.team2 === "Mumbai Indians") &&
        ele.season === i &&
        ele.winner === "Mumbai Indians"
      ) {
        mi_win++;
      } else if (
        (ele.team1 === "Gujarat Lions" || ele.team2 === "Gujarat Lions") &&
        ele.season === i &&
        ele.winner === "Gujarat Lions"
      ) {
        gl_win++;
      } else if (
        (ele.team1 === "Rising Pune Supergiant" ||
          ele.team2 === "Rising Pune Supergiant") &&
        ele.season === i &&
        ele.winner === "Rising Pune Supergiant"
      ) {
        rps_win++;
      } else if (
        (ele.team1 === "Royal Challengers Bangalore" ||
          ele.team2 === "Royal Challengers Bangalore") &&
        ele.season === i &&
        ele.winner === "Royal Challengers Bangalore"
      ) {
        rcb_win++;
      } else if (
        (ele.team1 === "Kolkata Knight Riders" ||
          ele.team2 === "Kolkata Knight Riders") &&
        ele.season === i &&
        ele.winner === "Kolkata Knight Riders"
      ) {
        kkr_win++;
      } else if (
        (ele.team1 === "Delhi Daredevils" ||
          ele.team2 === "Delhi Daredevils") &&
        ele.season === i &&
        ele.winner === "Delhi Daredevils"
      ) {
        dd_win++;
      } else if (
        (ele.team1 === "Kings XI Punjab" || ele.team2 === "Kings XI Punjab") &&
        ele.season === i &&
        ele.winner === "Kings XI Punjab"
      ) {
        kxp_win++;
      } else if (
        (ele.team1 === "Chennai Super Kings" ||
          ele.team2 === "Chennai Super Kings") &&
        ele.season === i &&
        ele.winner === "Chennai Super Kings"
      ) {
        csk_win++;
      } else if (
        (ele.team1 === "Rajasthan Royals" ||
          ele.team2 === "Rajasthan Royals") &&
        ele.season === i &&
        ele.winner === "Rajasthan Royals"
      ) {
        rr_win++;
      } else if (
        (ele.team1 === "Deccan Chargers" || ele.team2 === "Deccan Chargers") &&
        ele.season === i &&
        ele.winner === "Deccan Chargers"
      ) {
        dc_win++;
      } else if (
        (ele.team1 === "Kochi Tuskers Kerala" ||
          ele.team2 === "Kochi Tuskers Kerala") &&
        ele.season === i &&
        ele.winner === "Kochi Tuskers Kerala"
      ) {
        ktk_win++;
      } else if (
        (ele.team1 === "Pune Warriors" || ele.team2 === "Pune Warriors") &&
        ele.season === i &&
        ele.winner === "Pune Warriors"
      ) {
        pw_win++;
      }
    });

    SH.push({
      year: i,
      win: sh_win,
    });

    MI.push({
      year: i,
      win: mi_win,
    });

    GL.push({
      year: i,
      win: gl_win,
    });

    RPS.push({
      year: i,
      win: rps_win,
    });

    RCB.push({
      year: i,
      win: rcb_win,
    });

    KKR.push({
      year: i,
      win: kkr_win,
    });

    DD.push({
      year: i,
      win: dd_win,
    });

    KXP.push({
      year: i,
      win: kxp_win,
    });

    CSK.push({
      year: i,
      win: csk_win,
    });

    RR.push({
      year: i,
      win: rr_win,
    });

    DC.push({
      year: i,
      win: dc_win,
    });

    KTK.push({
      year: i,
      win: ktk_win,
    });

    PW.push({
      year: i,
      win: pw_win,
    });
  }

  let win_by_year = {
    "Mumbai Indians": MI,
    "Sunrisers Hyderabad": SH,
    "Gujarat Lions": GL,
    "Rising Pune Supergiant": RPS,
    "Royal Challengers Bangalore": RCB,
    "Kolkata Knight Riders": KKR,
    "Delhi Daredevils": DD,
    "Kings XI Punjab": KXP,
    "Chennai Super Kings": CSK,
    "Rajasthan Royals": RR,
    "Deccan Chargers": DC,
    "Kochi Tuskers Kerala": KTK,
    "Pune Warriors": PW,
  };
  // console.log(win_by_year);
  let each_year_win = [];
  for (const ele in winCount) {
    each_year_win = [
      ...each_year_win,
      {
        team: ele,
        win: winCount[ele],
      },
    ];
  }

  return (
    <div>
      <div className="table_wrapper" id="top">
        <Container fluid>
          <Row>
            <Col lg="12" className="text-center">
              <Header />
            </Col>
            <Col lg="12" className="">
              <div className="tab_wrapper">
                <Tabs
                  id="controlled-tab-example"
                  variant="pills"
                  justify
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Home">
                    <TabContent>
                      <Ipl_Stats
                        data={data}
                        arr_of_year={arr_of_year}
                        arr_of_teams={arr_of_teams}
                        arr_of_venue={arr_of_venue}
                        matchDetail={matchDetail}
                        setMatchDerail={setMatchDerail}
                      />
                    </TabContent>
                  </Tab>
                  <Tab eventKey="profile" title="Graph View">
                    <Stats_In_Graph
                      each_year_matches={each_year_matches}
                      arr_of_teams={arr_of_teams}
                      win_by_year={win_by_year}
                    />
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
        {/*<Routes>
           <Route path="/match_detail" element={<Match_Detail />} /> 
        </Routes>*/}
      </div>
    </div>
  );
};

export default Tab_Switch;
