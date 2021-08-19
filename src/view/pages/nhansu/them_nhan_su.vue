<template>
  <div class="add-gr">
    <!-- group 1 -->
    <div class="add-gr1">
      <h5 class="mb-3 header-title">Thêm nhân sự</h5>
      <b-form>
        <div class="grid grid-flow-col grid-cols-7 grid-rows-3">
          <b-form-group
            class="col-span-5"
            id="input-group-1"
            label="Mã nhân viên"
            label-for="input-1"
          >
            <b-form-input
              v-model="codeEmploy"
              id="input-1"
              type="text"
              placeholder="Mã nhân viên"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-5"
            id="input-group-1"
            label="Tài khoản"
            label-for="input-1"
          >
            <b-form-select
              v-model="selectedAcount"
              :options="acount"
            ></b-form-select>
          </b-form-group>

          <b-form-group
            class="col-span-5"
            id="input-group-1"
            label="Nhập tên nhân viên"
            label-for="input-1"
          >
            <b-form-input
              v-model="nameEmploy"
              id="input-1"
              type="text"
              placeholder="Nhập tên nhân viên"
              required
            ></b-form-input>
          </b-form-group>

          <div class="col-span-2 row-span-3 mt-10 mb-10 ml-5 mr-5">
            <img class="symbol-label" :src="currentUserPhoto" alt="" />
          </div>
        </div>
        <div class="grid gap-3 grid-cols-2">
          <b-form-group
            id="input-group-1"
            label="Điện thoại liên hệ"
            label-for="input-1"
          >
            <b-form-input
              v-model="teleEmploy"
              id="input-1"
              type="text"
              placeholder="Điện thoại liên hệ"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Email" label-for="input-1">
            <b-form-input
              v-model="emailEmploy"
              id="input-1"
              type="text"
              placeholder="Email"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="grid gap-3 grid-cols-4">
          <b-form-group
            class="col-span-1"
            id="input-group-1"
            label="Giới tinh"
            label-for="input-1"
          >
            <b-form-input
              v-model="genderEmploy"
              id="input-1"
              type="text"
              placeholder="Giới tinh"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-1"
            id="input-group-1"
            label="Ngày sinh"
            label-for="input-1"
          >
            <b-form-input
              v-model="birthdayEmploy"
              id="input-1"
              type="text"
              placeholder="Ngày sinh"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-2"
            id="input-group-1"
            label="Nơi sinh"
            label-for="input-1"
          >
            <b-form-input
              v-model="placeOfBirthEmploy"
              id="input-1"
              type="text"
              placeholder="Nơi sinh"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div>
          <b-form-group
            id="input-group-1"
            label="Nguyên quán"
            label-for="input-1"
          >
            <b-form-input
              v-model="homeTownEmploy"
              id="input-1"
              type="text"
              placeholder="Nguyên quán"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div>
          <b-form-group
            id="input-group-1"
            label="Hộ khẩu thường trú"
            label-for="input-1"
          >
            <b-form-input
              v-model="permanentResidenceEmploy"
              id="input-1"
              type="text"
              placeholder="Hộ khẩu thường trú"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div>
          <b-form-group
            id="input-group-1"
            label="Chỗ ở hiện nay"
            label-for="input-1"
          >
            <b-form-input
              v-model="currentAccommodationEmploy"
              id="input-1"
              type="text"
              placeholder="Chỗ ở hiện nay"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="grid gap-3 grid-cols-2">
          <b-form-group
            id="input-group-1"
            label="Nghành học"
            label-for="input-1"
          >
            <b-form-input
              v-model="majorsEmploy"
              id="input-1"
              type="text"
              placeholder="Nghành học"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Nơi đào tạo"
            label-for="input-1"
          >
            <b-form-input
              v-model="trainingPlacesEmploy"
              id="input-1"
              type="text"
              placeholder="Nơi đào tạo"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="grid gap-3 grid-cols-2">
          <b-form-group id="input-group-1" label="Dân tộc" label-for="input-1">
            <b-form-input
              v-model="nationEmploy"
              id="input-1"
              type="text"
              placeholder="Dân tộc"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Tôn giáo" label-for="input-1">
            <b-form-input
              v-model="religionEmploy"
              id="input-1"
              type="text"
              placeholder="Tôn giáo"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="grid gap-3 grid-cols-2">
          <b-form-group
            id="input-group-1"
            label="Trình độ chuyên môn"
            label-for="input-1"
          >
            <b-form-input
              v-model="qualificationEmploy"
              id="input-1"
              type="text"
              placeholder="Trình độ chuyên môn"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Năm tôt nghiệp"
            label-for="input-1"
          >
            <b-form-input
              v-model="graduationYearEmploy"
              id="input-1"
              type="text"
              placeholder="Năm tôt nghiệp"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="grid gap-3 grid-cols-4">
          <b-form-group
            class="col-span-2"
            id="input-group-1"
            label="Chứng minh thư/căn cước"
            label-for="input-1"
          >
            <b-form-input
              v-model="IDCardEmploy"
              id="input-1"
              type="text"
              placeholder="Chứng minh thư/căn cước"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-1"
            id="input-group-1"
            label="Ngày cấp"
            label-for="input-1"
          >
            <b-form-input
              v-model="dateRangeEmploy"
              id="input-1"
              type="text"
              placeholder="Ngày cấp"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-1"
            id="input-group-1"
            label="Nơi cấp"
            label-for="input-1"
          >
            <b-form-input
              v-model="issuedByEmploy"
              id="input-1"
              type="text"
              placeholder="Nơi cấp"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="grid gap-3 grid-cols-4">
          <b-form-group
            class="col-span-2"
            id="input-group-1"
            label="Số tài khoản"
            label-for="input-1"
          >
            <b-form-input
              v-model="accountNumberEmploy"
              id="input-1"
              type="text"
              placeholder="Số tài khoản"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-1"
            id="input-group-1"
            label="Ngân hàng"
            label-for="input-1"
          >
            <b-form-input
              v-model="bankEmploy"
              id="input-1"
              type="text"
              placeholder="Ngân hàng"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-1"
            id="input-group-1"
            label="Chi nhánh"
            label-for="input-1"
          >
            <b-form-input
              v-model="branchBankEmploy"
              id="input-1"
              type="text"
              placeholder="Chi nhánh"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="grid gap-3 grid-cols-4">
          <b-form-group
            class="col-span-2"
            id="input-group-1"
            label="CCHN TVGS:"
            label-for="input-1"
          >
            <b-form-input
              v-model="practicingCertificateTVGS"
              id="input-1"
              type="text"
              placeholder="CCHN TVGS:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-1"
            id="input-group-1"
            label="Ngày hiệu lực:"
            label-for="input-1"
          >
            <b-form-input
              v-model="practicingCertificateTVGSEffectiveDate"
              id="input-1"
              type="text"
              placeholder="Ngày hiệu lực:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-1"
            id="input-group-1"
            label="CC ATLD:"
            label-for="input-1"
          >
            <b-form-input
              v-model="practicingCertificateATLD"
              id="input-1"
              type="text"
              placeholder="CC ATLD:"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="grid gap-3 grid-cols-2">
          <b-form-group
            id="input-group-1"
            label="CCHN TVTK:"
            label-for="input-1"
          >
            <b-form-input
              v-model="practicingCertificateTVTK"
              id="input-1"
              type="text"
              placeholder="CCHN TVTK:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Chứng chỉ khác:"
            label-for="input-1"
          >
            <b-form-input
              v-model="practicingCertificateOther"
              id="input-1"
              type="text"
              placeholder="Chứng chỉ khác:"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="grid gap-3 grid-cols-4">
          <b-form-group
            class="col-span-2"
            id="input-group-1"
            label="Ngày nhận công tác:"
            label-for="input-1"
          >
            <b-form-input
              v-model="DateOfReceivingTheJob"
              id="input-1"
              type="text"
              placeholder="Ngày nhận công tác:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-1"
            id="input-group-1"
            label="Phòng ban:"
            label-for="input-1"
          >
            <b-form-input
              v-model="Department"
              id="input-1"
              type="text"
              placeholder="Phòng ban:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-1"
            id="input-group-1"
            label="Chức danh (*):"
            label-for="input-1"
          >
            <b-form-input
              v-model="Position"
              id="input-1"
              type="text"
              placeholder="Chức danh (*):"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="grid gap-3 grid-cols-4">
          <b-form-group
            class="col-span-2"
            id="input-group-1"
            label="Ngày đóng bảo hiểm xã hội:"
            label-for="input-1"
          >
            <b-form-input
              v-model="socialInsurance"
              id="input-1"
              type="text"
              placeholder="Ngày đóng bảo hiểm xã hội:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-1"
            id="input-group-1"
            label="Loại hợp đồng:"
            label-for="input-1"
          >
            <b-form-input
              v-model="typeOfContract"
              id="input-1"
              type="text"
              placeholder="Loại hợp đồng:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-1"
            id="input-group-1"
            label="Trạng thái công việc:"
            label-for="input-1"
          >
            <b-form-input
              v-model="workStatus"
              id="input-1"
              type="text"
              placeholder="Trạng thái công việc:"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div class="grid gap-3 grid-cols-4">
          <b-form-group
            class="col-span-2"
            id="input-group-1"
            label="Số sổ bảo hiểm xã hội:"
            label-for="input-1"
          >
            <b-form-input
              v-model="socialInsuranceNumber"
              id="input-1"
              type="text"
              placeholder="Số sổ bảo hiểm xã hội:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-1"
            id="input-group-1"
            label="Ngày nghỉ việc:"
            label-for="input-1"
          >
            <b-form-input
              v-model="dayOff"
              id="input-1"
              type="text"
              placeholder="Ngày nghỉ việc:"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-span-1"
            id="input-group-1"
            label="Mức đóng BHXH:"
            label-for="input-1"
          >
            <b-form-input
              v-model="socialInsurancePremium"
              id="input-1"
              type="text"
              placeholder="Mức đóng BHXH:"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <div>
          <b-form-group
            id="input-group-2"
            label="Mô tả về nhân viên:"
            label-for="input-2"
          >
            <b-form-textarea
              id="textarea"
              v-model="descriptionEmploy"
              placeholder="Mô tả về nhân viên:"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </div>
      </b-form>
    </div>
    <!-- group 2 -->

    <!-- group 3 -->
    <div class="add-gr3">
      <h5>File và tài liệu liên quan</h5>

      <b-form-file
        class="z-0 cursor-pointer"
        id="file-small"
        size="sm"
      ></b-form-file>
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
      <div v-if="idCurrentEmploy" class="add-gr51 add-gr52">
        <b-button @click="handleUpdate" size="sm" class="mb-2 tao-cv">
          <b-icon icon="check2" aria-hidden="true"></b-icon> Cập nhật
        </b-button>
      </div>

      <div v-else class="add-gr51 add-gr52">
        <b-button @click="handleSave" size="sm" class="mb-2 tao-cv">
          <b-icon icon="check2" aria-hidden="true"></b-icon> Tạo thông tin nhân
          sự
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
//import Multiselect from "vue-multiselect";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "add_task",
  components: {},
  data() {
    return {
      text: "", // cần khai báo data này không sẽ gặp wraning text is not define trong hàm custom_label
      currentTab: 0,
      idCurrentEmploy: null,
      codeEmploy: "",
      selectedAcount: "thanh", // Array reference
      acount: [],
      nameEmploy: "",
      teleEmploy: "",
      emailEmploy: "",
      genderEmploy: "",
      birthdayEmploy: "",
      placeOfBirthEmploy: "",
      homeTownEmploy: "",
      permanentResidenceEmploy: "",
      currentAccommodationEmploy: "",
      majorsEmploy: "",
      trainingPlacesEmploy: "",
      nationEmploy: "",
      religionEmploy: "",
      qualificationEmploy: "",
      graduationYearEmploy: "",
      IDCardEmploy: "",
      dateRangeEmploy: "",
      issuedByEmploy: "",
      accountNumberEmploy: "",
      bankEmploy: "",
      branchBankEmploy: "",
      practicingCertificateTVGS: "",
      practicingCertificateTVGSEffectiveDate: "",
      practicingCertificateATLD: "",
      practicingCertificateTVTK: "",
      practicingCertificateOther: "",
      DateOfReceivingTheJob: "",
      Department: "",
      Position: "",
      socialInsurance: "",
      typeOfContract: "",
      workStatus: "",
      socialInsuranceNumber: "",
      dayOff: "",
      socialInsurancePremium: "",
      descriptionEmploy: "",
    };
  },

  mounted() {},
  created() {
    this.idCurrentEmploy = this.$route.params.id;
    if (this.idCurrentEmploy !== undefined) {
      this["storeqlda/getEmployWithId"](this.idCurrentEmploy).then((res) => {
        this.codeEmploy = res.data.codeEmploy;
        let data = {
          value: res.data.userNameEmploy,
          text: res.data.userNameEmploy,
        };
        this.acount.push(data);
        this.selectedAcount = res.data.userNameEmploy;
        this.nameEmploy = res.data.nameEmploy;
        this.teleEmploy = res.data.teleEmploy;
        this.emailEmploy = res.data.emailEmploy;
        this.genderEmploy = res.data.genderEmploy;
        this.homeTownEmploy = res.data.homeTownEmploy;
        this.permanentResidenceEmploy = res.data.permanentResidenceEmploy;
        this.currentAccommodationEmploy = res.data.currentAccommodationEmploy;
        this.majorsEmploy = res.data.majorsEmploy;
        this.trainingPlacesEmploy = res.data.trainingPlacesEmploy;
        this.nationEmploy = res.data.nationEmploy;
        this.religionEmploy = res.data.religionEmploy;
        this.qualificationEmploy = res.data.qualificationEmploy;
        this.graduationYearEmploy = res.data.graduationYearEmploy;
        this.IDCardEmploy = res.data.IDCardEmploy;
        this.dateRangeEmploy = res.data.dateRangeEmploy;
        this.bankEmploy = res.data.bankEmploy;
        this.branchBankEmploy = res.data.branchBankEmploy;
        this.practicingCertificateTVGS = res.data.practicingCertificateTVGS;
        this.practicingCertificateTVGSEffectiveDate =
          res.data.practicingCertificateTVGSEffectiveDate;
        this.practicingCertificateATLD = res.data.practicingCertificateATLD;
        this.practicingCertificateTVTK = res.data.practicingCertificateTVTK;
        this.practicingCertificateOther = res.data.practicingCertificateOther;
        this.DateOfReceivingTheJob = res.data.DateOfReceivingTheJob;
        this.Department = res.data.Department;
        this.Position = res.data.Position;
        this.socialInsurance = res.data.socialInsurance;
        this.socialInsuranceNumber = res.data.socialInsuranceNumber;
        this.dayOff = res.data.dayOff;
        this.socialInsurancePremium = res.data.socialInsurancePremium;
        this.descriptionEmploy = res.data.descriptionEmploy;

        //**************************/
        //lấy avatar
         this["storeqlda/getListDataUser"]().then(() => {
        let arrTemp = this["storeqlda/getListDataUserGTer"];
          for (var i in arrTemp) {
            if (arrTemp[i].email == this.selectedAcount) {
              this["storeqlda/getUrlAvatar"](arrTemp[i].id);
              break;
            }
        }
         })
      });
    } else {
      this["storeqlda/getListDataUser"]().then(() => {
        let arrTemp = this["storeqlda/getListDataUserGTer"];
        for (var i in arrTemp) {
          let data = {
            value: arrTemp[i].email,
            text: arrTemp[i].email,
          };
          this.acount.push(data);
        }
      });
    }
  },
  computed: {
    ...mapGetters([
      "storeqlda/getListDataUserGTer",
      "currentUserPersonalInfo",
      "storeqlda/currentUser",
      "currentUserPersonalInfo",
      "getcurrentUserAccountInfo",
      "currentUserPhoto",
    ]),
  },
  methods: {
    ...mapActions([
      "storeqlda/ActionCreateInfomationEmploy",
      "storeqlda/getListDataUser",
      "storeqlda/ActionUpdateInfomationEmploy",
      "storeqlda/getEmployWithId",
      "storeqlda/getUrlAvatar",
    ]),
    custom_label({ text }) {
      return `${text}`;
    },
    handleUpdate() {
      var data = {
        codeEmploy: this.codeEmploy,
        userNameEmploy: this.selectedAcount,
        nameEmploy: this.nameEmploy,
        teleEmploy: this.teleEmploy,
        emailEmploy: this.emailEmploy,
        genderEmploy: this.genderEmploy,
        birthdayEmploy: this.birthdayEmploy,
        placeOfBirthEmploy: this.placeOfBirthEmploy,
        homeTownEmploy: this.homeTownEmploy,
        permanentResidenceEmploy: this.permanentResidenceEmploy,
        currentAccommodationEmploy: this.currentAccommodationEmploy,
        majorsEmploy: this.majorsEmploy,
        trainingPlacesEmploy: this.trainingPlacesEmploy,
        nationEmploy: this.nationEmploy,
        religionEmploy: this.religionEmploy,
        qualificationEmploy: this.qualificationEmploy,
        graduationYearEmploy: this.graduationYearEmploy,
        IDCardEmploy: this.IDCardEmploy,
        dateRangeEmploy: this.dateRangeEmploy,
        issuedByEmploy: this.issuedByEmploy,
        accountNumberEmploy: this.accountNumberEmploy,
        bankEmploy: this.bankEmploy,
        branchBankEmploy: this.branchBankEmploy,
        practicingCertificateTVGS: this.practicingCertificateTVGS,
        practicingCertificateTVGSEffectiveDate:
          this.practicingCertificateTVGSEffectiveDate,
        practicingCertificateATLD: this.practicingCertificateATLD,
        practicingCertificateTVTK: this.practicingCertificateTVTK,
        practicingCertificateOther: this.practicingCertificateOther,
        DateOfReceivingTheJob: this.DateOfReceivingTheJob,
        Department: this.Department,
        Position: this.Position,
        socialInsurance: this.socialInsurance,
        typeOfContract: this.typeOfContract,
        workStatus: this.workStatus,
        socialInsuranceNumber: this.socialInsuranceNumber,
        dayOff: this.dayOff,
        socialInsurancePremium: this.socialInsurancePremium,
        descriptionEmploy: this.descriptionEmploy,
        idEmploy: this.idCurrentEmploy,
      };
      this["storeqlda/ActionUpdateInfomationEmploy"](data).then((res) => {
        alert(res.data);
      });
    },

    handleSave() {
      var data = {
        codeEmploy: this.codeEmploy,
        userNameEmploy: this.selectedAcount,
        nameEmploy: this.nameEmploy,
        teleEmploy: this.teleEmploy,
        emailEmploy: this.emailEmploy,
        genderEmploy: this.genderEmploy,
        birthdayEmploy: this.birthdayEmploy,
        placeOfBirthEmploy: this.placeOfBirthEmploy,
        homeTownEmploy: this.homeTownEmploy,
        permanentResidenceEmploy: this.permanentResidenceEmploy,
        currentAccommodationEmploy: this.currentAccommodationEmploy,
        majorsEmploy: this.majorsEmploy,
        trainingPlacesEmploy: this.trainingPlacesEmploy,
        nationEmploy: this.nationEmploy,
        religionEmploy: this.religionEmploy,
        qualificationEmploy: this.qualificationEmploy,
        graduationYearEmploy: this.graduationYearEmploy,
        IDCardEmploy: this.IDCardEmploy,
        dateRangeEmploy: this.dateRangeEmploy,
        issuedByEmploy: this.issuedByEmploy,
        accountNumberEmploy: this.accountNumberEmploy,
        bankEmploy: this.bankEmploy,
        branchBankEmploy: this.branchBankEmploy,
        practicingCertificateTVGS: this.practicingCertificateTVGS,
        practicingCertificateTVGSEffectiveDate:
          this.practicingCertificateTVGSEffectiveDate,
        practicingCertificateATLD: this.practicingCertificateATLD,
        practicingCertificateTVTK: this.practicingCertificateTVTK,
        practicingCertificateOther: this.practicingCertificateOther,
        DateOfReceivingTheJob: this.DateOfReceivingTheJob,
        Department: this.Department,
        Position: this.Position,
        socialInsurance: this.socialInsurance,
        typeOfContract: this.typeOfContract,
        workStatus: this.workStatus,
        socialInsuranceNumber: this.socialInsuranceNumber,
        dayOff: this.dayOff,
        socialInsurancePremium: this.socialInsurancePremium,
        descriptionEmploy: this.descriptionEmploy,
      };
      this["storeqlda/ActionCreateInfomationEmploy"](data).then((res) => {
        alert(res.data);
      });
    },
  },
  watch: {},
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