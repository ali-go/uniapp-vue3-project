<script>
import { checkForUpdate } from "./utils/checkForUpdate";
import { getTestData } from "./api/test";

export default {
  onLaunch: function () {
    checkForUpdate(); // 检测小程序是否更新
    console.log("App Launch");
    getTestData();
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
</style>
