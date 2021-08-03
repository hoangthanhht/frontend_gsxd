<template>
  <ul class="menu-nav">
    <router-link
      to="/dashboard"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-architecture-and-city"></i>
          <span class="menu-text">Trang Chủ</span>
        </a>
      </li>
    </router-link>

    <!-- li cua cong viec -->

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/vue-bootstrap') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-list-1"></i>
        <span class="menu-text">Công việc</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <router-link
            to="/congviecgiao"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <!-- <i class="menu-icon flaticon2-expand"></i> -->
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Công việc được giao</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/themcongviec"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Thêm công việc mới</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <!-- li cua bao cao -->
    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/vue-bootstrap') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-graph-2"></i>

        <span class="menu-text">Báo cáo</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <router-link
            to="/baocaohoatdongcongtruong"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <!-- <i class="menu-icon flaticon2-expand"></i> -->
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Báo cáo hoạt động công trường</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Báo cáo quản lý hồ sơ</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/nhattrinh"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Nhật trình</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/baocaothang"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Báo cáo tháng</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/baocaokhoiquanly"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Báo cáo khối quản lý</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/vue-bootstrap') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-open-text-book"></i>
        <span class="menu-text">Văn bản & tài liệu</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" data-menu-toggle="hover" class="menu-item">
            <a href="https://qlda.gxd.vn" class="menu-link">
              <i class="menu-bullet menu-bullet-dot">
                <span></span>
              </i>
              <span class="menu-text">Trang tài liệu</span>
            </a>
          </li>
        </ul>
      </div>
    </li>

    <!-- li cua ho so -->

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/vue-bootstrap') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-files-and-folders"></i>
        <span class="menu-text">Hồ sơ</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <router-link
            to="/danhsachhoso"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <!-- <i class="menu-icon flaticon2-expand"></i> -->
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Danh sách hồ sơ</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/themhoso"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Thêm hồ sơ</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <!-- li cua hop dong -->

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/vue-bootstrap') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-sheet"></i>
        <span class="menu-text">Hợp đồng</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <router-link
            to="/danhsachhopdong"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <!-- <i class="menu-icon flaticon2-expand"></i> -->
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Danh sách hợp đồng</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/themhopdong"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <!-- <i class="menu-icon flaticon2-expand"></i> -->
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Thêm hợp đồng mới</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <!-- li cua quan ly nhan vien -->

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/vue-bootstrap') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-user-1"></i>

        <span class="menu-text">Quản lý user</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <router-link
            to="/dsnhanvien"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <!-- <i class="menu-icon flaticon2-expand"></i> -->
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Quản lý phân quyền</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/dsvaitro"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <!-- <i class="menu-icon flaticon2-expand"></i> -->
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Danh sách vai trò</span>
              </a>
            </li>
          </router-link>
          <router-link
            to=""
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <!-- <i class="menu-icon flaticon2-expand"></i> -->
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Danh sách phòng ban</span>
              </a>
            </li>
          </router-link>
          <router-link
            to="/danhsachnhanvien"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <!-- <i class="menu-icon flaticon2-expand"></i> -->
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Danh sách nhân viên</span>
              </a>
            </li>
          </router-link>
          <router-link
            to="/danhsachchucdanh"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <!-- <i class="menu-icon flaticon2-expand"></i> -->
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Danh sách chức danh</span>
              </a>
            </li>
          </router-link>
          <router-link
            to="/thongtinnhansu"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <!-- <i class="menu-icon flaticon2-expand"></i> -->
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Thông tin của tôi</span>
              </a>
            </li>
          </router-link>
          <router-link
            to="/chamcongcanhan"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <!-- <i class="menu-icon flaticon2-expand"></i> -->
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Chấm công của tôi</span>
              </a>
            </li>
          </router-link>
          <router-link
            to="/chamcongnhanvien"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <!-- <i class="menu-icon flaticon2-expand"></i> -->
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Chấm công</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>
    <!-- phần cho hệ thông -->
    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/vue-bootstrap') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-gear"></i>
        <span class="menu-text">Hệ Thống</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <router-link
            to="/cauhinhemail"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Cấu hình email</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/cauhinhhethong"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Cấu hình hệ thống</span>
              </a>
            </li>
          </router-link>

          <!-- <li
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item menu-item-submenu"
            v-bind:class="{
              'menu-item-open': hasActiveChildren('/vue-bootstrap/nav'),
            }"
          >
            <a href="#" class="menu-link menu-toggle">
              <i class="menu-bullet menu-bullet-dot">
                <span></span>
              </i>
              <span class="menu-text">Navigation</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="menu-submenu">
              <span class="menu-arrow"></span>
              <ul class="menu-subnav">
                <li aria-haspopup="true" class="menu-item menu-item-parent">
                  <span class="menu-link">
                    <span class="menu-text"></span>
                  </span>
                </li>

                <router-link
                  to="/vue-bootstrap/nav"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active',
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot">
                        <span></span>
                      </i>
                      <span class="menu-text">Nav</span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/navbar"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active',
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot">
                        <span></span>
                      </i>
                      <span class="menu-text">Navbar</span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </div>
          </li> -->
        </ul>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/vue-bootstrap') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon2-protected"></i>
        <span class="menu-text">Dự án</span>
      </a>
      <div class="menu-submenu menu-submenu-classic">
        <ul class="menu-subnav">
          <!-- <li
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item menu-item-submenu"
            v-bind:class="{
              'menu-item-active': hasActiveChildren('/custom-pages')
            }"
          >
            <a href="#" class="menu-link menu-toggle">
              <i class="menu-icon far fa-user"></i>
              <span class="menu-text">Profile</span>
              <i class="menu-arrow"></i>
            </a> -->

          <!-- <router-link
            to="/profile/profile-2"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text">Cấu hình Profile</span>
              </a>
            </li>
          </router-link> -->

          <!-- </li> -->
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "KTMenu",
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    },
  },
};
</script>
<style lang="scss" scoped>
.menu-item {
  display: inline-block;
  border-bottom-width: 4px;
  --tw-border-opacity: 1;
  border-color: rgba(0, 0, 0, var(--tw-border-opacity));
  padding: 0;
}
@media (min-width: 992px) {
  .header-menu .menu-nav > .menu-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0;
    padding: 0;
  }
}
</style>