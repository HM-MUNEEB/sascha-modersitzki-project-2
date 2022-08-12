import React from "react";

export default function ShowMeMoney() {
  const [walletConneted, setWalletConnected] = React.useState(false);
  return (
    <div className="MoneyWrapper">
      <div className="moneyText">
        <img src="../Images/SHOW ME MONEY - text.png" />
      </div>
      <div className="buttonElement">
        {walletConneted ? (
          <>
            <div className="trophyLine">
              <img src="../Images/TROPHY - icon.png" />
              <p>choose your number</p>
            </div>
            <div className="buttonPress">
              <button className="buttonTag">
                <p>54</p>
                <img src="../Images/numeric_badge.svg" />
              </button>
              <button className="buttonTag">
                <p>55</p>
                <img src="../Images/numeric_badge.svg" />
              </button>
              <button className="buttonTag">
                <p>56</p>
                <img src="../Images/numeric_badge.svg" />
              </button>
              <button className="buttonTag">
                <p>57</p>
                <img src="../Images/numeric_badge.svg" />
              </button>
              <button className="buttonTag">
                <p>58</p>
                <img src="../Images/numeric_badge.svg" />
              </button>
              <button className="buttonTag">
                <p>59</p>
                <img src="../Images/numeric_badge.svg" />
              </button>
              <button className="buttonTag">
                <p>60</p>
                <img src="../Images/numeric_badge.svg" />
              </button>
              <button className="buttonTag">
                <p>61</p>
                <img src="../Images/numeric_badge.svg" />
              </button>
              <button className="buttonTag">
                <p>62</p>
                <img src="../Images/numeric_badge.svg" />
              </button>
              <button className="buttonTag">
                <p>63</p>
                <img src="../Images/numeric_badge.svg" />
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              className="btn-connect-metamask"
              onClick={() => setWalletConnected(true)}
            >
              <div>
                <div className="metamask-icon">
                  <svg
                    width="46"
                    height="42"
                    viewBox="0 0 46 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44.9337 0L25.1956 14.2238L28.8661 5.84133L44.9337 0Z"
                      fill="#E17726"
                    />
                    <path
                      d="M1.11245 0.0168457L17.1372 5.84242L20.6224 14.3348L1.11245 0.0168457ZM36.9905 30.2502L45.7145 30.4119L42.6655 40.4992L32.0203 37.6448L36.9905 30.2502ZM9.00935 30.2502L13.961 37.6448L3.33374 40.4994L0.303314 30.4119L9.00935 30.2502Z"
                      fill="#E27625"
                    />
                    <path
                      d="M20.1485 12.1716L20.505 23.3862L9.83682 22.9135L12.8714 18.4548L12.9098 18.412L20.1485 12.1716ZM25.741 12.0465L33.0902 18.4123L33.1283 18.455L36.1628 22.9137L25.4969 23.3862L25.741 12.0465ZM14.2735 30.2827L20.0986 34.7031L13.3319 37.8847L14.2735 30.2827ZM31.7276 30.282L32.6496 37.8849L25.9018 34.7027L31.7276 30.282Z"
                      fill="#E27625"
                    />
                    <path
                      d="M26.0507 34.2864L32.8981 37.5155L26.5287 40.4635L26.5948 38.5151L26.0507 34.2864ZM19.9473 34.2878L19.4246 38.4832L19.4675 40.4613L13.0832 37.5155L19.9473 34.2878Z"
                      fill="#D5BFB2"
                    />
                    <path
                      d="M17.97 24.8499L19.7593 28.5123L13.6674 26.7742L17.97 24.8499ZM28.0298 24.8502L32.3527 26.7742L26.2408 28.5117L28.0298 24.8502Z"
                      fill="#233447"
                    />
                    <path
                      d="M14.7391 30.2453L13.7544 38.1273L8.47641 30.4177L14.7391 30.2453ZM31.2613 30.2455L37.5242 30.4177L32.2264 38.1276L31.2613 30.2455ZM36.317 22.4678L31.7592 26.9917L28.2451 25.4277L26.5627 28.8724L25.4598 22.9488L36.317 22.4678ZM9.68068 22.4678L20.5401 22.9488L19.437 28.8724L17.7542 25.4282L14.2588 26.9919L9.68068 22.4678Z"
                      fill="#CC6228"
                    />
                    <path
                      d="M9.37357 21.5394L14.5302 26.6355L14.7088 31.6666L9.37357 21.5394ZM36.6316 21.5303L31.2866 31.6756L31.4879 26.6355L36.6316 21.5303ZM20.288 21.8498L20.4955 23.1221L21.0083 26.2915L20.6786 36.0259L19.1198 28.206L19.1193 28.1251L20.288 21.8498ZM25.7093 21.8321L26.8811 28.1251L26.8805 28.206L25.3178 36.0455L25.256 34.0846L25.0121 26.2337L25.7093 21.8321Z"
                      fill="#E27525"
                    />
                    <path
                      d="M31.9463 26.4331L31.7718 30.8043L26.3319 34.932L25.2322 34.1753L26.4649 27.9917L31.9463 26.4331ZM14.0726 26.4331L19.5349 27.9917L20.7675 34.1753L19.6679 34.932L14.2278 30.8039L14.0726 26.4331Z"
                      fill="#F5841F"
                    />
                    <path
                      d="M12.0423 36.5502L19.002 39.7618L18.9725 38.3903L19.5549 37.8924H26.443L27.0464 38.3885L27.0018 39.759L33.9175 36.5582L30.5523 39.2665L26.4832 41.9883H19.499L15.4326 39.2553L12.0423 36.5502Z"
                      fill="#C0AC9D"
                    />
                    <path
                      d="M25.5523 33.8589L26.5362 34.536L27.1129 39.0167L26.2784 38.3305H19.7241L18.9055 39.0305L19.4632 34.5363L20.4475 33.8589H25.5523Z"
                      fill="#161616"
                    />
                    <path
                      d="M43.6306 0.393799L46 7.31627L44.5203 14.3157L45.574 15.1073L44.1481 16.1667L45.2198 16.9728L43.8008 18.2312L44.6719 18.8456L42.3601 21.4752L32.878 18.7863L32.7958 18.7434L25.9629 13.1298L43.6306 0.393799ZM2.36936 0.393799L20.0373 13.1298L13.2042 18.7434L13.122 18.7863L3.63993 21.4752L1.32807 18.8456L2.19848 18.2317L0.780383 16.9728L1.84988 16.1676L0.40268 15.1052L1.49608 14.3131L0 7.31662L2.36936 0.393799Z"
                      fill="#763E1A"
                    />
                    <path
                      d="M32.4142 18.1982L42.461 21.047L45.7251 30.8446H37.1137L31.1804 30.9174L35.4955 22.726L32.4142 18.1982ZM13.5858 18.1982L10.504 22.726L14.8195 30.9174L8.88895 30.8446H0.29306L3.53876 21.0472L13.5858 18.1982ZM29.3581 5.79456L26.5479 13.1864L25.9515 23.1719L25.7233 26.3018L25.7052 34.2972H20.2946L20.277 26.3168L20.0481 23.1693L19.4515 13.1864L16.6417 5.79456H29.3581Z"
                      fill="#F5841F"
                    />
                  </svg>
                </div>
                <p>Connect Metamask Wallet</p>
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
