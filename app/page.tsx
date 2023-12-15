import React, { Suspense } from "react";
import ParticipantForm from "@/components/participant-form";

import RecordingsTable from "@/components/recording-table";


export default async function App() {
  try{
  await fetch("http://localhost:3000/api/create-tables");
  }catch(error){
    console.log(error)
  }
  return (
    <>
      <div className="row">
        <div className="col-sm-5">
          <Suspense fallback={<div>Loading...</div>}>
          <ParticipantForm />
          </Suspense>
        </div>
        <div className="col-sm-7">
					<Suspense fallback={<div>Loading...</div>}>
            <RecordingsTable />
          </Suspense>
				</div>
      </div>
    </>
  );
}
