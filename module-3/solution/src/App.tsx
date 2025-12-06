function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-gray-100">
      {/* Light Card */}
      <div className="w-80 p-8 bg-white rounded-lg border border-gray-200 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 leading-tight">
          ES2025 TRAINING HU S17 - Module B
        </h2>
        <p className="mt-2 text-base font-semibold text-gray-600">
          SkillShare Academy - Dynamic Website
        </p>
        <p className="mt-4 text-sm text-gray-600 leading-relaxed line-clamp-3">
          Create a server-side rendered administrative interface for SkillShare
          Academy platform management with role-based access control and OWASP
          security compliance. This comprehensive system allows restaurant owners
          to manage all aspects of their business efficiently.
        </p>
      </div>

      {/* Dark Card */}
      <div className="w-80 p-8 bg-slate-900 rounded-lg border border-slate-700 shadow-xl">
        <h2 className="text-2xl font-bold text-white leading-tight">
          ES2025 TRAINING HU S17 - Module B
        </h2>
        <p className="mt-2 text-base font-semibold text-slate-400">
          SkillShare Academy - Dynamic Website
        </p>
        <p className="mt-4 text-sm text-slate-300 leading-relaxed line-clamp-3">
          Create a server-side rendered administrative interface for SkillShare
          Academy platform management with role-based access control and OWASP
          security compliance. This comprehensive system allows restaurant owners
          to manage all aspects of their business efficiently.
        </p>
      </div>

      {/* Colored Accent Card */}
      <div className="w-80 p-8 bg-blue-50 rounded-lg border border-blue-200 shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 leading-tight">
          ES2025 TRAINING HU S17 - Module B
        </h2>
        <p className="mt-2 text-base font-semibold text-blue-700">
          SkillShare Academy - Dynamic Website
        </p>
        <p className="mt-4 text-sm text-blue-700 leading-relaxed line-clamp-3">
          Create a server-side rendered administrative interface for SkillShare
          Academy platform management with role-based access control and OWASP
          security compliance. This comprehensive system allows restaurant owners
          to manage all aspects of their business efficiently.
        </p>
      </div>
    </div>
  );
}

export default App;
