<template>
  <div class="mucbc">
    <div class="btn-mucbc">
      <!-- <b-button size="sm" class="mb-2 add-cv"> Báo Cáo Tổng Hợp </b-button> -->
      <router-link to="/baocaohoatdongcongtruong" tag="b-button" >Báo Cáo Tổng Hợp</router-link>
    </div>

    <div class="btn-mucbc">
      <!-- <b-button size="sm" class="mb-2 add-cv"> Theo Dõi Thi Công </b-button> -->
      <router-link to="/theodoithicong" tag="b-button" >Theo Dõi Thi Công</router-link>
    </div>

    <div class="btn-mucbc">
      <!-- <b-button size="sm" class="mb-2 add-cv"> Nghiệm Thu Công Việc </b-button> -->
      <router-link to="/nghiemthucongviec" tag="b-button" >Nghiệm Thu Công Việc</router-link>
    </div>

    <div class="btn-mucbc">
      <!-- <b-button size="sm" class="mb-2 add-cv"> Giám Sát Vật Liệu </b-button> -->
      <router-link to="/nghiemthuvatlieu" tag="b-button" >Giám Sát Vật Liệu</router-link>
    </div>

    <div class="btn-mucbc">
      <!-- <b-button size="sm" class="mb-2 add-cv"> Giám Sát Nhân Lực </b-button> -->
      <router-link to="/giamsatnhanluc" tag="b-button" >Giám Sát Nhân Lực</router-link>
    </div>

    <div class="btn-mucbc">
      <!-- <b-button size="sm" class="mb-2 add-cv"> Giám Sát Thiết Bị </b-button> -->
      <router-link to="/giamsatthietbi" tag="b-button" >Giám Sát Thiết Bị</router-link>
    </div>

    <div class="btn-mucbc">
      <!-- <b-button size="sm" class="mb-2 add-cv"> Giám Sát Thí Nghiệm </b-button> -->
      <router-link to="/giamsatthinghiem" tag="b-button" >Giám Sát Thí Nghiệm</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mucbc {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.btn-mucbc {
  /* margin-left: 3%;
  float: left;
  width: calc(100% / 7); */

}
.add-cv{
  flex: auto;
}
.router-link-exact-active{
  background-color: #00a53c;
}
</style>