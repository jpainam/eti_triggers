"use client";

import { CSVLink } from "react-csv";

export default function DownloadLink(props: { data: any; headers: any }) {
  const { data, headers } = props;

  {
    /*<CSVLink
        filename={"eti_recordings.csv"}
        className="btn btn-primary"
        separator={","}
        data={data}
        headers={headers}
      >
        Download me
  </CSVLink> */
  }

  return (
    <div>
      <CSVLink
        filename={"eti_recordings.csv"}
        className="btn btn-primary"
        separator={","}
        data={data}
        headers={headers}
      >
        Export (.csv) the recordings
      </CSVLink>
    </div>
  );
}
