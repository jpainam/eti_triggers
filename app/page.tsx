import React, { Suspense } from "react";
import ParticipantForm from "@/components/participant-form";

import RecordingsTable from "@/components/recording-table";

export default async function App() {
  return (
    <>
      <div className="row">
        <div className="col-sm-7">
          <ParticipantForm />
          {/**/}
          <Suspense fallback={<div>Loading...</div>}>
            <RecordingsTable />
          </Suspense>
        </div>
      </div>
    </>
  );
}
