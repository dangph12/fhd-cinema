import { createContext, useContext, useEffect, useMemo } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import useQueryParams from '@/hooks/useQueryParams';
import { toggleDocumentAttribute } from '@/utils/layout';
const ThemeContext = createContext(undefined);
const useLayoutContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useLayoutContext can only be used within LayoutProvider');
  }
  return context;
};
const getPreferredTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const LayoutProvider = ({
  children
}) => {
  const queryParams = useQueryParams();
  const override = !!(queryParams.layout_theme || queryParams.menu_theme || queryParams.menu_size);
  const INIT_STATE = {
    theme: queryParams['layout_theme'] ? queryParams['layout_theme'] : getPreferredTheme(),
    menu: {
      theme: queryParams['menu_theme'] ? queryParams['menu_theme'] : 'light',
      size: queryParams['menu_size'] ? queryParams['menu_size'] : 'default'
    }
  };
  const [settings, setSettings] = useLocalStorage('__RIZZ_NEXT_CONFIG__', INIT_STATE, override);

  // update settings
  const updateSettings = _newSettings => setSettings({
    ...settings,
    ..._newSettings
  });

  // update theme mode
  const changeTheme = newTheme => {
    updateSettings({
      theme: newTheme
    });
  };

  // change menu theme
  const changeMenuTheme = newTheme => {
    updateSettings({
      menu: {
        ...settings.menu,
        theme: newTheme
      }
    });
  };

  // change menu theme
  const changeMenuSize = newSize => {
    updateSettings({
      menu: {
        ...settings.menu,
        size: newSize
      }
    });
  };
  useEffect(() => {
    toggleDocumentAttribute('data-bs-theme', settings.theme);
    toggleDocumentAttribute('data-startbar', settings.menu.theme);
    toggleDocumentAttribute('data-sidebar-size', settings.menu.size, false, 'body');
    return () => {
      toggleDocumentAttribute('data-bs-theme', settings.theme, true);
      toggleDocumentAttribute('data-startbar', settings.menu.theme, true);
      toggleDocumentAttribute('data-sidebar-size', settings.menu.size, true, 'body');
    };
  }, [settings]);
  const resetSettings = () => updateSettings(INIT_STATE);
  return <ThemeContext.Provider value={useMemo(() => ({
    ...settings,
    themeMode: settings.theme,
    changeTheme,
    changeMenu: {
      theme: changeMenuTheme,
      size: changeMenuSize
    },
    resetSettings
  }), [settings])}>
      {children}
      <div className="startbar-overlay d-print-none" onClick={() => changeMenuSize('collapsed')} />
    </ThemeContext.Provider>;
};
export { LayoutProvider, useLayoutContext };