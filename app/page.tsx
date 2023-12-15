import React, { Suspense } from "react";
import ParticipantForm from "@/components/participant-form";

import RecordingsTable from "@/components/recording-table";
import { getLastSession } from "./actions/sessions";
import { getLastTrial } from "./actions/trials";
//import { getRecordings } from '@/app/actions/recordings';

export default async function App() {
  /*try{
  await fetch("http://localhost:3000/api/create-tables");
  }catch(error){
    console.log(error)
  }*/

  //const recordings = await getRecordings()

  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <ParticipantForm />
        </div>
        <div className="col-sm-8">
          <Suspense fallback={<div>Loading...</div>}>
            <RecordingsTable />
          </Suspense>
        </div>
      </div>
    </>
  );
}
