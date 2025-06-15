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
          <div className="absolute inset-0 bg-black/40 z-0" />

          <div className="relative z-10 mx-auto px-6 py-8">
            <Header/>
            <TicketForm/>
            {/* {currentView === 'form' && <FormView />}
            {currentView === 'success' && <SuccessView />}
            {currentView === 'error' && <ErrorView />} */}
          </div>
        </div>

    </main>
  )
}

export default App