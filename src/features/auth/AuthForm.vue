<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required, minLength } from '@vuelidate/validators'

const rules = {
  username: { email, required },
  password: { required, minLength: minLength(6) }
}

const formData = reactive({
  username: '',
  password: ''
})

const v$ = useVuelidate(rules, formData)

const authService = async (username: string, password: string) => {
  console.log('logged in', username, password)
}

const showPassword = ref(false)


const submit = async () => {
  console.log('submited', v$)

  const isValid = await v$.value.$validate()

  console.log(v$.value.username.$errors)

  if (!isValid) {
    return
  }

  authService(formData.password, formData.password)
}
</script>

<template>
  <v-sheet width="480" class="mx-auto">
    <v-form validate-on="submit" @submit.prevent="submit" gap-8>
      <v-text-field v-model="formData.username" label="User name" required hint="Enter your email address"
        :error-messages="v$.username.$errors.map((e) => e.$message)"></v-text-field>
      <v-text-field v-model="formData.password" label="Password" :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" counter required hint="Enter your password"
        :error-messages="v$.password.$errors.map((e) => e.$message)"
        @click:append="showPassword = !showPassword"></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
