<template>
  <div class="them-hs-ngthu">
    <div>
      <CompThemHs :isActive="isActive" v-on:handleClick="handleClick" />
    </div>

    <div class="body-hstk">
      <div class="form-add-hs-nghthu">
        <h4>Cập nhật thông tin Hồ sơ thiết kế</h4>

        <div class="hs-gr1">
          <div class="gr-ten-hs">
            <p>Tên hồ sơ thiết kế & thay đổi thiết kế:</p>
            <b-form-input
              v-model="fileName"
              id="input-1"
              type="text"
              placeholder="Nhập tên công việc"
              required
            ></b-form-input>
          </div>
          <div class="gr-sl">
            <p>Ngày nhận:</p>
            <b-form-input
              v-model="timeReceive"
              id="input-1"
              type="date"
              required
            ></b-form-input>
          </div>
        </div>

        <div class="select-for-hs">
          <p class="pt-2">Chọn dự án:</p>

          <div>
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
        <div class="hs-gr2">
          <p class="pt-2">Nội dung tk/ thay đổi tk:</p>
          <b-form-textarea
            id="textarea"
            v-model="contentChange"
            placeholder="Lưu ý"
            rows="3"
            max-rows="6"
          >
          </b-form-textarea>
        </div>

        <div class="hs-gr3">
          <p class="pt-2">Nguyên nhân thay đổi:</p>
          <b-form-textarea
            id="textarea"
            v-model="reason"
            placeholder="Lưu ý"
            rows="3"
            max-rows="6"
          >
          </b-form-textarea>
        </div>

        <div class="hs-gr4">
          <p class="pt-2">Người phê duyệt:</p>
          <b-form-input
            v-model="approver"
            id="input-1"
            type="text"
            placeholder="Nhập tên người phê duyệt"
            required
          ></b-form-input>

          <p class="pt-2">Nhận xét của TVGS về Hồ sơ thiết kế và thay đổi TK</p>
          <b-form-textarea
            id="textarea"
            v-model="comment"
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
import CompThemHs from "./comp_them_hs/muc_them_ho_so";
import { mapActions, mapGetters,mapState } from "vuex";
import Multiselect from "vue-multiselect";
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
export default {
  data() {
    return {
      idCurrentFile:null,
      comment:'',
      approver:'',
      reason:'',
      contentChange:'',
      timeReceive:'',
      fileName:'',
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
      mounted(){
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Hồ sơ thiết kế" }]);
  },
   created() {
          this.idCurrentFile = this.$route.params.id;
     if(this.idCurrentFile!== undefined){
        this["storeqlda/getFileWithId"](this.idCurrentFile).then((res)=>{
         this.comment = res.data.pagi.yKienTVGS ;
         this.approver = res.data.pagi.nguoiPheDuyet ;
         this.reason = res.data.pagi.nguyenNhanThayDoiTk ;
        this.contentChange= res.data.pagi.noiDungThayDoiTk ;
        this.timeReceive=res.data.pagi.ngayNhan ;
        this.fileName=res.data.pagi.tenHoSo ;
        this.selectedProject = JSON.parse(res.data.pagi.duAn);
         this.arrItem = res.data.item;
        })

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
        loaiHoSo: 'hồ sơ thiết kế',
        kyHieuHoSo: 'hstk',
        tenHoSo: this.fileName,
        soLuong: null,
        ngayNhan: this.timeReceive,
        ngayTra: null,
        lanKiemTra: null,
        ketQua: null,
        lyDoKhongDat: null,
        noiDungThayDoiTk: this.contentChange,
        nguyenNhanThayDoiTk: this.reason,
        nguoiPheDuyet: this.approver,
        yKienTVGS: this.comment,
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
        loaiHoSo: 'hồ sơ thiết kế',
        kyHieuHoSo: 'hstk',
        tenHoSo: this.fileName,
        soLuong: null,
        ngayNhan: this.timeReceive,
        ngayTra: null,
        lanKiemTra: null,
        ketQua: null,
        lyDoKhongDat: null,
        noiDungThayDoiTk: this.contentChange,
        nguyenNhanThayDoiTk: this.reason,
        nguoiPheDuyet: this.approver,
        yKienTVGS: this.comment,
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
.select-for-hs {
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

.gr-nhan {
  min-width: 50%;
  padding-right: 10px;
}
.gr-tra {
  flex: 1;
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
.hstk_note .add-gr41{
	background-color: #fff;
	margin-left: 20px;
	border-radius: 5px;
}
.hstk_note .add-gr41 p{
padding: 10px;
}
.multiselect, .multiselect__input, .multiselect__single {
    font-size: 1rem !important;
}
.multiselect__placeholder {
    font-size: 1rem;
}
.custom-file-label {
    cursor: pointer;
}
</style>