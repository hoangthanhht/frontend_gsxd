<template>
  <router-view></router-view>
</template>

<style lang="scss">
// 3rd party plugins css
@import "~bootstrap-vue/dist/bootstrap-vue.css";
@import "~perfect-scrollbar/css/perfect-scrollbar.css";
@import "~socicon/css/socicon.css";
@import "~animate.css";
@import "~@fortawesome/fontawesome-free/css/all.css";
@import "~line-awesome/dist/line-awesome/css/line-awesome.css";
@import "assets/plugins/flaticon/flaticon.css";
@import "assets/plugins/flaticon/tailwind.css";
@import "assets/plugins/flaticon2/flaticon.css";
@import "assets/plugins/keenthemes-icons/font/ki.css";

// Main demo style scss
@import "assets/sass/style.vue";

// Check documentation for RTL css
// Update HTML with RTL attribute at public/index.html
/*@import "assets/css/style.vue.rtl";*/
</style>

<script>
import { OVERRIDE_LAYOUT_CONFIG } from "@/core/services/store/store_metronic/config.module";
import { mapActions } from "vuex";
export default {
  name: "MetronicVue",
  created() {
    this["storeqlda/checkLogin"]().then((res) => {
      if (res.ok === false) this.$router.push("/login");
    });
  },
  methods: {
    ...mapActions(["storeqlda/checkLogin"]),
  },
  mounted() {
    /**
     * this is to override the layout config using saved data from localStorage
     * remove this to use config only from static json (@/core/config/layout.config.json)
     */
    this.$store.dispatch(OVERRIDE_LAYOUT_CONFIG);
  },
};
</script>
<style >
.nav-tabs {
  /* display: none; */
}
@media (min-width: 992px) {
  .header-fixed.subheader-fixed.subheader-enabled .wrapper {
    padding-top: 143px;
  }
}

@media (min-width: 992px) {
  .aside-fixed .wrapper {
    padding-left: 0;
  }
}

@media (min-width: 992px) {
  .aside-enabled .header.header-fixed {
    left: 0px;
  }
}

@media (min-width: 992px) {
  .aside-enabled.subheader-fixed .subheader {
    left: 0px;
  }
}
@media (min-width: 1200px)
{
  .container-xl, .container-lg, .container-md, .container-sm, .container {
      max-width: 1330px;
  }
}

@media (min-width: 992px)
{
.header-fixed.subheader-fixed .subheader {
  top: 85px;
    }
}
@media (min-width: 992px)
{
.header.header-fixed {
    height: 86px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 97;
}
}
</style>