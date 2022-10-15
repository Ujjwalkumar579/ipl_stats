import React from "react";
import "./Single_Match.css";
import { FiChevronRight } from "react-icons/fi";
const Single_Match = ({ date, element, team1_logo, team2_logo }) => {
  return (
    <div className="match_single_list">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 match_dates d-flex align-items-end">
            <div className="ipl_dates">
              <span>{`${date.weekDay}, `}</span>
              <span>
                {`${date.d.getDate() <= 9
                  ? `0${date.d.getDate()}th`
                  : `${date.d.getDate()}th`
                  } `}
                {date.monthName}
              </span>
              <p> {date.d.getFullYear()}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ipl_teams">
              <div className="team1">
                <div className="logo_team1 text-center">
                  <img
                    src={team1_logo}
                    className="img-fluid team_logo"
                    alt=""
                  />
                </div>

                <p>{element.team1}</p>
              </div>
              <span>vs</span>
              <div className="team2">
                <div className="logo_team2">
                  <img
                    src={team2_logo}
                    className="img-fluid team_logo"
                    alt=""
                  />
                </div>
                <p>{element.team2}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 detail_btn d-flex align-items-end justify-content-center">
            <div className="ipl_match_detail_button">
              <button>
                More Details <FiChevronRight />
              </button>
            </div>
          </div>

          <div className="col-lg-12 text-center mt-4">
            <div className="winnig_team">
              <span>
                {`${element.winner} beat ${element.winner === element.team1
                  ? element.team2
                  : element.team1
                  } by ${element.win_by_runs === 0
                    ? `${element.win_by_wickets} wickets`
                    : `${element.win_by_runs} runs`
                  }`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single_Match;
