<template>
  <div class="content bg-dark-ui border-ui">
    <h6 class="title mx-1 mb-4">So khớp khuôn mặt</h6>
    <div class="about-info bg-dark-ui border-ui">
      <div class="form-row">
        <div class="form-group col-md-6">
          <fieldset class="bg-dark-ui">
            <legend>Ảnh chân dung 1</legend>
            <input v-if="!url1" type="file" @change="onFileChange1" />
            <div class="preview">
              <img v-if="url1" :src="url1" />
            </div>
          </fieldset>
        </div>
        <div class="form-group col-md-6">
          <fieldset class="bg-dark-ui">
            <legend>Ảnh chân dung 2</legend>
            <input v-if="!url2" type="file" @change="onFileChange2" />
            <div class="preview">
              <img v-if="url2" :src="url2" />
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
          <td>Trùng khớp</td>
          <td
            class="text-error"
            :class="{ 'text-success': response.is_match === true }"
          >
            {{ response.is_match ? "Có" : "Không" }}
          </td>
        </tr>
        <tr>
          <td>Tỷ lệ trùng khớp</td>
          <td>
            {{
              parseFloat(String(response.similarity).slice(0, 6)) * 100 + "%"
            }}
          </td>
        </tr>
        <tr>
          <td>Thông báo</td>
          <td>{{ response.message }}</td>
        </tr>
      </table>

      <h6 class="mt-4">Raw data</h6>
      <div class="raw-data">
        {{ response }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import Match11Module from "../../store/match11/match11.module";

@Component
export default class Info extends Vue {
  private url1 = "";
  private url2 = "";
  private rotate = false;
  private response = null;
  private formData = new FormData();
  private Match11Instance = getModule(Match11Module, this.$store);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFileChange1(e: any) {
    const file = e.target.files[0];
    this.url1 = URL.createObjectURL(file);
    this.formData.append("file1", file);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFileChange2(e: any) {
    const file = e.target.files[0];
    this.url2 = URL.createObjectURL(file);
    this.formData.append("file2", file);
  }

  clear() {
    this.url1 = "";
    this.url2 = "";
    this.rotate = false;
    this.response = null;
    this.formData = new FormData();
  }

  async submitFiles() {
    if (this.url1.length === 0 || this.url2.length === 0) {
      this.$toasted.error("Vui lòng chọn ảnh trước khi kiểm tra.");
    } else {
      this.rotate = true;
      try {
        await this.Match11Instance.upload(this.formData);
        this.response = this.Match11Instance.getResponse;
      } catch (e) {
        this.response = e.response.data;
      }
      this.rotate = false;
    }
  }
}
</script>

<style scoped lang="scss">
.right .content {
  padding: 1rem 1.25rem 1.5rem;
}

.preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview img {
  max-width: 100%;
  max-height: 200px;
}

.table {
  color: #e4e6eb;
}

.table tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}

.table tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}

.table-bordered {
  border: 1px solid #3a3b3c;
}

.table-bordered td {
  border: 1px solid #3a3b3c;
}

.text-error {
  color: #dc3545;
}

.raw-data {
  padding: 1rem;
  background-color: #1b1c1d;
  border-radius: 0.45rem;
  margin-top: 0.5rem;
  font-family: monospace;
  font-size: 1rem;
}

@import "../../assets/css/form.scss";
</style>
