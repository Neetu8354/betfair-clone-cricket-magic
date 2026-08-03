import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; to?: string };

export const Breadcrumbs = ({ items, className = "" }: { items: Crumb[]; className?: string }) => (
  <nav aria-label="Breadcrumb" className={`text-xs text-muted-foreground ${className}`}>
    <ol className="flex flex-wrap items-center gap-1">
      <li className="inline-flex items-center">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-foreground" aria-label="Home">
          <Home className="h-3 w-3" />
          <span>Home</span>
        </Link>
      </li>
      {items.map((c, i) => (
        <li key={i} className="inline-flex items-center gap-1">
          <ChevronRight className="h-3 w-3 opacity-60" aria-hidden="true" />
          {c.to && i < items.length - 1 ? (
            <Link to={c.to} className="hover:text-foreground">{c.label}</Link>
          ) : (
            <span aria-current={i === items.length - 1 ? "page" : undefined} className="text-foreground line-clamp-1 max-w-[260px]">
              {c.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
