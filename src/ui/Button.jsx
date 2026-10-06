import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block bg-yellow-500 text-sm uppercase font-semibold tracking-wide text-stone-800  rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:bg-yellow-300 focus:ring-offset-2 focus:ring-yellow-300 active:bg-yellow-100 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + 'px-4 py-3 px-4 md:px-6 md:py-4',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'inline-block text-sm border-2 border-stone-300 uppercase font-semibold tracking-wide text-stone-500  rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:bg-stone-300 focus:text-stone-800 focus:ring-offset-2 focus:ring-stone-200 active:bg-stone-100 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
