import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import DeleteBlock from "./DeleteBlock";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay></PriorityDisplay>
        <div className="ml-auto">
          <DeleteBlock></DeleteBlock>
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        This is the ticket description! Please work on it.
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">03/30/2024 05:40PM</p>
          <ProgressDisplay></ProgressDisplay>
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay></StatusDisplay>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
