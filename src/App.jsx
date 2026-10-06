import { useMemo, useState } from "react";
import Logo from "./Logo";
import { LOCALES, useLocale } from "./i18n";
import { sections } from "./services";
import { useTheme } from "./useTheme";

function matchesQuery(item, query, labels) {
  if (!query) return true;
  const haystack = [
    labels.label,
    labels.hint,
    item.host,
    ...(item.keywords || []),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function ServiceTile({ item, labels }) {
  return (
    <li className={`tile tone-${item.tone}${item.featured ? " featured" : ""}`}>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <span
          className={`tile-icon${item.icon.endsWith(".svg") ? " is-svg" : " is-bitmap"}`}
        >
          <img src={item.icon} alt="" width={48} height={48} />
        </span>
        <span className="tile-body">
          <span className="label">{labels.label}</span>
          <span className="hint">{labels.hint}</span>
          <span className="url">{item.host}</span>
        </span>
        <span className="arrow" aria-hidden="true">
          →
        </span>
      </a>
    </li>
  );
}

export default function App() {
  const { theme, resolved, cycleTheme } = useTheme();
  const { locale, setLocale, t, format } = useLocale();
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();

  const visibleSections = useMemo(() => {
    return sections
      .map((section) => {
        const sectionCopy = t.sections[section.id];
        const items = section.items
          .map((item) => ({
            item,
            labels: t.services[item.id],
          }))
          .filter(({ item, labels }) =>
            matchesQuery(item, normalized, labels)
          );

        return {
          id: section.id,
          title: sectionCopy.title,
          description: sectionCopy.description,
          items,
        };
      })
      .filter((section) => section.items.length > 0);
  }, [normalized, t]);

  const totalVisible = visibleSections.reduce(
    (sum, section) => sum + section.items.length,
    0
  );

  const themeLabel = t.theme[theme];

  return (
    <main>
      <header className="top">
        <h1 className="brand">
          <Logo />
        </h1>
        <div className="controls">
          <div className="lang-switch" role="group" aria-label={t.language}>
            {LOCALES.map((item) => (
              <button
                key={item.code}
                type="button"
                className={item.code === locale ? "active" : ""}
                onClick={() => setLocale(item.code)}
                title={item.name}
                aria-pressed={item.code === locale}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={cycleTheme}
            aria-label={format(t.themeAria, { theme: themeLabel })}
            title={format(t.themeTitle, { theme: themeLabel })}
          >
            <span className="theme-icon" aria-hidden="true">
              {resolved === "dark" ? "☾" : "☀"}
            </span>
            <span className="theme-label">{themeLabel}</span>
          </button>
        </div>
      </header>

      <p className="lede">{t.lede}</p>

      <label className="search">
        <span className="search-icon" aria-hidden="true">
          ⌕
        </span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t.searchPlaceholder}
          autoComplete="off"
          spellCheck="false"
        />
        {query ? (
          <button
            type="button"
            className="search-clear"
            onClick={() => setQuery("")}
            aria-label={t.searchClear}
          >
            ✕
          </button>
        ) : null}
      </label>

      {totalVisible === 0 ? (
        <p className="empty">{t.empty}</p>
      ) : (
        visibleSections.map((section) => {
          const featured = section.items.filter(({ item }) => item.featured);
          const regular = section.items.filter(({ item }) => !item.featured);

          return (
            <section key={section.id} className="group">
              <div className="group-head">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>

              {featured.length > 0 ? (
                <ul className="tiles featured-row">
                  {featured.map(({ item, labels }) => (
                    <ServiceTile key={item.host} item={item} labels={labels} />
                  ))}
                </ul>
              ) : null}

              {regular.length > 0 ? (
                <ul className="tiles">
                  {regular.map(({ item, labels }) => (
                    <ServiceTile key={item.host} item={item} labels={labels} />
                  ))}
                </ul>
              ) : null}
            </section>
          );
        })
      )}
    </main>
  );
}
