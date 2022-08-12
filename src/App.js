import "./App.css";
import Web3 from "web3";
import ShowMeMoney from "./Components/ShowMeMoney";

function App() {
  const Web3Modal = window.Web3Modal.default;
  const WalletConnectProvider = window.WalletConnectProvider.default;
  const Fortmatic = window.Fortmatic;
  const evmChains = window.evmChains;

  let web3Modal;
  let provider;
  let selectedAccount;

  let nft = "0x03D8664f420e8f3892C35780e9e150310886F757";

  function init() {
    console.log("Initializing example");
    console.log("WalletConnectProvider is", WalletConnectProvider);
    console.log("Fortmatic is", Fortmatic);
    console.log(
      "window.web3 is",
      window.web3,
      "window.ethereum is",
      window.ethereum
    );

    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            137: "https://polygon-rpc.com",
          },
          chainId: 137,
        },
      },
    };

    web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
      disableInjectedProvider: false,
      theme: {
        background: "#000",
        main: "#00FF9E",
        secondary: "#fff",
        border: "#fff",
        hover: "rgba(255, 255, 255, 0.4)",
      },
    });

    console.log("Web3Modal instance is", web3Modal);
  }

  async function fetchAccountData() {
    const chainId = await web3.eth.getChainId();
    const accounts = await web3.eth.getAccounts();
    console.log("Got accounts", accounts);
  }

  async function fetchNFTs() {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    //document.getElementById('nftTable').getElementsByTagName('tbody')[0].innerHTML = "";
    var nft721 = new web3.eth.Contract(erc721, nft);

    var tbodyRef = document
      .getElementById("nftTable")
      .getElementsByTagName("tbody")[0];
    thtml = "";
    nft721.methods.balanceOf(accounts[0]).call(async (err, result) => {
      var i = 0;
      while (i < parseInt(result)) {
        await nft721.methods
          .getUserNFTByIndex(accounts[0], i)
          .call((err1, result1) => {
            thtml = thtml + "<tr><td>" + result1 + "</td></tr>";
            console.log(thtml);
          });
        i++;
      }
      console.log("Setting thml");
      tbodyRef.innerHTML = thtml;
    });
  }

  async function onConnect() {
    console.log("Opening a dialog", web3Modal);
    try {
      provider = await web3Modal.connect();
      document
        .querySelector("#btn-connect")
        .setAttribute("disabled", "disabled");
      document.querySelector("#btn-connect").style.display = "none";

      document.querySelector("#btn-disconnect").removeAttribute("disabled");
      document.querySelector("#btn-disconnect").style.display = "";
      document.getElementById("status").innerHTML = "Connected";
      fetchNFTs();
    } catch (e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
  }

  async function onDisconnect() {
    if (provider.close) {
      await provider.close();
      await web3Modal.clearCachedProvider();
      provider = null;
    }
    document.querySelector("#btn-connect").removeAttribute("disabled");
    document.querySelector("#btn-connect").style.display = "";

    document
      .querySelector("#btn-disconnect")
      .setAttribute("disabled", "disabled");
    document.querySelector("#btn-disconnect").style.display = "none";
    document.getElementById("status").innerHTML = "Not Connected";

    selectedAccount = null;
  }

  window.addEventListener("load", async () => {
    init();
    document.querySelector("#btn-connect").addEventListener("click", onConnect);
    document
      .querySelector("#btn-disconnect")
      .addEventListener("click", onDisconnect);
  });
  return (
    <div className="App">
      <ShowMeMoney />
    </div>
  );
}

export default App;
