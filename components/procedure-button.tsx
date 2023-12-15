"use client";
import { Button } from "react-bootstrap";
import RunningButton from "./running-button";

export default function ProcedureButton(props: {
  statusProcedure: any;
  startProcedureFn: any;
  resetFn: any;
}) {
  const { statusProcedure, startProcedureFn, resetFn } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5">
          {statusProcedure ? (
            <RunningButton variant="primary" label={"Running..."} />
          ) : (
            <Button
              className="btn-block"
              type="submit"
              variant="primary"
              size="lg"
              onClick={startProcedureFn}
            >
              Start
            </Button>
          )}
        </div>
        <div className="col-sm-7">
          <Button onClick={resetFn} variant="danger" size="lg">
            End
          </Button>
        </div>
      </div>
    </div>
  );
}
