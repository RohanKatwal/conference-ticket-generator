import Header from "./components/Header"
import TicketForm from "./components/TicketForm"

const App = () => {
  return (
    <main>
      <div
        className="min-h-screen text-neutral-0 bg-no-repeat bg-cover bg-center relative overflow-hidden
          bg-[url('/images/background-mobile.png')]
          sm:bg-[url('/images/background-tablet.png')]
          lg:bg-[url('/images/background-desktop.png')]
          pattern-overlay"
      >
        {/* Optional overlay */}
        <div className="absolute inset-0/40 z-0" />

        <img 
        src="/images/pattern-squiggly-line-top.svg" alt="" 
        className="absolute top-0 right-0 w-48 sm:w-fit"
        />

        {/* Squiggly line at bottom-left */}
        <img
          src="/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
          alt=""
          className="absolute bottom-0 left-0 w-70 lg:hidden z-0"
        />
        <img
          src="/images/pattern-squiggly-line-bottom-desktop.svg"
          alt=""
          className="absolute bottom-0 left-0 w-fit hidden lg:block z-0"
        />

        <div className="relative z-10 mx-auto px-6 py-8">
          <Header/>
          <TicketForm/>
        </div>
      </div>
    </main>
  )
}

export default App
