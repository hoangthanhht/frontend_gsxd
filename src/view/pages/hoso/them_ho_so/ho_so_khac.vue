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
          <b-form-file class="z-0" id="file-small" size="sm"></b-form-file>
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
import CompThemHs from "./comp_them_hs/muc_them_ho_so";
export default {
  data() {
    return {
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
  },
       created() {
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
                     ]),
      custom_label({ text }) {
      return `${text}`;
    },
      handleSave() {

      let dateReceive = "";let timeReturn = "";
      if (this.timeReceive && this.timeReturn) {
        let arrtimeReceive = this.timeReceive.split("-");
        let arrtimeReturn = this.timeReturn.split("-");
      dateReceive =
          arrtimeReceive[2] +
          "/" +
          arrtimeReceive[1] +
          "/" +
          arrtimeReceive[0]
      timeReturn =
          arrtimeReturn[2] +
          "/" +
          arrtimeReturn[1] +
          "/" +
          arrtimeReturn[0];
      }


      var data = {
        duAn: this.selectedProject,
        loaiHoSo: this.selectedKindFile.text,
        kyHieuHoSo: 'hsk',
        tenHoSo: this.fileName,
        soLuong: this.quantity,
        ngayNhan: dateReceive,
        ngayTra: timeReturn,
        lanKiemTra: this.timeTest,
        ketQua: this.selectedResult,
        lyDoKhongDat: this.reason,
        noiDungThayDoiTk: null,
        nguyenNhanThayDoiTk: null,
        nguoiPheDuyet: null,
        yKienTVGS: null,
      };
      this["storeqlda/ActionCreateFile"](data).then((res) => {
        alert(res.data);
      });
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