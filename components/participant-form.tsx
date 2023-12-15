"use client";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import RecordingsTimer from "./recording-timer";
import { useState } from "react";
import { Session } from "@/app/types/session";
import { Trial } from "@/app/types/trial";

type ParticipantFormProps = {
  lastSession: Session;
  lastTrial: Trial;
};
export default function ParticipantForm(props: ParticipantFormProps) {
  const [participant, setParticipant] = useState("LC10");
  const [session, setSession] = useState("Day 1");
  const { lastSession, lastTrial } = props;
  return (
    <>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Participant</InputGroup.Text>
          <Form.Control
            placeholder="Participant (e.g. LC10)"
            aria-label="participant"
            value={participant}
            onChange={(e) => setParticipant(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Session</InputGroup.Text>
          <Form.Control
            placeholder="Session (e.g. LC10 Day 1)"
            aria-label="Session"
            aria-describedby="basic-addon2"
            value={session}
            onChange={(e) => setSession(e.target.value)}
          />
        </InputGroup>
      </Form>
      <RecordingsTimer
        lastSession={lastSession}
        participant={participant}
        session={session}
        lastTrial={lastTrial}
      />
    </>
  );
}
