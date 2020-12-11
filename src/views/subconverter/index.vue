<template>
  <el-row style="margin-top:10px">
    <el-col>
      <el-card>
        <template #header>
          <div>
            Subscription Converter
            <svg-icon icon-class="github" style="font-size: 30px; margin-left: 20px" />
            <!--            <div style="display: inline-block; position: absolute; right: 20px">{{ backendVersion }}</div>-->
          </div>
        </template>
        <el-container>
          <el-form :model="form" label-width="80px" label-position="left" style="width: 100%">
            <el-form-item label="模式设置:">
              <el-radio v-model="mode" label="1">基础模式</el-radio>
              <el-radio v-model="mode" disabled label="2">进阶模式</el-radio>
            </el-form-item>
            <el-form-item label="订阅链接:">
              <el-input
                v-model="form.sourceSubUrl"
                type="textarea"
                rows="3"
                placeholder="支持订阅或ss/ssr/vmess链接，多个链接每行一个或用 | 分隔"
              />
            </el-form-item>
            <el-form-item label="客户端:">
              <el-select v-model="form.clientType">
                <el-option
                  v-for="k in clientTypeMap.keys()"
                  :key="k"
                  :label="k"
                  :value="clientTypeMap.get(k)"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="后端地址:">
              <el-input
                v-model="form.customBackend"
                placeholder="动动小手，（建议）自行搭建后端服务。例：http://127.0.0.1:25500/sub?"
              />
            </el-form-item>

            <el-divider content-position="center">
              <i class="el-icon-magic-stick"></i>
            </el-divider>

            <el-form-item label="定制订阅:">
              <el-input class="copy-content" disabled v-model="customSubUrl">
                <template #append>
                  <copy-to-clipboard :text="customSubUrl" @copy="handleCopy">
                    <el-button ref="copy-btn" icon="el-icon-document-copy">
                      复制
                    </el-button>
                  </copy-to-clipboard>
                </template>
              </el-input>
            </el-form-item>

            <!-- button -->
            <el-form-item label-width="0px" style="margin-top: 40px; text-align: center">
              <el-button :disabled="makeUrlBtnDisable" type="danger" class="action-btn" @click="generateUrl">
                生成订阅链接
              </el-button>
              <el-button
                :disabled="customSubUrl.length === 0"
                type="primary"
                icon="el-icon-connection"
                class="action-btn"
                @click="import2Clash"
              >
                一键导入Clash
              </el-button>
            </el-form-item>
          </el-form>
        </el-container>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive, getCurrentInstance } from 'vue';
import { clientTypeMap } from './config';

export default defineComponent({
  name: 'SubConverter',
  setup() {
    const loading = ref(false);
    const mode = ref('1');
    const customSubUrl = ref('');
    const customShortSubUrl = ref('');

    const form = reactive({
      clientType: '',
      sourceSubUrl: '',
      customBackend: 'http://127.0.0.1:25500/sub?',
      insert: false, // 是否插入默认订阅的节点，对应配置项 insert_url
    });
    const { ctx } = getCurrentInstance() as any;

    const handleCopy = (text: string, result: boolean) => {
      console.log(text);
      console.log(result);
    };

    const generateUrl = () => {
      if (!form.sourceSubUrl || !form.clientType) {
        ctx.$message.error('订阅链接与客户端为必填项');
        return;
      }

      const backend = form.customBackend;
      let sourceSub = form.sourceSubUrl;
      sourceSub = sourceSub.replace(/(\n|\r|\n\r)/g, '|');
      customSubUrl.value =
        backend + 'target=' + form.clientType + '&url=' + encodeURIComponent(sourceSub) + '&insert=' + form.insert;
    };

    const import2Clash = () => {
      if (customSubUrl.value === '') {
        ctx.$message.error('请先填写必填项，生成订阅链接');
        return;
      }
      const url = 'clash://install-config?url=';
      window.open(url + encodeURIComponent(customSubUrl.value));
    };

    const makeUrlBtnDisable = computed(() => {
      return form.sourceSubUrl.length === 0;
    });

    return {
      // constant
      clientTypeMap,
      // reactive
      loading,
      mode,
      form,
      makeUrlBtnDisable,
      customSubUrl,
      customShortSubUrl,
      // method
      handleCopy,
      generateUrl,
      import2Clash,
    };
  },
});
</script>

<style lang="scss" scoped>
.el-select {
  width: 100%;
}
.action-btn {
  width: 150px;
}
</style>
