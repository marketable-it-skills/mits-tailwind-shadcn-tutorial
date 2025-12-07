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
    <div className="min-h-screen bg-gray-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Backend/Server-Side (Blue theme) */}
          <Card
            className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            tabIndex={0}
            onClick={() => console.log("Backend card clicked!")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                console.log("Backend card clicked!");
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
                control and OWASP security compliance.
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

          {/* Card 2: Frontend/Mobile (Green theme) */}
          <Card
            className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
            tabIndex={0}
            onClick={() => console.log("Frontend card clicked!")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                console.log("Frontend card clicked!");
              }
            }}
          >
            <CardHeader>
              <Badge variant="secondary">EuroSkills 2025 Training HU</Badge>
              <CardTitle className="text-2xl font-bold leading-tight">
                ES2025 TRAINING HU S17 - Module A
              </CardTitle>
              <CardDescription className="text-base font-semibold">
                Restaurant Portal - Mobile App
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                Develop a cross-platform mobile application for restaurant table
                reservations with real-time availability, push notifications,
                and offline-first architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  frontend
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-emerald-50 text-emerald-700 border-emerald-200"
                >
                  mobile
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-teal-50 text-teal-700 border-teal-200"
                >
                  React Native
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-lime-50 text-lime-700 border-lime-200"
                >
                  offline-first
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: DevOps/Cloud (Orange theme) */}
          <Card
            className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
            tabIndex={0}
            onClick={() => console.log("DevOps card clicked!")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                console.log("DevOps card clicked!");
              }
            }}
          >
            <CardHeader>
              <Badge variant="secondary">WorldSkills Lyon 2024</Badge>
              <CardTitle className="text-2xl font-bold leading-tight">
                WS2024 Cloud Computing - Day 3
              </CardTitle>
              <CardDescription className="text-base font-semibold">
                Microservices Deployment Pipeline
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                Design and implement a CI/CD pipeline for microservices
                deployment on Kubernetes with automated testing, monitoring, and
                rollback capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="bg-orange-50 text-orange-700 border-orange-200"
                >
                  DevOps
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-amber-50 text-amber-700 border-amber-200"
                >
                  CI/CD
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-yellow-50 text-yellow-700 border-yellow-200"
                >
                  Kubernetes
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-red-50 text-red-700 border-red-200"
                >
                  Docker
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Card 4: Full Stack (Purple theme) */}
          <Card
            className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
            tabIndex={0}
            onClick={() => console.log("Full Stack card clicked!")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                console.log("Full Stack card clicked!");
              }
            }}
          >
            <CardHeader>
              <Badge variant="secondary">EuroSkills 2025 Training HU</Badge>
              <CardTitle className="text-2xl font-bold leading-tight">
                ES2025 TRAINING HU S17 - Module C
              </CardTitle>
              <CardDescription className="text-base font-semibold">
                E-Commerce Platform - Full Stack
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                Build a complete e-commerce platform with product catalog,
                shopping cart, payment integration, and admin dashboard using
                modern full-stack technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="bg-purple-50 text-purple-700 border-purple-200"
                >
                  full-stack
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-violet-50 text-violet-700 border-violet-200"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200"
                >
                  PostgreSQL
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-pink-50 text-pink-700 border-pink-200"
                >
                  Stripe
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Card 5: Security (Red theme) */}
          <Card
            className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
            tabIndex={0}
            onClick={() => console.log("Security card clicked!")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                console.log("Security card clicked!");
              }
            }}
          >
            <CardHeader>
              <Badge variant="secondary">WorldSkills Lyon 2024</Badge>
              <CardTitle className="text-2xl font-bold leading-tight">
                WS2024 Cybersecurity - Module 2
              </CardTitle>
              <CardDescription className="text-base font-semibold">
                Web Application Security Audit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                Perform comprehensive security audit of web applications,
                identify vulnerabilities using OWASP Top 10, and implement
                security fixes and best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="bg-red-50 text-red-700 border-red-200"
                >
                  security
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-rose-50 text-rose-700 border-rose-200"
                >
                  OWASP
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-pink-50 text-pink-700 border-pink-200"
                >
                  penetration-testing
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-orange-50 text-orange-700 border-orange-200"
                >
                  vulnerability
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Card 6: Data/Analytics (Indigo theme) */}
          <Card
            className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
            tabIndex={0}
            onClick={() => console.log("Data card clicked!")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                console.log("Data card clicked!");
              }
            }}
          >
            <CardHeader>
              <Badge variant="secondary">EuroSkills 2025 Training HU</Badge>
              <CardTitle className="text-2xl font-bold leading-tight">
                ES2025 TRAINING HU S17 - Module D
              </CardTitle>
              <CardDescription className="text-base font-semibold">
                Analytics Dashboard - Data Visualization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                Design and implement an interactive analytics dashboard with
                real-time data visualization, custom charts, and filtering
                capabilities using modern data libraries.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="bg-indigo-50 text-indigo-700 border-indigo-200"
                >
                  data-viz
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200"
                >
                  React
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-sky-50 text-sky-700 border-sky-200"
                >
                  D3.js
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-cyan-50 text-cyan-700 border-cyan-200"
                >
                  real-time
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
