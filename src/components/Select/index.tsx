interface SelectProps {
  data: {
    label: string;
    value: string | number;
  }[];
  className?: string;
  value?: string | number;
  disabled?: boolean;
  onChange?: (value: string | number) => void;
}
export default function Select(props: SelectProps) {
  const { data, disabled, onChange, value, className = '' } = props;
  const onHandlechange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <select
      onChange={onHandlechange}
      disabled={disabled}
      value={value}
      className={`select select-bordered ` + className}
    >
      {data.map((item) => (
        <option className='w-full' key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
