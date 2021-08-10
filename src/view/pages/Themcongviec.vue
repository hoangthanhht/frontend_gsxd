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

      <b-form-file id="file-small" size="sm"></b-form-file>
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
      <div class="add-gr51 add-gr52">
        <b-button @click="handleSave" size="sm" class="mb-2 tao-cv">
          <b-icon icon="check2" aria-hidden="true"></b-icon> Cập nhật
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
    };
  },
  created() {
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
    ...mapActions(["storeqlda/ActionCreateTask", "storeqlda/getListDataUser"]),
    custom_label({ text }) {
      return `${text}`;
    },
    handleSave() {
      let datePlan = "";
      let dateReal = "";
      if (this.timeStart && this.timeExpect) {
        let arrTimeStartKh = this.timeStart.split("-");
        let arrTimeFinishKh = this.timeExpect.split("-");
        datePlan =
          "Bắt đầu : " +
          arrTimeStartKh[2] +
          "/" +
          arrTimeStartKh[1] +
          "/" +
          arrTimeStartKh[0] +
          "," +
          "Kết thúc " +
          arrTimeFinishKh[2] +
          "/" +
          arrTimeFinishKh[1] +
          "/" +
          arrTimeFinishKh[0];
      }
      if (this.timeFinishReal && this.timeFinishReal) {
        let arrTimeStartReal = this.timeStartReal.split("-");
        let arrTimeFinishReal = this.timeFinishReal.split("-");
        dateReal =
          "Bắt đầu : " +
          arrTimeStartReal[2] +
          "/" +
          arrTimeStartReal[1] +
          "/" +
          arrTimeStartReal[0] +
          "," +
          "Kết thúc " +
          arrTimeFinishReal[2] +
          "/" +
          arrTimeFinishReal[1] +
          "/" +
          arrTimeFinishReal[0];
      }
      let nguoiDeXuat = "";
      for (var i in this.selectedPersionAssign) {
        if (!nguoiDeXuat) {
          nguoiDeXuat = this.selectedPersionAssign[i].text;
        } else {
          nguoiDeXuat = nguoiDeXuat + "," + this.selectedPersionAssign[i].text;
        }
      }
         let nguoiPhoiHop = "";
      for (var j in this.selectedPersionDo) {
        if (!nguoiPhoiHop) {
          nguoiPhoiHop = this.selectedPersionDo[j].text;
        } else {
          nguoiPhoiHop = nguoiPhoiHop + "," + this.selectedPersionDo[j].text;
        }
      }
      var data = {
        Ten: this.nameTask,
        keHoach: datePlan,
        thucHien: dateReal,
        nguoiDeXuat: nguoiDeXuat,
        nguoiPhoiHop: nguoiPhoiHop,
        moTaTask: this.descriptionTask,
        mucDo: this.selectedPriorityLevel,
        ketQua: this.selectedResult,
        tinhTrang: this.statusTask,
        luuY: this.note,
      };
      this["storeqlda/ActionCreateTask"](data).then((res) => {
        alert(res.data);
      });
    },
  },
  watch: {
    currentTab: function () {},
    timeExpect: function (old) {
      console.log("old", old);
    },
  },
};
</script>

<style scoped>
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