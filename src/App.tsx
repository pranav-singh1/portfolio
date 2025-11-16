import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-body">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Pranav Singh</p>
          <h1 className="text-4xl font-semibold">Blank Canvas</h1>
          <p className="text-base text-neutral-600">
            Pure React + Tailwind starter. Replace this content with your own sections, grids, or components.
          </p>
        </header>

        <section className="border border-dashed border-neutral-300 rounded-xl p-10 text-center text-sm uppercase tracking-[0.4em] text-neutral-400">
          Add your layout here
        </section>
      </div>
    </div>
  )
}

export default App
