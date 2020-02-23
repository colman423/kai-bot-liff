import liff from "./index";
import VConsole from 'vconsole'
var vConsole = new VConsole();

export default function init() {
  liff.init({
    liffId: process.env.REACT_APP_LIFF_ID
  }).then((result) => {
    console.log("success")
    console.log("isInClient", liff.isInClient(), "isLoggedIn", liff.isLoggedIn())
    alert("success")
    alert("isInClient, "+ liff.isInClient()+ ", isLoggedIn, "+ liff.isLoggedIn())
    if( !liff.isInClient() && !liff.isLoggedIn() ) {
      liff.login();
    }
  }).catch((err) => {
    console.log(err.code, err.message);
    alert(err.code, err.message);
  });
}
