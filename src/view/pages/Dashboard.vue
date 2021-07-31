<template>
  <div class="home-page">
    <div class="gr-info">
      <div class="gr-card">
        <div class="card-tvgs">
          <b-card title="315">
            <b-card-text>Móng + Tầng hầm</b-card-text>
          </b-card>
        </div>
        <div class="card-tvgs">
          <b-card :title="soluong">
            <b-card-text> Kết cấu thân </b-card-text>
          </b-card>
        </div>
        <div class="card-tvgs">
          <b-card title="457">
            <b-card-text> Hoàn thiện kiến trúc </b-card-text>
          </b-card>
        </div>
        <div class="card-tvgs">
          <b-card title="174">
            <b-card-text> Hoàn thiện ME </b-card-text>
          </b-card>
        </div>
        <div class="card-tvgs">
          <b-card title="27">
            <b-card-text> Hạ tầng cảnh quan </b-card-text>
          </b-card>
        </div>
        <div class="card-tvgs">
          <b-card title="14">
            <b-card-text> Khác </b-card-text>
          </b-card>
        </div>
      </div>

      <div class="gr-card">
        <div class="card-tvgs">
          <b-card title="315">
            <!-- <b-card-text>KHÁCH SẠN MASECO</b-card-text> -->
            <router-link to="/ma-se-co" tag="b-card-text"
              >KHÁCH SẠN MASECO</router-link
            >
          </b-card>
        </div>
        <div class="card-tvgs">
          <b-card title="501">
            <!-- <b-card-text> KHÁCH SẠN MARRIOTT </b-card-text> -->
            <router-link to="/mar-ri-ot" tag="b-card-text"
              >KHÁCH SẠN MARRIOTT</router-link
            >
          </b-card>
        </div>
        <div class="card-tvgs">
          <b-card title="457">
            <!-- <b-card-text> KHÁCH SẠN SHERATON </b-card-text> -->
            <router-link to="/she-ra-ton" tag="b-card-text"
              >KHÁCH SẠN SHERATON</router-link
            >
          </b-card>
        </div>

        <div class="card-tvgs">
          <b-card title="27">
            <!-- <b-card-text> SAI GON PEARL </b-card-text> -->
            <router-link to="/sg-pearl" tag="b-card-text"
              >SAI GON PEARL</router-link
            >
          </b-card>
        </div>
        <div class="card-tvgs">
          <b-card title="174">
            <!-- <b-card-text> TÒA THÁP NGÔI SAO </b-card-text> -->
            <router-link to="/thap-ngoi-sao" tag="b-card-text"
              >TÒA THÁP NGÔI SAO</router-link
            >
            
          </b-card>
        </div>

        <div class="card-tvgs">
          <b-card title="14">
            <!-- <b-card-text> VIETCOMBANK TOWER </b-card-text> -->
			    <router-link to="/vietcombank" tag="b-card-text"
              >VIETCOMBANK TOWER</router-link
            >
          </b-card>
        </div>
      </div>
    </div>

    <div class="dash-board">
      <div class="dash-board-user">
        <h4>Danh sách công việc</h4>
        <div>
          <h5>Hồ sơ thanh toán đợt 8- SAI GON PEARL</h5>
          <div class="icon-homepage">
            <div>
              <b-icon
                icon="clock"
                animation="spin"
                font-scale="0.9"
                shift-v="8"
              ></b-icon>
            </div>

            <div>Bắt đầu: 10:50 04/04/2021, Kết thúc: 17:00 05/04/2021</div>
          </div>

          <div class="icon-homepage">
            <div>
              <b-icon icon="flag-fill" font-scale="0.9" shift-v="8"></b-icon>
            </div>

            <div>
              <i>Quá hạn</i>
              <i>Quan trọng và khẩn cấp</i>
            </div>
          </div>

          <div class="icon-homepage">
            <div>
              <b-icon icon="people-fill" font-scale="0.9" shift-v="8"></b-icon>
            </div>

            <div>
              <p>Trần Văn Mạnh, Vũ Nhật Nam</p>
            </div>
          </div>
        </div>

        <div>
          <h5>Hồ sơ thanh toán đợt 8- SAI GON PEARL</h5>
          <div class="icon-homepage">
            <div>
              <b-icon
                icon="clock"
                animation="spin"
                font-scale="0.9"
                shift-v="8"
              ></b-icon>
            </div>

            <div>Bắt đầu: 10:50 04/04/2021, Kết thúc: 17:00 05/04/2021</div>
          </div>

          <div class="icon-homepage">
            <div>
              <b-icon icon="flag-fill" font-scale="0.9" shift-v="8"></b-icon>
            </div>

            <div>
              <i>Quá hạn</i>
              <i>Quan trọng và khẩn cấp</i>
            </div>
          </div>

          <div class="icon-homepage">
            <div>
              <b-icon icon="people-fill" font-scale="0.9" shift-v="8"></b-icon>
            </div>

            <div>
              <p>Trần Văn Mạnh, Vũ Nhật Nam</p>
            </div>
          </div>
        </div>

        <div>
          <h5>Hồ sơ thanh toán đợt 8- SAI GON PEARL</h5>
          <div class="icon-homepage">
            <div>
              <b-icon
                icon="clock"
                animation="spin"
                font-scale="0.9"
                shift-v="8"
              ></b-icon>
            </div>

            <div>Bắt đầu: 10:50 04/04/2021, Kết thúc: 17:00 05/04/2021</div>
          </div>

          <div class="icon-homepage">
            <div>
              <b-icon icon="flag-fill" font-scale="0.9" shift-v="8"></b-icon>
            </div>

            <div>
              <i>Quá hạn</i>
              <i>Quan trọng và khẩn cấp</i>
            </div>
          </div>

          <div class="icon-homepage">
            <div>
              <b-icon icon="people-fill" font-scale="0.9" shift-v="8"></b-icon>
            </div>

            <div>
              <p>Trần Văn Mạnh, Vũ Nhật Nam</p>
            </div>
          </div>
        </div>

        <div>
          <h5>Hồ sơ thanh toán đợt 8- SAI GON PEARL</h5>
          <div class="icon-homepage">
            <div>
              <b-icon
                icon="clock"
                animation="spin"
                font-scale="0.9"
                shift-v="8"
              ></b-icon>
            </div>

            <div>Bắt đầu: 10:50 04/04/2021, Kết thúc: 17:00 05/04/2021</div>
          </div>

          <div class="icon-homepage">
            <div>
              <b-icon icon="flag-fill" font-scale="0.9" shift-v="8"></b-icon>
            </div>

            <div>
              <i>Quá hạn</i>
              <i>Quan trọng và khẩn cấp</i>
            </div>
          </div>

          <div class="icon-homepage">
            <div>
              <b-icon icon="people-fill" font-scale="0.9" shift-v="8"></b-icon>
            </div>

            <div>
              <p>Trần Văn Mạnh, Vũ Nhật Nam</p>
            </div>
          </div>
        </div>
      </div>

      <div class="dash-board-law"></div>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "dashboard",
  components: {},
  data() {
    return {
      rows: 100,
      currentPage: 1,
      dataArrPost: [],
      soluong: "30",
    };
  },

  computed: {
    ...mapState({
      stringSearch: (state) => state.storeqlda.stringSearch, // rieng doi voi map state thi phai dùng như này để  lấy state
    }),

    ...mapGetters([
      "storeqlda/arrDmSearchContribute",
      "storeqlda/currentUser",
      "currentUserPersonalInfo",
    ]),

    dataArrDmSearch() {
      return this["storeqlda/arrDmSearchContribute"];
    },
  },
  created() {
    //this["storeqlda/getAllDataTableDmContribute"](); // khi load lai trang
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Trang Chủ" }]);
    this.dataArr(this.currentPage);
  },
  // watch:{
  //   '$route' (to,from) {

  //   }
  // },
  methods: {
    ...mapActions([
      "storeqlda/getListArticleHasPaging", //action nay goi den api co pagination
    ]),
    dataArr(page) {
      this["storeqlda/getListArticleHasPaging"](page).then((response) => {
        this.dataArrPost = response.data.data;
        this.rows = response.data.total;
      });
    },
    convertUTCDateToLocalDate(date) {
        var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();

        newDate.setHours(hours - offset);
        //newDate.indexOf("GMT");
        let rsTime = newDate.getHours() + ' : ' + newDate.getMinutes() + ' Ngày ' +
          newDate.getDate() + ' / ' + newDate.getMonth() + ' / ' + newDate.getFullYear(); 
        return rsTime  
    }

  },
};
</script>
<style lang="scss" scoped>
.card-text {
  cursor: pointer;
}
.dash-board {
  background-color: #fff;
  margin-left: 10px;
}
.gr-card {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-clip: border-box;
  background-color: #fff;
  margin-bottom: 10px;
}
.card {
  border: none;
}
.card-tvgs {
  overflow: hidden;
}
.card-tvgs .card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-page {
  display: flex;
  margin-right: 10px;
  margin-left: 10px;
}

.gr-info {
  flex: 0 0 66.6666667%;
}
.icon-homepage {
  display: flex;
  align-content: stretch;
}
.icon-homepage .b-icon.bi {
  position: relative;
  align-items: flex-start;
  margin: 10px;
  top: 10%;
}
.dash-board-user {
  max-height: 500px;
  overflow-y: hidden;
  padding: 15px;
}
.dash-board-user:hover {
  overflow-y: scroll;
}
</style>