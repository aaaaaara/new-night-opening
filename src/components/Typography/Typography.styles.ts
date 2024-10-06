import { css, styled } from 'styled-components';

export const Container = styled.p<{ $variant?: string; $color?: string }>`
  color: ${(props) => (props.$color ? props.$color : props.theme.textPrimary)};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  ${({ $variant }) => {
    switch ($variant) {
      case 'heading1':
        return css`
          font-size: 40px;
          font-style: normal;
          font-weight: 700;
          line-height: 130%;
          letter-spacing: -0.8px;
        `;
      case 'heading2':
        return css`
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -1px;
        `;
      case 'heading3':
        return css`
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -1.28px;
        `;
      case 'body-sm':
        return css`
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          letter-spacing: -0.13px;
        `;
      case 'body-s':
        return css`
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: -0.96px;
        `;
      case 'body-xs':
        return css`
          font-size: 10px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: -0.8px;
        `;
    }
  }}
`;

/*


//heading h1 (메인 타이틀)
color: #FFF;
font-family: Pretendard;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 130%; 
letter-spacing: -0.8px;

//heading h2 (상세 타이틀(병원이름))
color: #121212;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -1px;

//heading h3 (리스트 타이틀(병원이름), 에러페이지)
color: #003C72;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -1.28px;

//body (헤더, 하단버튼 텍스트, 푸터
color: rgba(255, 255, 255, 0.40);
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.28px;

//body-sm (툴팁텍스트)
color: #FFF;
font-family: Pretendard;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 150%; 
letter-spacing: -0.13px;

//body-s (필터텍스트, 추가정보 텍스트)
color: #999;
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.96px;

//body-xs (라벨텍스트)
color: #003C72;
font-family: Pretendard;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.8px;
*/
