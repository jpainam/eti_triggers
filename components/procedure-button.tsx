"use client";
import { useCallback } from "react";
import { Button } from "react-bootstrap";
import RunningButton from "./running-button";

export default function ProcedureButton({
  statusProcedure,
  participant,
  session,
  sessionId,
}: {
  statusProcedure: boolean;
  participant: string;
  session: string;
  sessionId?: string;
}) {
  const startProcedure = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/api/create-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          participant: participant,
          session: session,
        }),
      });
      if (response.ok) {
        console.log("Procedure started");
      } else {
        console.log("Procedure not started");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const stopProcedure = useCallback(async () => {
    console.log("Calling stop procedure")
    try {
      const response = await fetch("http://localhost:3000/api/stop-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: sessionId,
        }),
      });
      if (response.ok) {
        console.log("Procedure stopped");
        
      } else {
        console.log("Procedure not stopped");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const distabledReset = sessionId ? false : true;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5">
          {statusProcedure ? (
            <RunningButton variant="primary" label={"Running..."} />
          ) : (
            <Button
              onClick={startProcedure}
              className="btn-block"
              type="submit"
              variant="primary"
              size="lg"
            >
              Start
            </Button>
          )}
        </div>
        <div className="col-sm-7">
          <Button
            disabled={distabledReset}
            onClick={stopProcedure}
            variant="danger"
            size="lg"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
