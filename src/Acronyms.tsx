import { useMemo, useState } from "react";
import { acronyms } from "./acronyms.ts";
import { BackButton } from "./BackButton.tsx";
import { chapterById, chapters } from "./questions.ts";

function matches(query: string, fields: string[]) {
  const needle = query.trim().toLowerCase();
  if (!needle) return true;
  return fields.some((field) => field.toLowerCase().includes(needle));
}

export default function Acronyms({ onBack }: { onBack: () => void }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"chapter" | "az">("chapter");

  const found = useMemo(
    () => acronyms.filter((item) => matches(query, [item.term, item.stands, item.meaning])),
    [query],
  );

  const groups = useMemo(() => {
    if (sort === "az") {
      const sorted = [...found].sort((a, b) => a.term.localeCompare(b.term, undefined, { sensitivity: "base" }));
      return sorted.length ? [{ id: "az", title: "A to Z", items: sorted }] : [];
    }
    return chapters
      .map((chapter) => ({
        id: chapter.id,
        title: chapterById(chapter.id)?.title ?? chapter.id,
        items: found.filter((item) => item.chapter === chapter.id),
      }))
      .filter((group) => group.items.length > 0);
  }, [found, sort]);

  return (
    <section className="read acronyms">
      <div className="drill-meta">
        <BackButton onClick={onBack} />
      </div>
      <header className="pool-intro">
        <p className="section-label">Outdoor Emergency Care</p>
        <h1>Acronyms</h1>
        <p className="lede">
          {acronyms.length} acronyms and abbreviations you will see while studying OEC, grouped by chapter.
        </p>
      </header>
      <div className="acronym-tools">
        <input
          type="search"
          className="acronym-search"
          placeholder="Search acronyms"
          aria-label="Search acronyms"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="acronym-sort" role="group" aria-label="Sort">
          <button type="button" className="ghost" aria-pressed={sort === "chapter"} onClick={() => setSort("chapter")}>
            By chapter
          </button>
          <button type="button" className="ghost" aria-pressed={sort === "az"} onClick={() => setSort("az")}>
            A to Z
          </button>
        </div>
      </div>
      {groups.length === 0 ? (
        <p className="acronym-empty">No acronyms match “{query.trim()}”.</p>
      ) : (
        groups.map((group) => (
          <section key={group.id} className="acronym-group" aria-label={group.title}>
            <h2>{group.title}</h2>
            <dl className="acronym-list">
              {group.items.map((item) => (
                <div key={`${item.chapter}-${item.term}`} className="acronym-row">
                  <dt>{item.term}</dt>
                  <dd>
                    <strong>{item.stands}</strong>
                    <span>{item.meaning}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))
      )}
      <p className="acronym-note">
        Unofficial study list. The explanations are written for this site and are not quoted from the OEC textbook.
      </p>
    </section>
  );
}
