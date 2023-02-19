import { ThreeDots } from 'react-loader-spinner';
import { Wrapper } from 'components/Loader/Loader.styled';

export const Loader = () => (
  <Wrapper>
    <ThreeDots
      height="15"
      width="60"
      radius="9"
      color="orange"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </Wrapper>
);
