<template>

  

  <div class="container-nhanvien">
    <div class="block-select">
      <div class="btn-add-cv">
         <router-link 
          to="/themnhansu"
          tag="b-button"
          class="mb-2 add-cv icon-tvgs pt-3 pb-3">
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm nhân sự
       </router-link>
      </div>

      <div class="select-cbb">
        <b-form-select v-model="selectStatusWork" :options="statusWork">
           <template #first>
            <b-form-select-option :value="null" disabled
              >-- Tình trạng --</b-form-select-option
            >
          </template>
        </b-form-select>
      </div>

      <div class="select-cbb">
        <b-form-select v-model="selectedDepartment" :options="department">
           <template #first>
            <b-form-select-option :value="null" disabled
              >-- Phòng ban --</b-form-select-option
            >
          </template>
        </b-form-select>
      </div>
      <div class="select-cbb">
        <b-form-select v-model="selectedPosition" :options="position">
           <template #first>
            <b-form-select-option :value="null" disabled
              >-- Chức vụ --</b-form-select-option
            >
          </template>
        </b-form-select>
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

     <div v-if="search||selectStatusWork||selectedDepartment||selectedPosition"
      class="card-body pt-0 pb-3">
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
                <th>Họ tên</th>
                <th>Mã nhân viên</th>
                <th>Ngày sinh</th>
                <th>Năm tốt nghiệp</th>
                <th>Ngày vào công ty</th>
                <th>Chức danh</th>
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
                      item.nameEmploy !== null ? item.nameEmploy : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.codeEmploy !== null ? item.codeEmploy : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.birthdayEmploy !== null ? item.birthdayEmploy : "null"
                    }}</span>
                  </td>  

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.graduationYearEmploy !== null ? item.graduationYearEmploy : "null"
                    }}
                    </span>
                  </td>

                   <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.DateOfReceivingTheJob !== null ? item.DateOfReceivingTheJob : "null"
                    }}
                    </span>
                  </td>

                     <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.Position !== null ? item.Position : "null"
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
                <th>Họ tên</th>
                <th>Mã nhân viên</th>
                <th>Ngày sinh</th>
                <th>Năm tốt nghiệp</th>
                <th>Ngày vào công ty</th>
                <th>Chức danh</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="dataArr.length !== 0">
              <template v-for="(item, index) in dataArrInfoEmploy">
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
                      item.nameEmploy !== null ? item.nameEmploy : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.codeEmploy !== null ? item.codeEmploy : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.birthdayEmploy !== null ? item.birthdayEmploy : "null"
                    }}</span>
                  </td>  

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.graduationYearEmploy !== null ? item.graduationYearEmploy : "null"
                    }}
                    </span>
                  </td>

                   <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.DateOfReceivingTheJob !== null ? item.DateOfReceivingTheJob : "null"
                    }}
                    </span>
                  </td>

                     <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.Position !== null ? item.Position : "null"
                    }}
                    </span>
                  </td>

                  <td>
                <span class="nguon text-muted font-weight-bold">
                      <i
                        @click="handleEdit(dataArrInfoEmploy,index)"
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
                        @click="handleDelete(dataArrInfoEmploy,index)"
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
import { mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";

export default {
  data() {
    return {
      search:'',
      currentPage: 1,
      rows: 100,
      dataArrInfoEmploy: [],
      dataArrAllInfoEmploy:[],
      selectStatusWork: null, // Array reference
      statusWork: [
        { value: "1", text: "Đang cộng tác" },
        { value: "a", text: "Đã nghỉ việc" },
        { value: "b", text: "Tất cả" },
      ],
      selectedDepartment: null, // Array reference
      department: [
        { value: "2", text: "Phòng ban" },
        { value: "a", text: "Dự án" },
        { value: "b", text: "Nhân sự - Hành chính" },
        { value: "c", text: "Kế hoạch - Kỹ thuật" },
        { value: "d", text: "Tài chính - Kế toán" },
      ],
      selectedPosition: null, // Array reference
      position: [
        { value: "3", text: "GIÁM ĐỐC" },
        { value: "a", text: "P.GIÁM ĐỐC" },
        { value: "b", text: "P ĐOÀN" },
      ],
    };
  },
    created() {
   this['storeqlda/getAllInfomationEmploy']().then((res)=>{
      this.dataArrAllInfoEmploy = res.data
   });
   },
    mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Danh sách nhân viên" }]);
    this.dataArr(this.currentPage);
  },
   methods: {
    ...mapActions([
      "storeqlda/getListInfomationEmployHasPaging",
      "storeqlda/getListDataUser",
      "storeqlda/getAllInfomationEmploy",
      "storeqlda/destroyEmployWithId",
      
    ]),
     handleReset(){
    this.search = '';
    this.selectStatusWork = null;
    this.selectedDepartment = null;
    this.selectedPosition = null;
    },
     handleSearch(){
       if(this.search){
         let newArr = this.dataArrAllInfoEmploy.filter(item => {
            let rs = false;
            if(item.nameEmploy && rs == false){
                rs = item.nameEmploy.toLowerCase().includes(this.search.toLowerCase());
            }
            if(item.userNameEmploy && rs == false) {
                rs = item.userNameEmploy.toLowerCase().includes(this.search.toLowerCase());
            }
            if(item.codeEmploy && rs == false) {
                rs = item.codeEmploy.toLowerCase().includes(this.search.toLowerCase());
            }
            if(item.emailEmploy && rs == false) {
                rs = item.emailEmploy.toLowerCase().includes(this.search.toLowerCase());
            }
               if(item.DateOfReceivingTheJob && rs == false) {
                rs = item.DateOfReceivingTheJob.toLowerCase().includes(this.search.toLowerCase());
            }
            if(item.Department && rs == false) {
                rs = item.Department.toLowerCase().includes(this.search.toLowerCase());
            }
            return rs;
        });
        return newArr;
       }
       else{
         if(this.selectStatusWork||this.selectedDepartment||this.selectedPosition
         ||this.selectStatusWork){
           let newArr = this.dataArrAllInfoEmploy.filter(item => {
            if(this.selectStatusWork) {
              if(this.selectStatusWork == item.workStatus){
                return item
              }
            }
             if(this.selectedDepartment) {
              if(this.selectedDepartment == item.Department){
                return item
              }
            }
             if(this.selectedPosition) {
              if(this.selectedPosition == item.Position){
                return item
              }
            }
  
           })
        return newArr
         }
       }
     },
       handleEdit(arr,index) {
      let id = arr[index].id
      this.$router.push(`/themnhansu/${id}`);
    },
    dataArr(page) {
      var data = {
        page: page,
      };
      this["storeqlda/getListInfomationEmployHasPaging"](data).then((response) => {
        this.dataArrInfoEmploy = response.data.data;
        this.pagination = response.data;
        this.rows = response.data.total;
      });
    },
      handleDelete(arr,index) {
         if (
        confirm(
          "Bạn có chắc chắn muốn xóa dữ liệu này không?"
        )
      ){

        this["storeqlda/destroyEmployWithId"](arr[index].id).
        then((res)=>
        {
         if (this.search) {
           this['storeqlda/getAllProjectMana']().then((res)=>{
                this.dataArrAllInfoEmploy = res.data
            });
            alert(res.data.msg)
          }else{

            this.dataArr(this.currentPage);
            alert(res.data.msg)
          }
        })
      }
  },
  },
};
</script>

<style scoped>
.icon-tvgs .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.container-nhanvien {
  margin-left: 10px;
  margin-right: 10px;
}
.block-select {
  display: flex;
  justify-content: space-between;
}
.select-cbb .custom-select {
  height: 38px;
}
.search-congv input[type="search"] {
  height: 38px;
}
.add-cv {
  height: 38px;
}
.table-dsnhanvien {
  background-color: #fff;
  max-width: 100%;
}
</style>