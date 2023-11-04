import React from 'react'
import TicketForm from '@/app/(components)/TicketForm';

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store"
    })
    if(!res.ok){
      throw new Error("Failed to get ticket. " );
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketPage = async ({params}) => {
    const EDITMODE = params.id === "new" ? false : true
    let updateTicketData = {};
    if (EDITMODE){
      updateTicketData = await getTicketById(params.id);
      console.log(updateTicketData);
    }
    // <div>TicketPage {params.id}</
    return <TicketForm />;
};

export default TicketPage;