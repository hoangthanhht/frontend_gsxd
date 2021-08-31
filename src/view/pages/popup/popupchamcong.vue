<template>
  <div class="wrapper-popup" v-bind:class="getClassPopup">
    <div class="rule">
      <div class="bg-gray-400 h-16 justify-between items-center flex pr-3 pl-3">
        <h3 style="margin-bottom: 0" class="mb-0">Chấm công thủ công</h3>
        <span class="cursor-pointer" v-on:click="handleCancle">&#x2716;</span>
      </div>
      <div class="">
        <b-form-group
          class="col-span-5 pt-2 mb-2"
          id="input-group-1"
          label="Nhân viên"
          label-for="input-1"
        >
          <b-form-input
            v-model="nameEmploy"
            id="input-1"
            type="text"
            placeholder="Nhân viên"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="flex justify-between">
        <b-form-group
          class="col-span-5 mb-2"
          id="input-group-1"
          label="Ngày công tác"
          label-for="input-1"
        >
          <b-form-input
            v-model="dateWork"
            id="input-1"
            type="text"
            placeholder="Ngày công tác"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="col-span-5 mb-2"
          id="input-group-1"
          label="Ca làm"
          label-for="input-1"
        >
          <b-form-input
            v-model="timeWork"
            id="input-1"
            type="text"
            placeholder="Ca làm"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <label>Trạng thái chấm công</label>
      <div class="select-cbb">
        <b-form-select v-model="selectedTkeepingStatus" :options="timeKeeping_status">
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Tình trạng --</b-form-select-option
            >
          </template>
        </b-form-select>
      </div>
      <b-form-group
        class="pt-2"
        id="input-group-2"
        tooltip
        label="Ghi chú bổ sung"
        label-for="input-2"
      >
        <b-form-textarea
          id="textarea"
          v-model="note"
          placeholder="Ghi chú bổ sung"
          rows="3"
          max-rows="6"
        >
        </b-form-textarea>
      </b-form-group>
      <div class="flex justify-end">
        <div>
          <button
            v-on:click="handleSave"
            type="button"
            class="btn btn-info mr-5"
          >
            Save
          </button>

          <button
            v-on:click="handleCancle"
            type="button"
            class="btn btn-danger"
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-rule",
  props: {
    isOpenPopup: { type: Boolean, default: false },
    nameEmploy: { type: String, default: '' },
    timeWork: { type: String, default: '' },
    dateWork: { type: String, default: '' },
    confirmTimekeeping: { type: String, default: 'null' },
  },
  data() {
    return {
      note:'',
      selectedTkeepingStatus: null, // Array reference
      timeKeeping_status: [
        { value: 'block3__bodytb--dachamcong', text: "Đã chấm công" },
        { value: 'block3__bodytb--daxacnhan', text: "Đã xác nhận đi làm" },
        { value: 'block3__bodytb--nghicophep', text: "Nghỉ có phép" },
        { value: 'block3__bodytb--nghi', text: "Nghỉ" },
        { value: 'block3__bodytb--xinxacnhan', text: "Xin xác nhận" },
      ],
    };
  },
  methods: {
      handleCancle(){
          this.$emit('receiptData')
      },
      handleSave() {
          this.$emit('receiptData',this.selectedTkeepingStatus)
      },

  },
  computed: {
    getClassPopup: function () {
      return {
        "open-popup": this.isOpenPopup,
      };
    },
  },
};
</script>

<style>
.wrapper-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}
.wrapper-popup.open-popup {
  opacity: 1;
  visibility: visible;
}
.rule {
  width: 450px;
  height: 500px;
  padding: 20px;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  background-color: #fff;
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  transition: all 0.3s ease;
}
.open-popup .rule {
  transform: translate(-50%, -50%) scale(1);
}
/* scale -> class */


/* kết hợp CSS3 với VueJs để xây dựng hiệu ứng - Zoom in - Zoom out */
</style>
