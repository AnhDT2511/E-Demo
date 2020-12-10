<template>
  <div class="content bg-dark-ui border-ui">
    <h6 class="title mx-1 mb-4">Trích xuất thông tin giấy tờ</h6>
    <div class="about-info bg-dark-ui border-ui">
      <div class="form-row">
        <div class="form-group col-md-6">
          <fieldset class="bg-dark-ui">
            <legend>Ảnh giấy tờ</legend>
            <input v-if="!url" type="file" @change="onFileChange" />
            <div class="preview">
              <img v-if="url" :src="url" />
            </div>
          </fieldset>
        </div>
        <div class="form-group col-md-6">
          <fieldset class="bg-dark-ui">
            <legend>Loại giấy tờ</legend>
            <select class="form-control form-control-sm" v-model="type">
              <option v-bind:value="2">Chứng minh thư nhân dân</option>
              <option v-bind:value="2">Căn cước công dân</option>
              <option v-bind:value="1">Văn bản</option>
            </select>
          </fieldset>
        </div>
        <div class="col-md-12 text-right">
          <span v-if="end != 0" class="text-sea-green mr-2 time">
            {{ end / 1000 + "s" }}
          </span>
          <button @click="submitFiles" class="btn btn-lg btn-gray">
            <font-awesome-icon
              v-if="!rotate"
              class="text-sea-green mr-2"
              :icon="['fas', 'check']"
            />
            <font-awesome-icon
              v-if="rotate"
              class="text-warning fa-spin mr-2"
              :icon="['fas', 'spinner']"
            />Trích xuất
          </button>
          <button @click="clear" class="btn btn-lg btn-gray ml-3">
            <font-awesome-icon
              class="text-danger mr-2"
              :icon="['fas', 'reply']"
            />Thử lại
          </button>
        </div>
      </div>
    </div>
    <div v-if="response" class="mt-4">
      <div class="divider color-tan">Kết quả</div>
      <h6 class="mt-4">Văn bản</h6>
      <div class="raw-data">
        {{ response.text }}
      </div>
      <h6 class="mt-4">Hình ảnh</h6>
      <div class="raw-data">
        <img
          class="w-100"
          style="border-radius: 0.35rem;"
          v-bind:src="'data:image/jpeg;base64,' + response.processed_img"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import OcrModule from "../store/ocr/ocr.module";

@Component
export default class OCR extends Vue {
  private url = "";
  private type = 2;
  private filter = 0;
  private rotate = false;
  private response = null;
  private formData = new FormData();
  private OcrInstance = getModule(OcrModule, this.$store);

  private start = 0;
  private end = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFileChange(e: any) {
    const file = e.target.files[0];
    this.url = URL.createObjectURL(file);
    this.formData.append("file", file);
  }

  clear() {
    this.url = "";
    this.rotate = false;
    this.type = 2;
    this.response = null;
    this.formData = new FormData();
    this.end = 0;
  }

  async submitFiles() {
    if (this.url.length === 0) {
      this.$toasted.error("Vui lòng chọn ảnh trước khi kiểm tra.");
    } else {
      this.start = new Date().getTime();
      this.filter = this.type == 2 ? 0 : 1;
      console.log("type: " + this.type + ", filter: " + this.filter);
      this.formData.append("type", this.type + "");
      this.formData.append("is_filter", this.filter + "");
      this.rotate = true;
      try {
        await this.OcrInstance.upload(this.formData);
        this.response = this.OcrInstance.getResponse;
      } catch (e) {
        this.response = e.response.data;
      }
      this.end = new Date().getTime() - this.start;
      console.log(this.end / 1000);
      this.rotate = false;
    }
  }
}
</script>

<style scoped lang="scss">
.form-control-sm {
  height: calc(1.5em + 0.535rem + 3px);
}

fieldset .form-control {
  color: #e4e6eb;
  border: 1px solid #3a3b3c;
  background-color: #3a3b3c;
  padding: 0 0.35rem;
  border-radius: 5px;
}

.raw-data {
  white-space: pre-wrap;
}

.time {
  font-family: monospace;
  font-size: 1rem;
}

@import "../assets/css/style.scss";
@import "../assets/css/form.scss";
</style>
