<template>
  <div class="them-hs-ngthu">
    <div>
      <CompThemHs :isActive="isActive" v-on:handleClick="handleClick" />
    </div>
    <div class="body-hstk">
      <div class="form-add-hs-nghthu">
        <h4>Cập nhật thông tin Hồ sơ nghiệm thu</h4>
        <div class="select-for-hs">
          <p>Loại Hồ sơ:</p>

          <div class="theodoi-thicong">
           <multiselect
            v-model="selectedKindFile"
            :custom-label="custom_label"
            label="name"
            track-by="id"
            selectLabel="Ấn enter để chọn"
            deselectLabel="Ấn enter để bỏ chọn"
            :options="kindfile"
          >
          </multiselect>
          </div>

          <p class="pt-2">Chọn dự án:</p>

          <div class="theodoi-thicong">
           <multiselect
            v-model="selectedProject"
            :custom-label="custom_label"
            label="name"
            track-by="id"
            selectLabel="Ấn enter để chọn"
            deselectLabel="Ấn enter để bỏ chọn"
            :options="project"
          >
          </multiselect>
          </div>
        </div>
        <div class="hs-gr1">
          <div class="gr-ten-hs">
            <p class="pt-2">Tên Hồ sơ</p>
            <b-form-input
              v-model="fileName"
              id="input-1"
              type="email"
              placeholder="Nhập tên công việc"
              required
            ></b-form-input>
          </div>

          <div class="gr-sl">
            <p class="pt-2">Số lượng:</p>
            <b-form-input
              v-model="quantity"
              type="number"
              id="quantity"
              name="quantity"
              min="-9999"
              max="9999"
              style="width: 100%; height: 34px"
            >
            </b-form-input>
          </div>
        </div>

        <div class="hs-gr2">
          <div class="gr-nhan">
            <p class="pt-2">Ngày nhận:</p>
            <b-form-input
              v-model="timeReceive"
              id="input-1"
              type="date"
              required
            ></b-form-input>
          </div>

          <div class="gr-tra">
            <p class="pt-2">Ngày trả:</p>
           <b-form-input
              v-model="timeReturn"
              id="input-1"
              type="date"
              required
            ></b-form-input>
          </div>
        </div>

        <div class="hs-gr3">
          <div class="gr-ktra">
            <p class="pt-2">Lần kiểm tra:</p>
            <b-form-input
              v-model="timeTest"
              type="number"
              id="quantity"
              name="quantity"
              min="-9999"
              max="9999"
              style="width: 100%; height: 38px"
            >
            </b-form-input>
          </div>

          <div class="gr-kqua">
            <p class="pt-2">Kết quả kiểm tra:</p>
            <b-form-select
              v-model="selectedResult"
              :options="result"
            >
              <template #first>
                <b-form-select-option :value="null" disabled
                  >-- Kết quả --</b-form-select-option
                >
              </template>
            </b-form-select>
          </div>
        </div>

        <div class="hs-gr4">
          <p class="pt-2">Lý do không đạt:</p>
          <b-form-textarea
            id="textarea"
            v-model="reason"
            placeholder="Lưu ý"
            rows="3"
            max-rows="6"
          >
          </b-form-textarea>
        </div>

       <div class="hs-gr5">
          <p class="pt-2">File và tài liệu liên quan</p>
          <div class="flex justify-between">
           <input 
        multiple
        @change="onFileChange($event)"
        class="cursor-pointer" 
        type="file" name="" id="">
        <div class="flex">
        <input 
        type="text">

        </div>
          </div>
        <div  v-if="arrItem.length>0">
            <div 
            v-for="(it, idx) in arrItem"
            v-bind:key="idx"
            class="nguon text-muted font-weight-bold flex justify-between pt-2">
          <div class="flex">
           <a style="line-height:24px"
           v-bind:href="addressServe + arrItem[idx].path"> File  {{idx + 1}} : </a>
            <input class="rootNameFile ml-24"
            v-bind:value="arrItem[idx].rootName"
            type="text">
          </div>
          <div>
          
          <i
            @click="handleDelete(idx)"
            class="menu-icon cursor-pointer flaticon2-rubbish-bin text-white pl-2 pr-2 bg-red-600"
          ></i>
          </div>
       </div>

   </div>
        </div>
      </div>
      <div class="hstk_note">
        <div class="add-gr41">
          <b-tabs content-class="mt-3">
            <b-tab title="First" active><p>I'm the first tab</p></b-tab>
            <b-tab title="Second"><p>I'm the second tab</p></b-tab>
          </b-tabs>
        </div>
        <div class="add-gr41">
          <p>
            Tên nhân viên ghi chú Thời điểm ghi chú Đây là mẫu format ghi chú.
            Nội dung ghi chú sẽ được hiển thị ở đây
          </p>
        </div>
      </div>
    </div>

    <div class="hs-gr6">
      <div class="add-gr51">
        <b-button size="sm" class="mb-2 tao-cv">
          <b-icon icon="x-octagon-fill" aria-hidden="true"></b-icon> Bỏ qua
        </b-button>
      </div>
            <div v-if="idCurrentFile" class="add-gr51 add-gr52">
      <b-button 
      ref="kt_save_changes"
      @click="handleUpdate" size="sm" class="mb-2 tao-cv">
        <b-icon icon="check2" aria-hidden="true"></b-icon> Cập nhật
      </b-button>
      </div>

      <div v-else class="add-gr51 add-gr52">
        <b-button 
        ref="kt_save_changes"
        @click="handleSave" size="sm" class="mb-2 tao-cv">
          <b-icon icon="check2" aria-hidden="true"></b-icon> Tạo hồ sơ
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapActions, mapGetters,mapState } from "vuex";
import CompThemHs from "./comp_them_hs/muc_them_ho_so";
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
export default {
  data() {
    return {
        idCurrentFile:null,
      fileName:'',
      quantity:0,
      timeReceive:'',
      timeReturn:'',
      timeTest:'',
      reason:'',
      selectedResult: null, // Array reference
      result: [
        { value: "Đạt", text: "Đạt" },
        { value: "Không đạt", text: "Không đạt" },
      ],
      selectedKindFile: null, // Array reference
       kindfile: [
         { id: "1", text: "Hồ sơ nghiệm thu công việc" },
        { id: "2", text: "Hồ sơ nghiệm thu vật liệu" },
        { id: "2", text: "Hồ sơ nghiệm thu thiết bị" },
      ],
      selectedProject: null, // Array reference
      project: [],
      isActive: false,
       fileData: [],
      arrItem:[],
    };
  },
  components: {
    CompThemHs,
    Multiselect
  },
     computed: {
    ...mapGetters([
      "storeqlda/getListDataUserGTer",
      "currentUserPersonalInfo",
      "storeqlda/currentUser",
    ]),
      ...mapState({
      addressServe: (state) => state.storeqlda.addressServe, // rieng doi voi map state thi phai dùng như này để  lấy state
    }),
  },
    mounted(){
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Hồ sơ khác" }]);
  },
       created() {
           this.idCurrentFile = this.$route.params.id;
     if(this.idCurrentFile!== undefined){
        this["storeqlda/getFileWithId"](this.idCurrentFile).then((res)=>{
         this.fileName = res.data.pagi.tenHoSo ;
         this.quantity = res.data.pagi.soLuong ;
         this.timeReceive = res.data.pagi.ngayNhan ;
        this.timeReturn= res.data.pagi.ngayTra ;
        this.timeTest=res.data.pagi.lanKiemTra ;
        this.reason=res.data.pagi.lyDoKhongDat ;
        this.selectedResult=res.data.pagi.ketQua ;
        this.selectedKindFile =JSON.parse(res.data.pagi.loaiHoSo);
        this.selectedProject = JSON.parse(res.data.pagi.duAn);
        this.arrItem = res.data.item;
        })
        this.isActive = true;
     }


     this["storeqlda/getListProjectName"]().then((res) => {
       let arrTemp = res.data;
      for (var i in arrTemp) {
        let data = {
          id: arrTemp[i].id,
          text: arrTemp[i].tenDuAn,
        };
        this.project.push(data);
      }
    });

  },
  methods: {
     ...mapActions(["storeqlda/ActionCreateFile",
                     "storeqlda/getListDataUser",
                     "storeqlda/getListProjectName",
                      "storeqlda/getFileWithId",
                    "storeqlda/ActionUpdateFile",
                    'storeqlda/destroyFileAttachTask'
                     ]),
      custom_label({ text }) {
      return `${text}`;
    },
      handleDelete(idx) {
      if (confirm("Bạn có chắc chắn muốn xóa dữ liệu này không?")) {
        this["storeqlda/destroyFileAttachTask"](this.arrItem[idx].id).then((res) => {
            this.arrItem = this.arrItem.filter(item => item.id !== this.arrItem[idx].id);
            // loại bỏ phần tử đã xóa ra khỏi mảng và gán lại vào mảng đó để vue tự dộng render lại
            alert(res.data.msg);
           
        });
      }
    },
     onFileChange(e) {
          const files = e.target.files;
          this.fileData = [];
          if (typeof FileReader === "function") {
          for (let file of files) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              this.fileData.push(file);
            };       
      }
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    handleUpdate(){
       let listEl = document.querySelectorAll('.rootNameFile')
      let nameRootFile={}
      for (let i = 0; i < listEl.length; i++) {
        nameRootFile[this.arrItem[i].id]=listEl[i].value
      }
      var data = {
        duAn: JSON.stringify(this.selectedProject),
        loaiHoSo: JSON.stringify(this.selectedKindFile),
        kyHieuHoS: 'hsk',
        tenHoSo:this.fileName,
        soLuong:this.quantity,
        ngayNhan:this.timeReceive,
        ngayTra: this.timeReturn,
        lanKiemTra: this.timeTest,
        ketQua: this.result,
        lyDoKhongDat: this.reason,
        noiDungThayDoiTk: null,
        nguyenNhanThayDoiTk:null,
        nguoiPheDuyet:null,
        yKienTVGS:null, 
        idFile:this.idCurrentFile,
         objFile : this.fileData,
        arrNameFile:JSON.stringify(nameRootFile)
      };
       const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
    setTimeout(() => {
      this["storeqlda/ActionUpdateFile"](data).then((res) => {
        alert(res.data);
      });
      submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    },
     handleSave() {
      var data = {
        duAn: JSON.stringify(this.selectedProject),
        loaiHoSo: JSON.stringify(this.selectedKindFile),
        kyHieuHoSo: 'hsk',
        tenHoSo: this.fileName,
        soLuong: this.quantity,
        ngayNhan: this.timeReceive,
        ngayTra: this.timeReturn,
        lanKiemTra: this.timeTest,
        ketQua: this.selectedResult,
        lyDoKhongDat: this.reason,
        noiDungThayDoiTk: null,
        nguyenNhanThayDoiTk: null,
        nguoiPheDuyet: null,
        yKienTVGS: null,
         objFile : this.fileData
      };
       const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
    setTimeout(() => {
      this["storeqlda/ActionCreateFile"](data).then((res) => {
        alert(res.data);
      });
      submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    },
    handleClick() {
      // console.log('comp cha',this.isActive);
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.them-hs-ngthu {
  margin-left: 10px;
  margin-right: 10px;
}
.form-add-hs-nghthu {
  width: 50%;
  background-color: #fff;
  padding: 10px;
}
.custom-file-label {
    cursor: pointer;
}
.hs-gr1 {
  display: flex;
}
.gr-ten-hs {
  min-width: 66.66667%;
  padding-right: 10px;
}
.gr-sl {
  flex: 1;
}
.hs-gr2 {
  display: flex;
}
.gr-nhan {
  min-width: 50%;
  padding-right: 10px;
}
.gr-tra {
  flex: 1;
}
.hs-gr3 {
  display: flex;
}
.gr-ktra {
  min-width: 50%;
  padding-right: 10px;
}
.gr-kqua {
  flex: 1;
}
.hs-gr6 .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.hs-gr6 {
  background-color: #00a53c;
  height: 32px;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.add-gr51 {
  float: left;
}
.add-gr52 {
  margin-left: 30px;
}
.body-hstk{
	display: flex;
  margin-top: 20px;
}
.hstk_note .add-gr41 {
  background-color: #fff;
  margin-left: 20px;
  border-radius: 5px;
}
.hstk_note .add-gr41 p {
  padding: 10px;
}
.multiselect, .multiselect__input, .multiselect__single {
    font-size: 1rem !important;
}

.multiselect__placeholder {
    font-size: 1rem;
}
</style>