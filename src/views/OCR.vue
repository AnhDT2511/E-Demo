<template>
  <div class="content bg-dark-ui border-ui">
    <h6 class="title mx-1 mb-4">Trích xuất thông tin giấy tờ</h6>
    <div class="about-info bg-dark-ui border-ui">
      <div class="form-row">
        <div class="form-group col-md-12">
          <fieldset class="bg-dark-ui">
            <legend>Ảnh giấy tờ tuỳ thân</legend>
            <input v-if="!url" type="file" @change="onFileChange" />
            <div class="preview">
              <img v-if="url" :src="url" />
            </div>
          </fieldset>
        </div>
        <div class="col-md-12 text-right">
          <button class="btn btn-lg btn-gray">
            <font-awesome-icon
              class="text-sea-green mr-2"
              :icon="['fas', 'check']"
            />Trích xuất
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class OCR extends Vue {
  private url = "";
  private formData = new FormData();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFileChange(e: any) {
    const file = e.target.files[0];
    this.url = URL.createObjectURL(file);
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/style.scss";
@import "../assets/css/form.scss";
</style>
