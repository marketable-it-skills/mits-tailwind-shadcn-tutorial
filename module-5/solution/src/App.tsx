import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-gray-100">
      {/* Light Card - ShadCN Version with Badges */}
      <Card className="w-80">
        <CardHeader>
          <Badge variant="secondary">
            EuroSkills 2025 Training HU
          </Badge>
          <CardTitle className="text-2xl font-bold leading-tight">
            ES2025 TRAINING HU S17 - Module B
          </CardTitle>
          <CardDescription className="text-base font-semibold">
            SkillShare Academy - Dynamic Website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
            Create a server-side rendered administrative interface for SkillShare
            Academy platform management with role-based access control and OWASP
            security compliance. This comprehensive system allows restaurant owners
            to manage all aspects of their business efficiently.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="bg-blue-50 text-blue-700 border-blue-200"
            >
              backend
            </Badge>
            <Badge
              variant="outline"
              className="bg-cyan-50 text-cyan-700 border-cyan-200"
            >
              server-side
            </Badge>
            <Badge
              variant="outline"
              className="bg-sky-50 text-sky-700 border-sky-200"
            >
              MySQL
            </Badge>
            <Badge
              variant="outline"
              className="bg-purple-50 text-purple-700 border-purple-200"
            >
              authentication
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Dark Card - ShadCN Version with Badges */}
      <Card className="w-80 bg-slate-900 border-slate-700">
        <CardHeader>
          <Badge variant="secondary">
            EuroSkills 2025 Training HU
          </Badge>
          <CardTitle className="text-2xl font-bold leading-tight text-white">
            ES2025 TRAINING HU S17 - Module B
          </CardTitle>
          <CardDescription className="text-base font-semibold text-slate-400">
            SkillShare Academy - Dynamic Website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
            Create a server-side rendered administrative interface for SkillShare
            Academy platform management with role-based access control and OWASP
            security compliance. This comprehensive system allows restaurant owners
            to manage all aspects of their business efficiently.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="bg-blue-900/30 text-blue-300 border-blue-700"
            >
              backend
            </Badge>
            <Badge
              variant="outline"
              className="bg-cyan-900/30 text-cyan-300 border-cyan-700"
            >
              server-side
            </Badge>
            <Badge
              variant="outline"
              className="bg-sky-900/30 text-sky-300 border-sky-700"
            >
              MySQL
            </Badge>
            <Badge
              variant="outline"
              className="bg-purple-900/30 text-purple-300 border-purple-700"
            >
              authentication
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Colored Card - ShadCN Version with Badges */}
      <Card className="w-80 bg-blue-50 border-blue-200">
        <CardHeader>
          <Badge variant="secondary" className="bg-blue-200 text-blue-900">
            EuroSkills 2025 Training HU
          </Badge>
          <CardTitle className="text-2xl font-bold leading-tight text-blue-900">
            ES2025 TRAINING HU S17 - Module B
          </CardTitle>
          <CardDescription className="text-base font-semibold text-blue-700">
            SkillShare Academy - Dynamic Website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-700 leading-relaxed line-clamp-3 mb-4">
            Create a server-side rendered administrative interface for SkillShare
            Academy platform management with role-based access control and OWASP
            security compliance. This comprehensive system allows restaurant owners
            to manage all aspects of their business efficiently.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="bg-blue-100 text-blue-800 border-blue-300"
            >
              backend
            </Badge>
            <Badge
              variant="outline"
              className="bg-cyan-100 text-cyan-800 border-cyan-300"
            >
              server-side
            </Badge>
            <Badge
              variant="outline"
              className="bg-sky-100 text-sky-800 border-sky-300"
            >
              MySQL
            </Badge>
            <Badge
              variant="outline"
              className="bg-purple-100 text-purple-800 border-purple-300"
            >
              authentication
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
