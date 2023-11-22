<template>
  <div class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="w-auto h-12 mx-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 text-3xl font-extrabold text-center text-white">
        Cadastro de usuário
      </h2>
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6">
          <BaseInput name="name" label="Nome" v-model="user.name" />

          <BaseInput
            name="lastname"
            label="Sobrenome"
            v-model="user.lastname"
          />

          <BaseInput name="cpf" label="CPF" v-model="user.cpf" />

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

          <BaseInput
            name="confirmpassword"
            type="password"
            label="Confirmar Senha"
            v-model="user.confirmpassword"
          />

          <div class="button-container">
            <BaseButton label="Registrar" primary @click.prevent="registrar" />

            <BaseButton
              label="Cancelar"
              secondary
              @click.prevent="cancelar"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/auth';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseButton from '@/components/base/BaseButton.vue';

import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();
const user = reactive({
  email: '',
  password: '',
  name: '',
  lastname: '',
  cpf: '',
  confirmpassword: '',
});

const registrar = async () => {
  try {
    const userAuth = await userStore.registration(user);
    if (userAuth) {
      router.push('/dashboard');
    }
  } catch (error) {
    console.log(error?.response?.data);
  }
};

const cancelar = async () => {
  user.email = '';
  user.password = '';
  user.name = '';
  user.lastname = '';
  user.cpf = '';
  user.confirmpassword = '';
  router.push('/');
};
</script>

<style lang="postcss" scoped>
.button-container {
  @apply flex md:items-center md:justify-between md:gap-2 md:flex-row flex-col gap-2;
}
</style>
