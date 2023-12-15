"use client";
import { z } from "zod";
import RunningButton from "./running-button";
import { Button, Form } from "react-bootstrap";
import { startSession } from "@/app/actions/sessions";

export default function ProcedureButton({
  statusProcedure,
  participant,
  session,
}: {
  statusProcedure: boolean;
  participant: string;
  session: string;
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5">
          {statusProcedure ? (
            <RunningButton variant="primary" label={"Running..."} />
          ) : (
            <Button className="btn-block" type="submit" variant="primary" size="lg">
              Start
            </Button>
          )}
        </div>
        <div className="col-sm-7">
          <Button variant="danger" size="lg">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
