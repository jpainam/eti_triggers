import React from "react";
import Table from "react-bootstrap/Table";
import DeleteForm from "./delete-form";
import { getRecordings } from "@/app/actions/recordings";
import { CSVLink } from "react-csv";
import Download from "react-csv/components/Download";
import DownloadLink from "./download-link";
import { getLastSession, startSession } from "@/app/actions/sessions";

export default async function RecordingsTable() {
  const data = await getRecordings();
  const lastSession = await getLastSession()
  console.log("lastSession")
  await startSession("Day 1");
  console.log(lastSession)
  console.log(data);
  const headers = [
    { label: "Participant", key: "Participant" },
    { label: "Session", key: "Session" },
    { label: "StartTime", key: "StartTime" },
    { label: "RecordingStartTime", key: "RecordingStartTime" },
    { label: "RecordingEndTime", key: "RecordingEndTime" },
  ];
  return (
    <>
      <DownloadLink data={data} headers={headers} />
      <div className="card" style={{marginTop: 10}}>
        <h5 className="card-header">Recordings</h5>
        <div className="card-body">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Participant</th>
                <th>Session</th>
                <th>StartTime</th>
                <th>RecordingStartTime</th>
                <th>RecordingEndTime</th>
              </tr>
            </thead>
            <tbody>
              {data.map((col: any) => {
                return col["RecordingEndTime"] !== "" ? (
                  <tr key={col["Id"]}>
                    <td>{col["Participant"]}</td>
                    <td>{col["Session"]}</td>
                    <td>{col["StartTime"]}</td>
                    <td>{col["RecordingStartTime"]}</td>
                    <td>{col["RecordingEndTime"]}</td>
                    <td>
                      <DeleteForm id={col["id"]} />
                    </td>
                  </tr>
                ) : (
                  <></>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="card-footer">
          Current time: <strong>{new Date().toLocaleTimeString()}</strong>
        </div>
      </div>
    </>
  );
}
