'use client'
import Table from "react-bootstrap/Table";
import { useRef } from "react";
import DeleteForm from "./delete-form";
import DownloadLink from "./download-link";
import { CreateRecordingData } from "@/app/actions/recordings";
import { useEffect } from "react";

export default  function RecordingsTable(props: {
  recordings: CreateRecordingData[];
}) {
  const { recordings } = props;
  const headers = [
    { label: "Participant", key: "participant" },
    { label: "Session", key: "session" },
    { label: "StartTime", key: "starttime" },
    { label: "RecordingStartTime", key: "recordingstarttime" },
    { label: "RecordingEndTime", key: "recordingendtime" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [recordings]);
  return (
    <>
      <DownloadLink data={recordings} headers={headers} />
      <div className="card" style={{ marginTop: 10 }}>
        <h5 className="card-header">Recordings</h5>
        <div className="card-body">
          <div style={{ height: "750px", overflow: "auto" }} ref={containerRef}>
            <Table striped bordered responsive hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Participant</th>
                  <th>Session</th>
                  <th>StartTime</th>
                  <th>RecordingStartTime</th>
                  <th>RecordingEndTime</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {recordings &&
                  recordings.map((data: CreateRecordingData) => {
                    return data.recordingEndTime !== "" ? (
                      <tr key={data.id} className="last-row">
                        <td>{data.id}</td>
                        <td>{data.participant}</td>
                        <td>{data.session}</td>
                        <td>{data.starttime}</td>
                        <td>{data.recordingstarttime}</td>
                        <td>{data.recordingendtime}</td>
                        <td>
                          <DeleteForm id={data.id} />
                        </td>
                      </tr>
                    ) : (
                      <></>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="card-footer">
          {/*Current time: <strong>{new Date().toLocaleTimeString()}</strong>*/}
        </div>
      </div>
    </>
  );
}
