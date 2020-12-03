<template>
  <div class="content bg-dark-ui border-ui">
    <h6 class="title mx-1 mb-4">Nhận dạng người nổi tiếng</h6>
    <div class="about-info bg-dark-ui border-ui">
      <div class="form-row">
        <div class="form-group col-md-12">
          <fieldset class="bg-dark-ui">
            <legend>Ảnh người cần nhận dạng</legend>
            <input v-if="!url" type="file" @change="onFileChange" />
            <div class="preview">
              <img v-if="url" :src="url" />
            </div>
          </fieldset>
        </div>
        <div class="col-md-12 text-right">
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
            />Nhận dạng
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
      <table class="table table-bordered mb-0">
        <tr>
          <td class="text-center">{{
            response.result[0].similarity > 0.9
              ? response.result[0].faceId
              : "Không phải người nổi tiếng."
          }}</td>
        </tr>
      </table>
    </div>
    <div v-if="message" class="mt-4">
      <div class="divider color-tan">Kết quả</div>
      <table class="table table-bordered mb-0">
        <tr>
          <td class="text-center">{{ message }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import IdentificationCelebrityModule from "../store/identification_celebrity/identification_celebrity.module";

@Component
export default class IdentificationCelebrity extends Vue {
  private url = "";
  private rotate = false;
  private response = null;
  private message = "";
  private formData = new FormData();
  private IdentificationCelebrityInstance = getModule(
    IdentificationCelebrityModule,
    this.$store,
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFileChange(e: any) {
    const file = e.target.files[0];
    this.url = URL.createObjectURL(file);
    this.formData.append("file", file);
    this.formData.append("top", "5");
  }

  clear() {
    this.url = "";
    this.message = "";
    this.rotate = false;
    this.response = null;
    this.formData = new FormData();
  }

  async submitFiles() {
    if (this.url.length === 0) {
      this.$toasted.error("Vui lòng chọn ảnh trước khi kiểm tra.");
    } else {
      this.rotate = true;
      try {
        await this.IdentificationCelebrityInstance.upload(this.formData);
        this.response = this.IdentificationCelebrityInstance.getResponse;
      } catch (e) {
        this.$toasted.error("Lỗi định dạng file.");
        this.message = e.response.data.message;
      }
    }
    this.rotate = false;
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/style.scss";
@import "../assets/css/form.scss";
</style>
