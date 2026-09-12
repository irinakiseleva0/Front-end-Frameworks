interface SearchBarProps {
  query: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  query,
  onChange,
}: SearchBarProps) {
  return (
    <input
      type="text"
      value={query}
      placeholder="Search movies..."
      onChange={(event) => onChange(event.target.value)}
    />
  );
}