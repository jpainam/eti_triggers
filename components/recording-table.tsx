import Table from "react-bootstrap/Table";
import DeleteForm from "./delete-form";
import DownloadLink from "./download-link";
import { CreateRecordingData } from "@/app/actions/recordings";

export default async function RecordingsTable(props: {
  recordings: CreateRecordingData[];
}) {
  const { recordings } = props;
  const headers = [
    { label: "Participant", key: "participant" },
    { label: "Session", key: "session" },
    { label: "StartTime", key: "startTime" },
    { label: "RecordingStartTime", key: "recordingstarttime" },
    { label: "RecordingEndTime", key: "Recordingendtime" },
  ];
  return (
    <>
      <DownloadLink data={recordings} headers={headers} />
      <div className="card" style={{ marginTop: 10 }}>
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
              {recordings &&
                recordings.map((data: CreateRecordingData) => {
                  return data.recordingEndTime !== "" ? (
                    <tr key={data.id}>
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
        <div className="card-footer">
          {/*Current time: <strong>{new Date().toLocaleTimeString()}</strong>*/}
        </div>
      </div>
    </>
  );
}
