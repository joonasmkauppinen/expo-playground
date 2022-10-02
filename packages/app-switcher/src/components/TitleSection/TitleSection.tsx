import { ContainerView, TitleText } from './TitleSection.styles';

interface TitleSectionProps {
  children: string;
}

export const TitleSection = ({ children }: TitleSectionProps) => {
  return (
    <ContainerView>
      <TitleText>{children}</TitleText>
    </ContainerView>
  );
};
