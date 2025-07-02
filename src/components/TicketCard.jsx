export default function TicketCard({ fullName, email, githubUsername, avatar }) {
  return (
    
    <div className="flex-center">
      
        <div className='mt-10 mb-8 gap-10 w-90 md:w-180'>
            <h2 className='text-3xl md:text-5xl font-bold'>Congrtas, <span className="text-gradient">{fullName}</span>! Your ticket is ready.</h2>
            <div className="flex-center">

            <p className=' mt-3 text-neutral-300 w-75 md:w-100'>We've emailed your ticket to <span className="text-orange-700">{email}</span> and will send updates in the run up to the event.</p>
            </div>
        </div>
      <div className="ticket
          mt-6 md:pr-4 rounded-xl w-full max-w-md flex items-center justify-between">
        <div className="p-6 flex flex-col items-start gap-8 md:gap-10">
          <div className="flex flex-col gap-2 text-right mt-2 md:mt-0">
            <img src="./images/logo-full.svg" alt="" className="w-40 md:w-50" />
            <p className="text-neutral-400 text-sm pl-4 md:pl-9">Jan 31, 2025 / Austin, TX</p>
          </div>
          <div className="flex gap-2">
          <img
            src={avatar}
            alt={fullName}
            className="w-12 h-12 md:w-14 md:h-14 rounded-xl object-cover"
          />
          <div className="text-left align-bottom">
            <h2 className="text-lg font-medium">{fullName}</h2>
            <div className="flex justify gap-1 items-end">
            <img src="./images/icon-github.svg" alt="" />
            <p className="text-sm text-neutral-400">@{githubUsername}</p>
            </div>
          </div>
          </div>
        </div>
        <div className="text-xl text-neutral-400 transform rotate-90">#01609</div>
      </div>
    </div>
  );
}
