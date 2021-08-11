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

        <div class="hs-gr5">
          <h5>File và tài liệu liên quan</h5>
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
export default {
   components: { Multiselect },
  data() {
    return {
      nameContract:'',
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
      }
    });
  },
  methods: {
       ...mapActions(["storeqlda/ActionCreateContract", "storeqlda/getListDataUser"]),
    custom_label({ text }) {
      return `${text}`;
    },
    handleSave() {
      let dateStart = "";
      let dateFinish = "";
      if (this.timeStart ) {
        let arrTimeStart = this.timeStart.split("-");
        dateStart =
          arrTimeStart[2] +
          "/" +
          arrTimeStart[1] +
          "/" +
          arrTimeStart[0]
      }
      if (this.timeFinish) {
        let arrTimeFinish = this.timeFinish.split("-");
        dateFinish =
          arrTimeFinish[2] +
          "/" +
          arrTimeFinish[1] +
          "/" +
          arrTimeFinish[0];
      }
         let nguoiDo = "";
      for (var j in this.selectedPersionDo) {
        if (!nguoiDo) {
          nguoiDo = this.selectedPersionDo[j].text;
        } else {
          nguoiDo = nguoiDo + "," + this.selectedPersionDo[j].text;
        }
      }
      var data = {
        tenHopDong: this.nameContract,
        loaiHopDong: this.selectedKindContract,
        duAn: this.selectedProject,
        giaTriHD: this.valueContract,
        nhanSuLienQuan: nguoiDo,
        batDau: dateStart,
        ketThuc: dateFinish,
        donVi: this.selectedUnit,
        khoiLuong: this.mass,

      };
      this["storeqlda/ActionCreateContract"](data).then((res) => {
        alert(res.data);
      });
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