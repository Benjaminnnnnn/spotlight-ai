import { House, Sparkle, Users, Webcam } from "lucide-react";
const sidebarLinks = [
  {
    id: 1,
    label: "Home",
    icon: House,
    link: "/home",
  },
  {
    id: 2,
    label: "Webinars",
    icon: Webcam,
    link: "/webinars",
  },
  {
    id: 3,
    label: "Leads",
    icon: Users,
    link: "/leads",
  },
  {
    id: 4,
    label: "AI Agents",
    icon: Sparkle,
    link: "/ai-agents",
  },
];

export default sidebarLinks;
