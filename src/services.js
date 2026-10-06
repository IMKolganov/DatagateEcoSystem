export const sections = [
  {
    id: "main",
    items: [
      {
        id: "dash",
        host: "dash.datagateapp.com",
        icon: "/icons/dashboard.png",
        tone: "orange",
        featured: true,
        keywords: ["dashboard", "dash", "панель", "админка", "клиенты", "πίνακας", "керування"],
      },
      {
        id: "main",
        host: "datagateapp.com",
        icon: "/favicon.png",
        tone: "brand",
        featured: true,
        keywords: ["main", "сайт", "лендинг", "product", "ιστότοπος", "website"],
      },
      {
        id: "api",
        host: "api.datagateapp.com",
        icon: "/favicon.png",
        tone: "teal",
        keywords: ["api", "backend", "апи", "интеграция", "ενσωμάτωση"],
      },
      {
        id: "telegram",
        host: "tg.datagateapp.com",
        icon: "/icons/telegram.svg",
        tone: "sky",
        keywords: ["telegram", "tg", "бот", "телеграм", "ειδοποιήσεις"],
      },
    ],
  },
  {
    id: "ops",
    items: [
      {
        id: "status",
        host: "status.datagateapp.com",
        icon: "/icons/status.png",
        tone: "blue",
        keywords: ["status", "статус", "uptime", "доступность", "διαθεσιμότητα"],
      },
      {
        id: "wazuh",
        host: "monitor.datagateapp.com",
        icon: "/icons/wazuh.png",
        tone: "cyan",
        keywords: ["wazuh", "monitor", "монитор", "безопасность", "security", "ασφάλεια"],
      },
      {
        id: "grafana",
        host: "metrics.datagateapp.com",
        icon: "/icons/grafana.svg",
        tone: "flame",
        keywords: ["grafana", "metrics", "метрики", "графики", "μετρήσεις"],
      },
    ],
  },
];
