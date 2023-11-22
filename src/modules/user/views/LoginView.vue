<template>
  <div class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="w-auto h-24 mx-auto"
        src="@/assets/logofilled.png"
        alt="Workflow"
      />
      <h2 class="mt-6 text-3xl font-extrabold text-center text-white">
        Needles Signals
      </h2>
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <Form :validation-schema="schema" class="space-y-6" @submit="onSubmit">
          <BaseInput
            name="email"
            type="email"
            label="Email"
            v-model="user.email"
          />
          <ErrorMessage name="email" as="p">
            <p
              class="p-2 text-sm font-medium text-red-500 rounded-md bg-red-50"
            >
              Por favor digitar um email valido
            </p>
          </ErrorMessage>

          <BaseInput
            name="password"
            type="password"
            label="Senha"
            v-model="user.password"
          />
          <ErrorMessage name="password" as="p">
            <p
              class="p-2 text-sm font-medium text-red-500 rounded-md bg-red-50"
            >
              Senha inválida, maior que 8 caracteres
            </p>
          </ErrorMessage>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label for="remember-me" class="block ml-2 text-sm text-gray-900">
                Lembrar senha
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Esqueceu senha?
              </a>
            </div>
          </div>

          <div class="button-container">
            <BaseButton label="Entrar" primary />

            <BaseButton label="Registrar" secondary @click="registrar" />
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Form, ErrorMessage } from 'vee-validate';
import { useUserStore } from '@/stores/auth';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import * as yup from 'yup';
const userStore = useUserStore();
const router = useRouter();
const user = reactive({
  email: 'eder5@live.com',
  password: 'i2u9j7p9',
});

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const onSubmit = async () => {
  try {
    const userAuth = await userStore.authenticate(user);
    if (userAuth) {
      router.push('/dashboard');
    }
  } catch (error) {
    console.log(error?.response?.data);
  }
};

const registrar = async () => {
  router.push('/register');
};

</script>

<style lang="postcss" scoped>
.button-container {
  @apply flex md:items-center md:justify-between md:gap-2 md:flex-row flex-col gap-2;
}
</style>
