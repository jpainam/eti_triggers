"use client";
import { set, z } from "zod";
import RunningButton from "./running-button";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Trial } from "@/app/types/trial";

export default function ProcedureButton({
  participant,
  session,
  sessionStartTime,
}: {
  participant: string;
  session: string;
  sessionStartTime: string;
}) {
  const [currentTrial, setCurrentTrial] = useState({});
  const [startProcedureTime, setStartProcedureTime] = useState(
    new Date().toLocaleTimeString()
  );

  const [statusTrial, setStatusTrial] = useState(false);
  const [startTrialTime, setStartTrialTime] = useState("Not started");

  const startTrialFn = (e: any) => {
    if (!sessionStartTime) {
      return;
    }

    const t = new Date().toLocaleTimeString();
    setCurrentTrial({
      Participant: participant,
      Session: session,
      StartTime: sessionStartTime,
      RecordingStartTime: t,
    });
    setStatusTrial(true);
    setStartTrialTime(t);
  };
  const endTrialFn = (e: any) => {
    if (!statusTrial) {
      return;
    }
    const t2 = new Date().toLocaleTimeString();
    setCurrentTrial({ ...currentTrial, RecordingEndTime: t2 });
    setStatusTrial(false);
    setStartTrialTime("Not started");
  };
  return (
    <div className="card">
      <h5 className="card-header">Trial: {startTrialTime}</h5>
      <div
        style={{ marginLeft: "20px", marginRight: "20px" }}
        className="card-body"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              {statusTrial ? (
                <RunningButton variant="success" label="Running..." />
              ) : (
                <Form action={startTrialFn}>
                  <Button type="submit" variant="success" size="lg">
                    Start
                  </Button>
                </Form>
              )}
            </div>
            <div className="col-sm-7">
              <Form action={endTrialFn}>
                <Button type="submit" variant="secondary" size="lg">
                  End
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
