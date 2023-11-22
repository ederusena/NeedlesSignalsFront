<template>
  <div class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="w-auto h-12 mx-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 text-3xl font-extrabold text-center text-white">
        Needles Signals
      </h2>
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6">
          <BaseInput
            name="email"
            type="email"
            label="Email"
            v-model="user.email"
          />

          <BaseInput
            name="password"
            type="password"
            label="password"
            v-model="user.password"
          />

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
            <BaseButton label="Entrar" primary @click.prevent="login" />

            <BaseButton
              label="Registrar"
              secondary
              @click.prevent="registrar"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/auth';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseButton from '@/components/base/BaseButton.vue';

const userStore = useUserStore();
const router = useRouter();
const user = reactive({
  email: 'eder_sena@dev.com',
  password: '12345',
});

const login = async () => {
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
