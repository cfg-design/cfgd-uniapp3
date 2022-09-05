<template>
  <view class="page">
    <c-form
      ref="formRef"
      v-model:value="formData"
      :rules="rules"
      :item="{ labelWidth: 120 }"
    >
      <c-form-item no-label no-border-bottom>
        <c-row gutter="10rpx">
          <c-col>
            <c-button color="warning" text="清空校验结果" width="100%" @click="restoreValidation" />
          </c-col>
          <c-col>
            <c-button color="success" text="清空数据" width="100%" @click="clear" />
          </c-col>
          <c-col>
            <c-button color="error" text="重置" width="100%" form-type="reset" @click="onReset" />
          </c-col>
          <c-col>
            <c-button color="primary" text="提交" width="100%" form-type="submit" @click="onSubmit" />
          </c-col>
        </c-row>
      </c-form-item>
      <c-form-item label="昵称">
        <c-input v-model:value="formData.nickName" placeholder="昵称" />
      </c-form-item>
      <c-form-item label="账号" path="name">
        <c-input v-model:value="formData.name" placeholder="用户名" clearable />
      </c-form-item>
      <c-form-item label="密码" path="pass">
        <c-input v-model:value="formData.pass" password placeholder="密码" auto-focus clearable />
      </c-form-item>
      <c-form-item label="密码2" path="pass2">
        <c-input v-model:value="formData.pass2" password placeholder="再次输入密码" border />
      </c-form-item>
      <c-form-item label="密码2" path="pass2">
        <c-input v-model:value="formData.pass2" password placeholder="input: no-feedback" border no-feedback />
      </c-form-item>
      <c-form-item label="密码2" path="pass2" no-feedback>
        <c-input v-model:value="formData.pass2" password placeholder="form-item: no-feedback" border />
      </c-form-item>
      <c-form-item label="爱好" path="hobby">
        <c-checkbox-group v-model:value="formData.hobby" c="row">
          <c-checkbox text="看电影" />
          <c-checkbox text="听音乐[no-feedback]" no-feedback />
        </c-checkbox-group>
      </c-form-item>
      <c-form-item label="性别" path="sex">
        <c-radio-group v-model:value="formData.sex" c="row" :items="sexs" />
      </c-form-item>
      <c-form-item label="同步" path="sync">
        <c-switch v-model:value="formData.sync" round />
        <c-switch v-model:value="formData.sync" no-feedback un-checked-text="no-feedback" checked-text="no-feedback" />
      </c-form-item>
      <c-form-item label="年龄" path="age">
        <c-input-number v-model:value="formData.age" />
      </c-form-item>
      <c-form-item label="简介" path="brief">
        <c-textarea v-model:value="formData.brief" placeholder="简介" height="100rpx" />
      </c-form-item>
      <c-form-item label="协议" path="agreement">
        <c-checkbox v-model:checked="formData.agreement">
          <c-text>已阅读并同意</c-text><c-text color="primary" @click.stop="">《xxxxxxxxxx》</c-text><c-text>协议</c-text>
        </c-checkbox>
      </c-form-item>
    </c-form>
    <c-text c="h3">no-require-mark</c-text>
    <c-form v-model:value="formData" :rules="rules" :item="{ noRequireMark: true }">
      <Form1 />
    </c-form>
    <c-text c="h3">Label Top</c-text>
    <c-form v-model:value="formData" :rules="rules" :item="{ labelPlacement: 'top' }" >
      <Form1 />
    </c-form>
    <c-text c="h3">Size</c-text>
    <c-form v-model:value="formData" :rules="rules" :item="{ size: '4xl' }">
      <Form1 />
    </c-form>
    <c-text c="h3">Label Font Color</c-text>
    <c-form v-model:value="formData" :rules="rules" size="40" :item="{ labelTextProps: { color: 'success'} }" >
      <Form1 />
    </c-form>
    <c-text c="h3">no-border-bottom</c-text>
    <c-form v-model:value="formData" :rules="rules" :size="30" :item="{ noBorderBottom: true }">
      <Form1 />
    </c-form>
    <c-text c="h3">no-label</c-text>
    <c-form v-model:value="formData" :rules="rules" :item="{ noLabel: true }">
      <Form1 />
    </c-form>
    <c-text c="h3">disabled</c-text>
    <c-form v-model:value="formData" :rules="rules" disabled>
      <Form1 />
    </c-form>
    <c-text c="h3">More Disabled</c-text>
    <c-form v-model:value="formData" :rules="rules">
      <c-form-item label="账号" path="name" disabled>
        <c-input placeholder="placeholder: form-item disabled" />
      </c-form-item>
      <c-form-item label="账号" path="name" disabled>
        <c-input value="value: form-item disabled" />
      </c-form-item>
      <c-form-item label="账号" path="name">
        <c-input placeholder="placeholder: input disabled" disabled />
      </c-form-item>
      <c-form-item label="账号" path="name">
        <c-input placeholder="placeholder: no disabled" />
      </c-form-item>
      <c-form-item label="账号" path="name">
        <c-input value="value: no disabled" placeholder="用户名" />
      </c-form-item>
      <c-form-item label="账号" path="name">
        <c-input value="value: input disabled" placeholder="用户名" disabled />
      </c-form-item>
      <c-form-item label="性别" right-icon="arrow-right-s-line">
        <c-input placeholder="请选择性别" readonly />
      </c-form-item>
      <c-form-item label="性别" right-icon="arrow-right-s-line" disabled>
        <c-input placeholder="请选择性别" readonly />
      </c-form-item>
    </c-form>

    <c-text c="h3">Label Align</c-text>
    <c-form :item="{ labelWidth: 200, mainStyle: { alignItems: 'flex-start'  } }">
      <c-form-item label="账号">
        <c-textarea height="100rpx" />
      </c-form-item>
    </c-form>
    <c-form :item="{
      labelWidth: 200,
      mainStyle: { alignItems: 'flex-start' },
      labelStyle: { justifyContent: 'center' }
    }">
      <c-form-item label="账号">
        <c-textarea height="100rpx" />
      </c-form-item>
    </c-form>
    <c-form :item="{
      labelWidth: 200,
      mainStyle: { alignItems: 'flex-start' },
      labelStyle: { justifyContent: 'flex-end' }
    }">
      <c-form-item label="账号">
        <c-textarea height="100rpx" />
      </c-form-item>
    </c-form>
    <c-form :item="{ labelWidth: 200, labelStyle: { justifyContent: 'flex-start' } }">
      <c-form-item label="账号">
        <c-textarea height="100rpx" />
      </c-form-item>
    </c-form>
    <c-form :item="{ labelWidth: 200, labelStyle: { justifyContent: 'center' } }">
      <c-form-item label="账号">
        <c-textarea height="100rpx" />
      </c-form-item>
    </c-form>
    <c-form :item="{ labelWidth: 200, labelStyle: { justifyContent: 'flex-end' } }">
      <c-form-item label="账号">
        <c-textarea height="100rpx" />
      </c-form-item>
    </c-form>
    <c-form :item="{
      labelWidth: 200,
      mainStyle: { alignItems: 'flex-end' }
    }">
      <c-form-item label="账号">
        <c-textarea height="100rpx" />
      </c-form-item>
    </c-form>
    <c-form :item="{
      labelWidth: 200,
      mainStyle: { alignItems: 'flex-end' },
      labelStyle: { justifyContent: 'center' }
    }">
      <c-form-item label="账号">
        <c-textarea height="100rpx" />
      </c-form-item>
    </c-form>
    <c-form :item="{
      labelWidth: 200,
      mainStyle: { alignItems: 'flex-end' },
      labelStyle: { justifyContent: 'flex-end' }
    }">
      <c-form-item label="账号">
        <c-textarea height="100rpx" />
      </c-form-item>
    </c-form>
  </view>
</template>

<script setup lang="ts">
import type { FormRules, RadioConfig } from '@/uni_modules/cfg-design'
import { ref } from 'vue'
import CForm from '@/uni_modules/cfg-design/components/c-form/c-form.vue'
import Form1 from './form1.vue'

const defaultFormData = {
  nickName: '',
  name: 'user0',
  pass: '',
  pass2: '',
  brief: '',
  hobby: [],
  agreement: false,
  sex: '',
  sync: false,
  age: 17
}

const sexs: RadioConfig[] = [
  { text: '男', value: '1' },
  { text: '女', value: '2' },
  { text: '保密[no-feedback]', value: '3', noFeedback: true }
]

const formRef = ref<InstanceType<typeof CForm>>()
const formData = ref({ ...defaultFormData })
const rules: FormRules = {
  name: [{ required: true, message: '用户名不能为空', trigger: 'input' }],
  pass: [{ required: true, message: '密码不能为空', trigger: ['input'] }],
  pass2: [
    { required: true, message: '密码2不能为空', trigger: ['input', 'blur'] },
    { validator: () => formData.value.pass === formData.value.pass2, message: '两次密码输入不同', trigger: 'blur' },
  ],
  hobby: [{ required: true, type: 'array', message: '请选择你的爱好', trigger: 'change' }],
  sex: [{ required: true, message: '请选择性别', trigger: ['change'] }],
  brief: [{ required: true, message: '简介不能为空', trigger: 'input' }],
  agreement: [{ required: true, type: 'enum', enum: [true], message: '请选择阅读并同意协议', trigger: 'change' }],
  sync: [{ required: true, type: 'enum', enum: [true], message: '请开启同步', trigger: 'change' }],
  age: [{ required: true, type: 'number', min: 18, message: '年龄太小', trigger: 'change' }],
}

const onSubmit = () => {
  console.log({...formData.value})
  formRef.value?.validate((errors) => {
    console.log(errors)
    if (errors) {
      uni.showToast({ title: errors[0].message, icon: 'error' })
      return
    }
    uni.showToast({ title: 'submitting' })
  })
}
const onReset = () => formRef.value?.reset()
const clear = () => formRef.value?.clear()
const restoreValidation = () => formRef.value?.restoreValidation()
</script>

<style lang="scss">
.page {
  padding-top: 1px;
}
.c-form {
  margin-bottom: 10rpx;
  padding-top: 10rpx;
}
</style>
