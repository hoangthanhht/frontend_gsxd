<template>
  <div class="add-gr">
    <!-- group 1 -->
    <div class="add-gr1">
      <h5 class="mb-3 header-title">Cập nhật thông tin công việc</h5>
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Tên công việc (tiêu đề)"
          label-for="input-1"
        >
          <b-form-input
            v-model="nameTask"
            id="input-1"
            type="text"
            placeholder="Nhập tên công việc"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          description="Việc mô tả chi tiết công việc sẽ giúp người thực hiện dễ dàng hơn"
          id="input-group-2"
          label="Nội dung công việc"
          label-for="input-2"
        >
          <b-form-textarea
            id="textarea"
            v-model="descriptionTask"
            placeholder="Nội dung chi tiết công việc"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          tooltip
          label="Lưu ý"
          label-for="input-2"
        >
          <b-form-textarea
            id="textarea"
            v-model="note"
            placeholder="Lưu ý"
            rows="3"
            max-rows="6"
          >
          </b-form-textarea>
        </b-form-group>

        <div class="add-gr11">
          <div class="add-gr111">
            <b-form-group
              id="input-group-1"
              label="Thời gian bắt đầu:"
              label-for="input-1"
            >
              <b-form-input
                v-model="timeStart"
                id="input-1"
                type="date"
                required
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="add-gr111">
            <b-form-group
              id="input-group-1"
              label="Thời gian kết thúc dự kiến:"
              label-for="input-1"
            >
              <b-form-input
                v-model="timeExpect"
                id="input-1"
                type="date"
                required
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <!-- input -->
        <div class="add-gr11">
          <div class="add-gr111">
            <b-form-group
              id="input-group-1"
              label="Mức độ ưu tiên:"
              label-for="input-1"
            >
              <b-form-select
                v-model="selectedPriorityLevel"
                :options="priority_level"
              >
                <template #first>
                  <b-form-select-option :value="null" disabled
                    >-- Mức độ ưu tiên --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
          </div>

          <div class="add-gr111">
            <b-form-group
              id="input-group-1"
              label="Trạng thái công việc"
              label-for="input-1"
            >
              <b-form-input
                v-model="statusTask"
                id="input-1"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <!-- input 3 -->
        <div class="add-gr11">
          <div class="add-gr111">
            <b-form-group
              id="input-group-1"
              label="Thời gian bắt đầu thực tế:"
              label-for="input-1"
            >
              <b-form-input
                v-model="timeStartReal"
                id="input-1"
                type="date"
                required
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="add-gr111">
            <b-form-group
              id="input-group-1"
              label="Thời gian kết thúc thực tế:"
              label-for="input-1"
            >
              <b-form-input
                v-model="timeFinishReal"
                id="input-1"
                type="date"
                required
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <!-- combobox -->

        <b-form-group
          id="input-group-1"
          label="Kết quả thực hiện:"
          label-for="input-1"
        >
          <b-form-select
            v-model="selectedResult"
            :options="result"
          ></b-form-select>
        </b-form-group>
      </b-form>
    </div>
    <!-- group 2 -->
    <div class="add-gr2">
      <h5 class="mb-3 header-title">Thành phần liên quan</h5>
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Nhân sự liên quan:"
          label-for="input-1"
        >
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
        </b-form-group>
      </b-form>
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Người giao việc:"
          label-for="input-1"
        >
          <multiselect
            v-model="selectedPersionAssign"
            multiple
            :custom-label="custom_label"
            label="name"
            track-by="id"
            selectLabel="Ấn enter để chọn"
            deselectLabel="Ấn enter để bỏ chọn"
            :options="persion_assign"
          >
          </multiselect>
        </b-form-group>
      </b-form>

      <b-form>
        <b-form-group
          id="input-group-1"
          label="Dự án liên quan:"
          label-for="input-1"
        >
          <multiselect
            v-model="selectedProject"
            multiple
            :custom-label="custom_label"
            label="name"
            track-by="id"
            selectLabel="Ấn enter để chọn"
            deselectLabel="Ấn enter để bỏ chọn"
            :options="project"
          >
          </multiselect>
        </b-form-group>
      </b-form>
    </div>

    <!-- group 3 -->
    <div class="add-gr3">
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

    <div class="add-gr4">
      <div class="add-gr41">
        <b-tabs v-model="currentTab" content-class="mt-3">
          <b-tab title="Ghi Chú" active
            ><p>
              Sau khi thêm bản ghi bạn có thể sử dụng chức năng ghi chú Giúp bạn
              ghi lại những gì liên quan đến bản ghi này theo từng giai đoạn,
              thời gian khác nhau Nội dung sẽ được hiển thị theo format mẫu bên
              dưới.
            </p></b-tab
          >
          <b-tab title="Lịch Sử"
            ><p>
              Dưới đây là lịch sử các lần cập nhật dữ liệu Giúp bạn xem được ai
              đã cập nhật thông tin? cập nhật vào lúc nào? và cập nhật những gì?
              Nội dung sẽ được hiển thị theo format mẫu bên dưới.
            </p></b-tab
          >
        </b-tabs>
      </div>
      <div class="add-gr41">
        <p>
          Tên nhân viên ghi chú Thời điểm ghi chú Đây là mẫu format ghi chú. Nội
          dung ghi chú sẽ được hiển thị ở đây
        </p>
      </div>
    </div>

    <div class="add-gr5">
      <div class="add-gr51">
        <b-button size="sm" class="mb-2 tao-cv">
          <b-icon icon="x-octagon-fill" aria-hidden="true"></b-icon> Bỏ qua
        </b-button>
      </div>

        <div v-if="idCurrentTask" class="add-gr51 add-gr52">
      <b-button 
       ref="kt_save_changes"
      @click="handleUpdate" 
      size="sm" class="mb-2 tao-cv">
        <b-icon icon="check2" aria-hidden="true"></b-icon> Cập nhật
      </b-button>
      </div>

      <div v-else class="add-gr51 add-gr52">
        <b-button 
        ref="kt_save_changes"
        @click="handleSave" size="sm" 
        class="mb-2 tao-cv">
          <b-icon icon="check2" aria-hidden="true"></b-icon> Tạo công việc
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
  name: "add_task",
  components: { Multiselect },
  data() {
    return {
      idCurrentTask:null,
      arrItem:[],
      text: "", // cần khai báo data này không sẽ gặp wraning text is not define trong hàm custom_label
      currentTab: 0,
      nameTask: "",
      descriptionTask: "",
      note: "",
      timeStart: "",
      timeExpect: "",
      statusTask: "",
      timeStartReal: "",
      timeFinishReal: "",
      selectedPersionDo: null, // Array reference
      persion_do: [],
      selectedPersionAssign: null, // Array reference
      persion_assign: [],
      selectedProject: null, // Array reference
      project: [],
      selectedPriorityLevel: null, // Array reference
      priority_level: [
        { value: "Quan trọng và khẩn cấp", text: "Quan trọng và khẩn cấp" },
        { value: "Quan trọng nhưng không khẩn cấp", text: "Quan trọng nhưng không khẩn cấp" },
        { value: "Khẩn cấp nhưng không quan trọng", text: "Khẩn cấp nhưng không quan trọng" },
        { value: "Không quan trọng và không khẩn cấp", text: "Không quan trọng và không khẩn cấp" },
      ],
      selectedResult: null, // Array reference
      result: [
        { value: "Chưa hoàn thành", text: "Chưa hoàn thành" },
        { value: "Đã hoàn thành", text: "Đã hoàn thành" },
      ],

      fileData: []
    };
  },
  created() {
      this.idCurrentTask = this.$route.params.id;
     if(this.idCurrentTask!== undefined){
        this["storeqlda/getTaskWithId"](this.idCurrentTask).then((res)=>{
         this.nameTask = res.data.pagi.Ten ;
         this.descriptionTask = res.data.pagi.moTaTask ;
         this.note = res.data.pagi.luuY ;
        this.timeStart=JSON.parse(res.data.pagi.keHoach)[0] ;
        this.timeExpect=JSON.parse(res.data.pagi.keHoach)[1] ;
        this.statusTask=res.data.pagi.tinhTrang ;
        this.timeStartReal=JSON.parse(res.data.pagi.thucHien)[0] ;
        this.timeFinishReal=JSON.parse(res.data.pagi.thucHien)[1];
        this.selectedPersionDo = JSON.parse(res.data.pagi.nguoiPhoiHop);
        this.selectedPersionAssign = JSON.parse(res.data.pagi.nguoiDeXuat);
        this.selectedProject = JSON.parse(res.data.pagi.duanLienQuan);
        this.selectedPriorityLevel = res.data.pagi.mucDo;
        this.selectedResult = res.data.pagi.ketQua;
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
        this.persion_assign.push(data);
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
  mounted() {
  this.$store.dispatch(SET_BREADCRUMB, [{ title: "Tạo công việc" }]);
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
    ...mapActions([
      "storeqlda/ActionCreateTask",
      "storeqlda/getListDataUser",
      "storeqlda/getListProjectName",
      "storeqlda/getTaskWithId",
      "storeqlda/ActionUpdateTask",
      "storeqlda/destroyFileAttachTask",
      
     ]),
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

    custom_label({ text }) {
      return `${text}`;
    },
    handleUpdate(){
       let listEl = document.querySelectorAll('.rootNameFile')
      let nameRootFile={}
      for (let i = 0; i < listEl.length; i++) {
        nameRootFile[this.arrItem[i].id]=listEl[i].value
      }
       let arrTimekh = []
      let arrTimereal = []
      arrTimekh.push(this.timeStart)
      arrTimekh.push(this.timeExpect)
      arrTimereal.push(this.timeStartReal)
      arrTimereal.push(this.timeFinishReal)
      var data = {
        Ten: this.nameTask,
        keHoach: JSON.stringify(arrTimekh),
        thucHien: JSON.stringify(arrTimereal),
        nguoiDeXuat:JSON.stringify(this.selectedPersionAssign),
        nguoiPhoiHop:JSON.stringify(this.selectedPersionDo),
        duanLienQuan:JSON.stringify(this.selectedProject),
        moTaTask: this.descriptionTask,
        mucDo: this.selectedPriorityLevel,
        ketQua: this.selectedResult,
        tinhTrang: this.statusTask,
        luuY: this.note,
        idTask:this.idCurrentTask,
        objFile : this.fileData,
        arrNameFile:JSON.stringify(nameRootFile)
      };
       const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
    setTimeout(() => {
      this["storeqlda/ActionUpdateTask"](data).then((res) => {
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
      let arrTimekh = []
      let arrTimereal = []
      arrTimekh.push(this.timeStart)
      arrTimekh.push(this.timeExpect)
      arrTimereal.push(this.timeStartReal)
      arrTimereal.push(this.timeFinishReal)
      var data = {
        Ten: this.nameTask,
        keHoach: JSON.stringify(arrTimekh),
        thucHien: JSON.stringify(arrTimereal),
        nguoiDeXuat:JSON.stringify(this.selectedPersionAssign),
        nguoiPhoiHop:JSON.stringify(this.selectedPersionDo),
        duanLienQuan:JSON.stringify(this.selectedProject),
        moTaTask: this.descriptionTask,
        mucDo: this.selectedPriorityLevel,
        ketQua: this.selectedResult,
        tinhTrang: this.statusTask,
        luuY: this.note,
        objFile : this.fileData
      };
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
    setTimeout(() => {

               this["storeqlda/ActionCreateTask"](data).then((res) => {
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
  watch: {
  },
};
</script>

<style scoped>
.custom-file-label {
  text-align: right;
  cursor: pointer !important;
  background-color: red;
}
.add-gr {
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
}
.add-gr .add-gr5 .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.add-gr5 {
  background-color: #00a53c;
  height: 32px;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.add-gr .add-gr5 .add-gr51 {
  float: left;
}
.add-gr .add-gr5 .add-gr52 {
  position: absolute;
  left: 10%;
}
.add-gr .add-gr5 .add-gr52 .btn-secondary:hover {
  background-color: chartreuse;
}
.add-gr3 .custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}
.add-gr1 .add-gr11 .add-gr111 {
  float: left;
  width: 48%;
  margin: 5px;
  box-sizing: border-box;
}
div.add-gr1,
div.add-gr2,
div.add-gr3 {
  width: 50%;
  background-color: #fff;
  padding: 5px;
  margin-bottom: 20px;
}
.add-gr .add-gr4 .add-gr41 {
  background-color: #fff;
  padding-left: 5px;
}
div.add-gr4 {
  width: 50%;
  position: absolute;
  right: 0;
  top: -8px;
  padding-left: 40px;
  padding-right: 20px;
  box-sizing: border-box;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>