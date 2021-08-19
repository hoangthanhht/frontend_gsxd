<template>
  <div class="container-chamcongcanhan">
    <h4>Bảng chấm công</h4>
    <div
     ref="block-color"
     class="block1 pt-5 pb-5">
      <div class="flex">
        <span for="">Từ ngày :</span>
              <b-form-input
                v-model="timeFrom"
                id="input-1"
                type="date"
                required
              ></b-form-input>
      </div>

      <div class="flex">
         <span for="">Đến ngày :</span>
              <b-form-input
                v-model="timeTo"
                id="input-1"
                type="date"
                required
              ></b-form-input>
      </div>

      <div class="block1__select">
          <b-form-select v-model="selectedDepartment" :options="department">
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Phòng ban --</b-form-select-option
            >
          </template>
        </b-form-select>
      </div>

      <div class="block1__select">
          <b-form-select v-model="selectedEmploy" :options="employ">
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Nhân sự --</b-form-select-option
            >
          </template>
        </b-form-select>
      </div>

      <div class="block1__search">
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
    <div 
    class="block2 pb-5">
      <div>
        <div class="block2__quote">
          <div class="block2__quote--dachamcong"></div>
          <p>Đã chấm công</p>
        </div>
      </div>

      <div>
        <div class="block2__quote">
          <div class="block2__quote--daxacnhan"></div>
          <p>Đã xác nhận đi làm</p>
        </div>
      </div>

      <div>
        <div class="block2__quote">
          <div class="block2__quote--nghi"></div>
          <p>Nghỉ</p>
        </div>
      </div>

      <div>
        <div class="block2__quote">
          <div class="block2__quote--nghicophep"></div>
          <p>Nghỉ có phép</p>
        </div>
      </div>

      <div>
        <div class="block2__quote">
          <div class="block2__quote--xinxacnhan"></div>
          <p>Xin xác nhận</p>
        </div>
      </div>
    </div>
    <div 
      ref="table-header"
      class="table-header"
      >
          <table style="background-color:white" class="table table-bordered table-vertical-center">
        <thead>
          <tr>
            <th width="1" rowspan="2" style="width: 26px"></th>
            <th rowspan="2" width="200" style="width: 200px">Họ tên</th>
            <th width="1">Ngày</th>
            <th rowspan="2">Tổng</th>
            <th class="th-day">11-08</th>

           
          </tr>
          <tr>
            <th>Buổi</th>
            <th class="th-day">Wed</th>

           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="" rowspan="3">1</td>
            <td class="table-user" rowspan="3" width="200" style="width: 200px">
              <a
              >
                Nguyễn Như Tùng</a
              >
            </td>
            <td class="">Sáng</td>
            <td class="tong-di-lam text-center">0</td>

            <td
              onclick="_SHOW_FORM_REMOTE('https://vpdt.beacons.vn/staff/popup-cham-cong?obj[staff][id]=5cb054c65675a40115148d9a&amp;obj[date]=11/08/2021&amp;obj[time_work]=ca-sang')"
              class="bg-danger text-center"
            ></td>

           
          </tr>

          <tr>
            <td class="">Chiều</td>
            <td class="tong-di-lam text-center">0</td>

            <td
              onclick="_SHOW_FORM_REMOTE('https://vpdt.beacons.vn/staff/popup-cham-cong?obj[staff][id]=5cb054c65675a40115148d9a&amp;obj[date]=11/08/2021&amp;obj[time_work]=ca-chieu')"
              class="bg-danger text-center"
            ></td>

           
          </tr>
          <tr>
            <td class="">Tối</td>
            <td class="tong-di-lam text-center">0</td>

            <td
              onclick="_SHOW_FORM_REMOTE('https://vpdt.beacons.vn/staff/popup-cham-cong?obj[staff][id]=5cb054c65675a40115148d9a&amp;obj[date]=11/08/2021&amp;obj[time_work]=ca-toi')"
              class="bg-danger text-center"
            ></td>

            
          </tr>
        </tbody>
      </table>
      </div>
    <div
   
     class="thanh" @scroll="scrolltest($event)">

    <div 
    class="top-tb" 
    ref="top-tb">
        <table style="background-color:white" class="table table-bordered table-vertical-center">
        <thead>
          <tr ref="row-tb-top1">
            <th ref="row-tb-top-stt" width="1" rowspan="2" style="width: 26px"></th>
            <th ref="row-tb-top-name" rowspan="2" width="200" style="width: 200px">Họ tên</th>
            <th ref="row-tb-top-date" width="1">Ngày</th>
            <th ref="row-tb-top-sum" rowspan="2">Tổng</th>
            <th class="th-day">11-08</th>

            
          </tr>
          <tr ref="row-tb-top2">
            <th>Buổi</th>
            <th class="th-day">Wed</th>

           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="" rowspan="3">1</td>
            <td class="table-user" rowspan="3" width="200" style="width: 200px">
              <a
              >
                Nguyễn Như Tùng</a
              >
            </td>
            <td class="">Sáng</td>
            <td class="tong-di-lam text-center">0</td>

            <td
              onclick="_SHOW_FORM_REMOTE('https://vpdt.beacons.vn/staff/popup-cham-cong?obj[staff][id]=5cb054c65675a40115148d9a&amp;obj[date]=11/08/2021&amp;obj[time_work]=ca-sang')"
              class="bg-danger text-center"
            ></td>

           
          </tr>

          <tr>
            <td class="">Chiều</td>
            <td class="tong-di-lam text-center">0</td>

            <td
              onclick="_SHOW_FORM_REMOTE('https://vpdt.beacons.vn/staff/popup-cham-cong?obj[staff][id]=5cb054c65675a40115148d9a&amp;obj[date]=11/08/2021&amp;obj[time_work]=ca-chieu')"
              class="bg-danger text-center"
            ></td>

           
          </tr>
          <tr>
            <td class="">Tối</td>
            <td class="tong-di-lam text-center">0</td>

            <td
              onclick="_SHOW_FORM_REMOTE('https://vpdt.beacons.vn/staff/popup-cham-cong?obj[staff][id]=5cb054c65675a40115148d9a&amp;obj[date]=11/08/2021&amp;obj[time_work]=ca-toi')"
              class="bg-danger text-center"
            ></td>

           
          </tr>
        </tbody>
      </table>
    </div>

        <div 
      ref="table-middle"
      class="table-middle"
      >
          <table style="background-color:white" class="table table-bordered">
        <thead>
          <tr>
            <th width="1" rowspan="2"></th>
            <th rowspan="2" width="200" style="width: 200px">Họ tên</th>
            <th width="1">Ngày</th>
            <th rowspan="2">Tổng</th>
            <th class="th-day">11-08</th>

           
          </tr>
          <tr>
            <th>Buổi</th>
            <th class="th-day">Wed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="" rowspan="3">1</td>
            <td class="table-user" rowspan="3" width="200" style="width: 200px">
              <a
          
              >
                Nguyễn Như Tùng</a
              >
            </td>
            <td class="">Sáng</td>
            <td class="tong-di-lam text-center">0</td>

            <td
              onclick="_SHOW_FORM_REMOTE('https://vpdt.beacons.vn/staff/popup-cham-cong?obj[staff][id]=5cb054c65675a40115148d9a&amp;obj[date]=11/08/2021&amp;obj[time_work]=ca-sang')"
              class="bg-danger text-center"
            ></td>

           
          </tr>

          <tr>
            <td class="">Chiều</td>
            <td class="tong-di-lam text-center">0</td>

            <td
              onclick="_SHOW_FORM_REMOTE('https://vpdt.beacons.vn/staff/popup-cham-cong?obj[staff][id]=5cb054c65675a40115148d9a&amp;obj[date]=11/08/2021&amp;obj[time_work]=ca-chieu')"
              class="bg-danger text-center"
            ></td>

            
          </tr>
          <tr>
            <td class="">Tối</td>
            <td class="tong-di-lam text-center">0</td>

            <td
              onclick="_SHOW_FORM_REMOTE('https://vpdt.beacons.vn/staff/popup-cham-cong?obj[staff][id]=5cb054c65675a40115148d9a&amp;obj[date]=11/08/2021&amp;obj[time_work]=ca-toi')"
              class="bg-danger text-center"
            ></td>

            
          </tr>
        </tbody>
      </table>
      </div>

        <div 
      ref="table-bottom"
      class="table-bottom"
      >
          <table style="background-color:#fff" class="table table-bordered">
        <thead>
          <tr>
            <th width="1" rowspan="2"></th>
            <th rowspan="2" width="200" style="width: 200px">Họ tên</th>
            <th width="1">Ngày</th>
            <th rowspan="2">Tổng</th>
            <th class="th-day">11-08</th>

            
          </tr>
          <tr>
            <th>Buổi</th>
            <th class="th-day">Wed</th>

           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="" rowspan="3">1</td>
            <td class="table-user" rowspan="3" width="200" style="width: 200px">
              <a
   
              >
                Nguyễn Như Tùng</a
              >
            </td>
            <td class="">Sáng</td>
            <td class="tong-di-lam text-center">0</td>

            <td
              onclick="_SHOW_FORM_REMOTE('https://vpdt.beacons.vn/staff/popup-cham-cong?obj[staff][id]=5cb054c65675a40115148d9a&amp;obj[date]=11/08/2021&amp;obj[time_work]=ca-sang')"
              class="bg-danger text-center"
            ></td>

            
          </tr>

          <tr>
            <td class="">Chiều</td>
            <td class="tong-di-lam text-center">0</td>

            <td
              onclick="_SHOW_FORM_REMOTE('https://vpdt.beacons.vn/staff/popup-cham-cong?obj[staff][id]=5cb054c65675a40115148d9a&amp;obj[date]=11/08/2021&amp;obj[time_work]=ca-chieu')"
              class="bg-danger text-center"
            ></td>

            
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
export default {
    data() {
    return {
      posScrollHz:0,
      posTbTop:0,
      posTop:0,
      heightTbHeader:0,
      widthTbMiddle:0,
      timeFrom:'',
      timeTo:'',
      selectedDepartment:null,
      department: [
      ],
      selectedEmploy: null, // Array reference
      employ: [
      ],
    }
    },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Chấm công" }]);
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    /* tạo bảng cuộn cố định dòng đầu và cột
    ta sử dụng 4 bảng : bảng top là bảng sẽ hiển thị nội dung chấm công
    phần header của bảng này sẽ sử dụng 1 bảng khác để hiển thị sử dụng z-inđex
    bảng middle sẻ hiển thị gó trên cùng bên trái của bảng tổng 
    bảng bottom sẽ đùng để hiển thị phần cố đinh bên trái
    sau đó lấy các thuộc tính scroll ngang dọc để lấy đặt vị trí cho các phần tử ở trên
    */
    scrolltest(e) {
      const eleRowTbTopStt = this.$refs["row-tb-top-stt"];
      const eleRowTbTopName = this.$refs["row-tb-top-name"];
      const eleRowTbTopDate = this.$refs["row-tb-top-date"];
      const eleRowTbTopSum = this.$refs["row-tb-top-sum"];
      const eleTbMiddle = this.$refs["table-middle"];
      const eleTbheader = this.$refs["table-header"];
      const eleTbbottom = this.$refs["table-bottom"];
      let widthMid = eleRowTbTopStt.offsetWidth + eleRowTbTopName.offsetWidth +
       eleRowTbTopDate.offsetWidth +eleRowTbTopSum.offsetWidth
  
      if(e.target.scrollLeft>0){
        if(eleTbheader.style.visibility==='visible') {

          eleTbMiddle.style.visibility ='visible';
        }
        eleTbbottom.style.visibility ='visible';

        eleTbMiddle.style.width = `${widthMid}px`;
        eleTbMiddle.style.height = `${this.heightTbHeader}px`;
        eleTbMiddle.style.top = `${this.posTop}px`;
        eleTbheader.scrollLeft = e.target.scrollLeft;//binding thuộc tính scroll ngang của bảng header và bảng top

      }else{
        eleTbMiddle.style.visibility='hidden';
        eleTbbottom.style.visibility ='hidden';
      }
      console.log("e.offsetWidth", eleTbheader.offsetWidth);
    },
    // sự kiện cuộn thanh cuộn dọc
    onScroll(e) {
      /* lấy ra các element cần thiết cho sự kiện này */
      const eleTbTop = this.$refs["top-tb"];
      const eleTbheader = this.$refs["table-header"];
      const eleBlockColor = this.$refs["block-color"];
      const eleRowTbTop1 = this.$refs["row-tb-top1"];
      const eleRowTbTop2 = this.$refs["row-tb-top2"];
      const eleTbbottom = this.$refs["table-bottom"];
      const eleTbMiddle = this.$refs["table-middle"];

      const eleRowTbTopStt = this.$refs["row-tb-top-stt"];
      const eleRowTbTopName = this.$refs["row-tb-top-name"];
      const eleRowTbTopDate = this.$refs["row-tb-top-date"];
      const eleRowTbTopSum = this.$refs["row-tb-top-sum"];
      // lấy chiều rộng của 3 cột đầu tiên trong bảng để sét cho bảng middle và bảng bottom
      let widthMid = eleRowTbTopStt.offsetWidth + eleRowTbTopName.offsetWidth + eleRowTbTopDate.offsetWidth +eleRowTbTopSum.offsetWidth
     
      eleTbheader.style.width = `${eleTbTop.offsetWidth}px`// đặt w của bảng header = bảng top để đồng bộ hai thanh cuộn ngang của 
      //hai bảng này khi kéo 1 thanh cuộn vì đã tách bảng header ra ngoài div của các bảng còn lại
      this.posTop = eleBlockColor.offsetTop - 50;
      this.posScrollHz = e.target.documentElement.scrollTop; /* or: e.target.documentElement.scrollTop */
      
       eleTbheader.style.top = `${eleBlockColor.offsetTop - 50}px` ;
       eleTbheader.style.height = `${eleRowTbTop1.offsetHeight + eleRowTbTop2.offsetHeight}px` ;
       this.heightTbHeader = eleRowTbTop1.offsetHeight + eleRowTbTop2.offsetHeight;

      eleTbbottom.style.height = `${eleTbTop.offsetHeight}px`;
      eleTbbottom.style.width = `${widthMid}px`;
      eleTbbottom.style.top = `${eleTbTop.offsetTop - this.posScrollHz}px`;
      // khi cuộn mà bảng header hiện thì mới hiện bảng middle ẩn thì cùng ẩn
      if(eleTbheader.style.visibility === 'hidden'){
         eleTbMiddle.style.visibility ='hidden';
      }else{
        eleTbMiddle.style.visibility ='visible';
      }
      if(this.posScrollHz >= (eleBlockColor.offsetTop + eleRowTbTop2.offsetHeight - 50)){
        eleTbheader.style.visibility='visible';
      }
      else{
         eleTbheader.style.visibility='hidden';
      }
    },
  },
};
</script>

<style scoped>
.thanh {
 
  overflow-x: scroll;
}
.top-tb{
  /* background-color: #fff; */
}

.table-header {
  background-color: #fff;
   position: fixed; 
  overflow: hidden;
  visibility: visible;
  /* overflow-x: scroll; */
 width: 100%;
}

.table-bottom{
    position: fixed;
    overflow: hidden;
    visibility: hidden;
    top: 0;
    /* background-color:white; */
    z-index: 2;
}

.table-middle{
    position: fixed;
    overflow: hidden;
    visibility: hidden;
    /* background-color:white; */
    z-index: 3;
}



.block1__select--bg {
  background-color: #fff;
}
.block1__search input[type="search"] {
  height: 38px;
}
.block1__select {
  width: 200px;
}
.container-chamcongcanhan {
  margin-right: 15px;
  margin-left: 15px;
}
.block3 {
  background-color: #fff;
}
.block3__bodytb--dachamcong {
  background-color: #6658dd;
}
.block3__bodytb--daxacnhan {
  background-color: #7fff00;
}
.block3__bodytb--nghi {
  background-color: #f1556c;
}
.block3__bodytb--nghicophep {
  background-color: #f7b84b;
}
.block3__bodytb--xinxacnhan {
  background-color: #19c491;
}
.b-icon.bi {
  position: relative;
  left: 0.5px;
  top: auto;
}
.block1 {
  display: flex;
  justify-content: space-between;
}
.block2 {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.block2__quote--dachamcong {
  height: 20px;
  width: 80px;
  background-color: #6658dd;
  margin-right: 5px;
}
.block2__quote--daxacnhan {
  height: 20px;
  width: 80px;
  background-color: chartreuse;
  margin-right: 5px;
}
.block2__quote--nghi {
  height: 20px;
  width: 80px;
  background-color: #f1556c;
  margin-right: 5px;
}
.block2__quote--nghicophep {
  height: 20px;
  width: 80px;
  background-color: #f7b84b;
  margin-right: 5px;
}
.block2__quote--xinxacnhan {
  height: 20px;
  width: 80px;
  background-color: #19c491;
  margin-right: 5px;
}
.block2__quote {
  display: flex;
}
</style>