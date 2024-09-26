import { useLayoutContext } from '@/context/useLayoutContext';
const ThemeModeToggle = () => {
  const {
    changeTheme,
    themeMode
  } = useLayoutContext();
  return <li className="topbar-item">
      <span className="nav-link nav-icon" role="button" id="light-dark-mode" onClick={() => themeMode === 'dark' ? changeTheme('light') : changeTheme('dark')}>
        <i className="icofont-moon light-mode " />
        <i className="icofont-sun dark-mode" />
      </span>
    </li>;
};
export default ThemeModeToggle;