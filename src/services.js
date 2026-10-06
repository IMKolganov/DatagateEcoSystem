function envUrl(name, fallback) {
  const value = import.meta.env[name];
  return (value && String(value).trim()) || fallback;
}

function hostFromUrl(url) {
  try {
    return new URL(url).host;
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}

const urls = {
  main: envUrl("VITE_URL_MAIN", "https://datagateapp.com"),
  dash: envUrl("VITE_URL_DASH", "https://dash.datagateapp.com"),
  api: envUrl("VITE_URL_API", "https://api.datagateapp.com"),
  telegram: envUrl("VITE_URL_TELEGRAM", "https://tg.datagateapp.com"),
  status: envUrl("VITE_URL_STATUS", "https://status.datagateapp.com"),
  wazuh: envUrl("VITE_URL_WAZUH", "https://monitor.datagateapp.com"),
  grafana: envUrl("VITE_URL_GRAFANA", "https://metrics.datagateapp.com"),
  github: envUrl("VITE_URL_GITHUB", "https://github.com/IMKolganov"),
  dockerhub: envUrl("VITE_URL_DOCKERHUB", "https://hub.docker.com/u/imkolganov"),
  nuget: envUrl(
    "VITE_URL_NUGET",
    "https://www.nuget.org/packages/DataGateMonitor.SharedModels"
  ),
};

export const sections = [
  {
    id: "main",
    items: [
      {
        id: "dash",
        url: urls.dash,
        host: hostFromUrl(urls.dash),
        icon: "/icons/dashboard.png",
        tone: "orange",
        featured: true,
        keywords: ["dashboard", "dash", "панель", "админка", "клиенты", "πίνακας", "керування"],
      },
      {
        id: "main",
        url: urls.main,
        host: hostFromUrl(urls.main),
        icon: "/favicon.png",
        tone: "brand",
        featured: true,
        keywords: ["main", "сайт", "лендинг", "product", "ιστότοπος", "website"],
      },
      {
        id: "api",
        url: urls.api,
        host: hostFromUrl(urls.api),
        icon: "/favicon.png",
        tone: "teal",
        keywords: ["api", "backend", "апи", "интеграция", "ενσωμάτωση"],
      },
      {
        id: "telegram",
        url: urls.telegram,
        host: hostFromUrl(urls.telegram),
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
        url: urls.status,
        host: hostFromUrl(urls.status),
        icon: "/icons/status.png",
        tone: "blue",
        keywords: ["status", "статус", "uptime", "доступность", "διαθεσιμότητα"],
      },
      {
        id: "wazuh",
        url: urls.wazuh,
        host: hostFromUrl(urls.wazuh),
        icon: "/icons/wazuh.png",
        tone: "cyan",
        keywords: ["wazuh", "monitor", "монитор", "безопасность", "security", "ασφάλεια"],
      },
      {
        id: "grafana",
        url: urls.grafana,
        host: hostFromUrl(urls.grafana),
        icon: "/icons/grafana.svg",
        tone: "flame",
        keywords: ["grafana", "metrics", "метрики", "графики", "μετρήσεις"],
      },
    ],
  },
  {
    id: "dev",
    items: [
      {
        id: "github",
        url: urls.github,
        host: hostFromUrl(urls.github),
        icon: "/icons/github.svg",
        tone: "ink",
        keywords: ["github", "git", "repos", "репозитории", "код", "source"],
      },
      {
        id: "dockerhub",
        url: urls.dockerhub,
        host: hostFromUrl(urls.dockerhub),
        icon: "/icons/docker.svg",
        tone: "docker",
        keywords: ["docker", "dockerhub", "images", "контейнеры", "образы"],
      },
      {
        id: "nuget",
        url: urls.nuget,
        host: hostFromUrl(urls.nuget),
        icon: "/icons/nuget.svg",
        tone: "nuget",
        keywords: ["nuget", "packages", "пакеты", "dotnet", "sharedmodels"],
      },
    ],
  },
];
