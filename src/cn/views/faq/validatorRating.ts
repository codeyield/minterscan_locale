export default {
  title: '验证器的评分',
  power: '语音功率',
  disclaimer: `
    <img class="minter-guy" src="https://www.minter.network/img/hero-minter.svg" />
    <p class="title is-size-6">Key Idea</p>
    <p>
      Minterscan propose all users of the Minter network to make an honest, transparent rating,
      based on user sympathy.
      Not dependent on how long the validator has been working on the network.
      Newcomers are also can take first place of the ranking if they provide first-class services to their delegates.
      If the delegates are satisfied with the service, it will not be difficult for them to spend one minute to vote.
    </p>
    <p><b>All validator data, including rating, is stored in the blockchain</b></p>
    <p>
      You can vote with <a href="/pco">MSCAN coin</a>.
      If the sender is not a validator's delegator, his vote will not be counted.
      Rating is updated instantly.
      The vote power depends on the total stake of the delegator in masternode at the time of voting:
    </p>
  `,
  text1: `
    <p><b>How to vote</b></p>
    1. Open <a href="https://console.minter.network/" target="_blank">Minter console</a>
    or your mobile wallet and send 1 MSCAN to address:
  `,
  text2: `
    2. "Message" field must be filled with public key of validator you wish to vote for.
    You can find key on <a href="/validators">this page</a>.`,
  table0: `从一亿BIP`,
  table1: `从一千万BIP`,
  table2: `从一百万BIP`,
  table3: `从十万BIP`,
  table4: `从一万BIP`,
  table5: `从一千到一万BIP`,
  table6: `少于一千BIP`
}
