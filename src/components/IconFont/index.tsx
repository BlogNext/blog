import { CSSProperties, FC } from 'react';

interface IconFontProps {
  name: string;
  size?: number;
  color?: string;
  style?: CSSProperties;
}

const IconFont: FC<IconFontProps> = ({ name, size = 14, color, style }) => {
  const styles = {
    width: size,
    height: size,
    color: color ? color : 'inherit'
  };
  return (
    <svg
      className={`overflow-hidden fill-current`}
      aria-hidden='true'
      style={{ ...styles, ...style }}
    >
      <use className='m-0' xlinkHref={`#${name}`} />
    </svg>
  );
};

export default IconFont;
