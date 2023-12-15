import React, { Suspense } from "react";
import ParticipantForm from "@/components/participant-form";

import RecordingsTable from "@/components/recording-table";
import { getLastSession } from "./actions/sessions";


export default async function App() {
  /*try{
  await fetch("http://localhost:3000/api/create-tables");
  }catch(error){
    console.log(error)
  }*/
  
  const lastSession = await getLastSession();

  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <Suspense fallback={<div>Loading...</div>}>
          <ParticipantForm lastSession={lastSession} />
          </Suspense>
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
