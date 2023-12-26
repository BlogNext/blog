import Link from 'next/link';
import IconFont from './IconFont';

type Props = React.ComponentPropsWithoutRef<'a'>;

const CustomLink = ({ href, children, ...rest }: Props) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    );
  }

  if (isAnchorLink) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a
      className='flex items-center'
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      {...rest}
    >
      {children}
      {typeof children === 'string' && <IconFont name='icon-link1' style={{ marginLeft: 4 }} />}
    </a>
  );
};

export default CustomLink;
