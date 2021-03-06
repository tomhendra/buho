import * as React from 'react';
import { useLocalStorageState } from 'core/hooks';
import { StyledButton } from './styled';
import { Sun, Moon } from 'components/icons';

function ModeToggle() {
  const [theme, setTheme] = useLocalStorageState('theme', 'light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <StyledButton
      aria-label="Toggle colour mode"
      onClick={() => setTheme(nextTheme)}
    >
      {nextTheme === 'light' ? <Sun /> : <Moon />}
    </StyledButton>
  );
}

export { ModeToggle };
