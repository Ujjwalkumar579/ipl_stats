/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { Col, Container, Row, Tab, TabContent, Tabs } from "react-bootstrap";
import data from "../../data/matches.json";
import Ipl_Stats from "../ipl_stats/Ipl_Stats";
import "./Tab_Switch.css";
import IPL_LOGO from "../../imgs/ipl_logo.png";
import Stats_In_Graph from "../graph_view/Stats_In_Graph";
const Tab_Switch = () => {
  const [key, setKey] = useState("home");
  return (
    <div>
      <div className="table_wrapper" id="top">
        <Container fluid>
          <Row>
            <Col lg="12" className="text-center mt-3 mb-3">
              <img src={IPL_LOGO} className="img-fluid ipl_logo" alt="" />
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
                      <Ipl_Stats data={data} />
                    </TabContent>
                  </Tab>
                  <Tab eventKey="profile" title="Graph View">
                    <Stats_In_Graph />
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Tab_Switch;
