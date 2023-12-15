"use client";
import { useCallback } from "react";
import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button, Form } from "react-bootstrap";
import RunningButton from "./running-button";
import { Session } from "@/app/types/session";
import { createSession, endSession } from "@/app/actions/sessions";

const initialState = {
  message: null,
};

export default function ProcedureButton({
  statusProcedure,
  participant,
  session,
  sessionId,
}: {
  statusProcedure: boolean;
  participant: string;
  session: string;
  sessionId: number;
}) {
  const create = async () => {
    await createSession(session);
  };
  const resetSession = async () => {
    try {
      await endSession(sessionId);
    } catch (error) {
      console.log(error);
    }
  };
  const distabledReset = sessionId ? false : true;

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5">
          {statusProcedure ? (
            <RunningButton variant="primary" label={"Running..."} />
          ) : (
            <Form action={create}>
              <Button
                className="btn-block"
                type="submit"
                variant="primary"
                size="lg"
              >
                Start
              </Button>
            </Form>
          )}
        </div>
        <div className="col-sm-7">
          <Form action={resetSession}>
            <Button type="submit" disabled={distabledReset} variant="danger" size="lg">
              Reset
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
