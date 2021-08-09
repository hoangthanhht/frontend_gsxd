<template>
  <div>
    <div class="block-select">
      <div class="btn-add-cv">
        <b-button
          @click="handleClick"
          size="sm"
          class="mb-2 add-cv icon-tvgs pt-4 pb-4"
        >
          Xem báo cáo
        </b-button>
      </div>

      <div class="select-cbb">
        <b-form-select v-model="selectedSite" :options="site">
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Theo công trường --</b-form-select-option
            >
          </template>
        </b-form-select>
      </div>

      <div class="select-cbb">
        <b-form-select v-model="selectedTime" :options="time">
          <template #first>
            <b-form-select-option :value="''" disabled
              >-- Theo thời gian --</b-form-select-option
            >
          </template>
        </b-form-select>
      </div>

      <div class="search-congv">
        <b-input-group size="sm" class="mb-2 add-cv icon-tvgs">
          <b-form-input type="search" placeholder="Search terms"></b-form-input>
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>

          <b-input-group-prepend is-text>
            <b-icon icon="arrow-repeat"></b-icon>
          </b-input-group-prepend>
        </b-input-group>
      </div>
    </div>

    <div
      v-for="(item, idx) in jsonArrResponse"
      :key="idx"
      class="bccontainer pt-10"
    >
      <div contenteditable="true" class="baocao">
        <div class="kindBC flex items-center h-24">
          <p class="text-3xl pl-60">BÁO CÁO THÁNG TƯ VẤN GIÁM SÁT</p>
          <div class="action hidden flex pl-8">
            <div class="pr-5">
              <button
                v-on:click="handleEdit($event,idx)"
                type="button"
                class="btn btn-warning"
              >
                Update
              </button>
            </div>
            <div>
              <button
                v-on:click="handleDelete(idx)"
                type="button"
                class="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <p class="dateBC">
        Từ ngày {{ getdate[0] }} đến ngày {{ getdate[1] }}
        </p>
        <div class="project">
          <p class="project_title">Dự án:</p>
          <p class="ten_du_an">{{ duan[idx] }}</p>
        </div>
        <div class="address">
          <p class="project_title">Địa điểm:</p>
          <p class="dia_diem_du_an">{{ diadiem[idx] }}</p>
        </div>
        <div class="reccept">
          <p class="project_title">Nơi nhận:</p>
          <div class="name_reccept">
            <p>- Chủ đầu tư : <span class="chu_dau_tu">{{ cdt[idx] }}</span></p>
            <p>- Ban quản lý dự án : <span class="ban_quan_ly">{{ bql[idx] }}</span></p>
            <p>- Đồng gửi Văn phòng Công ty TVGS</p>
          </div>
        </div>
        <p class="baocao_muc">I. CÔNG TÁC VĂN PHÒNG, HỒ SƠ, VĂN BẢN CỦA TVGS</p>
        <div
          v-for="(itemArr, index) in hoSoArr[idx]"
          :key="'HS' + index"
          class="baocao_hosongthu"
        >
          <p class="baocao_contentcvngthu-noidunghoso">
            {{ itemArr }}
          </p>
        </div>
        <p class="baocao_muc">II. CÔNG TÁC GIÁM SÁT THI CÔNG XÂY DỰNG</p>
        <div class="baocao_contentcvngthu">
          <template v-for="(itemArr, index) in tenNT[idx]">
            <div :key="index" ref="nament" class="baocao_contentcvngthu-nament">
            <p class="nament">
              {{ itemArr }}

            </p>
            <template v-for="(itemArr1, index1) in getTencvNthu(idx, itemArr)">
              <div
                :key="'A' + index1 + index"
                class="baocao_contentcvngthu-mucngthu"
              >
                {{ itemArr1 }}
              </div>
              <p
                v-for="(itemArr2, index2) in getNdcvNthu(
                  idx,
                  itemArr,
                  itemArr1
                )"
                :key="'B' + index1 + index + index2"
                class="baocao_contentcvngthu-noidung"
              >
                {{ itemArr2 }}
              </p>
            </template>
            </div>
          </template>
        </div>
        <p class="baocao_muc">III. KIẾN NGHỊ, KHUYẾN CÁO CỦA TƯ VẤN GIÁM SÁT</p>
        <div
          v-for="(itemArr, index) in kienNghiArr[idx]"
          :key="'KN' + index"
          class="baocao_kiennghi"
        >
          <p class="baocao_contentcvngthu-noidungkiennghi">
            {{ itemArr }}
          </p>
        </div>
        <p class="baocao_muc">
          IV. CÔNG TÁC AN TOÀN LAO ĐỘNG, VỆ SINH MÔI TRƯỜNG, PHÒNG CHÁY CHỮA
          CHÁY
        </p>
        <div
          v-for="(itemArr, index) in anToanArr[idx]"
          :key="'AT' + index"
          class="baocao_antoan"
        >
          <p class="baocao_contentcvngthu-noidungantoan">
            {{ itemArr }}
          </p>
        </div>
        <p class="baocao_muc">V. HÌNH ẢNH ĐÍNH KÈM (NẾU CÓ)</p>
        <div class="img_list">
          <div
            v-for="(item, index) in imgArr[idx]"
            :key="index"
            class="img_list-item"
          >
            <!-- <div class="img_list-contentimg"></div> -->
            <img
              class="img_list-contentimg"
              v-bind:src="getStringUrl(idx, index)"
            />
          </div>
        </div>
        <div class="baocao_footbc flex justify-between">
          <div>
            <h5 class="pt-2 pl-2">THAY MẶT ĐOÀN TƯ VẤN GIÁM SÁT</h5>
            <p>Trưởng đoàn tư vấn giám sát</p>
          </div>
          <div>
            <h5 class="pt-2">NGƯỜI LÀM BÁO CÁO</h5>
            <p style="margin-right: 0">Trưởng đoàn tư vấn giám sát</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "tvgs-header",
  data() {
    return {
      indexMuc: [],
      selectedFile: null,
      dataGiamSat: [], //JSON.parse(this.$store.state.listReport[0].contentJson.replace(/\\/g,"")),
      mucArr: [],
      ndcvArr: [],
      tenNT: [],
      tenCvNthu: [],
      imgArr: [],
      hoSoArr: [],
      kienNghiArr: [],
      anToanArr: [],
      diadiem: [],
      duan: [],
      cdt: [],
      bql: [],
      jsonResponse: null,
      jsonArrResponse: [],
      selectedTime: "", // Array reference
      time: [],
      selectedSite: null, // Array reference
      site: [],
    };
  },
  created() {
    let data = {
      kind: "M",
    };
    this["storeqlda/getNameProject"](data).then((res) => {
      let arrTemp = res.data;
      for (var i in arrTemp) {
        let data = {
          value: arrTemp[i].tenDuan,
          text: arrTemp[i].tenDuan,
        };
        this.site.push(data);
      }
    });
  },
  watch: {
    selectedSite:function() {
      let data = {
      kind: "M",
      site:this.selectedSite
    };
     this.time = []
    this["storeqlda/getTimeBaoCao"](data).then((res) => {
      let arrTemp = res.data;
      for (var i in arrTemp) {
        let data = {
          value: arrTemp[i].dateBaocao,
          text: arrTemp[i].dateBaocao,
        };
        this.time.push(data);
      }
    });
    }
  },
  computed: {
    ...mapGetters(["currentUserPersonalInfo", "storeqlda/currentUser"]),
    getdate() {
      let arrDate = this.selectedTime.split("-");
      return arrDate;
    },
  },
  methods: {
    ...mapActions([
      "storeqlda/getTimeBaoCao",
      "storeqlda/getListReport",
      "storeqlda/getNameProject",
       "storeqlda/deleteReport",
        "storeqlda/updateReport"
    ]),
      getStringUrl(idx, index) {
      return this.imgArr[idx][index];
    },
    getTencvNthu(idx, key) {
      return Object.keys(this.dataGiamSat[idx][this.mucArr[idx][1]][key]);
    },
    getNdcvNthu(idx, key1, key2) {
      return this.dataGiamSat[idx][this.mucArr[idx][1]][key1][key2];
    },
	  handleDelete (idx) {
		   let res = this.jsonResponse.data.data;
      var idUser = this["storeqlda/currentUser"].id;
      if (idUser == res[idx].user_id) {
        let idReport = res[idx].id;
        this["storeqlda/deleteReport"](idReport).then((rs) => {
          alert(rs.data.message);
        });
      } else {
        alert("Bạn không được phép xóa báo cáo của người khác");
      }
	},
    getParentSelect(el, select) {
      while (el.parentElement) {
        var pr = el.parentElement;
        if (pr.matches(select)) {
          return pr;
        }
        el = pr;
      }
    },
    handleEdit(e,idx) {
      let elParentLarge = this.getParentSelect(e.target, ".baocao");
      let elMucBc = elParentLarge.querySelectorAll(".baocao_muc");
      let elNoiDungHoSo = elParentLarge.querySelectorAll(
        ".baocao_contentcvngthu-noidunghoso"
      );
      // biến này phục vụ cho việc lấy ra các mục của nhà thầu dó
      let elTenNhaThau = elParentLarge.querySelectorAll(
        ".baocao_contentcvngthu-nament"
      );
      let elMucNgthu = null// biến này chỉ có chứa tên nhà thầu
      let elNameNT = elParentLarge.querySelectorAll(
        ".nament"
      );
      let elKienNghi = elParentLarge.querySelectorAll(
        ".baocao_contentcvngthu-noidungkiennghi"
      );
      let elAnToan = elParentLarge.querySelectorAll(
        ".baocao_contentcvngthu-noidungantoan"
      );
      let tenDuAn = elParentLarge.querySelector('.ten_du_an')
      let diaDiemDuAn = elParentLarge.querySelector('.dia_diem_du_an')
      let chuDauTu = elParentLarge.querySelector('.chu_dau_tu')
      let banQuanLy = elParentLarge.querySelector('.ban_quan_ly')
      let jsonHoSo = ""
      let jsonKienNghi = ""
       let jsonAnToan = "";
       let temp = "";var i;
      for ( i = 0; i < elNoiDungHoSo.length; i++) {
        // dùng vòng for này khi dung lặp chp nodelist tạo ra từ quyr selector all
        if (temp == "") {
          temp = `"${elNoiDungHoSo[i].innerText}"`;
        } else {
          temp = temp + "," + `"${elNoiDungHoSo[i].innerText}"`;
        }
      }
      jsonHoSo = `"${elMucBc[0].innerText}":[${temp}]`;
      temp = "";
      for ( i = 0; i < elKienNghi.length; i++) {
        // dùng vòng for này khi dung lặp chp nodelist tạo ra từ quyr selector all
        if (temp == "") {
          temp = `"${elKienNghi[i].innerText}"`;
        } else {
          temp = temp + "," + `"${elKienNghi[i].innerText}"`;
        }
      }
      jsonKienNghi = `"${elMucBc[2].innerText}":[${temp}]`;

      temp = "";
      for ( i = 0; i < elAnToan.length; i++) {
        // dùng vòng for này khi dung lặp chp nodelist tạo ra từ quyr selector all
        if (temp == "") {
          temp = `"${elAnToan[i].innerText}"`;
        } else {
          temp = temp + "," + `"${elAnToan[i].innerText}"`;
        }
      }
      jsonAnToan = `"${elMucBc[3].innerText}":[${temp}]`;
       
       temp = '' ;let contentCv = '';let jsonContentNt = '';let rsFinal = '';
      for ( i = 0; i < elTenNhaThau.length; i++) {
        elMucNgthu = elTenNhaThau[i].querySelectorAll('.baocao_contentcvngthu-mucngthu')

        for (var j = 0; j < elMucNgthu.length; j++) {
          let nextSibling = elMucNgthu[j].nextElementSibling;
         while(nextSibling) {
           if (temp == "") {
             temp = `"${nextSibling.innerText}"`;
               } else {
                 temp = temp + "," + `"${nextSibling.innerText}"`;
               }
               nextSibling = nextSibling.nextElementSibling;
              if(nextSibling!==null){
               if(nextSibling.tagName != 'P'){
                 break;
               }

            }
        }
        if (contentCv == "") {
              contentCv = `"${elMucNgthu[j].innerText}":[${temp}]`;
          } else {
            contentCv = contentCv + "," + `"${elMucNgthu[j].innerText}":[${temp}]`;
          }
          temp='';
        }
         if (jsonContentNt == "") {
           jsonContentNt = `"${elNameNT[i].innerText}":{${contentCv}}`;
          } else {
            jsonContentNt = jsonContentNt + "," + `"${elNameNT[i].innerText}":{${contentCv}}`;
          }
          contentCv = '';
      }
      jsonContentNt = `"${elMucBc[1].innerText}":{${jsonContentNt}}`;
      rsFinal = `{${jsonHoSo},${jsonContentNt},${jsonKienNghi},${jsonAnToan}}`
       
      var idUser = this["storeqlda/currentUser"].id;
      if (idUser == this.jsonArrResponse[idx].user_id) {
        let data = {
          contentJson:rsFinal,
          dateBaocao:this.selectedTime,
          tenDuan:tenDuAn.innerText,
          diaDiem:diaDiemDuAn.innerText,
          chuDauTu:chuDauTu.innerText,
          banQuanLy:banQuanLy.innerText,
          idReport:this.jsonArrResponse[idx].id
        }
        this["storeqlda/updateReport"](data).then((rs) => {
          alert(rs.data.message);
        });
      } else {
        alert("Bạn không được phép sửa báo cáo của người khác");
      }
    },


   handleClick() {
      let data = {
        time: this.selectedTime.replace(/\//g, "_"),
        nameProj: this.selectedSite,
      };
      this["storeqlda/getListReport"](data).then((rs) => {
        this.jsonResponse = rs;
        this.jsonArrResponse = rs.data.data;
		let res = this.jsonArrResponse;
      for (var i in res) {
        if (res.length > 0) {
          if (res[i].contentJson) {
            this.dataGiamSat.push(
              JSON.parse(res[i].contentJson.replace(/\\/g, ""))
            );
          }
          if (res[i].imgBase64) {
            this.imgArr.push(JSON.parse(res[i].imgBase64.replace(/\\/g, "")));
          }
          if (res[i].tenDuan) {
            this.duan.push(res[i].tenDuan);
          }
          if (res[i].diaDiem) {
            this.diadiem.push(res[i].diaDiem);
          }
          if (res[i].chuDauTu) {
            this.cdt.push(res[i].chuDauTu);
          }
          if (res[i].banQuanLy) {
            this.bql.push(res[i].banQuanLy);
          }
          this.mucArr.push(Object.keys(this.dataGiamSat[i]));
          this.tenNT.push(Object.keys(this.dataGiamSat[i][this.mucArr[i][1]]));
          this.hoSoArr.push(this.dataGiamSat[i][this.mucArr[i][0]]);
          this.kienNghiArr.push(this.dataGiamSat[i][this.mucArr[i][2]]);
          this.anToanArr.push(this.dataGiamSat[i][this.mucArr[i][3]]);
        }
      }
    
      });
    },
  },
};
</script>


<style scoped>
.search-congv input[type="search"] {
  height: 43px;
}

.btn-add-cv {
  height: 43px;
  padding-top: 0;
  padding-bottom: 0;
}

.block-select {
  display: flex;
  justify-content: space-between;
}
.icon-tvgs .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.select-duan {
  width: 200px;
  background-color: #fff;
}
.select-cbb .custom-select {
  height: 43px;
}
.select-cbb {
  max-width: 200px;
}
.header-page-giaocv {
  margin-left: 10px;
  margin-right: 10px;
}
.table-cv {
  background-color: #fff;
}

/* /////////////////////////// */
.img_list-contentimg {
  width: 100%;
  height: 100%;
}
.img_list {
  display: flex;
  flex-wrap: wrap;
}
.img_list-item {
  width: 50%;
  padding: 10px;
}
.bccontainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.baocao {
  width: 60%;
  border: 1px solid;
}
.kindBC:hover > .action { display: flex; }
.kindBC {
  /* border-bottom: 1px solid;
  text-align: center;
  margin: 0;
  line-height: 60px; */
  background-color: #99ff99;
  /* font-size: 1.6rem; */
}
.dateBC {
  border-bottom: 1px solid;
  text-align: center;
  margin: 0;
  line-height: 25px;
  font-size: 1rem;
  padding-right: 5px;
}
.project {
  display: flex;
  border-bottom: 1px solid;
}
.address {
  display: flex;
  border-bottom: 1px solid;
}
.reccept {
  display: flex;
  border-bottom: 1px solid;
  align-items: center;
}
.project_title {
  width: 15%;
  padding-left: 5px;
}
p {
  margin: 0;
  line-height: 30px;
}
.project_title ~ p,
.name_reccept {
  padding-left: 5px;
  border-left: 1px solid;
}
.baocao_muc {
  background-color: #99ff99;
  border-bottom: 1px solid;
  padding-left: 5px;
}

.baocao_footbc {
  text-align: right;
  padding-right: 10px;
}
.baocao_footbc p {
  margin-right: 48px;
}
.baocao_contentcvngthu {
  padding-left: 10px;
}
.baocao_contentcvngthu-noidung {
  font-size: 13.5px;
  font-style: italic;
  font-weight: 300;
  padding-left: 4px;
  color: #000;
}
.baocao_contentcvngthu-mucngthu {
  color: #000;
  font-weight: 600;
  font-size: 14px;
}
.baocao_contentcvngthu-nament {
  color: red;
  font-weight: 800;
  font-size: 14px;
}
</style>