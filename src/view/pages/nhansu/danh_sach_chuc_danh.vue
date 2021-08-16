<template>
  <div class="conatiner-chucdanh">
    <div class="nsdschucdanh">
       <div class="btn-add-cv">
       <router-link 
       to="/themchucdanh"
       tag="b-button"
       class="mb-2 add-cv icon-tvgs pt-3 pb-3 bg-red-600">
          <b-icon icon="plus" aria-hidden="true"></b-icon> Thêm chức danh
       </router-link>
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
                <th>Chức danh</th>
                <th>ghi chú</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody v-if="dataArr.length !== 0">
              <template v-for="(item, index) in dataArrPosition">
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
                      item.chucDanh !== null ? item.chucDanh : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.ghiChu !== null ? item.ghiChu : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="nguon text-muted font-weight-bold">
                      <i
                        @click="handleEdit(index)"
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
                        @click="handleDelete(index)"
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
export default {
  data() {
    return {
      currentPage: 1,
      rows: 100,
      dataArrPosition: [],
    };
  },
  mounted() {
    this.dataArr(this.currentPage);
  },
  methods: {
    ...mapActions([
      "storeqlda/getListPositionHasPaging",
      "storeqlda/getListDataUser",
      "storeqlda/destroyPositionWithId",
      
    ]),
  dataArr(page) {
    var data = {
      page: page,
    };
    this["storeqlda/getListPositionHasPaging"](data).then((response) => {
      this.dataArrPosition = response.data.data;
      this.pagination = response.data;
      this.rows = response.data.total;
    });
  },
  handleEdit(index) {
      let id = this.dataArrPosition[index].id
      this.$router.push(`/themchucdanh/${id}`);
  },
  handleDelete(index) {
         if (
        confirm(
          "Bạn có chắc chắn muốn xóa dữ liệu này không?"
        )
      ){

        this["storeqlda/destroyPositionWithId"](this.dataArrPosition[index].id).
        then((res)=>
        {
          this.dataArr(this.currentPage);
          alert(res.data.msg)
        })
      }
  },
  },
};
</script>

<style scoped>
.conatiner-chucdanh {
  margin-left: 10px;
  margin-right: 10px;
}
.icon-tvgs .b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.nsdschucdanh {
  display: flex;
  justify-content: space-between;
}
.table-cv {
  background-color: #fff;
}
</style>