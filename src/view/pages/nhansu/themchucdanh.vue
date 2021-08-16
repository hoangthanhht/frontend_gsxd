<template>
  <div class="add-gr">
    <div class="grid grid-cols-6 gap-4">
    <div class="col-start-2 col-span-4 bg-white p-5">
      <h5 class="mb-3 header-title">Cập nhật thông tin chức danh</h5>
      <div class="grid gap-3 grid-cols-2">
        <b-form-group
          id="input-group-1"
          label="Mã chức danh"
          label-for="input-1"
        >
          <b-form-input
            v-model="codePosition"
            id="input-1"
            type="text"
            placeholder="Mã chức danh"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Tên chức danh"
          label-for="input-1"
        >
          <b-form-input
            v-model="namePosition"
            id="input-1"
            type="text"
            placeholder="Tên chức danh"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <b-form-group
        id="input-group-2"
        label="Nhập thông tin ghi chú về chức danh"
        label-for="input-2"
      >
        <b-form-textarea
          id="textarea"
          v-model="notePosition"
          placeholder="Mô tả, ghi chú về dự án"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
  </div>
    </div>

    <div class="add-gr5">
      <div class="add-gr51">
        <b-button size="sm" class="mb-2 tao-cv">
          <b-icon icon="x-octagon-fill" aria-hidden="true"></b-icon> Bỏ qua
        </b-button>
      </div>
        <div v-if="idCurrentPosition" class="add-gr51 add-gr52">
      <b-button @click="handleUpdate" size="sm" class="mb-2 tao-cv">
        <b-icon icon="check2" aria-hidden="true"></b-icon> Cập nhật
      </b-button>
      </div>

      <div v-else class="add-gr51 add-gr52">
        <b-button @click="handleSave" size="sm" class="mb-2 tao-cv">
          <b-icon icon="check2" aria-hidden="true"></b-icon> Tạo chức danh
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "add_task",
  data() {
    return {
      idCurrentPosition:null,
      codePosition: "",
      namePosition: "",
      notePosition: "",

    };
  },
  created() {
          this.idCurrentPosition = this.$route.params.id;
     if(this.idCurrentPosition!== undefined){
        this["storeqlda/getPositionWithId"](this.idCurrentPosition).then((res)=>{
         this.codePosition = res.data.maChucDanh ;
         this.namePosition = res.data.chucDanh ;
         this.notePosition = res.data.ghiChu ;

        })

     }

  },
  mounted() {},
  computed: {
    ...mapGetters([
      "storeqlda/getListDataUserGTer",
      "currentUserPersonalInfo",
      "storeqlda/currentUser",
    ]),
  },
  methods: {
    ...mapActions(["storeqlda/ActionCreatePosition",
                  "storeqlda/getListDataUser",
                  "storeqlda/getPositionWithId",
                  "storeqlda/ActionUpdatePosition",
                  
     ]),

      handleUpdate(){
      var data = {
        chucDanh: this.namePosition,
        ghiChu: this.notePosition,
        maChucDanh: this.codePosition,
        idPosition:this.idCurrentPosition
      };
      this["storeqlda/ActionUpdatePosition"](data).then((res) => {
        alert(res.data);
      });
    },
    handleSave() {
     
      var data = {
        chucDanh: this.namePosition,
        ghiChu: this.notePosition,
        maChucDanh: this.codePosition,

      };
      this["storeqlda/ActionCreatePosition"](data).then((res) => {
        alert(res.data);
      });
    },
  },
  watch: {

  },
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