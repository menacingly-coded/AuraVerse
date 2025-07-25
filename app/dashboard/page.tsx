import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { UserProfileCard } from "@/components/user-profile-card"
import { KarmaActionSection } from "@/components/karma-action-section"
import { SpendPointsSection } from "@/components/spend-points-section"
import { FloatingParticles } from "@/components/floating-particles"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="min-h-screen bg-black relative overflow-hidden">
          <FloatingParticles />
          <header className="flex h-16 shrink-0 items-center gap-2 px-4 border-b border-purple-400/30 relative z-10">
            <SidebarTrigger className="text-white" />
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                AuraVerse Dashboard
              </h1>
            </div>
          </header>

          <main className="p-6 space-y-8 relative z-10">
            <UserProfileCard />

            <div className="grid lg:grid-cols-2 gap-8">
              <KarmaActionSection />
              <SpendPointsSection />
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
