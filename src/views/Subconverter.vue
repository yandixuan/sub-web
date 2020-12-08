<template>
  <el-row style="margin-top:10px">
    <el-col>
      <el-card>
        <template #header>
          <div>
            Subscription Converter
            <svg-icon icon-class="github" style="font-size:30px;margin-left: 20px" />
            <div style="display: inline-block; position:absolute; right: 20px">{{ backendVersion }}</div>
          </div>
        </template>
        <el-container>
          <el-form :model="form" label-width="80px" label-position="left" style="width: 100%">
            <el-form-item label="模式设置:">
              <el-radio v-model="advanced" label="1">基础模式</el-radio>
              <el-radio v-model="advanced" label="2">进阶模式</el-radio>
            </el-form-item>
          </el-form>
        </el-container>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      advanced: '2',
      form: {},
      backendVersion: '',
    };
  },
});
</script>

<style lang="scss" scoped></style>
