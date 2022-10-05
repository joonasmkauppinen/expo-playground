import { Dimensions } from 'react-native';
import { SharedValue } from 'react-native-reanimated';
import Svg from 'react-native-svg';

import { AnimatedPath } from '../AnimatedPath/AnimatedPath';

const strokeWidth = 4;
const viewBoxMargin = strokeWidth / 2;
const viewBoxWidth = 308;
const viewBoxHeight = 110;

const horizontalMargin = 16 * 2;
const width = Dimensions.get('screen').width - horizontalMargin;
const height = width * (viewBoxWidth / viewBoxHeight);

const paths = [
  'M46.3945 109.904C75.5449 109.904 92.5371 96.0615 92.5371 74.2354V74.1621C92.5371 57.0234 81.7705 47.7949 59.1387 43.6934L48.5186 41.7891C37.9717 39.8848 33.4307 37.6143 33.4307 32.8535V32.7803C33.4307 27.9463 37.8252 24.2109 46.3945 24.2109C54.8906 24.2109 61.043 27.873 61.6289 33.6592L61.7021 34.3916H90.2666L90.1934 32.7803C89.3145 13.0049 74.2998 0.407227 46.0283 0.407227C20.9795 0.407227 2.66895 13.8105 2.66895 35.0508V35.124C2.66895 51.5303 14.168 62.1504 35.1885 65.8857L45.8086 67.79C57.5273 69.9141 61.7754 71.9648 61.7754 76.9453V77.0186C61.7754 82.292 56.0625 86.1006 46.7607 86.1006C37.9717 86.1006 30.7939 82.292 29.5488 76.5791L29.4023 75.9199H0.837891L0.911133 77.3115C2.00977 98.1855 19.002 109.904 46.3945 109.904Z',
  'M128.572 108H169.441L201.229 2.31152H166.072L149.3 78.5566H148.714L131.941 2.31152H96.7852L128.572 108Z',
  'M258.65 109.904C289.339 109.904 307.576 92.0332 307.576 63.0293V48.7471H259.236V70.1338H277.693L277.547 71.2324C276.448 79.6553 269.49 84.5625 259.383 84.5625C245.76 84.5625 236.897 73.8691 236.897 54.6797V54.6064C236.897 35.8564 244.661 25.749 257.845 25.749C266.78 25.749 273.445 29.9971 275.569 37.0283L275.789 37.7607H306.331L306.258 37.0283C304.134 16.0078 284.212 0.407227 257.698 0.407227C225.179 0.407227 205.257 20.3291 205.257 54.9727V55.0459C205.257 90.2021 225.105 109.904 258.65 109.904Z',
];

interface AnimatedSVGProps {
  progress: SharedValue<number>;
}

export const AnimatedSVG = ({ progress }: AnimatedSVGProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`${-viewBoxMargin} ${-viewBoxMargin} ${
        viewBoxWidth + strokeWidth
      } ${viewBoxHeight + viewBoxMargin}`}
    >
      {paths.map((d, index) => (
        <AnimatedPath
          d={d}
          progress={progress}
          stroke="white"
          strokeWidth={strokeWidth}
          index={index}
          key={index}
        />
      ))}
    </Svg>
  );
};
