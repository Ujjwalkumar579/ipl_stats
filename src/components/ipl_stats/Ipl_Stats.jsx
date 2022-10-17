/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import "./Ipl_Stats.css";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Single_Match from "../single_match/Single_Match";
import csk from "../../imgs/Chennai-Super-Kings-Logo-PNG.png";
import rcb from "../../imgs/Royal-Challengers-Bangalore-Logo-PNG.png";
import mi from "../../imgs/Mumbai-Indians-Logo-PNG.png";
import dc from "../../imgs/Deccan-Chargers-Logo-PNG.png";
import dd from "../../imgs/Delhi-Daredevils-Logo-PNG.png";
import kxp from "../../imgs/Kings-XI-Punjab-Logo-PNG.png";
import rps from "../../imgs/Rising-Pune-Supergiants-Logo-PNG.png";
import kkr from "../../imgs/Kolkata-Knight-Riders-Logo-PNG.png";
import rr from "../../imgs/Rajasthan-Royals-Logo-PNG.png";
import gl from "../../imgs/Gujarat-Lions-Logo-PNG.png";
import sh from "../../imgs/sunrisers-hyderabad.png";
import ktk from "../../imgs/kochi-tuskers-kerala-logo.png";
import pwi from "../../imgs/pune-warriors-india-logo.png";
import { MdExpandMore } from "react-icons/md";

const Ipl_Stats = ({ data, arr_of_year, arr_of_teams, arr_of_venue, matchDetail, setMatchDerail }) => {
  const [visible, setVisible] = useState(10);
  const [filterData, setFilterData] = useState({
    by_year: "",
    by_team: "",
    by_city: "",
  });
  const loadMore = () => {
    setVisible(visible + 5);
  };



  const operationsOnElement = (ele) => {
    // getting the dates in right formate
    let dateStr = ele.date.split("/");
    let day = dateStr[0];
    let month = dateStr[1];
    let year = dateStr[2];
    let d = new Date(`${month}/${day}/${year}`);

    // to get the weeks in string
    let weekDay = "";
    switch (d.getDay()) {
      case 0:
        weekDay = "Sunday";
        break;
      case 1:
        weekDay = "Monday";
        break;
      case 2:
        weekDay = "Tuesday";
        break;
      case 3:
        weekDay = "Wednesday";
        break;
      case 4:
        weekDay = "Thrusday";
        break;
      case 5:
        weekDay = "Friday";
        break;
      case 6:
        weekDay = "Saturday";
        break;
      default:
        break;
    }

    // to get the months in string
    let monthName = "";
    switch (d.getMonth()) {
      case 0:
        monthName = "January";
        break;
      case 1:
        monthName = "February";
        break;
      case 2:
        monthName = "March";
        break;
      case 3:
        monthName = "April";
        break;
      case 4:
        monthName = "May";
        break;
      case 5:
        monthName = "June";
        break;
      case 6:
        monthName = "July";
        break;
      case 7:
        monthName = "August";
        break;
      case 8:
        monthName = "September";
        break;
      case 9:
        monthName = "Octuber";
        break;
      case 10:
        monthName = "November";
        break;
      case 11:
        monthName = "December";
        break;

      default:
        break;
    }

    // team1 logo
    let team1_logo = "";
    switch (ele.team1) {
      case "Mumbai Indians":
        team1_logo = mi;
        break;

      case "Royal Challengers Bangalore":
        team1_logo = rcb;
        break;

      case "Chennai Super Kings":
        team1_logo = csk;
        break;

      case "Gujarat Lions":
        team1_logo = gl;
        break;

      case "Rising Pune Supergiant":
        team1_logo = rps;
        break;

      case "Kolkata Knight Riders":
        team1_logo = kkr;
        break;

      case "Deccan Chargers":
        team1_logo = dc;
        break;

      case "Kings XI Punjab":
        team1_logo = kxp;
        break;

      case "Delhi Daredevils":
        team1_logo = dd;
        break;

      case "Rajasthan Royals":
        team1_logo = rr;
        break;

      case "Sunrisers Hyderabad":
        team1_logo = sh;
        break;

      case "Kochi Tuskers Kerala":
        team1_logo = ktk;
        break;

      case "Pune Warriors":
        team1_logo = pwi;
        break;

      default:
        break;
    }

    // team2 logo
    let team2_logo = "";
    switch (ele.team2) {
      case "Mumbai Indians":
        team2_logo = mi;
        break;

      case "Royal Challengers Bangalore":
        team2_logo = rcb;
        break;

      case "Chennai Super Kings":
        team2_logo = csk;
        break;

      case "Gujarat Lions":
        team2_logo = gl;
        break;

      case "Rising Pune Supergiant":
        team2_logo = rps;
        break;

      case "Kolkata Knight Riders":
        team2_logo = kkr;
        break;

      case "Deccan Chargers":
        team2_logo = dc;
        break;

      case "Kings XI Punjab":
        team2_logo = kxp;
        break;

      case "Delhi Daredevils":
        team2_logo = dd;
        break;

      case "Rajasthan Royals":
        team2_logo = rr;
        break;

      case "Sunrisers Hyderabad":
        team2_logo = sh;
        break;

      case "Kochi Tuskers Kerala":
        team2_logo = ktk;
        break;

      case "Pune Warriors":
        team2_logo = pwi;
        break;

      default:
        break;
    }

    return {
      d,
      weekDay,
      monthName,
      team1_logo,
      team2_logo,
    };
  };

  const year_sort_handler = (e) => {
    setFilterData({ ...filterData, by_year: e.target.value });
  };

  const team_sort_handler = (e) => {
    setFilterData({ ...filterData, by_team: e.target.value });
    // console.log(filterData);
  };

  const venue_sort_handler = (e) => {
    setFilterData({ ...filterData, by_city: e.target.value });
    console.log(filterData);
  };
  return (
    <div>
      <div className="stats_wrapper">
        <Container fluid>
          <Row>
            <Col lg="3" className="">
              <div className="side_bar_filter">
                <p>Filter here</p>
                <div className="filter_by_team">
                  <Form.Select onChange={team_sort_handler} defaultValue={'Select Team'}>
                    <option value="Select Team" >
                      Select Team
                    </option>
                    {arr_of_teams.map((team, i) => {
                      return (
                        <option key={i} value={`${team}`}>
                          {team}
                        </option>
                      );
                    })}
                  </Form.Select>
                </div>
                <div className="filter_by_year">
                  <Form.Select onChange={year_sort_handler} defaultValue={'Select Year'}>
                    <option value="Select Year" >
                      Select Year
                    </option>
                    {arr_of_year.map((year, i) => {
                      return (
                        <option key={i} value={`${year}`}>
                          {year}
                        </option>
                      );
                    })}
                  </Form.Select>
                </div>
                <div className="filter_by_venue">
                  <Form.Select onChange={venue_sort_handler} defaultValue={'Select Venue'}>
                    <option value="Select Venue"  >
                      Select Venue
                    </option>
                    {arr_of_venue.map((city, i) => {
                      return (
                        <option key={i} value={`${city}`}>
                          {city}
                        </option>
                      );
                    })}
                  </Form.Select>
                </div>
              </div>
            </Col>
            <Col lg="9" className="">
              <div className="ipl_list">
                {data
                  .filter((ele) => {
                    if (filterData.by_city === "") {
                      return ele;
                    } else if (filterData.by_city.includes(ele.city)) {
                      return ele;
                    }
                  })
                  .filter((ele) => {
                    if (filterData.by_year === "") {
                      return ele;
                    } else if (filterData.by_year.includes(ele.season)) {
                      return ele;
                    }
                  })
                  .filter((ele) => {
                    if (filterData.by_team === "") {
                      return ele;
                    } else if (
                      filterData.by_team.includes(ele.team1) ||
                      filterData.by_team.includes(ele.team2)
                    ) {
                      return ele;
                    }
                  })
                  .slice(0, visible)
                  .map((ele, i) => {
                    let result = operationsOnElement(ele);
                    return (
                      <Single_Match
                        key={i}
                        date={result} 
                        element={ele}
                        team1_logo={result.team1_logo}
                        team2_logo={result.team2_logo}
                        matchDetail={matchDetail}
                        setMatchDerail={setMatchDerail}
                      />
                    );
                  })}
              </div>

              {visible < data.length && (
                <div className="load_more text-center mt-4 mb-5 pb-4">
                  <button className="btn" onClick={loadMore}>
                    Load More <MdExpandMore />
                  </button>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Ipl_Stats;
