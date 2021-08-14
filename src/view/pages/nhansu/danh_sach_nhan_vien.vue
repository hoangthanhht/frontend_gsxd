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
        <b-form-select v-model="selected1" :options="options1"></b-form-select>
      </div>

      <div class="select-cbb">
        <b-form-select v-model="selected2" :options="options2"></b-form-select>
      </div>
      <div class="select-cbb">
        <b-form-select v-model="selected3" :options="options3"></b-form-select>
      </div>

      <div class="search-congv">
        <b-input-group size="sm" class="mb-2 add-cv icon-tvgs">
          <b-form-input type="search" placeholder="Search terms"></b-form-input>
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>

          <b-input-group-prepend is-text>
            <b-icon icon="arrow-repeat"></b-icon>
          </b-input-group-prepend>
        </b-input-group>
      </div>
    </div>

      <div class="card-body pt-0 pb-3">
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
                      @click="handleEdit(index)"
                      class="menu-icon cursor-pointer flaticon2-edit"></i>
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
export default {
  data() {
    return {
      currentPage: 1,
      rows: 100,
      dataArrInfoEmploy: [],
      selected1: "1", // Array reference
      options1: [
        { value: "1", text: "Đang cộng tác" },
        { value: "a", text: "Đã nghỉ việc" },
        { value: "b", text: "Tất cả" },
      ],
      selected2: "2", // Array reference
      options2: [
        { value: "2", text: "Phòng ban" },
        { value: "a", text: "Dự án" },
        { value: "b", text: "Nhân sự - Hành chính" },
        { value: "c", text: "Kế hoạch - Kỹ thuật" },
        { value: "d", text: "Tài chính - Kế toán" },
      ],
      selected3: "3", // Array reference
      options3: [
        { value: "3", text: "GIÁM ĐỐC" },
        { value: "a", text: "P.GIÁM ĐỐC" },
        { value: "b", text: "P ĐOÀN" },
      ],
    };
  },
    mounted() {
    this.dataArr(this.currentPage);
  },
   methods: {
    ...mapActions([
      "storeqlda/getListInfomationEmployHasPaging",
      "storeqlda/getListDataUser",
    ]),
       handleEdit(index) {
      let id = this.dataArrInfoEmploy[index].id
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