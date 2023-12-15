import { Session } from "@/app/types/session";
import ProcedureButton from "./procedure-button";
import TrialButton from "./trial-button";
import { getLastSession } from "@/app/actions/sessions";

type RecordingsTimerProps = {
  participant: string;
  session: string;
  lastSession: Session;
};

export default async function RecordingsTimer(props: RecordingsTimerProps) {
  const { participant, session, lastSession } = props;

  const statusProcedure = lastSession && lastSession.status === "running";
  const startProcedureTime =
    session && new Date(Date.parse(lastSession.startTime)).toLocaleTimeString();
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
            sessionId={lastSession && lastSession.id}
          />
        </div>
        {/*<div className="card-footer">
        Elapsed time: <strong></strong>
        </div>*/}
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
