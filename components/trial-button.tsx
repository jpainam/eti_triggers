"use client";
import { z } from "zod";
import RunningButton from "./running-button";
import { Button, Form } from "react-bootstrap";
import { startSession } from "@/app/actions/sessions";

export default function ProcedureButton({
  statusTrial,
  participant,
  session,
}: {
  statusTrial: boolean;
  participant: string;
  session: string;
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5">
          {statusTrial ? (
            <RunningButton variant="success" label="Running Trial..." />
          ) : (
            <Button variant="success" size="lg">
              Start Trial
            </Button>
          )}
        </div>
        <div className="col-sm-7">
          <Button variant="secondary" size="lg">
            End Trial
          </Button>
        </div>
      </div>
    </div>
  );
}
