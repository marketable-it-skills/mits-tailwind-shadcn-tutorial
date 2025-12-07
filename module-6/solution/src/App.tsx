import { Badge } from "./components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gray-100">
      {/* Light Card */}
      <Card 
        className="w-80 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        tabIndex={0}
        onClick={() => console.log('Light card clicked!')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            console.log('Light card clicked!');
          }
        }}
      >
        <CardHeader>
          <Badge variant="secondary">EuroSkills 2025 Training HU</Badge>
          <CardTitle className="text-2xl font-bold leading-tight">
            ES2025 TRAINING HU S17 - Module B
          </CardTitle>
          <CardDescription className="text-base font-semibold">
            SkillsShare Academy - Dynamic Website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
            Create a server-side rendered administrative interface for
            SkillShare Academy platform management with role-based access
            control and OWASP security compliance. This comprehensive system
            allows restaurant owners to manage all aspects of their business
            efficiently.
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
      {/* Dark Card */}
      <Card 
        className="w-80 bg-slate-900 rounded-lg border border-slate-700 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        tabIndex={0}
        onClick={() => console.log('Dark card clicked!')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            console.log('Dark card clicked!');
          }
        }}
      >
        <CardHeader className="">
          <Badge variant="secondary" className="">
            EuroSkills 2025 Training HU
          </Badge>

          <CardTitle className="text-2xl font-bold text-slate-50 leading-tight">
            ES2025 TRAINING HU S17 - Module B
          </CardTitle>
          <CardDescription className="text-base font-semibold text-slate-200">
            SkillsShare Academy - Dynamic Website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
            Create a server-side rendered administrative interface for
            SkillShare Academy platform management with role-based access
            control and OWASP security compliance. This comprehensive system
            allows restaurant owners to manage all aspects of their business
            efficiently.
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

      {/* Colored Accent Card */}
      <Card 
        className="w-80 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
        tabIndex={0}
        onClick={() => console.log('Colored card clicked!')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            console.log('Colored card clicked!');
          }
        }}
      >
        <CardHeader>
          <Badge variant="secondary" className="bg-blue-200 text-blue-900">
            EuroSkills 2025 Training HU
          </Badge>
          <CardTitle className="text-2xl font-bold text-blue-900 leading-tight">
            ES2025 TRAINING HU S17 - Module B
          </CardTitle>
          <CardDescription className="text-base font-semibold  text-blue-800">
            SkillsShare Academy - Dynamic Website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-700 leading-relaxed line-clamp-3 mb-4">
            Create a server-side rendered administrative interface for
            SkillShare Academy platform management with role-based access
            control and OWASP security compliance. This comprehensive system
            allows restaurant owners to manage all aspects of their business
            efficiently.
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
