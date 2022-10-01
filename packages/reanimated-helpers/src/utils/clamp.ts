import { Extrapolate, interpolate } from 'react-native-reanimated';

type Clamp = (value: number, input: number[], output?: number[]) => number;

export const clamp: Clamp = (value, input, output) => {
  'worklet';
  if (output !== undefined) {
    return interpolate(value, input, output, Extrapolate.CLAMP);
  }
  return interpolate(value, input, input, Extrapolate.CLAMP);
};
