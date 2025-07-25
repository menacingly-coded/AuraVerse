import { Home, User, Upload, Coins, Shield, Sparkles } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Link from "next/link"

const menuItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "My Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Submit Proof",
    url: "/submit-proof",
    icon: Upload,
  },
  {
    title: "Spend Points",
    url: "/spend-points",
    icon: Coins,
  },
  {
    title: "Admin",
    url: "/admin",
    icon: Shield,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-gradient-to-b from-purple-900 to-indigo-900 border-r border-purple-400/30">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-yellow-400" />
          <span className="text-xl font-bold text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
            AuraVerse
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-purple-300">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-purple-200 hover:text-white hover:bg-purple-800/50">
                    <Link href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
