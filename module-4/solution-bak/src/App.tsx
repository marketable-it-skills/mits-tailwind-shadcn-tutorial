import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-gray-100">
      {/* Light Card - ShadCN Version */}
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="text-2xl font-bold leading-tight">
            ES2025 TRAINING HU S17 - Module B
          </CardTitle>
          <CardDescription className="text-base font-semibold">
            SkillShare Academy - Dynamic Website
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          Create a server-side rendered administrative interface for SkillShare
          Academy platform management with role-based access control and OWASP
          security compliance. This comprehensive system allows restaurant owners
          to manage all aspects of their business efficiently.
        </CardContent>
      </Card>

      {/* Dark Card - ShadCN Version */}
      <Card className="w-80 bg-slate-900 border-slate-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold leading-tight text-white">
            ES2025 TRAINING HU S17 - Module B
          </CardTitle>
          <CardDescription className="text-base font-semibold text-slate-400">
            SkillShare Academy - Dynamic Website
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-slate-300 leading-relaxed line-clamp-3">
          Create a server-side rendered administrative interface for SkillShare
          Academy platform management with role-based access control and OWASP
          security compliance. This comprehensive system allows restaurant owners
          to manage all aspects of their business efficiently.
        </CardContent>
      </Card>

      {/* Colored Card - ShadCN Version */}
      <Card className="w-80 bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold leading-tight text-blue-900">
            ES2025 TRAINING HU S17 - Module B
          </CardTitle>
          <CardDescription className="text-base font-semibold text-blue-700">
            SkillShare Academy - Dynamic Website
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-blue-700 leading-relaxed line-clamp-3">
          Create a server-side rendered administrative interface for SkillShare
          Academy platform management with role-based access control and OWASP
          security compliance. This comprehensive system allows restaurant owners
          to manage all aspects of their business efficiently.
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

