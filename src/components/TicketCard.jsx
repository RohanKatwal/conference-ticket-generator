export default function TicketCard({ fullName, email, githubUsername, avatar }) {
  return (
    
    <div className="flex-center">
      
        <div className='mt-10 mb-8 gap-10 w-90 md:w-180'>
            <h2 className='text-3xl md:text-5xl font-bold'>Congrtas, <span className="text-gradient">{fullName}</span>! Your ticket is ready.</h2>
            <div className="flex-center">

            <p className=' mt-3 text-neutral-300 w-75 md:w-100'>We've emailed your ticket to <span className="text-orange-700">{email}</span> and will send updates in the run up to the event.</p>
            </div>
        </div>
      <div className="bg-neutral-800 p-4 mt-6 rounded-xl w-full max-w-md flex items-center space-x-4">
        <img
          src={avatar}
          alt={fullName}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="text-left">
          <h2 className="text-lg font-medium">{fullName}</h2>
          <p className="text-sm text-neutral-400">@{githubUsername}</p>
        </div>
        <div className="ml-auto text-sm text-neutral-400">#01609</div>
      </div>
    </div>
  );
}
