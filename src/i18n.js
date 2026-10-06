import { useEffect, useState } from "react";

export const LOCALES = [
  { code: "en", label: "EN", name: "English" },
  { code: "ru", label: "RU", name: "Русский" },
  { code: "el", label: "EL", name: "Ελληνικά" },
  { code: "uk", label: "UK", name: "Українська" },
];

const STORAGE_KEY = "datagate-locale";

const dictionaries = {
  en: {
    title: "Datagate — Services",
    lede: "Quick access to Datagate services. VPN nodes are not listed here.",
    searchPlaceholder: "Find: dashboard, grafana, wazuh, api…",
    searchClear: "Clear search",
    empty: "Nothing found. Try another word.",
    themeAria: "Theme: {theme}. Click to switch.",
    themeTitle: "Theme: {theme}",
    theme: { system: "Auto", light: "Light", dark: "Dark" },
    language: "Language",
    sections: {
      main: {
        title: "Main",
        description: "What you use every day",
      },
      ops: {
        title: "Monitoring & security",
        description: "When something breaks or you need to check the system",
      },
      dev: {
        title: "Code & packages",
        description: "GitHub, Docker Hub and NuGet",
      },
    },
    services: {
      dash: {
        label: "Control panel",
        hint: "Clients, settings, daily work",
      },
      main: {
        label: "Datagate website",
        hint: "Public product homepage",
      },
      api: {
        label: "API",
        hint: "Backend and integrations",
      },
      telegram: {
        label: "Telegram",
        hint: "Bot and notifications",
      },
      status: {
        label: "Status",
        hint: "Are services up right now",
      },
      wazuh: {
        label: "Wazuh",
        hint: "Security and alerts",
      },
      grafana: {
        label: "Grafana",
        hint: "Metrics, charts, load",
      },
      github: {
        label: "GitHub",
        hint: "Source code and repositories",
      },
      dockerhub: {
        label: "Docker Hub",
        hint: "Container images",
      },
      nuget: {
        label: "NuGet",
        hint: "Shared .NET packages",
      },
    },
  },
  ru: {
    title: "Datagate — Сервисы",
    lede: "Быстрый доступ к сервисам Datagate. VPN-ноды сюда не входят.",
    searchPlaceholder: "Найти: dashboard, grafana, wazuh, api…",
    searchClear: "Очистить поиск",
    empty: "Ничего не найдено. Попробуйте другое слово.",
    themeAria: "Тема: {theme}. Нажмите, чтобы сменить.",
    themeTitle: "Тема: {theme}",
    theme: { system: "Авто", light: "Светлая", dark: "Тёмная" },
    language: "Язык",
    sections: {
      main: {
        title: "Главное",
        description: "То, чем пользуешься каждый день",
      },
      ops: {
        title: "Мониторинг и безопасность",
        description: "Если что-то сломалось или нужно проверить систему",
      },
      dev: {
        title: "Код и пакеты",
        description: "GitHub, Docker Hub и NuGet",
      },
    },
    services: {
      dash: {
        label: "Панель управления",
        hint: "Клиенты, настройки, основная работа",
      },
      main: {
        label: "Сайт Datagate",
        hint: "Публичная главная страница продукта",
      },
      api: {
        label: "API",
        hint: "Бэкенд и интеграции",
      },
      telegram: {
        label: "Telegram",
        hint: "Бот и уведомления",
      },
      status: {
        label: "Status",
        hint: "Работают ли сервисы сейчас",
      },
      wazuh: {
        label: "Wazuh",
        hint: "Безопасность и алерты",
      },
      grafana: {
        label: "Grafana",
        hint: "Метрики, графики, нагрузка",
      },
      github: {
        label: "GitHub",
        hint: "Исходный код и репозитории",
      },
      dockerhub: {
        label: "Docker Hub",
        hint: "Образы контейнеров",
      },
      nuget: {
        label: "NuGet",
        hint: "Общие .NET пакеты",
      },
    },
  },
  el: {
    title: "Datagate — Υπηρεσίες",
    lede: "Γρήγορη πρόσβαση στις υπηρεσίες Datagate. Οι κόμβοι VPN δεν περιλαμβάνονται.",
    searchPlaceholder: "Αναζήτηση: dashboard, grafana, wazuh, api…",
    searchClear: "Καθαρισμός αναζήτησης",
    empty: "Δεν βρέθηκε τίποτα. Δοκιμάστε άλλη λέξη.",
    themeAria: "Θέμα: {theme}. Κάντε κλικ για αλλαγή.",
    themeTitle: "Θέμα: {theme}",
    theme: { system: "Αυτόματο", light: "Φωτεινό", dark: "Σκοτεινό" },
    language: "Γλώσσα",
    sections: {
      main: {
        title: "Κύρια",
        description: "Όσα χρησιμοποιείτε κάθε μέρα",
      },
      ops: {
        title: "Παρακολούθηση & ασφάλεια",
        description: "Όταν κάτι χαλάσει ή πρέπει να ελέγξετε το σύστημα",
      },
      dev: {
        title: "Κώδικας & πακέτα",
        description: "GitHub, Docker Hub και NuGet",
      },
    },
    services: {
      dash: {
        label: "Πίνακας ελέγχου",
        hint: "Πελάτες, ρυθμίσεις, καθημερινή εργασία",
      },
      main: {
        label: "Ιστότοπος Datagate",
        hint: "Δημόσια αρχική σελίδα προϊόντος",
      },
      api: {
        label: "API",
        hint: "Backend και ενσωματώσεις",
      },
      telegram: {
        label: "Telegram",
        hint: "Bot και ειδοποιήσεις",
      },
      status: {
        label: "Status",
        hint: "Αν οι υπηρεσίες λειτουργούν τώρα",
      },
      wazuh: {
        label: "Wazuh",
        hint: "Ασφάλεια και ειδοποιήσεις",
      },
      grafana: {
        label: "Grafana",
        hint: "Μετρήσεις, γραφήματα, φορτίο",
      },
      github: {
        label: "GitHub",
        hint: "Πηγαίος κώδικας και repositories",
      },
      dockerhub: {
        label: "Docker Hub",
        hint: "Container images",
      },
      nuget: {
        label: "NuGet",
        hint: "Κοινά πακέτα .NET",
      },
    },
  },
  uk: {
    title: "Datagate — Сервіси",
    lede: "Швидкий доступ до сервісів Datagate. VPN-вузли сюди не входять.",
    searchPlaceholder: "Знайти: dashboard, grafana, wazuh, api…",
    searchClear: "Очистити пошук",
    empty: "Нічого не знайдено. Спробуйте інше слово.",
    themeAria: "Тема: {theme}. Натисніть, щоб змінити.",
    themeTitle: "Тема: {theme}",
    theme: { system: "Авто", light: "Світла", dark: "Темна" },
    language: "Мова",
    sections: {
      main: {
        title: "Головне",
        description: "Те, чим користуєшся щодня",
      },
      ops: {
        title: "Моніторинг і безпека",
        description: "Якщо щось зламалось або потрібно перевірити систему",
      },
      dev: {
        title: "Код і пакети",
        description: "GitHub, Docker Hub і NuGet",
      },
    },
    services: {
      dash: {
        label: "Панель керування",
        hint: "Клієнти, налаштування, основна робота",
      },
      main: {
        label: "Сайт Datagate",
        hint: "Публічна головна сторінка продукту",
      },
      api: {
        label: "API",
        hint: "Бекенд та інтеграції",
      },
      telegram: {
        label: "Telegram",
        hint: "Бот і сповіщення",
      },
      status: {
        label: "Status",
        hint: "Чи працюють сервіси зараз",
      },
      wazuh: {
        label: "Wazuh",
        hint: "Безпека та алерти",
      },
      grafana: {
        label: "Grafana",
        hint: "Метрики, графіки, навантаження",
      },
      github: {
        label: "GitHub",
        hint: "Вихідний код і репозиторії",
      },
      dockerhub: {
        label: "Docker Hub",
        hint: "Образи контейнерів",
      },
      nuget: {
        label: "NuGet",
        hint: "Спільні .NET пакети",
      },
    },
  },
};

function localeFromTag(tag) {
  const code = String(tag || "").toLowerCase();
  if (code.startsWith("ru")) return "ru";
  if (code.startsWith("uk")) return "uk";
  if (code.startsWith("el")) return "el";
  if (code.startsWith("en")) return "en";
  return null;
}

function detectSystemLocale() {
  const candidates = [
    ...(navigator.languages || []),
    navigator.language,
    "en",
  ];

  for (const tag of candidates) {
    const matched = localeFromTag(tag);
    if (matched) return matched;
  }

  return "en";
}

function detectLocale() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (LOCALES.some((locale) => locale.code === saved)) {
    return saved;
  }

  return detectSystemLocale();
}

function format(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

export function useLocale() {
  const [locale, setLocaleState] = useState(detectLocale);
  const t = dictionaries[locale] || dictionaries.en;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.title;
  }, [locale, t.title]);

  const setLocale = (code) => {
    if (!LOCALES.some((item) => item.code === code)) return;
    localStorage.setItem(STORAGE_KEY, code);
    setLocaleState(code);
  };

  const cycleLocale = () => {
    const index = LOCALES.findIndex((item) => item.code === locale);
    const next = LOCALES[(index + 1) % LOCALES.length];
    setLocale(next.code);
  };

  return { locale, setLocale, cycleLocale, t, format };
}
