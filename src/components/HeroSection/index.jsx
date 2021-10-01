/* eslint-disable react/prop-types */
import { Wrapper, Content, Text } from './styled';

const HeroSection = ({image, title, text}) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default HeroSection;
