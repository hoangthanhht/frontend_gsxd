<template>
  <div>
<div class="block-select">
      <div class="btn-add-cv">
        <b-button 
        @click="handleClick"
        size="sm" 
        class="mb-2 add-cv icon-tvgs pt-4 pb-4">
           Xem báo cáo
        </b-button>
      </div>

      <div class="select-cbb">
        <b-form-select
          v-model="selectedTime"
          :options="time"
        >
          <template #first>
            <b-form-select-option :value="''" disabled
              >-- Theo thời gian --</b-form-select-option
            >
          </template>
        </b-form-select>
      </div>

      <div class="select-cbb">
        <b-form-select 
        v-model="selectedSite" 
        :options="site">
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Theo công trường --</b-form-select-option
            >
          </template>
        </b-form-select>
      </div>

       <div class="btn-add-cv">
        <b-button 
        @click="handleClickDelete"
        size="sm" 
        class="mb-2 add-cv icon-tvgs pt-4 pb-4">
           Xóa báo cáo
        </b-button>
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
    <div class="bccontainer pt-10">
      <div contenteditable="true" class="baocao">
        <p class="kindBC">BÁO CÁO NGÀY TƯ VẤN GIÁM SÁT</p>
        <p class="dateBC">Ngày {{getdate[0]}} tháng {{getdate[1]}} năm {{getdate[2]}}</p>
        <div class="project">
          <p class="project_title">Dự án:</p>
          <p>{{duan}}</p>
        </div>
        <div class="address">
          <p class="project_title">Địa điểm:</p>
          <p>{{diadiem}}</p>
        </div>
        <div class="reccept">
          <p class="project_title">Nơi nhận:</p>
          <div class="name_reccept">
            <p>- Chủ đầu tư : {{cdt}}</p>
            <p>- Ban quản lý dự án : {{bql}}</p>
            <p>- Đồng gửi Văn phòng Công ty TVGS</p>
          </div>
        </div>
        <p class="baocao_muc">I. CÔNG TÁC VĂN PHÒNG, HỒ SƠ, VĂN BẢN CỦA TVGS</p>
        <div
            v-for="(itemArr, index) in hoSoArr"
                :key="'HS'+index" 
            class="baocao_hosongthu">
              <p class="baocao_contentcvngthu-noidung">
                    {{ itemArr }}
                  </p>
            </div>
        <p class="baocao_muc">II. CÔNG TÁC GIÁM SÁT THI CÔNG XÂY DỰNG</p>
        <div class="baocao_contentcvngthu">
          <template v-for="(itemArr, index) in tenNT">
            <div :key="index" class="baocao_contentcvngthu-nament">
              {{ itemArr }}
            </div>
            <template v-for="(itemArr1, index1) in getTencvNthu(itemArr)">
              <div
                :key="'A' + index1 + index"
                class="baocao_contentcvngthu-mucngthu"
              >
                {{ itemArr1 }}
              </div>

              <p
                v-for="(itemArr2, index2) in getNdcvNthu(itemArr, itemArr1)"
                :key="'B' + index1 + index + index2"
                class="baocao_contentcvngthu-noidung"
              >
                {{ itemArr2 }}
              </p>
            </template>
          </template>
        </div>
         <p class="baocao_muc">III. KIẾN NGHỊ, KHUYẾN CÁO CỦA TƯ VẤN GIÁM SÁT</p>
        <div
          v-for="(itemArr, index) in kienNghiArr"
          :key="'KN' + index"
          class="baocao_kiennghi"
        >
          <p class="baocao_contentcvngthu-noidung">
            {{ itemArr }}
          </p>
        </div>
        <p class="baocao_muc">
          IV. CÔNG TÁC AN TOÀN LAO ĐỘNG, VỆ SINH MÔI TRƯỜNG, PHÒNG CHÁY CHỮA
          CHÁY
        </p>
        <div   
          v-for="(itemArr, index) in anToanArr"
              :key="'AT' + index"
          class="baocao_antoan">
            <p class="baocao_contentcvngthu-noidung">
                  {{ itemArr }}
                </p>
          </div>
        <p class="baocao_muc">V. HÌNH ẢNH ĐÍNH KÈM (NẾU CÓ)</p>
        <div class="img_list">
          <div
            v-for="(item, index) in imgArr"
            :key="index"
            class="img_list-item"
          >
          <!-- <div class="img_list-contentimg"></div> -->
            <img class="img_list-contentimg" v-bind:src="getStringUrl(index)" />
          </div>
        </div>
        <div class="baocao_footbc">
          <h5 class="pt-2">THAY MẶT ĐOÀN TƯ VẤN GIÁM SÁT</h5>
          <p >Trưởng đoàn tư vấn giám sát</p>
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
      rowObject: [], //JSON.parse(this.$store.state.listReport[0].contentJson.replace(/\\/g,"")),
      mucArr: [],
      ndcvArr: [],
      tenNT: [],
      tenCvNthu: [],
      imgArr: [],
      hoSoArr: [],
      kienNghiArr: [],
      anToanArr: [],
      diadiem:'',
      duan:'',
      cdt:'',
      bql:'',
      jsonResponse:null,
      selectedTime: '', // Array reference
      time: [
      ],
      selectedSite: null, // Array reference
      site: [
      ],
    };
  },
  created() { 
    let data = {
      kind :'D'
    }
   this['storeqlda/getTimeBaoCao'](data).then((res)=>{
     let arrTemp = res.data;
          for (var i in arrTemp) {
        let data = {
          value: arrTemp[i].dateBaocao,
          text: arrTemp[i].dateBaocao,
        };
        this.time.push(data);
      }
   });

    data = {
      kind :'D'
    }
    this['storeqlda/getNameProject'](data).then((res)=>{
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

  },
  computed: {
    ...mapGetters([ 
      "currentUserPersonalInfo",
      "storeqlda/currentUser",
      ]),
    getdate(){
      let arrDate = this.selectedTime.split('/');
      return arrDate;
    }
  },
  methods: {
     ...mapActions([
      "storeqlda/getTimeBaoCao",
      "storeqlda/getListReport",
      "storeqlda/getNameProject",
      "storeqlda/deleteReport",
      
    ]),
    getStringUrl(index) {
      return this.imgArr[index];
    },
    getTencvNthu(key) {
      return Object.keys(this.rowObject[this.mucArr[1]][key]);
    },
    getNdcvNthu(key1, key2) {
      return this.rowObject[this.mucArr[1]][key1][key2];
    },
    handleArr() {
      this.mucArr = Object.keys(this.rowObject);
      this.tenNT = Object.keys(this.rowObject[this.mucArr[1]]);
      this.tenCvNthu = Object.keys(
        this.rowObject[this.mucArr[1]][this.tenNT[1]]
      );
      this.hoSoArr = this.rowObject[this.mucArr[0]];
      this.kienNghiArr = this.rowObject[this.mucArr[2]];
      this.anToanArr = this.rowObject[this.mucArr[3]];
    },

    handleClickPost() {
      this.handleArr();
    },

    handleChange(event) {
      this.selectedFile = event.target.files[0];
      this.parseExcelFile(this.selectedFile);
    },
    handleClickDelete () {
       let res = this.jsonResponse.data.data;
        var idUser = this["storeqlda/currentUser"].id;
        if(idUser == res[0].user_id) {
          let idReport = res[0].id
          this["storeqlda/deleteReport"](idReport).then((rs)=>{
              alert(rs.data.message)
          })
        }else {
          alert('Bạn không được phép xóa báo cáo của người khác')
        }
    },
    handleClick() {
      let data = {
       time: this.selectedTime.replace(/\//g,"_"),
        nameProj:this.selectedSite
      }
      this['storeqlda/getListReport'](data).then((rs)=>{
        this.jsonResponse = rs;
        console.log(this.jsonResponse);
        let res = rs.data.data;
        if(res.length>0) {
          if(res[0].contentJson) {
            this.rowObject = JSON.parse(
              res[0].contentJson.replace(/\\/g, "")
            );
             this.handleArr();
          }
          if(res[0].imgBase64) {
            this.imgArr = JSON.parse(res[0].imgBase64.replace(/\\/g, "")
            );
          };
           if(res[0].tenDuan) {
             this.duan = res[0].tenDuan
            
          };
           if(res[0].diaDiem) {
            this.diadiem = res[0].diaDiem
            
          };
           if(res[0].chuDauTu) {
            this.cdt = res[0].chuDauTu
          };
           if(res[0].banQuanLy) {
            this.bql = res[0].banQuanLy
          };
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
.kindBC {
  border-bottom: 1px solid;
  text-align: center;
  margin: 0;
  line-height: 60px;
  background-color: #99ff99;
  font-size: 1.6rem;
}
.dateBC {
  border-bottom: 1px solid;
  text-align: right;
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
  padding-left: 4px;
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