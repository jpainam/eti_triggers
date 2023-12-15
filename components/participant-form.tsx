"use client";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import RecordingsTimer from "./recording-timer";


export default function ParticipantForm() {
  const [participant, setParticipant] = useState("LC10");
  const [session, setSession] = useState("Day 1");
  return (
    <>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text style={{width: "110px"}} id="basic-addon1">Participant</InputGroup.Text>
          <Form.Control
            placeholder="Participant (e.g. LC10)"
            aria-label="participant"
            value={participant}
            onChange={(e) => setParticipant(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text style={{width: "110px"}} id="basic-addon1">Session</InputGroup.Text>
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
        participant={participant}
        session={session}
      />
    </>
  );
}
