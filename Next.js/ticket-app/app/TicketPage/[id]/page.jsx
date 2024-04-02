import TicketForm from "@/app/(components)/TicketForm";

const TicketPage = ({ params }) => {
  return (
    <div>
      Ticket Page {params.id}
      <TicketForm></TicketForm>
    </div>
  );
};

export default TicketPage;
