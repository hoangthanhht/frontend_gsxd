<template>
  <div class="danh-sach-ho-so">
    <div class="div-fillter">
     <div class="btn-add-cv">
       <router-link 
       to="/themduan"
       tag="b-button"
       class="mb-2 add-cv icon-tvgs pt-3 pb-3 bg-red-600">
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm dự án mới
       </router-link>
      </div>

      <div class="search-congv">
        <b-input-group size="sm" class="mb-2 add-cv icon-tvgs cursor-pointer">
          <b-form-input v-model="search" type="search" placeholder="Search terms"></b-form-input>
          <b-input-group-prepend is-text>
            <b-icon @click="handleSearch" icon="search"></b-icon>
          </b-input-group-prepend>

          <b-input-group-prepend is-text>
            <b-icon @click="handleReset" icon="arrow-repeat"></b-icon>
          </b-input-group-prepend>
        </b-input-group>
      </div>
    </div>

  <div v-if="search" class="card-body pt-0 pb-3">
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
                <th>Tên dự án</th>
                <th>Ngày bắt đầu</th>
                <th>Ngày kết thúc</th>
                <th>Nhân sự liên quan</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="dataArr.length !== 0">
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
                    <span class="ma_vat_tu text-muted font-weight-bold">{{
                      item.tenDuAn !== null ? item.tenDuAn : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      handleGetDate(handleSearch(),index)[0] !== null ? handleGetDate(handleSearch(),index)[0] : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      handleGetDate(handleSearch(),index)[1] !== null ? handleGetDate(handleSearch(),index)[1] : ""
                    }}</span>
                  </td>  

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                       handleGetPersion(handleSearch(),index)[0] !== null ?  handleGetPersion(handleSearch(),index)[0] : ""
                    }}
                    </span>
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
                <th>Tên dự án</th>
                <th>Ngày bắt đầu</th>
                <th>Ngày kết thúc</th>
                <th>Nhân sự liên quan</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="dataArr.length !== 0">
              <template v-for="(item, index) in dataArrProject">
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
                      item.tenDuAn !== null ? item.tenDuAn : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      handleGetDate(dataArrProject,index)[0] !== null ? handleGetDate(dataArrProject,index)[0] : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      handleGetDate(dataArrProject,index)[1] !== null ? handleGetDate(dataArrProject,index)[1] : ""
                    }}</span>
                  </td>  

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                       handleGetPersion(dataArrProject,index)[0] !== null ?  handleGetPersion(dataArrProject,index)[0] : ""
                    }}
                    </span>
                  </td>

                  <td>
                 <span class="nguon text-muted font-weight-bold">
                      <i
                        @click="handleEdit(dataArrProject, index)"
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
                        @click="handleDelete(dataArrProject, index)"
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
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
import { mapActions } from "vuex";
export default {
  components: {  },
  data() {
    return {
      search:'',
      currentPage: 1,
      rows: 100,
      dataArrProject: [],
      dataArrAllProject:[],
      selectedKindFile: null, // Array reference
      kindfile: [ 
         { id: "1", text: "Hồ sơ nghiệm thu công việc" },
        { id: "2", text: "Hồ sơ nghiệm thu vật liệu" },
        { id: "2", text: "Hồ sơ nghiệm thu thiết bị" },
        ],
      selectedPriorityLevel: null, // Array reference
      priority_level: [
        { value: "1", text: "Đã duyệt" },
        { value: "2", text: "Chưa duyệt" },
      ],
      selectedTimeCreate: null, // Array reference
      time_create: [
        { value: "1", text: "Tất cả" },
        { value: "2", text: "3 ngày" },
        { value: "2", text: "7 ngày" },
        { value: "2", text: "Tự chọn" },
      ],
    };
  },
   created() {
   this['storeqlda/getAllProjectMana']().then((res)=>{
      this.dataArrAllProject = res.data
   });
   },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Danh sách dự án" }]);
    this.dataArr(this.currentPage);
  },
  methods: {
    ...mapActions([
      "storeqlda/getListProjectHasPaging",
      "storeqlda/getListDataUser",
      "storeqlda/getAllProjectMana",
      "storeqlda/destroyProjectWithId",
      
    ]),
      handleReset(){
    this.search = '';
    },
      handleSearch(){
       if(this.search){
         let newArr = this.dataArrAllProject.filter(item => {
            let rs = false;
            if(item.tenDuAn && rs == false){
                rs = item.tenDuAn.toLowerCase().includes(this.search.toLowerCase());
            }
            if(item.nhanSuChinh && rs == false) {
                rs = item.nhanSuChinh.toLowerCase().includes(this.search.toLowerCase());
            }
            if(item.ngayBatDau && rs == false) {
                rs = item.ngayBatDau.toLowerCase().includes(this.search.toLowerCase());
            }
            if(item.ngayKetThuc && rs == false) {
                rs = item.ngayKetThuc.toLowerCase().includes(this.search.toLowerCase());
            }
               if(item.tenCdt && rs == false) {
                rs = item.tenCdt.toLowerCase().includes(this.search.toLowerCase());
            }
            if(item.moTaDuAn && rs == false) {
                rs = item.moTaDuAn.toLowerCase().includes(this.search.toLowerCase());
            }
            return rs;
        });
        return newArr;
       }
     
     },
     handleGetPersion(arr,index){
       let arrTemp =[];
      let persionDo = "";
       if (arr[index].nhanSuLienQuan) {
          arrTemp = JSON.parse(arr[index].nhanSuLienQuan);
         for (var j in arrTemp) {
            if(persionDo=='') {
              persionDo = arrTemp[j].text
            }else{
              persionDo = persionDo + ',' + arrTemp[j].text
            }
         }
       }
        arrTemp =[];

       if(persionDo){
         arrTemp.push(persionDo);
       }
      return arrTemp;
    },
    handleGetDate(arr,index) {
      let dateStart = "";
      let dateFinish = "";
      let arrTemp = [];
      if (arr[index].ngayBatDau) {
        let arrTimeStart = arr[index].ngayBatDau.split("-");
        dateStart =
          arrTimeStart[2] + "/" + arrTimeStart[1] + "/" + arrTimeStart[0];
      }
      if (arr[index].ngayKetThuc) {
        let arrTimeFinish = arr[index].ngayKetThuc.split("-");
        dateFinish =
          arrTimeFinish[2] + "/" + arrTimeFinish[1] + "/" + arrTimeFinish[0];
      }
        arrTemp =[];
      if(dateStart){
        arrTemp.push(dateStart);
      }
       if(dateFinish){
         arrTemp.push(dateFinish);
       }
      return arrTemp;
    },
    handleEdit(arr,index) {
      let id = arr[index].id
      this.$router.push(`/themduan/${id}`);
    },
      handleDelete(arr,index) {
         if (
        confirm(
          "Bạn có chắc chắn muốn xóa dữ liệu này không?"
        )
      ){

        this["storeqlda/destroyProjectWithId"](arr[index].id).
        then((res)=>
        {
          if (this.search) {
           this['storeqlda/getAllProjectMana']().then((res)=>{
                this.dataArrAllProject = res.data
            });
            alert(res.data.msg)
          }else{

            this.dataArr(this.currentPage);
            alert(res.data.msg)
          }
        })
      }
  },
    custom_label_persion({ text }) {
      return `${text}`;
    },
    dataArr(page) {
      var data = {
        page: page,
      };
      this["storeqlda/getListProjectHasPaging"](data).then((response) => {
        this.dataArrProject = response.data.data;
        this.pagination = response.data;
        this.rows = response.data.total;
      });
    },
  },

};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.danh-sach-ho-so{
    margin-left: 10px;
    margin-right: 10px;
}
/* .table-cv {
  text-align: center !important;
} */
.search-congv input[type="search"] {
  height: 43px;
}

.btn-add-cv {
  height: 40px;
  padding-top: 0;
  padding-bottom: 0;
}

.div-fillter {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
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
.select-cbb .custom-select{
	height: 43px;
}
.card-body {
 background-color: #fff;
}
.multiselect, .multiselect__input, .multiselect__single {
    font-size: 1rem !important;
}

.multiselect__placeholder {
    font-size: 1rem;
}
</style>