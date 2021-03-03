import { FC } from "react";

/* eslint-disable-next-line */
export interface LogoProps {
  height?: string;
  width?: string;
}

export const Logo: FC<LogoProps> = ({ height = "auto", width = "auto" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 517 239"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M133.642 137.445C131.926 137.445 130.44 137.445 128.952 137.445C105.195 137.445 81.4418 137.457 57.6882 137.445C42.2606 137.439 30.9036 125.927 30.8866 110.288C30.878 100.875 30.8695 91.4679 30.8894 82.0605C30.8979 77.865 32.5995 76.0336 36.602 76.0308C54.8674 76.0135 73.1357 75.7831 91.3954 76.1085C116.515 76.5606 138.903 96.0521 143.539 121.012C149.186 151.376 131.057 179.794 101.386 186.803C97.1535 187.805 92.7163 188.22 88.3588 188.309C78.0841 188.522 67.8009 188.367 57.5206 188.381C47.9362 188.392 41.2464 195.237 41.2266 205.033C41.2124 212.621 41.2209 220.211 41.2209 227.799C41.2209 230.626 39.7494 232.348 37.1701 233.085C34.855 233.753 32.9659 232.754 31.7643 230.86C31.1223 229.852 30.932 228.4 30.9206 227.148C30.8468 219.46 30.8525 211.771 30.8894 204.077C30.9576 189.409 42.4054 177.724 56.9098 177.606C67.9884 177.516 79.067 177.672 90.1455 177.565C112.235 177.349 131.554 159.629 133.642 137.445ZM41.38 86.662C41.3231 87.8397 41.2351 88.8216 41.2322 89.8064C41.2209 96.4811 41.2209 103.159 41.2266 109.833C41.2379 119.964 47.8936 126.765 57.8984 126.777C82.0468 126.8 106.195 126.788 130.341 126.782C131.386 126.782 132.429 126.67 133.61 126.601C133.48 125.213 133.468 124.194 133.281 123.215C129.276 102.298 110.436 86.5439 89.37 86.5036C74.3998 86.4777 59.4352 86.4978 44.4678 86.5036C43.5048 86.5093 42.5333 86.6015 41.38 86.662Z"
        fill="white"
      />
      <path
        d="M69.0524 75.9358C58.238 75.9358 47.4207 76.0222 36.6064 76.0308C32.6039 76.0337 30.9052 77.868 30.8938 82.0605C30.8739 91.4708 30.8796 100.878 30.8909 110.288C30.908 125.927 42.2649 137.439 57.6926 137.445C67.1747 137.451 76.654 137.451 86.1361 137.451C100.408 137.451 114.685 137.445 128.956 137.445C130.442 137.445 131.93 137.445 133.646 137.445C131.558 159.626 112.236 177.347 90.1499 177.568C87.0962 177.597 84.0425 177.609 80.9888 177.609C75.6569 177.609 70.3221 177.58 64.9874 177.58C62.2973 177.58 59.6043 177.586 56.9171 177.609C42.4127 177.727 30.9648 189.415 30.8966 204.08C30.8597 211.774 30.854 219.463 30.9279 227.151C30.9392 228.406 31.1296 229.855 31.7716 230.863C32.7203 232.36 34.0952 233.299 35.7712 233.299C36.22 233.299 36.6887 233.232 37.1773 233.091C39.7566 232.354 41.2281 230.632 41.2281 227.804C41.2281 220.217 41.2196 212.627 41.2338 205.039C41.2537 195.243 47.9434 188.398 57.5278 188.387C58.059 188.387 58.5874 188.387 59.1186 188.387C64.6295 188.387 70.1432 188.427 75.6569 188.427C79.8923 188.427 84.1306 188.404 88.366 188.315C92.7236 188.226 97.1607 187.808 101.393 186.809C131.064 179.8 149.193 151.382 143.546 121.018C138.907 96.0579 116.52 76.5664 91.4027 76.1143C83.9488 75.9761 76.5006 75.9358 69.0524 75.9358ZM89.863 126.794C79.2106 126.794 68.5552 126.788 57.9028 126.777C47.898 126.765 41.2423 119.961 41.2309 109.833C41.2253 103.159 41.2253 96.4812 41.2366 89.8064C41.2395 88.8216 41.3275 87.8369 41.3843 86.662C42.5376 86.6015 43.5092 86.5094 44.4778 86.5065C53.7185 86.5036 62.9591 86.495 72.2026 86.495C77.9294 86.495 83.6562 86.4979 89.3801 86.5065C110.446 86.5439 129.283 102.301 133.291 123.217C133.479 124.197 133.49 125.213 133.621 126.604C132.439 126.67 131.393 126.785 130.351 126.785C116.849 126.782 103.356 126.794 89.863 126.794Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.3823 21.4021C46.1352 22.0586 45.942 22.3322 45.9392 22.6115C45.8653 28.9148 42.0844 30.9506 36.5338 31.5841C29.8554 32.3443 24.6626 35.8256 20.9442 41.5703C20.0949 42.8833 19.0694 44.2194 17.8167 45.0919C13.8454 47.8591 15.8623 52.9328 19.4387 54.2689C22.2708 55.3286 25.0206 56.6647 27.6681 58.1361C29.1821 58.9741 30.5911 60.172 31.7387 61.4879C33.4431 63.4402 33.213 66.4378 31.5086 68.298C29.8667 70.0919 26.9522 70.2935 24.7763 68.989C21.8504 67.2412 18.9359 65.3925 15.8254 64.0449C4.20422 59.023 1.77829 46.0911 10.9252 37.395C11.7036 36.652 12.3995 35.7882 13.0046 34.8984C17.9786 27.5787 24.8331 23.1471 33.392 21.5144C35.3265 21.1487 35.9656 20.3194 36.19 18.4477C36.5054 15.8014 37.0848 13.1753 37.7013 10.5751C38.8034 5.90454 42.7463 4.22578 46.2715 7.37597C50.6547 11.2864 55.0293 15.4098 58.5063 20.1265C67.9316 32.9173 72.7664 47.551 73.7265 63.4776C73.9594 67.3851 72.2465 69.5736 69.1161 69.7953C65.6221 70.0458 63.7189 68.2922 63.466 64.186C62.5428 49.2039 57.6654 35.7623 48.5157 23.9361C47.9248 23.1615 47.2658 22.4445 46.3823 21.4021Z"
        fill="white"
      />
      <path
        d="M42.569 5.75903C40.3447 5.75903 38.4244 7.53282 37.7086 10.5707C37.0922 13.1709 36.5127 15.797 36.1974 18.4433C35.9701 20.315 35.331 21.1443 33.3993 21.51C24.8376 23.1484 17.9859 27.5771 13.0119 34.8969C12.404 35.7895 11.7109 36.6505 10.9325 37.3934C1.78277 46.0896 4.20869 59.0215 15.8327 64.0434C18.9432 65.391 21.8577 67.2367 24.7836 68.9875C25.7153 69.5461 26.7806 69.8283 27.8231 69.8283C29.2179 69.8283 30.5757 69.3244 31.5131 68.2964C33.2147 66.4362 33.4476 63.4387 31.7432 61.4864C30.5956 60.1704 29.1866 58.9725 27.6725 58.1346C25.025 56.6632 22.2724 55.3271 19.4431 54.2674C15.8696 52.9313 13.8499 47.8605 17.8211 45.0904C19.0739 44.2179 20.0993 42.8789 20.9487 41.5687C24.67 35.8241 29.8598 32.3399 36.5382 31.5826C42.086 30.9491 45.8698 28.9132 45.9437 22.61C45.9465 22.3307 46.1397 22.0571 46.3868 21.4006C47.2731 22.443 47.9293 23.16 48.5258 23.9317C57.6727 35.755 62.553 49.1994 63.4762 64.1816C63.712 68.0315 65.3993 69.8139 68.49 69.8139C68.6945 69.8139 68.9076 69.8053 69.1263 69.7909C72.2595 69.5692 73.9696 67.3836 73.7367 63.4732C72.7765 47.5495 67.9417 32.9129 58.5164 20.1221C55.0423 15.4054 50.6648 11.2819 46.2817 7.37156C45.046 6.26871 43.7649 5.75903 42.569 5.75903Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M502.431 220.974C502.019 221.795 501.78 222.791 501.167 223.41C491.281 233.336 479.387 236.126 466.298 232.23C453.461 228.406 445.453 219.238 442.55 206.107C438.141 186.198 448.177 167.594 466.21 162.031C489.173 154.944 513.376 169.146 514.04 197.187C514.279 207.058 514.097 216.943 514.069 226.82C514.063 229.417 513.478 231.706 510.677 232.743C507.212 234.024 503.95 232.069 503.701 228.346C503.544 226.169 503.669 223.981 503.669 221.795C503.252 221.521 502.848 221.251 502.431 220.974ZM477.853 224.191C492.798 224.185 503.757 212.779 503.794 197.207C503.831 181.51 492.738 169.756 477.836 169.704C462.767 169.647 451.484 181.441 451.495 197.23C451.509 212.854 462.596 224.197 477.853 224.191Z"
        fill="white"
      />
      <path
        d="M478.012 160.225C474.123 160.225 470.143 160.815 466.206 162.03C448.174 167.594 438.138 186.198 442.546 206.107C445.45 219.241 453.46 228.406 466.294 232.23C470.072 233.356 473.751 233.923 477.31 233.923C486.082 233.923 494.133 230.471 501.163 223.413C501.78 222.794 502.018 221.798 502.427 220.977C502.842 221.254 503.248 221.521 503.663 221.792C503.663 223.98 503.538 226.169 503.694 228.343C503.89 231.289 505.981 233.134 508.563 233.134C509.239 233.134 509.952 233.005 510.671 232.74C513.472 231.706 514.057 229.417 514.063 226.817C514.091 216.94 514.273 207.055 514.034 197.184C513.486 173.952 496.783 160.225 478.012 160.225ZM477.842 224.191C462.59 224.191 451.509 212.848 451.494 197.23C451.483 181.476 462.712 169.704 477.728 169.704C477.765 169.704 477.799 169.704 477.836 169.704C492.738 169.756 503.828 181.51 503.794 197.207C503.757 212.779 492.798 224.185 477.853 224.191C477.847 224.191 477.847 224.191 477.842 224.191Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M146.726 200.482C146.47 211.816 156.557 222.74 168.019 224.126C175.933 225.082 183.206 223.636 189.699 218.715C192.222 216.803 195.329 217.062 196.849 219.222C198.545 221.623 198.218 223.872 195.869 225.678C175.502 241.302 144.646 233.844 137.877 207.479C133.483 190.372 139.891 172.369 153.833 164.557C171.783 154.502 198.997 161.222 202.9 189.151C204.42 200.021 203.868 200.485 193.225 200.485C179.07 200.485 164.917 200.485 150.762 200.485C149.413 200.482 148.061 200.482 146.726 200.482ZM146.879 191.489C162.48 191.489 178.064 191.489 193.662 191.489C192.779 179.015 183.723 169.921 172.155 169.674C158.225 169.38 148.402 177.811 146.879 191.489Z"
        fill="white"
      />
      <path
        d="M170.914 160.144C164.971 160.144 159.014 161.65 153.833 164.553C139.894 172.365 133.482 190.368 137.877 207.475C142.28 224.623 156.875 233.774 172.147 233.774C180.35 233.774 188.75 231.136 195.869 225.674C198.218 223.868 198.545 221.619 196.849 219.218C196.02 218.037 194.713 217.424 193.287 217.424C192.105 217.424 190.841 217.844 189.699 218.711C184.444 222.693 178.68 224.398 172.479 224.398C171.016 224.398 169.528 224.303 168.016 224.122C156.554 222.739 146.467 211.812 146.723 200.478C148.058 200.478 149.41 200.478 150.759 200.478C164.911 200.478 179.066 200.478 193.221 200.478C203.868 200.478 204.417 200.017 202.897 189.144C200.124 169.278 185.555 160.144 170.914 160.144ZM146.879 191.488C148.376 178.041 157.898 169.661 171.456 169.661C171.689 169.661 171.922 169.667 172.155 169.673C183.722 169.92 192.778 179.014 193.662 191.488C178.061 191.488 162.477 191.488 146.879 191.488Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M375.496 224.362C381.521 224.385 386.904 222.746 391.642 218.862C394.565 216.454 397.318 216.748 399.215 219.346C400.854 221.594 400.36 223.941 397.417 226.225C386.319 234.823 373.982 236.139 361.321 231.051C348.799 226.012 341.808 216.028 340.016 202.486C338.496 191.002 340.854 180.417 348.481 171.592C361.665 156.339 385.393 156.339 399.031 171.355C401.86 174.471 402.087 176.772 399.778 178.955C397.482 181.12 395.139 180.777 392.261 177.863C383.413 168.87 371.09 166.953 361.21 173.224C352.847 178.528 350.012 186.83 349.524 196.312C348.848 209.523 357.02 220.929 369.297 223.714C371.311 224.166 373.425 224.16 375.496 224.362Z"
        fill="white"
      />
      <path
        d="M373.694 160.116C364.374 160.116 355.097 163.934 348.481 171.588C340.851 180.41 338.493 190.996 340.016 202.482C341.808 216.024 348.799 226.008 361.321 231.047C366.221 233.016 371.073 234.027 375.819 234.027C383.341 234.027 390.613 231.49 397.417 226.221C400.36 223.937 400.854 221.593 399.215 219.342C398.195 217.942 396.923 217.211 395.511 217.211C394.301 217.211 392.988 217.752 391.642 218.858C386.935 222.716 381.594 224.358 375.618 224.358C375.578 224.358 375.538 224.358 375.495 224.358C373.425 224.156 371.311 224.162 369.297 223.704C357.02 220.92 348.847 209.514 349.523 196.302C350.012 186.82 352.847 178.519 361.21 173.215C365.096 170.747 369.36 169.549 373.643 169.549C380.245 169.549 386.892 172.4 392.261 177.856C393.903 179.521 395.372 180.341 396.755 180.341C397.795 180.341 398.792 179.875 399.775 178.948C402.084 176.765 401.857 174.464 399.027 171.349C392.235 163.873 382.944 160.116 373.694 160.116Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M217.48 163.479C217.48 156.551 217.468 149.992 217.485 143.435C217.494 140.792 218.678 138.514 221.249 138.284C223.033 138.119 225.237 139.07 226.7 140.242C227.618 140.973 227.766 143.02 227.8 144.489C227.925 149.545 227.851 154.608 227.851 159.664C227.851 160.81 227.851 161.953 227.851 163.482C232.461 163.482 236.719 163.459 240.977 163.488C245.216 163.511 246.892 164.887 246.818 168.207C246.75 171.289 245.071 172.567 241.006 172.584C236.745 172.607 232.478 172.59 227.854 172.59C227.854 178.545 227.854 184.154 227.854 189.766C227.854 196.003 227.785 202.24 227.874 208.472C227.99 216.952 233.453 222.486 241.827 222.757C242.639 222.786 243.452 222.792 244.261 222.786C247.349 222.746 249.414 223.938 249.684 227.347C249.934 230.428 248.164 232.853 244.92 233.106C237.87 233.662 231.302 232.245 225.831 227.318C219.994 222.066 217.534 215.299 217.491 207.55C217.434 196.959 217.477 186.374 217.477 175.786C217.477 174.865 217.477 173.941 217.477 172.593C214.73 172.593 212.213 172.639 209.702 172.581C206.435 172.509 204.634 170.894 204.606 168.11C204.577 165.291 206.336 163.609 209.588 163.502C212.099 163.413 214.622 163.479 217.48 163.479Z"
        fill="white"
      />
      <path
        d="M221.66 138.263C221.52 138.263 221.384 138.274 221.248 138.286C218.677 138.516 217.492 140.794 217.484 143.437C217.464 149.994 217.478 156.554 217.478 163.482C215.725 163.482 214.101 163.453 212.521 163.453C211.527 163.453 210.555 163.464 209.581 163.499C206.326 163.606 204.567 165.287 204.599 168.106C204.63 170.891 206.428 172.503 209.695 172.578C210.66 172.601 211.629 172.607 212.609 172.607C214.177 172.607 215.779 172.59 217.47 172.59C217.47 173.94 217.47 174.862 217.47 175.783C217.47 186.374 217.427 196.959 217.484 207.547C217.526 215.296 219.986 222.063 225.824 227.315C230.559 231.577 236.121 233.215 242.104 233.215C243.03 233.215 243.967 233.175 244.913 233.103C248.157 232.849 249.927 230.425 249.677 227.344C249.41 223.992 247.407 222.783 244.399 222.783C244.351 222.783 244.302 222.783 244.254 222.783C244.072 222.783 243.891 222.783 243.709 222.783C243.078 222.783 242.447 222.777 241.817 222.754C233.443 222.483 227.98 216.949 227.864 208.468C227.775 202.237 227.844 196 227.844 189.763C227.844 184.151 227.844 178.545 227.844 172.587C230.568 172.587 233.17 172.593 235.718 172.593C237.493 172.593 239.246 172.593 240.996 172.581C245.064 172.564 246.74 171.288 246.808 168.204C246.882 164.887 245.206 163.508 240.967 163.485C239.3 163.473 237.633 163.467 235.945 163.467C233.32 163.467 230.645 163.479 227.841 163.479C227.841 161.95 227.841 160.807 227.841 159.661C227.841 154.604 227.917 149.542 227.79 144.486C227.756 143.017 227.608 140.97 226.69 140.238C225.35 139.156 223.361 138.263 221.66 138.263Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M269.312 170.068C277.092 162.02 286.012 159.011 296.5 160.569C297.849 160.77 299.184 161.243 300.462 161.755C302.681 162.639 303.664 164.304 303.263 166.76C302.834 169.403 301.033 170.071 298.735 170.129C294.241 170.224 289.665 169.835 285.265 170.549C275.339 172.153 269.468 179.453 269.408 189.678C269.334 202.022 269.474 214.373 269.297 226.711C269.269 228.6 268.553 231.149 267.229 232.217C263.88 234.927 259.392 232.246 259.369 227.728C259.307 216.086 259.344 204.45 259.344 192.808C259.344 183.988 259.31 175.171 259.364 166.357C259.386 162.515 261.466 160.58 264.994 160.946C267.502 161.211 269.11 162.504 269.289 165.165C269.397 166.794 269.312 168.43 269.312 170.068Z"
        fill="white"
      />
      <path
        d="M291.315 160.167C283.029 160.167 275.777 163.378 269.312 170.067C269.312 168.432 269.397 166.793 269.292 165.169C269.113 162.508 267.505 161.216 264.997 160.951C264.715 160.922 264.448 160.905 264.181 160.905C261.153 160.905 259.386 162.822 259.367 166.361C259.313 175.175 259.347 183.993 259.347 192.813C259.347 204.454 259.307 216.091 259.372 227.732C259.389 231.001 261.741 233.307 264.309 233.307C265.292 233.307 266.306 232.97 267.229 232.222C268.553 231.153 269.269 228.605 269.297 226.716C269.476 214.377 269.334 202.027 269.408 189.682C269.468 179.457 275.34 172.158 285.265 170.554C287.534 170.188 289.847 170.11 292.176 170.11C293.798 170.11 295.426 170.151 297.048 170.151C297.61 170.151 298.176 170.145 298.738 170.133C301.036 170.076 302.834 169.408 303.266 166.764C303.667 164.305 302.684 162.641 300.465 161.76C299.19 161.247 297.852 160.775 296.502 160.573C294.727 160.303 293.003 160.167 291.315 160.167Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M324.648 196.959C324.648 206.836 324.662 216.71 324.645 226.581C324.633 230.871 322.835 233.183 319.586 233.195C316.319 233.206 314.376 230.851 314.37 226.71C314.359 206.847 314.353 186.976 314.376 167.113C314.382 163.119 316.202 160.982 319.463 160.933C322.793 160.876 324.619 162.94 324.633 166.986C324.673 176.978 324.648 186.973 324.648 196.959Z"
        fill="white"
      />
      <path
        d="M319.588 160.934C319.546 160.934 319.506 160.934 319.463 160.934C316.202 160.985 314.382 163.122 314.376 167.113C314.353 186.976 314.359 206.848 314.37 226.71C314.376 230.84 316.31 233.195 319.563 233.195C319.569 233.195 319.577 233.195 319.586 233.195C322.838 233.184 324.633 230.871 324.645 226.581C324.662 216.71 324.648 206.836 324.648 196.959C324.648 186.97 324.673 176.978 324.633 166.984C324.619 162.993 322.838 160.934 319.588 160.934Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M426.5 197.017C426.5 207 426.522 216.983 426.488 226.964C426.477 230.911 424.574 233.201 421.469 233.183C418.293 233.166 416.333 231.012 416.321 226.992C416.265 207.026 416.265 187.062 416.316 167.096C416.327 163.064 418.242 160.948 421.449 160.936C424.733 160.931 426.477 162.984 426.485 167.067C426.519 177.05 426.5 187.033 426.5 197.017Z"
        fill="white"
      />
      <path
        d="M421.469 160.94C421.463 160.94 421.455 160.94 421.449 160.94C418.242 160.951 416.327 163.065 416.316 167.099C416.265 187.065 416.265 207.029 416.321 226.996C416.333 231.016 418.29 233.172 421.469 233.187C421.483 233.187 421.497 233.187 421.508 233.187C424.591 233.187 426.477 230.898 426.488 226.967C426.522 216.984 426.5 207 426.5 197.02C426.5 187.04 426.522 177.053 426.488 167.073C426.477 162.996 424.741 160.94 421.469 160.94Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M319.353 147.25C315.138 147.227 312.186 144.157 312.283 139.893C312.374 135.882 315.382 132.982 319.47 132.953C323.685 132.924 326.793 136.008 326.739 140.163C326.676 144.319 323.597 147.273 319.353 147.25Z"
        fill="white"
      />
      <path
        d="M319.526 132.953C319.506 132.953 319.486 132.953 319.466 132.953C315.379 132.982 312.37 135.884 312.279 139.893C312.183 144.154 315.134 147.227 319.35 147.25C319.37 147.25 319.387 147.25 319.407 147.25C323.619 147.25 326.676 144.304 326.736 140.163C326.792 136.023 323.713 132.953 319.526 132.953Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M421.071 147.25C417.103 147.155 414.208 144.082 414.253 140.005C414.305 135.81 417.355 132.89 421.636 132.959C425.894 133.019 428.692 136.023 428.559 140.376C428.42 144.624 425.446 147.362 421.071 147.25Z"
        fill="white"
      />
      <path
        d="M421.491 132.959C417.287 132.959 414.305 135.856 414.253 140.005C414.208 144.083 417.103 147.152 421.071 147.25C421.156 147.25 421.244 147.25 421.33 147.25C425.559 147.25 428.423 144.541 428.556 140.377C428.693 136.023 425.892 133.02 421.633 132.959C421.585 132.959 421.54 132.959 421.491 132.959Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.3234 44.9335C38.2609 47.2026 36.5252 48.89 34.3124 48.6481C32.0597 48.4034 30.8297 47.1047 30.8865 44.6974C30.9462 42.2585 32.3069 41.1009 34.5481 40.9886C36.7809 40.8734 38.3887 42.6443 38.3234 44.9335Z"
        fill="white"
      />
      <path
        d="M34.7498 40.9784C34.6845 40.9784 34.6163 40.9813 34.5481 40.9842C32.304 41.0965 30.9462 42.2541 30.8865 44.693C30.8297 47.1003 32.0569 48.3961 34.3124 48.6437C34.4544 48.6581 34.5964 48.6667 34.7328 48.6667C36.7411 48.6667 38.2637 47.0513 38.3234 44.9291C38.3859 42.7119 36.8746 40.9784 34.7498 40.9784Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;