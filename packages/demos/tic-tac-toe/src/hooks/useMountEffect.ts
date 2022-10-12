import { useEffect } from 'react';

// eslint-disable-next-line react-hooks/exhaustive-deps
export const useMountEffect = (cb: () => void) => useEffect(cb, []);
