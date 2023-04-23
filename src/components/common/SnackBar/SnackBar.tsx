import styled from '@emotion/styled';

//TODO: compound component 패턴을 사용해서 좀더 유연한 컴포넌트 배치를 하자.
//TODO: 왼쪽이 아이콘이 올 수 있으며, 오른쪽이 아이콘이 될 수 있음
//TODO: react-toastify와 비슷하게 구현 목표
export function SnackBar() {
  return <SnackBarContainer></SnackBarContainer>;
}

const SnackBarContainer = styled.div``;
