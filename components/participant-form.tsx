'use client'
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

export default function ParticipantForm() {
    return (
        <Form>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Participant</InputGroup.Text>
            <Form.Control
              placeholder="Participant (e.g. LC10)"
              aria-label="participant"
              //value={participant}
              //onChange={(e) => setParticipant(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Session</InputGroup.Text>
            <Form.Control
              placeholder="Session (e.g. LC10 Day 1)"
              aria-label="Session"
              aria-describedby="basic-addon2"
              //value={session}
              //onChange={(e) => setSession(e.target.value)}
            />
          </InputGroup>
        </Form>
    )
}