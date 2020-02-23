import liff from "./index";
import preval from 'preval.macro'

console.log("WTF1")
export default function init() {
  console.log("WTF2")
  console.log(preval`module.exports = new Date().toISOString();`)
  liff.init({
    liffId: process.env.REACT_APP_LIFF_ID
  }).then((result) => {
    console.log("success")
    console.log("isInClient", liff.isInClient(), "isLoggedIn", liff.isLoggedIn())
    if (
      !liff.isInClient()
      &&
      !liff.isLoggedIn()
      &&
      !window.location.host.startsWith('localhost')
    ) {
      liff.login();
    }
  }).catch((err) => {
    console.log(err.code, err.message, window.location.href);
  });
}
