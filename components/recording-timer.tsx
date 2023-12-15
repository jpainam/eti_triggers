import { Button } from "react-bootstrap";
import RunningButton from "./running-button";
import Clock from "./clock";
import ProcedureButton from "./procedure-button";
import { getLastSession } from "@/app/actions/sessions";
import TrialButton from "./trial-button";

type RecordingsTimerProps = {
  participant: string;
  session: string;
};

export default async function RecordingsTimer(props: RecordingsTimerProps) {
  const { participant, session } = props;

  const startProcedureTime = new Date().toLocaleTimeString();
  const lastSession = await fetch("http://localhost:3000/api/get-last-session");
  console.log(lastSession);

  const statusProcedure = lastSession && lastSession.status === "running";
  const statusTrial = true;

  return (
    <>
      <div className="card">
        <h5 className="card-header">
          Procedure: start time {startProcedureTime}
        </h5>
        <div
          style={{ marginLeft: "20px", marginRight: "20px" }}
          className="card-body"
        >
          <ProcedureButton
            statusProcedure={statusProcedure}
            participant={participant}
            session={session}
          />
        </div>
        <div className="card-footer">
          Elapsed time: <strong></strong>
        </div>
      </div>

      <div className="card">
        <h5 className="card-header">Trial: start time {startProcedureTime}</h5>
        <div
          style={{ marginLeft: "20px", marginRight: "20px" }}
          className="card-body"
        >
          <TrialButton
            statusTrial={false}
            participant={participant}
            session={session}
          />
        </div>
      </div>
    </>
  );
}
