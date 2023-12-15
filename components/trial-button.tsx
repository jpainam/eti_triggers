"use client";
import {
  CreateRecordingData,
  createRecordings,
} from "@/app/actions/recordings";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import RunningButton from "./running-button";

export default function ProcedureButton({
  participant,
  session,
  sessionStartTime,
}: {
  participant: string;
  session: string;
  sessionStartTime: string;
}) {
  const [currentTrial, setCurrentTrial] = useState<CreateRecordingData>({
    participant: "",
    session: "",
    startTime: "",
    recordingStartTime: "",
    recordingEndTime: "",
  });

  const [statusTrial, setStatusTrial] = useState(false);
  const [startTrialTime, setStartTrialTime] = useState("Not started");

  const startTrialFn = (e: any) => {
    if (!sessionStartTime) {
      return;
    }

    const t = new Date().toLocaleTimeString();
    setCurrentTrial({
      participant: participant,
      session: session,
      startTime: sessionStartTime,
      recordingStartTime: t,
      recordingEndTime: "",
    });
    setStatusTrial(true);
    setStartTrialTime(t);
  };
  const endTrialFn = async (e: any) => {
    if (!statusTrial) {
      return;
    }
    const t2 = new Date().toLocaleTimeString();
    setCurrentTrial({ ...currentTrial, recordingEndTime: t2 });
    setStatusTrial(false);
    setStartTrialTime("Not started");
    await createRecordings({
      participant: participant,
      session: session,
      startTime: currentTrial.startTime,
      recordingStartTime: currentTrial.recordingStartTime,
      recordingEndTime: currentTrial.recordingStartTime,
    });
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
                <Button
                  onClick={startTrialFn}
                  type="submit"
                  variant="success"
                  size="lg"
                >
                  Start
                </Button>
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
