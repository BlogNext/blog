import classNames from 'classnames';
import { FC } from 'react';

interface IconFontProps {
  name: string;
  size?: number;
  color?: string;
}

const IconFont: FC<IconFontProps> = ({ name, size = 14, color }) => {
  const styles = {
    width: size,
    height: size,
    color: color ? color : 'inherit'
  };
  return (
    <svg className={classNames(`overflow-hidden fill-current`)} aria-hidden='true' style={styles}>
      <use className='m-0' xlinkHref={`#${name}`} />
    </svg>
  );
};

export default IconFont;
