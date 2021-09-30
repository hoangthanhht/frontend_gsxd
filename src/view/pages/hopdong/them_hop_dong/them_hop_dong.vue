<template>
  <div class="them-hd">
    <div class="body-hstk">
      <div class="form-add-hd">
        <h5>Cập nhật thông tin hợp đồng</h5>
        <div class="hd-gr1">
          <p>Tên hợp đồng:</p>
          <b-form-input
            v-model="nameContract"
            id="input-1"
            type="text"
            placeholder="Nhập tên hợp đồng"
            required
          ></b-form-input>
        </div>
          <div class="hd-gr3">
          <p class="pt-2">Loại hợp đồng:</p>
           <multiselect
            v-model="selectedKindContract"
            :custom-label="custom_label"
            label="name"
            track-by="id"
            selectLabel="Ấn enter để chọn"
            deselectLabel="Ấn enter để bỏ chọn"
            :options="kind_contract"
          >
          </multiselect>
        </div>
        <div class="hd-gr2">
          <div class="du-an-moi">
            <p class="pt-2">Dự án (Thêm mới)</p>
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
          <div class="gia-tri-hd">
            <p class="pt-2">Giá trị theo HĐ/PLHĐ</p>
            <b-form-input
              v-model="valueContract"
		        	style="height :43px"
              id="input-1"
              type="text"
              placeholder="Nhập giá trị hợp đồng"
              required
            ></b-form-input>
          </div>
        </div>

        <div class="hd-gr3">
          <p class="pt-2">Nhân sự liên quan:</p>
           <multiselect
            v-model="selectedPersionDo"
            multiple
            :custom-label="custom_label"
            label="name"
            track-by="id"
            selectLabel="Ấn enter để chọn"
            deselectLabel="Ấn enter để bỏ chọn"
            :options="persion_do"
          >
          </multiselect>
        </div>

        <h5>Khối lượng thực hiện theo hợp đồng</h5>
        <div class="hd-gr4">
          <div class="hd-bat-dau">
            <p class="pt-2">Bắt đầu:</p>
             <b-form-input
                v-model="timeStart"
                id="input-1"
                type="date"
                required
              ></b-form-input>
          </div>

          <div class="hd-ket-thuc">
            <p class="pt-2">Kết thúc:</p>
             <b-form-input
                v-model="timeFinish"
                id="input-1"
                type="date"
                required
              ></b-form-input>
          </div>
        </div>

        <div >
          <p class="pt-2">Đơn vị (Thêm mới)</p>
           <multiselect
            v-model="selectedUnit"
            :custom-label="custom_label"
            label="name"
            track-by="id"
            selectLabel="Ấn enter để chọn"
            deselectLabel="Ấn enter để bỏ chọn"
            :options="unit"
          >
          </multiselect>
        </div>

        <div >
          <p class="pt-2">Khối lượng</p>
              <b-form-input
              v-model="mass"
		        	style="height :34px"
              id="input-1"
              type="text"
              placeholder="Nhập tên công việc"
              required
            ></b-form-input>
        </div>

     <div class="add-gr5">
      <h5>File và tài liệu liên quan</h5>
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
      <!-- <b-form-file class="z-0" style="cursor: pointer" id="file-small" size="sm"></b-form-file> -->
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
         <div v-if="idCurrentContract" class="add-gr51 add-gr52">
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
          <b-icon icon="check2" aria-hidden="true"></b-icon> Tạo hợp đồng
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapActions, mapGetters,mapState } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
export default {
   components: { Multiselect },
  data() {
    return {
       idCurrentContract:null,
      nameContract:'',
      arrItem:[],
       fileData: [],
      valueContract:'',
      timeStart:'',
      timeFinish:'',
      mass:'',
      selectedKindContract: null, // Array reference
      kind_contract: [ 
        { id: "1", text: "Hợp đồng trọn gói" },
        { id: "2", text: "Hợp đồng đơn giá cố định" },
        { id: "3", text: "Hợp đồng đơn giá thay đổi" },
        ],
      selectedPersionDo: null, // Array reference
      persion_do: [],
      selectedProject: null, // Array reference
      project: [],
      selectedUnit: null, // Array reference
      unit: [],
      isActive: false,
    };
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
    mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Tạo hợp đồng" }]);
  },
   created() {
       this.idCurrentContract = this.$route.params.id;
     if(this.idCurrentContract!== undefined){
        this["storeqlda/getContractWithId"](this.idCurrentContract).then((res)=>{
         this.nameContract = res.data.pagi.tenHopDong ;
         this.valueContract = res.data.pagi.giaTriHD ;
         this.timeStart = res.data.pagi.batDau ;
        this.timeFinish= res.data.pagi.ketThuc ;
        this.mass=res.data.pagi.khoiLuong ;
        this.selectedKindContract =JSON.parse(res.data.pagi.loaiHopDong);
        this.selectedPersionDo = JSON.parse(res.data.pagi.nhanSuLienQuan);
        this.selectedProject = JSON.parse(res.data.pagi.duAn);
        this.selectedUnit = JSON.parse(res.data.pagi.donVi);
         this.arrItem = res.data.item;
        })

     }

    this["storeqlda/getListDataUser"]().then(() => {
      let arrTemp = this["storeqlda/getListDataUserGTer"];
      for (var i in arrTemp) {
        let data = {
          id: arrTemp[i].id,
          text: arrTemp[i].name,
        };
        this.persion_do.push(data);
      }
    });

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
       ...mapActions(["storeqlda/ActionCreateContract", 
                      "storeqlda/getListDataUser",
                      "storeqlda/getListProjectName",
                      "storeqlda/getContractWithId",
                      "storeqlda/ActionUpdateContract",
                       "storeqlda/destroyFileAttachTask",
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
        tenHopDong: this.nameContract,
        loaiHopDong: JSON.stringify(this.selectedKindContract),
        duAn: JSON.stringify(this.selectedProject),
        giaTriHD: this.valueContract,
        nhanSuLienQuan: JSON.stringify(this.selectedPersionDo),
        batDau: this.timeStart,
        ketThuc: this.timeFinish,
        donVi: JSON.stringify(this.selectedUnit),
        khoiLuong: this.mass,
        idContract:this.idCurrentContract,
        objFile : this.fileData,
        arrNameFile:JSON.stringify(nameRootFile)
      };
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
    setTimeout(() => {
      this["storeqlda/ActionUpdateContract"](data).then((res) => {
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
        tenHopDong: this.nameContract,
        loaiHopDong: JSON.stringify(this.selectedKindContract),
        duAn: JSON.stringify(this.selectedProject),
        giaTriHD: this.valueContract,
        nhanSuLienQuan: JSON.stringify(this.selectedPersionDo),
        batDau: this.timeStart,
        ketThuc: this.timeFinish,
        donVi: JSON.stringify(this.selectedUnit),
        khoiLuong: this.mass,
         objFile : this.fileData
      };
       const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
    setTimeout(() => {
      this["storeqlda/ActionCreateContract"](data).then((res) => {
        alert(res.data);
      });
        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.hd-gr2{
	display: flex;
}
.du-an-moi{
	flex: 0 0 50%;
	padding-right: 5px;
}
.gia-tri-hd{
	flex: 1;
}

.hd-gr4{
	display: flex;
}
.hd-bat-dau{
	flex: 0 0 50%;
	padding-right: 5px;
}
.hd-ket-thuc{
	flex: 1;
}


.them-hd {
  margin-left: 10px;
  margin-right: 10px;
}
.form-add-hd {
  width: 50%;
  background-color: #fff;
  padding: 10px;
}

h5{
	padding-top: 15px;
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
.body-hstk {
  display: flex;
}
.hstk_note .add-gr41 {
  background-color: #fff;
  margin-left: 20px;
  border-radius: 5px;
}
.hstk_note .add-gr41 p {
  padding: 10px;
}
.custom-file-label {
    cursor: pointer;
}
</style>