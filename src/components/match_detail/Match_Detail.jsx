import React from "react";
import "./Match_Detail.css";
import { Col, Container, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import bat from "../../imgs/cricket-bat.png";
import ball from "../../imgs/cricket-ball.png";
import man_of_match from "../../imgs/player_of_match.png";
import vs from "../../imgs/vs.png";
const Match_Detail = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {`#${props.element.id}`} Match Detail
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col lg={12}>
              <div className="date_of_match text-center">
                <span>{`${props.date.weekDay}, `}</span>
                <span>
                  {`${props.date.d.getDate() <= 9
                      ? `0${props.date.d.getDate()}th`
                      : `${props.date.d.getDate()}th`
                    } `}
                  {props.date.monthName}
                </span>
                <span> {props.date.d.getFullYear()}</span>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center">
            <Col lg={12} className="team_details">
              <div className="team1_detail">
                <img src={props.team1_logo} alt="" />
                <p>{props.element.team1}</p>
              </div>
              <div>
                <img src={vs} alt="" className="img-fluid" />
              </div>
              <div className="team2_detail">
                <img src={props.team2_logo} alt="" />
                <p>{props.element.team2}</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className="score_detail">
                <p>
                  {`${props.element.winner} won by ${props.element.win_by_runs === 0
                      ? `${props.element.win_by_wickets} wickets`
                      : `${props.element.win_by_runs} runs`
                    }`}
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className="stripe toss_winner">
                <div className="name_img">
                  <div>
                    <span>Toss Winner</span>
                    <p>{props.element.toss_winner}</p>
                  </div>
                  <img
                    src={
                      props.element.toss_winner === props.element.team1
                        ? props.team1_logo
                        : props.team2_logo
                    }
                    height={80}
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="stripe toss_decision">
                <div className="name_img">
                  <div>
                    <span>Toss Decision</span>
                    <p>
                      {`${props.element.toss_winner} choose to ${props.element.toss_decision} first`}
                    </p>
                  </div>
                  <img
                    src={props.element.toss_decision === "bat" ? bat : ball}
                    height={80}
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="stripe man_of_the_match">
                <div className="name_img">
                  <div>
                    <span>Player of the Match</span>
                    <p>{`${props.element.player_of_match}`}</p>
                  </div>
                  <img src={man_of_match} height={80} alt="" />
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="match_other_details">
                <ul>
                  <li>
                    <span>City :</span> <span> {props.element.city}</span>
                  </li>
                  <li>
                    <span>Stadium :</span> <span> {props.element.venue}</span>
                  </li>
                  <li>
                    <span>Umpire 1 :</span>{" "}
                    <span> {props.element.umpire1}</span>
                  </li>
                  <li>
                    <span>Umpire 2 :</span>{" "}
                    <span> {props.element.umpire2}</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default Match_Detail;
