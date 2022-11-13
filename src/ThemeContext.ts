import { createContext } from 'react';

export const ThemeContext = createContext<[string, (theme: string) => void]>(['#50577a', (value) => value]);
