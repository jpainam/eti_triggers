"use client";
import { Session } from "@/app/types/session";
import ProcedureButton from "./procedure-button";
import TrialButton from "./trial-button";
import { getLastSession } from "@/app/actions/sessions";
import { Trial } from "@/app/types/trial";
import { useState } from "react";

type RecordingsTimerProps = {
  participant: string;
  session: string;
};

export default function RecordingsTimer(props: RecordingsTimerProps) {
  const { participant, session } = props;
  const [startProcedureTime, setStartProcedureTime] = useState("Not started");
  const [statusProcedure, setStatusProcedure] = useState(false);

  const startProcedureFn = (e: any) => {
    if (!participant || !session) {
      //setAlertMessage("Participant or Session field is required");
      return;
    }
    const t = new Date().toLocaleTimeString();
    setStartProcedureTime(t);
    setStatusProcedure(true);
  };

  const resetFn = (e: any) => {
    setStartProcedureTime("Not Started");
    setStatusProcedure(false);
  };

  return (
    <>
      <div className="card">
        <h5 className="card-header">
          Procedure: {startProcedureTime}
        </h5>
        <div
          style={{ marginLeft: "20px", marginRight: "20px" }}
          className="card-body"
        >
          <ProcedureButton
            startProcedureFn={startProcedureFn}
            resetFn={resetFn}
            statusProcedure={statusProcedure}
          />
        </div>
        {/*<div className="card-footer">
        Elapsed time: <strong></strong>
        </div>*/}
      </div>

      <TrialButton
        participant={participant}
        session={session}
        sessionStartTime={startProcedureTime}
      />
    </>
  );
}
