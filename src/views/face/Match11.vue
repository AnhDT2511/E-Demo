<template>
  <div class="content bg-dark-ui border-ui">
    <h6 class="title mx-1 mb-4">Face Matching: So khớp khuôn mặt</h6>
    <div class="about-info bg-dark-ui border-ui mb-4">
      <div class="form-row">
        <div class="form-group col-md-6">
          <fieldset class="bg-dark-ui">
            <legend>Ảnh chân dung</legend>
            <input v-if="!url1" type="file" @change="onFileChange1" />
            <div class="preview">
              <img v-if="url1" :src="url1" />
            </div>
          </fieldset>
        </div>
        <div class="form-group col-md-6">
          <fieldset class="bg-dark-ui">
            <legend>Ảnh chân dung</legend>
            <input v-if="!url2" type="file" @change="onFileChange2" />
            <div class="preview">
              <img v-if="url2" :src="url2" />
            </div>
          </fieldset>
        </div>
        <div class="col-md-12 text-right">
          <button @click="submitFiles()" class="btn btn-lg btn-gray mb-3">
            <font-awesome-icon
              class="text-sea-green mr-2"
              :icon="['fas', 'check']"
            />Cập nhật thông tin
          </button>
        </div>
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
  private formData = new FormData();
  private Match11Instance = getModule(Match11Module, this.$store);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFileChange1(e: any) {
    const file = e.target.files[0];
    this.url1 = URL.createObjectURL(file);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFileChange2(e: any) {
    const file = e.target.files[0];
    this.url2 = URL.createObjectURL(file);
  }

  async submitFiles() {
    this.formData.append("files1", this.url1);
    this.formData.append("files2", this.url2);
    console.log(this.formData);
    try {
      await this.Match11Instance.fetch(this.formData);
      console.log(this.Match11Instance.getResponse);
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style scoped lang="scss">
.right .content {
  padding: 1rem 1.25rem;
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

@import "../../assets/css/form.scss";
</style>
