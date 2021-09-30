<template>
  <div class="header-page-giaocv">
    <!-- <div>
    <select2 v-model="myValue" :options="myOptions" multiple />

  </div> -->
    <!-- <div>
    <multiselect
      v-model="myValue"
      multiple
      placeholder="Pick some"
      :custom-label="nameWithLang"
      label="name"
      track-by="id"
      :options="myOptions">
    </multiselect>
  </div> -->
    <div class="block-select">
      <div class="btn-add-cv">
        <router-link
          to="/themcongviec"
          tag="b-button"
          class="mb-2 add-cv icon-tvgs pt-3 pb-3"
        >
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm
        </router-link>
      </div>

      <div class="select-cbb">
        <multiselect
          v-model="selectedPersion"
          multiple
          placeholder="Theo nhân sự"
          :custom-label="custom_label_persion"
          label="name"
          track-by="id"
          selectLabel="Ấn enter để chọn"
          deselectLabel="Ấn enter để bỏ chọn"
          :options="persion"
        >
        </multiselect>
      </div>

      <div class="select-cbb">
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
      </div>

      <div class="select-cbb">
        <b-form-select v-model="selectedJobStatus" :options="job_status">
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Tình trạng công việc --</b-form-select-option
            >
          </template>
        </b-form-select>
      </div>
      <div class="select-cbb">
        <b-form-select v-model="selectedWorkResults" :options="work_results">
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Kết quả công việc --</b-form-select-option
            >
          </template>
        </b-form-select>
      </div>

      <div class="search-congv">
        <b-input-group size="sm" class="mb-2 add-cv icon-tvgs cursor-pointer">
          <b-form-input
            v-model="search"
            type="search"
            placeholder="Search terms"
          ></b-form-input>
          <b-input-group-prepend is-text>
            <b-icon @click="handleSearch" icon="search"></b-icon>
          </b-input-group-prepend>

          <b-input-group-prepend is-text>
            <b-icon @click="handleReset" icon="arrow-repeat"></b-icon>
          </b-input-group-prepend>
        </b-input-group>
      </div>
    </div>

    <div
      v-if="
        search ||
        selectedPriorityLevel ||
        selectedPersion ||
        selectedWorkResults ||
        selectedJobStatus
      "
      class="card-body pt-0 pb-3"
    >
      <div class="tab-content">
        <!--begin::Table-->
        <div class="table-responsive table-striped">
          <table
            class="
              table
              table-head-custom
              table-vertical-center
              table-head-bg
              table-borderless
            "
          >
            <thead>
              <tr class="text-left">
                <!-- <th style="max-width: 50px" class="pl-7">
                  id
                </th> -->
                <th style="display: none">Id</th>
                <th>Tên</th>
                <th>Kế hoạch</th>
                <th>Thực hiện</th>
                <th>Người đề xuất</th>
                <th>Người phối hợp</th>
                <th>Yêu cầu công việc</th>
                <th>Ưu tiên</th>
                <th>Kết quả</th>
                <th>Tình trạng</th>
                <th>Lưu ý</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <!-- khi hàm trả về 1 arr như hàm handlesearch thì vue sẽ tự động chạy hàm này khi render
              như trong trường hợp này thì điêu kiện selectedPriorityLevel này tồn tại thi nó thao mãn 
              v-if nên nó tự động render và chạy hàm handlesearch
               -->
              <template v-for="(item, index) in handleSearch()">
                <tr v-bind:key="index" class="row_table_note">
                  <!-- <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td> -->
                  <td style="display: none">
                    <span class="id_vat_tu text-muted font-weight-bold">{{
                      item.id !== null ? item.id : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="ma_vat_tu text-muted font-weight-bold"
                      >{{ item.Ten !== null ? item.Ten : "null" }}
                    </span>

					          <span v-if="handleLinkWithId(item.id,arrLinkSearch).length>0">
                      <b-dropdown text="file đính kèm" class="fileAttach">
                        <template
                          v-for="(it, idx) in handleLinkWithId(item.id,arrLinkSearch)"
                        >
                          <b-dropdown-item
                            style="padding-left: 0px"
                            v-bind:key="idx"
                            v-bind:href="it"
                            >File {{ idx + 1 }}</b-dropdown-item>
                        </template>
                      </b-dropdown>
                    </span>
                  </td>
                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      handleGetDate(handleSearch(), index)[0] !== null
                        ? handleGetDate(handleSearch(), index)[0]
                        : ""
                    }}</span>
                  </td>
                  <td>
                    <span class="don_vi text-muted font-weight-bold">{{
                      handleGetDate(handleSearch(), index)[1] !== null
                        ? handleGetDate(handleSearch(), index)[1]
                        : ""
                    }}</span>
                  </td>
                  <td>
                    <span class="gia_vat_tu text-muted font-weight-bold">{{
                      handleGetPersion(handleSearch(), index)[0] !== null
                        ? handleGetPersion(handleSearch(), index)[0]
                        : ""
                    }}</span>
                  </td>

                  <td>
                    <span class="khu_vuc text-muted font-weight-bold">{{
                      handleGetPersion(handleSearch(), index)[1] !== null
                        ? handleGetPersion(handleSearch(), index)[1]
                        : ""
                    }}</span>
                  </td>

                  <td>
                    <span class="thoi_diem text-muted font-weight-bold">{{
                      item.moTaTask !== null ? item.moTaTask : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="nguon text-muted font-weight-bold">{{
                      item.mucDo !== null ? item.mucDo : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="ghi_chu text-muted font-weight-bold">{{
                      item.ketQua !== null ? item.ketQua : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="tinh text-muted font-weight-bold">{{
                      item.tinhTrang !== null ? item.tinhTrang : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="tac_gia text-muted font-weight-bold">{{
                      item.luuY !== null ? item.luuY : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="nguon text-muted font-weight-bold">
                      <i
                        @click="handleEdit(handleSearch(), index)"
                        class="
                          menu-icon
                          cursor-pointer
                          flaticon2-edit
                          text-white
                          pl-2
                          pr-2
                          mr-5
                          bg-green-400
                        "
                      ></i>
                      <i
                        @click="handleDelete(handleSearch(), index)"
                        class="
                          menu-icon
                          cursor-pointer
                          flaticon2-rubbish-bin
                          text-white
                          pl-2
                          pr-2
                          bg-red-600
                        "
                      ></i>
                    </span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!--end::Table-->
      </div>
    </div>

    <div v-else class="card-body pt-0 pb-3">
      <div class="tab-content">
        <!--begin::Table-->
        <div class="table-responsive table-striped">
          <table
            class="
              table
              table-head-custom
              table-vertical-center
              table-head-bg
              table-borderless
            "
          >
            <thead>
              <tr class="text-left">
                <!-- <th style="max-width: 50px" class="pl-7">
                  id
                </th> -->
                <th style="display: none">Id</th>
                <th>Tên</th>
                <th>Kế hoạch</th>
                <th>Thực hiện</th>
                <th>Người đề xuất</th>
                <th>Người phối hợp</th>
                <th>Yêu cầu công việc</th>
                <th>Ưu tiên</th>
                <th>Kết quả</th>
                <th>Tình trạng</th>
                <th>Lưu ý</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="dataArr.length !== 0">
              <template v-for="(item, index) in dataArrAssignedWork">
                <tr v-bind:key="index" class="row_table_note">
                  <!-- <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td> -->
                  <td style="display: none">
                    <span class="id_vat_tu text-muted font-weight-bold">{{
                      item.id !== null ? item.id : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="ma_vat_tu text-muted font-weight-bold">{{
                      item.Ten !== null ? item.Ten : "null"
                    }}</span>
<!-- v-if="handleLinkWithId(item.id,arrLink).length>0" -->
                    <span v-if="handleLinkWithId(item.id,arrLink).length>0">
                      <b-dropdown text="file đính kèm" class="fileAttach">
                        <template 
                          v-for="(it, idx) in handleLinkWithId(item.id,arrLink)"
                        >
                          <b-dropdown-item
                            style="padding-left: 0px"
                            v-bind:key="idx"
                            v-bind:href="it"
                            >File {{ idx + 1 }}</b-dropdown-item>
                        </template>
                      </b-dropdown>
                    </span>
                  </td>
                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      handleGetDate(dataArrAssignedWork, index)[0] !== null
                        ? handleGetDate(dataArrAssignedWork, index)[0]
                        : ""
                    }}</span>
                  </td>
                  <td>
                    <span class="don_vi text-muted font-weight-bold">{{
                      handleGetDate(dataArrAssignedWork, index)[1] !== null
                        ? handleGetDate(dataArrAssignedWork, index)[1]
                        : ""
                    }}</span>
                  </td>
                  <td>
                    <span class="gia_vat_tu text-muted font-weight-bold">{{
                      handleGetPersion(dataArrAssignedWork, index)[0] !== null
                        ? handleGetPersion(dataArrAssignedWork, index)[0]
                        : ""
                    }}</span>
                  </td>

                  <td>
                    <span class="khu_vuc text-muted font-weight-bold">{{
                      handleGetPersion(dataArrAssignedWork, index)[1] !== null
                        ? handleGetPersion(dataArrAssignedWork, index)[1]
                        : ""
                    }}</span>
                  </td>

                  <td>
                    <span class="thoi_diem text-muted font-weight-bold">{{
                      item.moTaTask !== null ? item.moTaTask : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="nguon text-muted font-weight-bold">{{
                      item.mucDo !== null ? item.mucDo : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="ghi_chu text-muted font-weight-bold">{{
                      item.ketQua !== null ? item.ketQua : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="tinh text-muted font-weight-bold">{{
                      item.tinhTrang !== null ? item.tinhTrang : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="tac_gia text-muted font-weight-bold">{{
                      item.luuY !== null ? item.luuY : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="nguon text-muted font-weight-bold">
                      <i
                        @click="handleEdit(dataArrAssignedWork, index)"
                        class="
                          menu-icon
                          cursor-pointer
                          flaticon2-edit
                          text-white
                          pl-2
                          pr-2
                          mr-5
                          bg-green-400
                        "
                      ></i>
                      <i
                        @click="handleDelete(dataArrAssignedWork, index)"
                        class="
                          menu-icon
                          cursor-pointer
                          flaticon2-rubbish-bin
                          text-white
                          pl-2
                          pr-2
                          bg-red-600
                        "
                      ></i>
                    </span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!--end::Table-->
      </div>
    </div>

    <b-pagination
      class="pt-5"
      v-model="currentPage"
      align="right"
      pills
      @page-click="dataArr(currentPage)"
      perPage="20"
      :total-rows="rows"
      size="lg"
    >
    </b-pagination>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapActions, mapGetters, mapState } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
export default {
  components: { Multiselect },
  data() {
    return {
      search: "",
      text: "",
      currentPage: 1,
      rows: 100,
      dataArrAssignedWork: [],
      dataArrAllTask: [],
      selectedPersion: null, // Array reference
      arrLink: [],
      arrLinkSearch: [],
      persion: [],
      selectedPriorityLevel: null, // Array reference
      priority_level: [
        { value: "Quan trọng và khẩn cấp", text: "Quan trọng và khẩn cấp" },
        {
          value: "Quan trọng nhưng không khẩn cấp",
          text: "Quan trọng nhưng không khẩn cấp",
        },
        {
          value: "Khẩn cấp nhưng không quan trọng",
          text: "Khẩn cấp nhưng không quan trọng",
        },
        {
          value: "Không quan trọng và không khẩn cấp",
          text: "Không quan trọng và không khẩn cấp",
        },
      ],
      selectedJobStatus: null, // Array reference
      job_status: [
        { value: "Chưa khởi động", text: "Chưa khởi động" },
        { value: "Đang thực hiện", text: "Đang thực hiện" },
        { value: "Quá hạn", text: "Quá hạn" },
        { value: "Đã phê duyệt", text: "Đã phê duyệt" },
      ],
      selectedWorkResults: null, // Array reference
      work_results: [
        { value: "Đã hoàn thành", text: "Đã hoàn thành" },
        { value: "Chưa hoàn thành", text: "Chưa hoàn thành" },
      ],
    };
  },
  computed: {
    ...mapGetters(["storeqlda/getListDataUserGTer"]),
    ...mapState({
      addressServe: (state) => state.storeqlda.addressServe, // rieng doi voi map state thi phai dùng như này để  lấy state
    }),
  },
  created() {
    this["storeqlda/getAllTask"]().then((res) => {
      this.dataArrAllTask = res.data.pagi;
      this.arrLinkSearch = res.data.link;
    });
    this["storeqlda/getListDataUser"]().then(() => {
      let arrTemp = this["storeqlda/getListDataUserGTer"];
      for (var i in arrTemp) {
        let data = {
          id: arrTemp[i].id,
          text: arrTemp[i].name,
        };
        this.persion.push(data);
      }
    });
     
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Công việc giao" }]);
    this.dataArr(this.currentPage);
  },
  methods: {
    ...mapActions([
      "storeqlda/getListTaskHasPaging",
      "storeqlda/getAllTask",
      "storeqlda/getListDataUser",
      "storeqlda/destroyTaskWithId",
    ]),
    handleReset() {
      this.search = "";
      this.selectedPersion = null;
      this.selectedPriorityLevel = null;
      this.selectedJobStatus = null;
      this.selectedWorkResults = null;
    },
    handleSearch() {
      if (this.search) {
        let newArr = this.dataArrAllTask.filter((item) => {
          let rs = false;
          if (item.Ten && rs == false) {
            rs = item.Ten.toLowerCase().includes(this.search.toLowerCase());
          }
          if (item.moTaTask && rs == false) {
            rs = item.moTaTask
              .toLowerCase()
              .includes(this.search.toLowerCase());
          }
          if (item.luuY && rs == false) {
            rs = item.luuY.toLowerCase().includes(this.search.toLowerCase());
          }
          if (item.nguoiDeXuat && rs == false) {
            rs = item.nguoiDeXuat
              .toLowerCase()
              .includes(this.search.toLowerCase());
          }
          if (item.nguoiPhoiHop && rs == false) {
            rs = item.nguoiPhoiHop
              .toLowerCase()
              .includes(this.search.toLowerCase());
          }
          if (item.mucDo && rs == false) {
            rs = item.mucDo.toLowerCase().includes(this.search.toLowerCase());
          }
          return rs;
        });
        return newArr;
      } else {
        if (
          this.selectedPriorityLevel ||
          this.selectedPersion ||
          this.selectedWorkResults ||
          this.selectedJobStatus
        ) {
          let newArr = this.dataArrAllTask.filter((item) => {
            if (this.selectedPriorityLevel) {
              if (this.selectedPriorityLevel == item.mucDo) {
                return item;
              }
            }
            if (this.selectedJobStatus) {
              if (this.selectedJobStatus == item.tinhTrang) {
                return item;
              }
            }
            if (this.selectedWorkResults) {
              if (this.selectedWorkResults == item.ketQua) {
                return item;
              }
            }
            if (this.selectedPersion) {
              let rs = item.nguoiPhoiHop
                .toLowerCase()
                .includes(JSON.stringify(this.selectedPersion).toLowerCase());
              if (rs) {
                return item;
              }
            }
          });
          return newArr;
        }
      }
    },
    handleGetPersion(arr, index) {
      let arrTemp = [];
      let persionAssign = "";
      let persionDo = "";
      if (arr[index].nguoiDeXuat) {
        arrTemp = JSON.parse(arr[index].nguoiDeXuat);
        for (var i in arrTemp) {
          if (persionAssign == "") {
            persionAssign = arrTemp[i].text;
          } else {
            persionAssign = persionAssign + "," + arrTemp[i].text;
          }
        }
      }
      if (arr[index].nguoiPhoiHop) {
        arrTemp = JSON.parse(arr[index].nguoiPhoiHop);
        for (var j in arrTemp) {
          if (persionDo == "") {
            persionDo = arrTemp[j].text;
          } else {
            persionDo = persionDo + "," + arrTemp[j].text;
          }
        }
      }
      arrTemp = [];
      if (persionAssign) {
        arrTemp.push(persionAssign);
      }
      if (persionDo) {
        arrTemp.push(persionDo);
      }
      return arrTemp;
    },
    handleGetDate(arr, index) {
      let datePlan = "";
      let dateReal = "";
      let arrTemp = [];
      if (arr[index].keHoach) {
        arrTemp = JSON.parse(arr[index].keHoach);
        let arrTimeStartKh = arrTemp[0].split("-");
        let arrTimeFinishKh = arrTemp[1].split("-");
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
      if (arr[index].thucHien) {
        arrTemp = JSON.parse(arr[index].thucHien);
        let arrTimeStartReal = arrTemp[0].split("-");
        let arrTimeFinishReal = arrTemp[1].split("-");
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
      arrTemp = [];
      if (datePlan) {
        arrTemp.push(datePlan);
      }
      if (datePlan) {
        arrTemp.push(dateReal);
      }
      return arrTemp;
    },
    handleDelete(arr, index) {
      if (confirm("Bạn có chắc chắn muốn xóa dữ liệu này không?")) {
        this["storeqlda/destroyTaskWithId"](arr[index].id).then((res) => {
          if (this.search) {
            this["storeqlda/getAllTask"]().then((res) => {
              this.dataArrAllTask = res.data;
            });
            alert(res.data.msg);
          } else {
            this.dataArr(this.currentPage);
            alert(res.data.msg);
          }
        });
      }
    },
    handleEdit(arr, index) {
      let id = arr[index].id;
      this.$router.push(`/themcongviec/${id}`);
    },
    custom_label_persion({ text }) {
      return `${text}`;
    },
    handleLinkWithId(id,arr) {
      let arrTemp = [];
      for (var i in arr) {
        var keyObj = Object.keys(arr[i]);
        if (id == keyObj) {
          arrTemp = arr[i][keyObj];
          break;
        }
      }
      return arrTemp;
    },
    dataArr(page) {
      var data = {
        page: page,
      };
     
      this["storeqlda/getListTaskHasPaging"](data).then((response) => {
        this.dataArrAssignedWork = response.data.pagi.data;
        this.pagination = response.data.pagi;
        this.rows = response.data.pagi.total;
        this.arrLink = response.data.link;
      });
    },
  },
};
</script>
 <style src="vue-multiselect/dist/vue-multiselect.min.css"></style> 
<style scoped>
.fileAttach :first-child {
  height: 20px;
  padding: 0;
  margin-left: 0px;
  background-color: aqua;
  padding-left: 4px;
  padding-right: 4px;
}

.fileAttach {
  margin-left: 0px;
}
.search-congv input[type="search"] {
  height: 43px;
}

.btn-add-cv {
  height: 40px;
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
.card-body {
  background-color: #fff;
}
.multiselect,
.multiselect__input,
.multiselect__single {
  font-size: 1rem;
}
.multiselect__placeholder {
  font-size: 1rem;
}
/* .btn-secondary:hover {
  color: #fff;
  background-color: red;
  border-color: #6c757d;
}
.add-cv .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}

.btn-add-cv {
  position: absolute;
  left: 10px;
}
.select-name .btn-secondary {
  background-color: #fff;
  color: #000;
}
.select-name {
  position: absolute;
  left: 10%;
}
.select-mucdo {
  position: absolute;
  left: 25%;
}
.select-tinhtrang {
  position: absolute;
  left: 45%;
}
.select-ketqua {
  position: absolute;
  left: 65%;
}
.search-congv {
  position: absolute;
  right: 0;
}
.table-cv {
  position: absolute;
  top: 60px;
  width: 100%;
} */
</style>