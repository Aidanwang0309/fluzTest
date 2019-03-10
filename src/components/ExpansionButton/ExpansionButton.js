import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./ExpansionButton.css";
import dollarLogo from "../../assets/dollar-sign.svg";

export default function ExpansionButton() {
  return (
    <ExpansionPanel className="expansion-button">
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <img src={dollarLogo} className="dollar-logo" alt="logo" />
        <p className="expansion-panel-header">Where's the money coming from?</p>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="expansion-panel-text">
        <p>
          Retailers pay Fluz to bring them customers, i.e. our network of
          shoppers. We divide up that sum and distribute it across the network.
        </p>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
