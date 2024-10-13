import Theme from '@/src/styles/Theme';
import Typography from '@components/Typography/Typography';
import * as Styles from './index.styles';

const ERROR_MESSAGE = {
  ACCESS: `서비스에 접근할 수 없습니다.`,
  NOT_FOUND: `페이지를 찾을 수 없습니다.`,
};

function ErrorView() {
  return (
    <Styles.Container>
      <Styles.Content>
        {/* TODO: 아이콘 컴포넌트로 변경*/}
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
          >
            <g clip-path="url(#clip0_104_114)">
              <path
                d="M32.5 58.6667C17.772 58.6667 5.83333 46.728 5.83333 32C5.83333 17.272 17.772 5.33333 32.5 5.33333C47.228 5.33333 59.1667 17.272 59.1667 32C59.1667 46.728 47.228 58.6667 32.5 58.6667ZM29.8333 40V45.3333H35.1667V40H29.8333ZM29.8333 18.6667V34.6667H35.1667V18.6667H29.8333Z"
                fill="#003C72"
              />
            </g>
            <defs>
              <clipPath id="clip0_104_114">
                <rect
                  width="64"
                  height="64"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </p>
        <Typography variant="heading3" color={Theme.primary}>
          {ERROR_MESSAGE.NOT_FOUND}
        </Typography>
      </Styles.Content>
    </Styles.Container>
  );
}

export default ErrorView;
