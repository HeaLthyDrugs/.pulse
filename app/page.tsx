import { DashboardMetrics } from "./components/dashboard/metrics";
import { QuickLinks } from "./components/dashboard/quick-links";
import { TaskProgress } from "./components/dashboard/task-progress";


export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Overview Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
        <DashboardMetrics />
      </section>

      {/* Widgets Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TaskProgress />
        {/* <BuildStatus />
        <CodeQuality /> */}
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Quick Access</h2>
        <QuickLinks />
      </section>
    </div>
  )
}
