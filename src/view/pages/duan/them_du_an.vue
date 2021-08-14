<template>
  <div class="add-gr">
    <!-- group 1 -->
    <div class="add-gr1">
      <h5 class="mb-3 header-title">Cập nhật thông tin dự án</h5>
      <b-form>
        <div class="grid grid-cols-7 gap-4">
        <b-form-group
          class="col-span-5"
          id="input-group-1"
          label="Tên dự án"
          label-for="input-1"
        >
          <b-form-input
            v-model="nameProject"
            id="input-1"
            type="text"
            placeholder="Nhập dự án"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
         class="col-span-2"
          id="input-group-1"
          label="Mẫ dự án"
          label-for="input-1"
        >
          <b-form-input
            v-model="codeProject"
            id="input-1"
            type="text"
            placeholder="Nhập mã dự án"
            required
          ></b-form-input>
        </b-form-group>

        </div>

         <b-form-group
          class="col-span-5"
          id="input-group-1"
          label="Tên chủ đầu tư"
          label-for="input-1"
        >
          <b-form-input
            v-model="nameInvestor"
            id="input-1"
            type="text"
            placeholder="Nhập tên chủ đầu tư"
            required
          ></b-form-input>
        </b-form-group>


        <b-form-group
          id="input-group-2"
          label="Mô tả, ghi chú về dự án"
          label-for="input-2"
        >
          <b-form-textarea
            id="textarea"
            v-model="descriptionProject"
            placeholder="Mô tả, ghi chú về dự án"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <div class="add-gr11">
          <div class="add-gr111">
            <b-form-group
              id="input-group-1"
              label="Ngày bắt đầu tiếp nhận:"
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
              label="Thời gian kết thúc thực tế:"
              label-for="input-1"
            >
              <b-form-input
                v-model="timeReal"
                id="input-1"
                type="date"
                required
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="add-gr111">
            <b-form-group
              id="input-group-1"
              label="Trạng thái dự án::"
              label-for="input-1"
            >
              <b-form-select
                v-model="selectedStatusProject"
                :options="status_project"
              >
                <template #first>
                  <b-form-select-option :value="null" disabled
                    >-- Trạng thái dự án: --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
          </div>

         
        </div>
      </b-form>
    </div>
    <!-- group 2 -->
    <div class="add-gr2">
      <h5 class="mb-3 header-title">Nhân viên tham gia dự án</h5>
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Nhân sự phụ trách chính:"
          label-for="input-1"
        >
          <multiselect
            v-model="selectedPersionMain"
            multiple
            :custom-label="custom_label"
            label="name"
            track-by="id"
            selectLabel="Ấn enter để chọn"
            deselectLabel="Ấn enter để bỏ chọn"
            :options="persion_main"
          >
          </multiselect>
        </b-form-group>
      </b-form>

      <b-form>
        <b-form-group
          id="input-group-1"
          label="Nhân sự liên quan:"
          label-for="input-1"
        >
          <multiselect
            v-model="selectedInvolve"
            multiple
            :custom-label="custom_label"
            label="name"
            track-by="id"
            selectLabel="Ấn enter để chọn"
            deselectLabel="Ấn enter để bỏ chọn"
            :options="project_involve"
          >
          </multiselect>
        </b-form-group>
      </b-form>
    </div>

    <!-- group 3 -->
    <div class="add-gr3">
      <h5>File và tài liệu liên quan</h5>

      <b-form-file class="z-0 cursor-pointer" id="file-small" size="sm"></b-form-file>
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
        <div v-if="idCurrentProj" class="add-gr51 add-gr52">
      <b-button @click="handleUpdate" size="sm" class="mb-2 tao-cv">
        <b-icon icon="check2" aria-hidden="true"></b-icon> Cập nhật
      </b-button>
      </div>

      <div v-else class="add-gr51 add-gr52">
        <b-button @click="handleSave" size="sm" class="mb-2 tao-cv">
          <b-icon icon="check2" aria-hidden="true"></b-icon> Tạo dự án
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "add_task",
  components: { Multiselect },
  data() {
    return {
      idCurrentProj:null,
      text: "", // cần khai báo data này không sẽ gặp wraning text is not define trong hàm custom_label
      currentTab: 0,
      nameProject:'',
      codeProject:'',
      nameInvestor:'',
      descriptionProject:'',
      timeStart:'',
      timeExpect:'',
      timeReal:'',

      selectedStatusProject: null, // Array reference
      status_project: [
        { value: "Dự án mới", text: "Dự án mới" },
        { value: "Chưa hoàn thành", text: "Chưa hoàn thành" },
        { value: "Đã hoàn thành", text: "Đã hoàn thành" },

      ],
      selectedPersionMain: null, // Array reference
      persion_main: [

      ],
      selectedInvolve: null, // Array reference
      project_involve: [

      ],
    };
  },
  created() {
          this.idCurrentProj = this.$route.params.id;
     if(this.idCurrentProj!== undefined){
        this["storeqlda/getProjectWithId"](this.idCurrentProj).then((res)=>{
         this.nameProject = res.data.tenDuAn ;
         this.codeProject = res.data.maDuAn ;
         this.nameInvestor = res.data.tenCdt ;
        this.descriptionProject= res.data.moTaDuAn ;
        this.timeStart=res.data.ngayBatDau;
        this.timeExpect=res.data.ngayKetThuc ;
        this.timeReal=res.data.ngayKetThucThucTe ;
        this.selectedStatusProject= res.data.trangThai;
        this.selectedPersionMain = JSON.parse(res.data.nhanSuChinh);
        this.selectedInvolve = JSON.parse(res.data.nhanSuLienQuan);

        })

     }


    this["storeqlda/getListDataUser"]().then(() => {
      let arrTemp = this["storeqlda/getListDataUserGTer"];
      for (var i in arrTemp) {
        let data = {
          id: arrTemp[i].id,
          text: arrTemp[i].name,
        };
        this.persion_main.push(data);
        this.project_involve.push(data);
      }
    });
  },
  mounted() {},
  computed: {
    ...mapGetters([
      "storeqlda/getListDataUserGTer",
      "currentUserPersonalInfo",
      "storeqlda/currentUser",
    ]),
  },
  methods: {
    ...mapActions(["storeqlda/ActionCreateProject",
                  "storeqlda/getListDataUser",
                  "storeqlda/getProjectWithId",
                  "storeqlda/ActionUpdateProject",
                  
     ]),
    custom_label({ text }) {
      return `${text}`;
    },
      handleUpdate(){
      var data = {
        tenDuAn: this.nameProject,
        maDuAn: this.codeProject,
        tenCdt: this.nameInvestor,
        moTaDuAn: this.descriptionProject,
        ngayBatDau: this.timeStart,
        ngayKetThuc: this.timeExpect,
        ngayKetThucThucTe: this.timeReal,
        trangThai:this.selectedStatusProject,
        nhanSuChinh: JSON.stringify(this.selectedPersionMain),
        nhanSuLienQuan: JSON.stringify(this.selectedInvolve),
        idProj:this.idCurrentProj
      };
      this["storeqlda/ActionUpdateProject"](data).then((res) => {
        alert(res.data);
      });
    },
    handleSave() {
     
      var data = {
        tenDuAn: this.nameProject,
        maDuAn: this.codeProject,
        tenCdt: this.nameInvestor,
        moTaDuAn: this.descriptionProject,
        ngayBatDau: this.timeStart,
        ngayKetThuc: this.timeExpect,
        ngayKetThucThucTe: this.timeReal,
        trangThai:this.selectedStatusProject,
        nhanSuChinh: JSON.stringify(this.selectedPersionMain),
        nhanSuLienQuan: JSON.stringify(this.selectedInvolve),
      };
      this["storeqlda/ActionCreateProject"](data).then((res) => {
        alert(res.data);
      });
    },
  },
  watch: {

  },
};
</script>

<style scoped>
.custom-file-label {
    cursor: pointer;
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