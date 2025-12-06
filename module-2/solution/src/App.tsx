function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-gray-100">
      {/* Light Card */}
      <div className="w-80 p-6 bg-white rounded-lg border border-gray-200 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900">Light Theme</h2>
        <p className="mt-3 text-sm text-gray-600">
          This card uses light colors - white background with dark text for
          maximum readability.
        </p>
      </div>

      {/* Dark Card */}
      <div className="w-80 p-6 bg-slate-900 rounded-lg border border-slate-700 shadow-xl">
        <h2 className="text-xl font-bold text-white">Dark Theme</h2>
        <p className="mt-3 text-sm text-slate-300">
          This card uses dark colors - dark background with light text for a
          modern, elegant look.
        </p>
      </div>

      {/* Colored Accent Card */}
      <div className="w-80 p-6 bg-blue-50 rounded-lg border border-blue-200 shadow-lg">
        <h2 className="text-xl font-bold text-blue-900">Colored Theme</h2>
        <p className="mt-3 text-sm text-blue-700">
          This card uses colored accents - blue tinted background with blue text
          for visual interest.
        </p>
      </div>
    </div>
  );
}

export default App;
