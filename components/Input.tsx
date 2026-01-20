
export type InputProps = {
  id?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  classes?: string;
};

export default function Input({ 
  id, 
  label, 
  value, 
  onChange, 
  placeholder, 
  type = "text", 
  classes = "" 
}: InputProps) {
  return (
    <label htmlFor={id} className="block">
      {label && <div className="mb-2 text-sm font-medium text-gray-700">{label}</div>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-transparent border-b-2 border-gray-300 px-2 py-3 
              text-[var(--foreground)] placeholder-[var(--text-light)]
              focus:outline-none focus:border-[var(--accent)] 
              transition-colors duration-300 ${classes}`}
      />
    </label>
  );
}