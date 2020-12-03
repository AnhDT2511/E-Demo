<template>
  <div class="content bg-dark-ui border-ui">
    <h6 class="title mx-1 mb-4">Xác định giới tính</h6>
    <div class="about-info bg-dark-ui border-ui">
      <div class="form-row">
        <div class="form-group col-md-12">
          <fieldset class="bg-dark-ui">
            <legend>Ảnh chân dung</legend>
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
            />Kiểm tra
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
          <th>Khuôn mặt</th>
          <th>Tuổi</th>
          <th>Giới tính</th>
        </tr>
        <tr v-for="item in response.results" :key="item.face">
          <td>
            <img
              width="50"
              v-bind:src="'data:image/jpeg;base64,' + item.face"
            />
          </td>
          <td>{{ item.age }} </td>
          <td>{{ item.gender === 1 ? "Nam" : "Nữ" }} </td>
        </tr>
      </table>

      <!-- <h6 class="mt-4">Raw data</h6>
      <div class="raw-data">
        {{ response }}
      </div> -->
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
import GenderModule from "../store/gender/gender.module";

@Component
export default class OCR extends Vue {
  private url = "";
  private rotate = false;
  private response = null;
  private message = "";
  private formData = new FormData();
  private GenderInstance = getModule(GenderModule, this.$store);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFileChange(e: any) {
    const file = e.target.files[0];
    this.url = URL.createObjectURL(file);
    this.formData.append("file", file);
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
        await this.GenderInstance.upload(this.formData);
        this.response = this.GenderInstance.getResponse;
      } catch (e) {
        this.$toasted.error("Ảnh không có khuôn mặt.");
        this.message = e.response.data.message;
      }
    }
    this.rotate = false;
  }
}
</script>

<style scoped lang="scss">
th {
  text-align: center;
}

td {
  text-align: center;
  vertical-align: middle !important;
  img {
    border-radius: 0.45rem;
  }
}

@import "../assets/css/style.scss";
@import "../assets/css/form.scss";
</style>
